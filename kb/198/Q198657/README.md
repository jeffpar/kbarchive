---
layout: page
title: "Q198657: XADM: Outlook 98 Shows Bckgrd Sync error after Move Server"
permalink: /kb/198/Q198657/
---

## Q198657: XADM: Outlook 98 Shows Bckgrd Sync error after Move Server

	Article: Q198657
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a new mailbox is created, and a user logs on to the mailbox using Outlook 98,
	an offline store (OST) is created by default. If a Move Server operation is then
	performed to move the server to another site, and the client profile for the
	recipient is deleted and recreated, you must manually delete the old OST when
	deleting the old client profile. Failure to do so will result in the following
	behavior when you try to log on to the mailbox using the new profile and Outlook
	98:
	
	Outlook98 reports:
	
	  Background Synchronization Error. See detailed logs in Deleted Items folder.
	
	The following entries are found in the logs:
	
	    1:05:34 Synchronizing Mailbox 'testuser'
	    1:05:34 Synchronizing Hierarchy
	    1:05:34       <#> folder(s) added to offline store
	    1:05:34       <#> folder(s) updated in offline store
	    1:05:34 Done
	
	This error occurs whether or not the offline store was used with the old
	profile.
	
	Offline stores are created by default when a mailbox is logged onto the first
	time with Outlook 98. Consequently, logging onto the mailbox using the new
	profile causes the reported error to occur.
	
	This behavior is by design.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
