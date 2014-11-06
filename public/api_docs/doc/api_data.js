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
            "field": "auth_token",
            "optional": false,
            "description": "Provide the authentication token"
          }
        ],
        "These parameters should be in activity key:": [
          {
            "group": "activity",
            "type": "Integer",
            "field": "book_id",
            "optional": false,
            "description": "Provide the book id"
          },
          {
            "group": "activity",
            "type": "Integer",
            "field": "bookshelf_id",
            "optional": true,
            "description": "Provide the bookshelf id"
          },
          {
            "group": "activity",
            "type": "Integer",
            "field": "page_no",
            "optional": false,
            "description": "Provide the page no"
          },
          {
            "group": "activity",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "Provide the status of the activity\n<p> ex : \"activity\"=>{\"book_id\"=>\"12\", “bookshelf_id” =>“123”, “status”=>”READING BOOK”, “page_no”=>”10”}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"success\": true,\n\"status\": \"Activity is successfully created.\"\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"errors\": true,\n \"status\": \"Invalid authentication token.\"\n}\n"
        }
      ]
    },
    "filename": "./activity_apis_0.1.0.js"
  },

    ]});