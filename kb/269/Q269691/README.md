---
layout: page
title: "Q269691: XADM: How to Remove Public Folders from the Internet Newsgroups"
permalink: /kb/269/Q269691/
---

## Q269691: XADM: How to Remove Public Folders from the Internet Newsgroups

	Article: Q269691
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to remove public folders that are created by
	newsfeeds. These public folders are located in the Internet Newsgroups top-level
	folder in Microsoft Outlook.
	
	MORE INFORMATION
	================
	
	To delete any or all of the newsfeed folders, you must be logged on to the
	mailbox designated as the administrator of the newsfeed. To determine which
	mailbox has this designation, follow these steps:
	
	1. Start the Exchange Server Administrator program.
	
	2. Click to expand your site, and click the Connections container.
	
	3. In the right pane, double-click Newsfeed.
	
	4. On the General tab, locate the field labeled Administrator's Mailbox.
	
	  NOTE: This mailbox is currently assigned as the Administrator of this
	  newsfeed. To delete the folders associated with this newsfeed, log on to the
	  mailbox listed here. If necessary, change the Administrator's mailbox. To do
	  this, click Change, and then click the mailbox that you want to use.
	
	To delete folders in the Internet Newsgroups top-level folder, follow these
	steps:
	
	1. Start the Outlook client that is logged on to the mailbox designated as the
	  Administrator of the newsfeed (see steps above).
	
	2. If the folder list is not currently visible, from the View menu, click Folder
	  List.
	
	3. Expand Public Folders.
	
	4. Expand the All Public Folders tree.
	
	5. Expand Internet Newsgroups.
	
	6. Click the folder you wish to delete and press DELETE, or click Delete on the
	  Edit menu.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
