define({ api: [

  {
    "type": "post",
    "url": "/users/sign_up",
    "title": "sign_up",
    "name": "Create_Account",
    "description": "API will create a user account.",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "email",
            "optional": false,
            "description": "Provide the Email."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "Provide the Password."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "password_confirmation",
            "optional": false,
            "description": "Provide the Password again."
          }
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"success\": true,\n\"user\": {\"id\": 2, \"email\":\"manish.johari@kiwitech.com\", \"is_active\": false}\n}"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"errors\": true,\n \"status\": \"Email has already been taken.\"\n}\n"
        }
      ]
    },
  },
  
  {
    "type": "get",
    "url": "/user/sign_out",
    "title": "Logout",
    "name": "User_Logout",
    "description": "API will logout the user.",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide the authentication token"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"success\": true,\n \"status\": \"logged out\"\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"errors\": true,\n \"status\": \"User not logged out. Authentication token is not valid.\"\n}\n"
        }
      ]
    },
  },

  {
    "type": "get",
    "url": "/user/sign_out",
    "title": "Logout",
    "name": "User_Logout",
    "description": "API will logout the user.",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide the authentication token"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"success\": true,\n \"status\": \"logged out\"\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"errors\": true,\n \"status\": \"User not logged out. Authentication token is not valid.\"\n}\n"
        }
      ]
    },
  },

 {
    "type": "post",
    "url": "/user/sign_in",
    "title": "Login From Facebook",
    "name": "User_Login_From_Facebook",
    "description": "API will login the user from facebook.",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "fb_user_id",
            "optional": false,
            "description": "Provide the fb_user_id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "provider",
            "defaultValue": "facebook",
            "optional": true,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fb_access_token",
            "optional": false,
            "description": "Provide the facebook access token"
          }
        ],
        "These parameters should be in user key:": [
          {
            "group": "user",
            "type": "String",
            "field": "email",
            "optional": false,
            "description": "Provide the user email\n<p> ex : {\"user\"=>{\"email\"=>\"example@kiwitech.com\"}}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"success\": true,\n \"user\":\n   {\n     \"id\": 1,\n     \"first_name\": \"manish\",\n     \"last_name\": \"johari\",\n     \"email\": \"example@kiwitech.com\",\n     \"fb_user_id\": \"100005731151579\"   }\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"errors\": true,\n \"status\": \"The email and password you've entered do not match.\"\n}\n"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/user/verify_code",
    "title": "Code verification",
    "name": "Code_Verification",
    "description": "API will verify the Verification_Code.",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "verification_code",
            "optional": false,
            "description": "Provide the verification code"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"success\": true,\n \"status\": \"true\"\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"errors\": true,\n \"status\": \"verification code is not valid.\"\n}\n"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/user/verify_code",
    "title": "Code verification",
    "name": "Code_Verification",
    "description": "API will verify the Verification_Code.",
    "group": "User",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "verification_code",
            "optional": false,
            "description": "Provide the verification code"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"success\": true,\n \"status\": \"true\"\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"errors\": true,\n \"status\": \"verification code is not valid.\"\n}\n"
        }
      ]
    },
  },


]});