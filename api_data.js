define({ api: [

  {
    "type": "post",
    "url": "/users/sign_up",
    "title": "Sign up",
    "name": "Create_Account",
    "description": "API will create a user account.",
    "group": "Login",
    "version": "1",
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
          "content": "{\n\t\"user_id\":  2,\n\t\"is_confirmed\": false,\n\t\"auth_token\": \"xyzabc\" \n}"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error (422):",
          "content": "{\n\t \"errors\" : \n\t {\n\t\t \"email\": \"Email has already been taken.\", \n\t\t\"generic_errors\": \"Email has already been taken.\" \n\t}\n}"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/users/sign_in/facebook",
    "title": "Connect with facebook",
    "name": "User_Login_From_Facebook",
    "description": "API will login the user from facebook.",
    "group": "Login",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "provider_id",
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
            "field": "access_token",
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
          "content": "{\n\t\"user_id\": 1, \n\t\"auth_token\": \"xyzabc\", \n\t\"is_confirmed\": true, \n\t\"provider_facebook\": true, \n\t\"has_basic_profile\": false, \n\t\"system_generated_password\": false \n}\n"
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
    "version": "1",
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
    "version": "2",
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
    "type": "get",
    "url": "/users/confirmation",
    "title": "Confirm token",
    "name": "Confirm_Token",
    "description": "API will verify the confirmation token.",
    "group": "Login",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "confirmation_token",
            "optional": false,
            "description": "Provide the confirmation_token sent to user via email."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide the auth_token."
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
          "content": "{\n\t \"errors\": \n\t\t {\n\t\t\t\"confirmation_token\": \"confirmation token is not valid.\", \n\t\t\t\"generic_errors\": \"confirmation token is not valid.\"\n\t\t}\n}\n"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/users/sign_in",
    "title": "Sign in",
    "name": "User_signin",
    "description": "API will sign in the user.",
    "group": "Login",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[email]",
            "optional": false,
            "description": "Provide the email"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[password]",
            "optional": false,
            "description": "Provide the password"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"user_id\": \"2\"\n\t \"is_confirmed\": true \n\t \"auth_token\":\"A8xfUFZyWoLRzvmgFqe8\", \n\t\"provider_facebook\": false, \n\t\"has_basic_profile\": false,  \n\t\"system_generated_password\": false\n}\n"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/profile",
    "title": "create profile",
    "name": "create_profile",
    "description": "create user's profile.",
    "group": "Profile",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[language_id]",
            "optional": false,
            "description": "<p>provide id of language selected by user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[first_name]",
            "optional": false,
            "description": "<p>provide first name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[last_name]",
            "optional": false,
            "description": "<p>provide last name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[birthdate]",
            "optional": false,
            "description": "<p>provide birthdate of the user</p> Format : <b>YYYY/MM/DD</b>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[gender]",
            "optional": false,
            "description": "<p>provide gender of the user <b>'m' or 'f'</b></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[lat]",
            "optional": false,
            "description": "<p>provide latitude of a place or city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[long]",
            "optional": false,
            "description": "<p>provide longitude of a place or city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[location]",
            "optional": false,
            "description": "<p>provide location of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[relationship_id]",
            "optional": true,
            "description": "<p>provide id for relationship status of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[education_id]",
            "optional": true,
            "description": "<p>provide education_id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[orientation]",
            "optional": true,
            "description": "<p>provide value of orientation eg. xyzabc</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[career_id]",
            "optional": true,
            "description": "<p>provide career_id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[boy]",
            "optional": true,
            "description": "<p>provide number eg. 2, (for 9+ provide `10`)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[girl]",
            "optional": true,
            "description": "<p>number eg. 2, (for 9+ provide `10`)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "profile[indentical_twins]",
            "optional": true,
            "description": "<p>true/false</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "profile[fraternal_twins]",
            "optional": true,
            "description": "<p>true/false</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "profile[triplets]",
            "optional": true,
            "description": "<p>true/false</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "profile[quads]",
            "optional": true,
            "description": "<p>true/false</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[religion_id]",
            "optional": true,
            "description": "<p>provide id of religion eg. 1</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "field": "profile[profile_images_attributes][][media]",
            "optional": true,
            "description": "<p>provide profile image of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "<p>provide authentication token of user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (201):",
          "content": "{\n\t \"message\": \"ok\"\n}\n"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/interests",
    "title": "Create Interests",
    "name": "create_myinterests",
    "description": "create user's interests.",
    "group": "Interests",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "interest[collectings]",
            "optional": false,
            "description": "<p>provide selected ids. eg. 1,2,3,4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "interest[hobbies]",
            "optional": false,
            "description": "<p>provide selected ids eg. 1,2,3,4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "interest[movies]",
            "optional": false,
            "description": "<p>provide selected ids eg. 1,2,3,4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "interest[music]",
            "optional": false,
            "description": "<p>provide selected ids eg. 1,2,3,4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "interest[pets]",
            "optional": false,
            "description": "<p>provide selected ids eg. 1,2,3,4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "interest[political_views]",
            "optional": false,
            "description": "<p>provide selected ids eg. 1,2,3,4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "interest[sports]",
            "optional": false,
            "description": "<p>provide selected ids eg. 1,2,3,4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "<p>provide auth_token. </p>"
          },
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"collectings\":[1,2,3,4],\"hobbies\":[1,2,3,4],\"movies\":[1,2,3,4],\"music\":[1,2,3,4],\"pets\":[1,2,3,4],\"political_views\":[1,2,3,4],\"sports\":[1,2,3,4]\n}\n"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/users/password",
    "title": "Forgot password",
    "name": "forgot_password",
    "description": "Receive system generated password password on email.",
    "group": "Password",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[email]",
            "optional": false,
            "description": "<p>Provide email of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t\"message\": \"You will receive an email with instructions on how to reset your password in a few minutes.\"\n}"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response (422)",
          "content": "{\n\t\"errors\":\n\t\t{\n\t\t\t\"email\": \"Email not found\",\n\t\t\t\"generic_errors\": \"Email not found\"\n\t\t}\n}"
        }
      ]
    }
  },

  {
    "type": "get",
    "url": "/languages",
    "title": "Get languages",
    "name": "get_languages",
    "description": "Get all languages.",
    "group": "Profile",
    "version": "1",
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t\"languages\": [{\"id\":1,\"name\":\"Arabic\",\"code\":\"ar\"},{\"id\":2,\"name\":\"Bulgarian\",\"code\":\"bg\"},{\"id\":3,\"name\":\"Catalan\",\"code\":\"ca\"},{\"id\":4,\"name\":\"Chinese (Simplified)\",\"code\":\"zh-CHS\"},{\"id\":5,\"name\":\"Chinese (Traditional)\",\"code\":\"zh-CHT\"},{\"id\":6,\"name\":\"Czech\",\"code\":\"cs\"},{\"id\":7,\"name\":\"Danish\",\"code\":\"da\"},{\"id\":8,\"name\":\"Dutch\",\"code\":\"nl\"},{\"id\":9,\"name\":\"English\",\"code\":\"en\"},{\"id\":10,\"name\":\"Estonian\",\"code\":\"et\"},{\"id\":12,\"name\":\"Finnish\",\"code\":\"fi\"},{\"id\":13,\"name\":\"French\",\"code\":\"fr\"},{\"id\":14,\"name\":\"German\",\"code\":\"de\"},{\"id\":15,\"name\":\"Greek\",\"code\":\"el\"},{\"id\":16,\"name\":\"Haitian Creole\",\"code\":\"ht\"},{\"id\":17,\"name\":\"Hebrew\",\"code\":\"he\"},{\"id\":18,\"name\":\"Hindi\",\"code\":\"hi\"},{\"id\":27,\"name\":\"Hmong Daw\",\"code\":\"mww\"},{\"id\":19,\"name\":\"Hungarian\",\"code\":\"hu\"},{\"id\":20,\"name\":\"Indonesian\",\"code\":\"id\"},{\"id\":21,\"name\":\"Italian\",\"code\":\"it\"},{\"id\":22,\"name\":\"Japanese\",\"code\":\"ja\"},{\"id\":23,\"name\":\"Korean\",\"code\":\"ko\"},{\"id\":24,\"name\":\"Latvian\",\"code\":\"lv\"},{\"id\":25,\"name\":\"Lithuanian\",\"code\":\"lt\"},{\"id\":26,\"name\":\"Malay\",\"code\":\"ms\"},{\"id\":28,\"name\":\"Norwegian\",\"code\":\"no\"},{\"id\":11,\"name\":\"Persian (Farsi)\",\"code\":\"fa\"},{\"id\":29,\"name\":\"Polish\",\"code\":\"pl\"},{\"id\":30,\"name\":\"Portuguese\",\"code\":\"pt\"},{\"id\":31,\"name\":\"Romanian\",\"code\":\"ro\"},{\"id\":32,\"name\":\"Russian\",\"code\":\"ru\"},{\"id\":33,\"name\":\"Slovak\",\"code\":\"sk\"},{\"id\":34,\"name\":\"Slovenian\",\"code\":\"sl\"},{\"id\":35,\"name\":\"Spanish\",\"code\":\"es\"},{\"id\":36,\"name\":\"Swedish\",\"code\":\"sv\"},{\"id\":37,\"name\":\"Thai\",\"code\":\"th\"},{\"id\":38,\"name\":\"Turkish\",\"code\":\"tr\"},{\"id\":39,\"name\":\"Ukrainian\",\"code\":\"uk\"},{\"id\":40,\"name\":\"Urdu\",\"code\":\"ur\"},{\"id\":41,\"name\":\"Vietnamese\",\"code\":\"vi\"}]\n}"
        }
      ]
    },
  },

  {
    "type": "get",
    "url": "/educations",
    "title": "Get educations",
    "name": "get_educations",
    "description": "Get all educations.",
    "group": "Profile",
    "version": "1",
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t\"educations\": [{\"id\":1,\"name\":\"Elementary\"},{\"id\":2,\"name\":\"Middle or Junior High\"},{\"id\":3,\"name\":\"High School\"},{\"id\":4,\"name\":\"College/University\"}]\n}"
        }
      ]
    },
  },

  {
    "type": "get",
    "url": "/relationships",
    "title": "Get relationships",
    "name": "get_relationships",
    "description": "Get all relationships.",
    "group": "Profile",
    "version": "1",
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t\"relationships\": [{\"id\":1,\"name\":\"Single\"},{\"id\":2,\"name\":\"Married\"},{\"id\":3,\"name\":\"In Relationship\"},{\"id\":4,\"name\":\"Divorced\"},{\"id\":5,\"name\":\"Separated\"},{\"id\":6,\"name\":\"Engaged\"},{\"id\":7,\"name\":\"It's Complicated\"}]\n}"
        }
      ]
    },
  },


  {
    "type": "post",
    "url": "/users/confirmation",
    "title": "Send Confirmation token",
    "name": "send_Confirmation_Token",
    "description": "API will send the confirmation token.",
    "group": "Login",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide the auth_token."
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"message\": \"You will receive an email with instructions for how to confirm your email address in a few minutes.\"\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response (422):",
          "content": "{\n\t \"errors\": \n\t\t {\n\t\t\t\"email\": \"Email was already confirmed, please try signing in.\", \n\t\t\t\"generic_errors\": \"Email was already confirmed, please try signing in.\"\n\t\t}\n}\n"
        }
      ]
    },
  },

  {
    "type": "delete",
    "url": "/users/destroy",
    "title": "Delete User",
    "name": "delete_user",
    "description": "API will delete user",
    "group": "Login",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[email]",
            "optional": false,
            "description": "Provide the email of user."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[password]",
            "optional": false,
            "description": "Provide the password."
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"message\": \"User deleted successfully.\"\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response (422):",
          "content": "{\n\t \"errors\": \n\t\t {\n\t\t\t\"generic_errors\": \"Invalid User details.\"\n\t\t}\n}\n"
        }
      ]
    },
  },

  {
    "type": "put",
    "url": "/users/deactivate",
    "title": "Deactivate User",
    "name": "deactivate_user",
    "description": "API will deactivate user",
    "group": "Settings",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide the auth_token."
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
    "type": "get",
    "url": "/pets",
    "title": "Get Pets",
    "name": "get_pets",
    "description": "Show pets data.",
    "group": "Interests",
    "version": "1",
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"pets\": [{\"id\":1,\"name\":\"Bird\"},{\"id\":2,\"name\":\"Cat\"},{\"id\":3,\"name\":\"Chicken\"},{\"id\":4,\"name\":\"Chinchilla\"},{\"id\":5,\"name\":\"Cow\"},{\"id\":6,\"name\":\"Dog\"},{\"id\":8,\"name\":\"Ferret\"},{\"id\":7,\"name\":\"Fish\"},{\"id\":9,\"name\":\"Frog\"},{\"id\":10,\"name\":\"Gerbil\"},{\"id\":11,\"name\":\"Guinea Pig\"},{\"id\":12,\"name\":\"Hamster\"},{\"id\":13,\"name\":\"Hermit Crab\"},{\"id\":14,\"name\":\"Horse\"},{\"id\":15,\"name\":\"Monkey\"},{\"id\":16,\"name\":\"Rabbit\"},{\"id\":17,\"name\":\"Rat\"},{\"id\":18,\"name\":\"Rooster\"},{\"id\":19,\"name\":\"Snake\"},{\"id\":20,\"name\":\"Spider\"},{\"id\":21,\"name\":\"Turtle\"}]\n}\n"
        }
      ]
    },
  },

  {
    "type": "get",
    "url": "/profile_data",
    "title": "Get Profile Data",
    "name": "profile_data",
    "description": "Retrieve All static data.",
    "group": "Profile",
    "version": "1",
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"languages\":[{\"id\":1,\"name\":\"Arabic\",\"code\":\"ar\"},{\"id\":2,\"name\":\"Bulgarian\",\"code\":\"bg\"},{\"id\":3,\"name\":\"Catalan\",\"code\":\"ca\"},{\"id\":4,\"name\":\"Chinese (Simplified)\",\"code\":\"zh-CHS\"},{\"id\":5,\"name\":\"Chinese (Traditional)\",\"code\":\"zh-CHT\"},{\"id\":6,\"name\":\"Czech\",\"code\":\"cs\"},{\"id\":7,\"name\":\"Danish\",\"code\":\"da\"},{\"id\":8,\"name\":\"Dutch\",\"code\":\"nl\"},{\"id\":9,\"name\":\"English\",\"code\":\"en\"},{\"id\":10,\"name\":\"Estonian\",\"code\":\"et\"},{\"id\":12,\"name\":\"Finnish\",\"code\":\"fi\"},{\"id\":13,\"name\":\"French\",\"code\":\"fr\"},{\"id\":14,\"name\":\"German\",\"code\":\"de\"},{\"id\":15,\"name\":\"Greek\",\"code\":\"el\"},{\"id\":16,\"name\":\"Haitian Creole\",\"code\":\"ht\"},{\"id\":17,\"name\":\"Hebrew\",\"code\":\"he\"},{\"id\":18,\"name\":\"Hindi\",\"code\":\"hi\"},{\"id\":27,\"name\":\"Hmong Daw\",\"code\":\"mww\"},{\"id\":19,\"name\":\"Hungarian\",\"code\":\"hu\"},{\"id\":20,\"name\":\"Indonesian\",\"code\":\"id\"},{\"id\":21,\"name\":\"Italian\",\"code\":\"it\"},{\"id\":22,\"name\":\"Japanese\",\"code\":\"ja\"},{\"id\":23,\"name\":\"Korean\",\"code\":\"ko\"},{\"id\":24,\"name\":\"Latvian\",\"code\":\"lv\"},{\"id\":25,\"name\":\"Lithuanian\",\"code\":\"lt\"},{\"id\":26,\"name\":\"Malay\",\"code\":\"ms\"},{\"id\":28,\"name\":\"Norwegian\",\"code\":\"no\"},{\"id\":11,\"name\":\"Persian (Farsi)\",\"code\":\"fa\"},{\"id\":29,\"name\":\"Polish\",\"code\":\"pl\"},{\"id\":30,\"name\":\"Portuguese\",\"code\":\"pt\"},{\"id\":31,\"name\":\"Romanian\",\"code\":\"ro\"},{\"id\":32,\"name\":\"Russian\",\"code\":\"ru\"},{\"id\":33,\"name\":\"Slovak\",\"code\":\"sk\"},{\"id\":34,\"name\":\"Slovenian\",\"code\":\"sl\"},{\"id\":35,\"name\":\"Spanish\",\"code\":\"es\"},{\"id\":36,\"name\":\"Swedish\",\"code\":\"sv\"},{\"id\":37,\"name\":\"Thai\",\"code\":\"th\"},{\"id\":38,\"name\":\"Turkish\",\"code\":\"tr\"},{\"id\":39,\"name\":\"Ukrainian\",\"code\":\"uk\"},{\"id\":40,\"name\":\"Urdu\",\"code\":\"ur\"},{\"id\":41,\"name\":\"Vietnamese\",\"code\":\"vi\"}],\"educations\":[{\"id\":1,\"name\":\"Elementary\"},{\"id\":2,\"name\":\"Middle or Junior High\"},{\"id\":3,\"name\":\"High School\"},{\"id\":4,\"name\":\"College/University\"}],\"relationships\":[{\"id\":1,\"name\":\"Single\"},{\"id\":2,\"name\":\"Married\"},{\"id\":3,\"name\":\"In Relationship\"},{\"id\":4,\"name\":\"Divorced\"},{\"id\":5,\"name\":\"Separated\"},{\"id\":6,\"name\":\"Engaged\"},{\"id\":7,\"name\":\"It's Complicated\"},{\"id\":8,\"name\":\"Open Relationship\"},{\"id\":9,\"name\":\"Widowed\"}],\"careers\":[{\"id\":1,\"name\":\"Career_1\"},{\"id\":10,\"name\":\"Career_10\"},{\"id\":2,\"name\":\"Career_2\"},{\"id\":3,\"name\":\"Career_3\"},{\"id\":4,\"name\":\"Career_4\"},{\"id\":5,\"name\":\"Career_5\"},{\"id\":6,\"name\":\"Career_6\"},{\"id\":7,\"name\":\"Career_7\"},{\"id\":8,\"name\":\"Career_8\"},{\"id\":9,\"name\":\"Career_9\"}],\"collectings\":[{\"id\":1,\"name\":\"Collecting_1\"},{\"id\":10,\"name\":\"Collecting_10\"},{\"id\":2,\"name\":\"Collecting_2\"},{\"id\":3,\"name\":\"Collecting_3\"},{\"id\":4,\"name\":\"Collecting_4\"},{\"id\":5,\"name\":\"Collecting_5\"},{\"id\":6,\"name\":\"Collecting_6\"},{\"id\":7,\"name\":\"Collecting_7\"},{\"id\":8,\"name\":\"Collecting_8\"},{\"id\":9,\"name\":\"Collecting_9\"}],\"hobbies\":[{\"id\":1,\"name\":\"hobbies_1\"},{\"id\":10,\"name\":\"hobbies_10\"},{\"id\":2,\"name\":\"hobbies_2\"},{\"id\":3,\"name\":\"hobbies_3\"},{\"id\":4,\"name\":\"hobbies_4\"},{\"id\":5,\"name\":\"hobbies_5\"},{\"id\":6,\"name\":\"hobbies_6\"},{\"id\":7,\"name\":\"hobbies_7\"},{\"id\":8,\"name\":\"hobbies_8\"},{\"id\":9,\"name\":\"hobbies_9\"}],\"movies\":[{\"id\":1,\"name\":\"Movie_1\"},{\"id\":10,\"name\":\"Movie_10\"},{\"id\":2,\"name\":\"Movie_2\"},{\"id\":3,\"name\":\"Movie_3\"},{\"id\":4,\"name\":\"Movie_4\"},{\"id\":5,\"name\":\"Movie_5\"},{\"id\":6,\"name\":\"Movie_6\"},{\"id\":7,\"name\":\"Movie_7\"},{\"id\":8,\"name\":\"Movie_8\"},{\"id\":9,\"name\":\"Movie_9\"}],\"music\":[{\"id\":1,\"name\":\"Music_1\"},{\"id\":10,\"name\":\"Music_10\"},{\"id\":2,\"name\":\"Music_2\"},{\"id\":3,\"name\":\"Music_3\"},{\"id\":4,\"name\":\"Music_4\"},{\"id\":5,\"name\":\"Music_5\"},{\"id\":6,\"name\":\"Music_6\"},{\"id\":7,\"name\":\"Music_7\"},{\"id\":8,\"name\":\"Music_8\"},{\"id\":9,\"name\":\"Music_9\"}],\"pets\":[{\"id\":1,\"name\":\"Bird\"},{\"id\":2,\"name\":\"Cat\"},{\"id\":3,\"name\":\"Chicken\"},{\"id\":4,\"name\":\"Chinchilla\"},{\"id\":5,\"name\":\"Cow\"},{\"id\":6,\"name\":\"Dog\"},{\"id\":8,\"name\":\"Ferret\"},{\"id\":7,\"name\":\"Fish\"},{\"id\":9,\"name\":\"Frog\"},{\"id\":10,\"name\":\"Gerbil\"},{\"id\":11,\"name\":\"Guinea Pig\"},{\"id\":12,\"name\":\"Hamster\"},{\"id\":13,\"name\":\"Hermit Crab\"},{\"id\":14,\"name\":\"Horse\"},{\"id\":15,\"name\":\"Monkey\"},{\"id\":16,\"name\":\"Rabbit\"},{\"id\":17,\"name\":\"Rat\"},{\"id\":18,\"name\":\"Rooster\"},{\"id\":19,\"name\":\"Snake\"},{\"id\":20,\"name\":\"Spider\"},{\"id\":21,\"name\":\"Turtle\"}],\"political_views\":[{\"id\":1,\"name\":\"PoliticalView_1\"},{\"id\":10,\"name\":\"PoliticalView_10\"},{\"id\":2,\"name\":\"PoliticalView_2\"},{\"id\":3,\"name\":\"PoliticalView_3\"},{\"id\":4,\"name\":\"PoliticalView_4\"},{\"id\":5,\"name\":\"PoliticalView_5\"},{\"id\":6,\"name\":\"PoliticalView_6\"},{\"id\":7,\"name\":\"PoliticalView_7\"},{\"id\":8,\"name\":\"PoliticalView_8\"},{\"id\":9,\"name\":\"PoliticalView_9\"}],\"sports\":[{\"id\":1,\"name\":\"Sport_1\"},{\"id\":10,\"name\":\"Sport_10\"},{\"id\":2,\"name\":\"Sport_2\"},{\"id\":3,\"name\":\"Sport_3\"},{\"id\":4,\"name\":\"Sport_4\"},{\"id\":5,\"name\":\"Sport_5\"},{\"id\":6,\"name\":\"Sport_6\"},{\"id\":7,\"name\":\"Sport_7\"},{\"id\":8,\"name\":\"Sport_8\"},{\"id\":9,\"name\":\"Sport_9\"}]\n}\n"
        }
      ]
    },
  },

  {
    "type": "put",
    "url": "/users/password",
    "title": "Change password",
    "name": "change_password",
    "description": "Change password.",
    "group": "Settings",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[current_password]",
            "optional": false,
            "description": "Provide the current password."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[password]",
            "optional": false,
            "description": "Provide the new password."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide the auth_token."
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"message\":\"ok\"\n}\n"
        }
      ]
    },
  },


]});