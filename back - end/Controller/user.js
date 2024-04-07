var userSchema = require("../Model/userSchema");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const message = require("../Model/message");
const conversation = require("../Model/conversation");

module.exports = {
  register: async (req, res) => {
    const { username, email, password, role } = req.body;

    const finduser = await userSchema.find({ email: email });
    if (finduser.length > 0) {
      return res.json({ status: false, message: "Already registered" });
    } else {
      bcrypt.hash(password, 10, async function (err, hash) {
        const user = await userSchema.create({
          username: username,
          email: email,
          password: hash,
          role: role,
        });
        let rep = {
          id: user._id,
        };
        let token = jwt.sign(rep, process.env.JWT);
        res.status(200).json({
          status: "success",
          message: "successfully register",
          data: user,
          auth: true,
          token: token,
          push: "/adduserdata",
          tokenName: "token",
        });
      });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    const user = await userSchema.findOne({ email: email });
    console.log(user);

    if (user) {
      const bcryp_pass = await bcrypt.compare(password, user.password);
      if (!bcryp_pass) {
        res.json({
          status: "failure",
          auth: false,
          message: "password or username is wrong",
        });
      } else {
        let rep = {
          id: user._id,
        };
        let token = jwt.sign({ id: rep.id }, process.env.JWT);

        if (user.role == "mentor") {
          res.status(200).json({
            status: "success",
            data: user,
            auth: true,
            token: token,
            push: "/mentor/home",
            tokenName: "token",
            message: "Welcome sir",
          });
        } else if (user.role == "mentee") {
          res.status(200).json({
            status: "success",
            data: user,
            auth: true,
            token: token,
            push: "/mentee/home",
            tokenName: "token",
            message: "Welcome sir",
          });
        } else {
          res.status(200).json({
            status: "success",
            data: user,
            auth: true,
            token: token,
            push: "/adduserdata",
            tokenName: "token",
            message: "Welcome sir",
          });
        }
      }
    } else {
      res.json({
        auth: false,
        message: "invalid username or password",
      });
    }
  },
  profile: async (req, res) => {
    const user = await userSchema.findOne({ _id: res.token }).populate("chats");
    if (user) {
      res.status(200).json({
        status: "success",
        data: user,
      });
    }
  },
  getDetails: async (req, res) => {
    const { id } = req.params;
    const user = await userSchema.findOne({ _id: id }, "-chats");
    res.json({
      status: "success",
      data: user,
    });
  },
  sendMessage: async (req, res) => {
    const { msg, id } = req.body;
    const newMessage = await message.create({
      ToId: id,
      FromId: res.token,
      message: msg,
      isOpen: [res.token],
    });
    const notfresh = await conversation.findOne({
      peoples: { $all: [res.token, id] },
    });

    if (!notfresh) {
      const conversations = await conversation.create({
        peoples: [res.token, id],
        messages: [newMessage.id],
      });
      await userSchema.updateOne(
        { _id: res.token },
        { $push: { chats: conversations._id } }
      );
      await userSchema.updateOne(
        { _id: id },
        { $push: { chats: conversations._id } }
      );
    } else {
      await conversation.updateOne(
        { peoples: { $all: [res.token, id] } },
        { $push: { messages: newMessage._id } }
      );
    }
    res.json({
      status: "success",
    });
  },
  additionalDetails: async (req, res) => {
    console.log(req.body);

    try {
      const {
        name,
        avatar,
        profession,
        phonenumber,
        interests,
        place,
        latesteducation,
        about,
        languages,
      } = req.body;

      const updated = await userSchema.updateOne(
        { _id: res.token },
        {
          profilepicture: avatar,
          // username: name,
          profession,
          phonenumber,
          interests,
          place,
          latesteducation,
          about,
          languages,
        }
      );

      const user = await userSchema
        .findOne({ _id: res.token })
        .populate("chats");

      if (user) {
        res.json({
          status: "success",
          data: user,
        });
      } else {
        res.json({
          status: "failure",
          message: "User not found",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  },
  getMentors: async (req, res) => {
    const mentors = await userSchema.find({ role: "mentor" }, "-chats");
    res.json({
      status: "success",
      data: mentors,
    });
  },
  getMentee: async (req, res) => {
    const mentee = await userSchema.find({ role: "mentee" }, "-chats");
    res.json({
      status: "success",
      data: mentee,
    });
  },
};
