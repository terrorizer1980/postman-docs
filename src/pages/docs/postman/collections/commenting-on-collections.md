---
title: "Commenting on collections"
order: 44
page_id: "commenting_on_collections"
warning: false
---

You can leave comments on collections and requests to collaborate with your teammates. You can tag your collaborators in comments to let them know that you have questions or feedback.

## Contents

* [Commenting on a collection](#commenting-on-a-collection)
* [Commenting on a request](#commenting-on-a-request)
* [Commenting on request parameters](#commenting-on-request-parameters)
* [Reading comments in the app and on the Dashboard](#reading-comments-in-the-app-and-on-the-dashboard)
* [Editing comments](#editing-comments)
* [Resolving comments](#resolving-comments)
* [Deleting comments](#deleting-comments)
* [Tagging members in comments](#tagging-members-in-comments)
* [Next steps](#next-steps)

> The Postman app only supports comments on requests and request parameters. To leave or read comments on a collection, open the [Postman Dashboard](https://app.getpostman.com) in your web browser.

## Commenting on a collection

You can leave comments on collections from the [Postman Dashboard](https://app.getpostman.com).

> Team members must have access to the collection in question in order to post comments.

1. Sign in to the [Dashboard](https://app.getpostman.com).
2. At the top, select a **Workspace** and then click the **Collections** tab.
3. Open the collection you want to leave your comment on and click **Comments** next to the name of the collection.

## Commenting on a request

You can comment on requests [from the Postman Dashboard](#from-the-postman-dashboard) or [in the Postman app](#from-the-postman-app). When you comment on a request, it's reflected in both the Dashboard and the app.

> You can only post comments on saved requests.

### Commenting from the Dashboard

1. Sign in to the [Dashboard](https://app.getpostman.com).
2. Navigate to the request you want to leave a comment on.
3. Click **Comments** next to the request name.
4. Write your comment, then click **Add Comment**.

### Commenting in the app

1. Navigate to the request you want to leave a comment on.
2. Click **Comments** at the top-right of the window.
3. Write your comment, then click **Add Comment**.

## Commenting on request parameters

You can leave comments on request parameters (query parameters, path parameters, headers, request body of type form-data, and x-www-form-urlencoded) from the Postman app.

> You can only add comment to parameters on saved requests.

1. Open the request you'd like to comment on.
2. Select some or all of the content of the key, value, or description.
3. Click **Comment**, enter your comment, then click **Add Comment**

![Add comment](https://assets.postman.com/postman-docs/collab09-leave-comment-request-parameters.gif)

## Reading comments in the app and on the Dashboard

You can see comments made by teammates on requests and request parameters in the Postman app or the [Dashboard](https://app.getpostman.com). You can only access comments on collections from the Dashboard.

### Reading comments in the Postman app

You can read comments made on the request and on request parameters from the app.

1. In the Postman app, open the request that has the comments you want to review.
2. At the top, click **Comments**.
3. Select comments made on the request (**Comments**) or on the request parameters (**Inline Comments**).
   * You can filter inline comments by **Open Comments**, **Resolved Comments**, or both.

![See comment in the app](https://assets.postman.com/postman-docs/collab09-see-comments-from-app.gif)

> The comment button displays the number of existing comments.

### Reading comments on the Dashboard

You can read all comments through the [Postman Dashboard](https://app.getpostman.com).

1. Sign in to the [Dashboard](https://app.getpostman.com).
2. At the top, select a **Workspace** and then click the **Collections** tab.
3. Open the collection with the comments you want to read.
4. Next to the request with the comments you want to see, click **Comments**.
   * Any comments posted on the collection as a whole will be next to the collection name.

![See comment in the dashboard](https://assets.postman.com/postman-docs/collab09-see-comments-from-dashboard.gif)

## Editing comments

You can make changes to comments you've already posted. Other team members cannot edit your comments.

1. In the Postman app or [Dashboard](https://app.getpostman.com), open the collection with the comment you want to edit.
2. Find the comment and click **Comment** > **Edit**.

<img src="https://assets.postman.com/postman-docs/collab09-edit-comment.jpg" alt="Edit comment" width="476px"/>

## Resolving comments

You can resolve inline comments when you're done with them.

> Resolving inline comments is only possible through the app.

1. Open the collection with the inline comment(s) you want to resolve.
2. Click **Comments** to open the comment sidebar.
3. Click **Inline Comments**.
4. Click **Resolve** next to the inline comment(s) you'd like to resolve.

![Resolving comment](https://assets.postman.com/postman-docs/collab09-resolve-comment.gif)

## Deleting comments

1. In the Postman app or Dashboard, open the collection with the comment you want to delete.
2. Find the comment and click **Comments** > **Delete**.

<img src="https://assets.postman.com/postman-docs/collab09-delete-comment.jpg" alt="Delete comment" width="470px"/>

> For moderation purposes, admins can delete comments made by anyone, but cannot modify comments.

## Tagging members in comments

When you leave feedback or a question for a specific teammate, you can let them know by tagging them in your comment.

1. In the Postman app or Dashboard, open the collection or request you want to leave your comment on.
2. Click **Comments** and write your message.
3. To tag your teammate, type "@" and choose their name from the list.
4. Click **Add comment**.

Your teammate will be notified in the app or with an email that they've been tagged in a comment. In-app notifications appear as a red dot above the bell icon at the top right.

> If your teammate has disabled notifications then they will not be notified. If they don't have access to the collection they've been tagged on, they'll need to request access before they can read the comment.

![Notification bell](https://assets.postman.com/postman-docs/collab09-see-notifications.jpg)

## Next steps

Postman comments support Markdown. For more information on formatting using Markdown refer to [Markdown in API Documentation](https://documenter.getpostman.com/view/33232/markdown-in-api-documentation/JsGc?version=latest).
