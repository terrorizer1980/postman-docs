---
title: "The Run in Postman button"
order: 330.9
page_id: "introduction_run_button"
warning: false
contextual_links:
  - type: link
    name: "Creating the Run in Postman button"
    url: "https://learning.postman.com/docs/postman-for-publishers/run-in-postman/creating-run-button/"
  - type: link
    name: "Run in Postman button API"
    url:  "https://learning.postman.com/docs/postman-for-publishers/run-in-postman/run-button-API/"
  - type: link
    name: "Environments in Run in Postman"
    url: "https://learning.postman.com/docs/postman-for-publishers/run-in-postman/environments-run-button/"
  - type: link
    name: "Using variables"
    url:  "https://learning.postman.com/docs/postman/variables-and-environments/variables/"
  - type: link
    name: "Run in Postman button API"
    url: "https://learning.postman.com/docs/postman-for-publishers/run-in-postman/run-button-API/"
  - type: link
    name: "Security at Postman"
    url: "https://www.postman.com/security"
  - type: link
    name: "Creating the Run in Postman button"
    url: "https://learning.postman.com/docs/postman-for-publishers/run-in-postman/creating-run-button/"

---

The Run in Postman button is a way to give users working with your APIs direct access to your endpoints. When you [create a button](/docs/postman-for-publishers/run-in-postman/creating-run-button/) for a collection and then embed it in your API documentation, website, or GitHub repo, a copy of that collection will open in the Postman app whenever a user clicks the button.

![Travefy button](https://assets.postman.com/postman-docs/Travefy+API+RIP+button.jpg)

> The Run in Postman button works with all description formats like Swagger, RAML, and GitHub.

## Button types & including an environment

There are 2 types of Run in Postman buttons:

**Dynamic button**: Uses HTML and CSS. Optimal for a website where you have permission to edit the site's source code. Gives you access to the [Run in Postman API](/docs/postman-for-publishers/run-in-postman/run-button-API/).

**Static button**: Uses Markdown. Optimal for a Markdown document like a GitHub ReadMe or BitBucket repository.

With both buttons you have the option to [include an environment](/docs/postman-for-publishers/run-in-postman/environments-run-button/). The environment will open in the Postman app along with a copy of your collection whenever a user clicks your button. The user can then input their own [variable values in the environment](/docs/postman/variables-and-environments/variables/).

## Access to the Run in Postman API

The JavaScript [Run in Postman API](/docs/postman-for-publishers/run-in-postman/run-button-API/) is accessible through the dynamic Run in Postman button. The API uses the `pm()`method, which you can leverage to create and modify environments included in your button. You can also include multiple buttons on a single page with segregated environments, each environment with its own button.

The API consists of 3 JavaScript functions that can alter your button's behavior:

* `env.create`: Creates a new environment.
* `env.assign`: Edits an existing environment.
* `env.replace`: Replaces and entire environment.

## User interaction with your button

When a user finds your button displayed on your website or GitHub ReadMe and they click it, they'll be prompted to open a copy of the collection in the Postman app. If they haven't downloaded the app yet, they'll have the option to do so then.

 ![Modal display](https://assets.postman.com/postman-docs/New+sized+Modal+RIP+button.jpg)

> If you're using the dynamic button, the prompt will display in a modal. If you're using the static button, the prompt will open in a new page.

The app will open on their desktop and automatically have your collection opened and ready for use.

## Security considerations

This section only covers security details related to the Run in Postman feature. Refer to our [complete security practices](https://www.postman.com/security) for general details.

* Do a test import of your collection to be sure no sensitive data, like access keys, have been included. You can create a duplicate of your collection and remove any data you do not want shared. Duplicate your collection from the ellipsis **(...)** menu next to your collection name.
    * ![Ellipsis menu](https://assets.postman.com/postman-docs/Resized+Ellipsis+menu+.jpg)
* Collections imported into the Postman app via the Run in Postman button are copies of the original.
* Only collection-specific data you enter in Postman is shared through the Run in Postman button. **Example:** Collection names and descriptions, or the request data (URL, headers, body, tests, scripts, etc.).

## Next steps

Create a [Run in Postman button](/docs/postman-for-publishers/run-in-postman/creating-run-button/).
