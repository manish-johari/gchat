define({ api: [

  {
    "type": "post",
    "url": "/users/sign_up",
    "title": "sign_up",
    "name": "Create_Account",
    "description": "API will create a user account.",
    "group": "Login",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[email]",
            "optional": false,
            "description": "Provide the Email."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[password]",
            "optional": false,
            "description": "Provide the Password."
          }
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"user_id\":  2,  \n\t\"auth_token\": \"xyzabc\", \n\t \"is_confirmed\": false\n}"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error (409):",
          "content": "{\n\t \"errors\" : \n\t {\n\t\t \"email\": \"Email has already been taken.\", \n\t\t\"errors\": \"Email has already been taken.\" \n\t}\n}"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/users/sign_in",
    "title": "Connect with facebook",
    "name": "User_Login_From_Facebook",
    "description": "API will login the user from facebook.",
    "group": "Login",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "fb_user_id",
            "optional": false,
            "description": "<p>Social Network ID via which user is connected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "provider",
            "optional": false,
            "defaultValue": "facebook",
            "description": "<p>Social Network via which user is connected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fb_access_token",
            "optional": false,
            "description": "<p>Provide the facebook access token</p>"
          },
        ],
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"user_id\": 1, \n\t\"auth_token\": \"xyzabc\", \n\t\"is_confirmed\": true\n}\n"
        }
      ]
    },
  },

  {
    "type": "delete",
    "url": "/users/sign_out",
    "title": "Logout",
    "name": "User_Logout",
    "description": "API will logout the user.",
    "group": "Login",
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
          "title": "Success-Response (200):",
          "content": "{\n\t \"message\": \"ok\"\n}\n"
        }
      ]
    },
  },

  {
    "type": "delete",
    "url": "/users/sign_out",
    "title": "Logout",
    "name": "User_Logout",
    "description": "API will logout the user.",
    "group": "Login",
    "version": "0.1.1",
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
          "title": "Success-Response (200):",
          "content": "{\n\t \"message\": \"ok\"\n}\n"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/users/confirm_token",
    "title": "Confirm token",
    "name": "Confirm_Token",
    "description": "API will verify the confirmation token.",
    "group": "Login",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "confirmation_token",
            "optional": false,
            "description": "Provide the confirmation_token sent to user via email."
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"message\": \"ok\"\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response (422):",
          "content": "{\n\t \"errors\": \n\t\t {\n\t\t\t\"confirmation_token\": \"confirmation token is not valid.\", \n\t\t\t\"errors\": \"confirmation token is not valid.\"\n\t\t}\n}\n"
        }
      ]
    },
  }

  


]});