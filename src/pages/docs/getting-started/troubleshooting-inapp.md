---
title: "Troubleshooting app issues"
order: 9
page_id: "troubleshooting_in_app"
warning: false
---

Postman keeps a tab on your activities inside the app and captures log messages automatically to help you debug unresolved issues just in case something goes wrong in the app. You can easily access the stored messages with a few mouse clicks. To access the log messages in macOS, point your cursor to *View* menu, navigate to *Developer* and then select *View Logs in Finder*, as illustrated below:  

[![view logs](https://assets.postman.com/postman-docs/View_Logs.png)](https://assets.postman.com/postman-docs/View_Logs.png)

The logs folder and its contents appear as shown below:

[![view logs2](https://assets.postman.com/postman-docs/View_Logs2.png)](https://assets.postman.com/postman-docs/View_Logs2.png)

To access in Linux OS, point your cursor to *View* menu, navigate to *Developer* and then select *View Logs in File Manager*

To access in Windows, point your cursor to *View* menu, navigate to *Developer* and then select *View Logs in File Explorer*

These logs provide you basic information about your activities in the app flow. You can send these log messages to Postman Customer Support to troubleshoot issues when encountered.

### How do I recover my data?

Summary of Issue
==============

**One of the following may have brought you here**:
- I opened the Postman native app and it looks empty - it looks like all my collections disappeared.
- Data in the Postman native app, including Collections, environments, and globals, has been lost unexpectedly upon opening the app.

**Why is this happening?**
- This can happen because of the app's local database getting corrupted or when signing out of the app (which clears all local data).
Resolution steps
--------------------------------
**Check for synced data**

If you were previously logged in to the app with your Postman account and had sync enabled, your data should be backed up to our servers. Signing out of the Postman app, and logging back in again, should restore your work.

To check what is synced to your Postman account, navigate to the link below.
- [https://go.postman.co/me](https://go.postman.co/me)

**Attempt to recover local data**
If your work is not backed up to a Postman account, you can attempt to recover data from the app's local storage using the steps below.

**Please note:** this process will delete any local data for Postman Canary.

If you're using our Chrome app, please follow [the instructions in this article](https://support.getpostman.com/hc/en-us/articles/203837571-I-lost-all-my-data-when-I-opened-Postman) instead

1. Download and install [Postman Canary](https://www.postman.com/downloads/canary)
_If you already have Postman Canary installed, make sure to sign-out of the app and quit it before proceeding._

2. Make a copy of the folder: **file__0.indexeddb.leveldb** in your Postman directory, and paste it into the IndexedDB folder in your PostmanCanary.

**Windows**
~~~~~~~~~~~~
**Copy**: %appdata%\Postman\IndexedDB​\file__0.indexeddb.leveldb
**Paste to**: %appdata%\PostmanCanary\IndexedDB​\
~~~~~~~~~~~~

**macOS**
~~~~~~~~~~~
**Copy**: ~/Library/Application Support/Postman/IndexedDB/file__0.indexeddb.leveldb
**Paste to**: ~/Library/Application Support/PostmanCanary/IndexedDB
~~~~~~~~~~~

**Linux**
~~~~~~~~~~~
**Copy**: ~/.config/Postman/IndexedDB/file__0.indexeddb.leveldb
**Paste to**: ~/.config/PostmanCanary/IndexedDB/
~~~~~~~~~~~~

3. Open Postman Canary, and bulk export your data from within the app. Save the resulting .json file to your local machine. To learn more, please refer to [Data Dumps](https://learning.postman.com/docs/postman/collections/data_formats/#data-dumps)

4. Open the stable Postman app (not Canary), and switch to a workspace where any recovered content will be added, and import the .json file you saved in step 3. To learn more, please refer to [Importing Data](https://learning.postman.com/docs/postman/collections/data_formats/#importing-postman-data)

5. If any content is recovered, it will be added to your workspace after the import. If no data is recovered, you may only see a few empty default environments

If you need further assistance, please open a ticket with our Support Team: [https://www.postman.com/support] (https://www.postman.com/support)

### Postman Chrome app won't start

If you're using the Postman Chrome app:

1. We strongly suggest you move to the native apps ([https://www.getpostman.com/apps](https://www.getpostman.com/apps)) due to the deprecation of our official chrome extension for (OSX / Windows / Linux) and the native apps support a lot more features.
2. Before reinstalling, head to [chrome://indexeddb-internals/](chrome://indexeddb-internals/) and search for ""fhbjgbiflinjbdggehcddcbncdddomop"". There will be two folders listed - backup the contents of these folders.
3. Reinstall (navigate to this [link](https://www.getpostman.com/apps) and reinstall the latest version) and move the backup to its original location.



### Postman window is blank

**Issue**
---------

For Windows computers with certain GPUs, Postman may display a **blank/black window** when opened, and elements in the app may not be rendering correctly or at all.

![Screen_Shot_2019-07-08_at_4.36.22_PM.png](https://support.getpostman.com/hc/article_attachments/360040688194/Screen_Shot_2019-07-08_at_4.36.22_PM.png)

This issue may be related to a known issue where Postman doesn’t launch with certain GPUs. A workaround for this issue involves [disabling your GPU](https://github.com/postmanlabs/postman-app-support/issues/4594#issuecomment-391601621). Disabling GPU rendering for Postman generally allows the app to run successfully. To do so, you'll need to add a Windows environment variable: `POSTMAN_DISABLE_GPU`, with the value: `true`

**Instructions:**

1\. Open:  `Advanced system settings`

[![step 1](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1.png)

2\. Navigate to:  `Environment Variables`

[![step 2](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.12.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.12.png)

3\. Add a new system variable with the name: `POSTMAN_DISABLE_GPU`, and the value: `true`.

[![step 3](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1+(1).png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Troubleshootwindows6.1+(1).png)

4\. Click OK to save

If the issue persists and you see any error logs while the app launches, please send us those logs to investigate further at [help@getpostman.com](mailto:help@getpostman.com)

### How do I recover my data from the Postman Chrome app?

This can happen because of the local database getting corrupted.

If you had sync enabled, sign out, and sign back into the Postman app to recover your data. You can head to https://go.postman.co/me/collections to ensure all your data has been synced correctly.

If not, and you use the Chrome app, head to chrome://indexeddb-internals/ and search for "fhbjgbiflinjbdggehcddcbncdddomop". You should see two folders listed - you can create a zip file with the contents of those folders, and email them to help@postman.com. We should be able to recover your data.

We strongly recommend moving to our native apps (available from https://www.postman.com/apps) and signing in to avail Sync features. 
