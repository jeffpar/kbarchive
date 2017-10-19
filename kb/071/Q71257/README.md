---
layout: page
title: "Q71257: Mac Srv: Deleting Messages Not Work Properly Under Low Memory"
permalink: /kb/071/Q71257/
---

## Q71257: Mac Srv: Deleting Messages Not Work Properly Under Low Memory

	Article: Q71257
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Mail, if a server is running under low memory conditions, deleting
	messages may not work properly.
	
	Normally, the number of messages in the Mailbox folder is reduced by the number
	of messages deleted and these messages are moved to the Wastebasket folder.
	
	However, under low memory conditions, if the number of messages in the
	Wastebasket folder updates, and the Wastebasket folder contains the deleted
	messages, the Mailbox folder still retains the original number of messages.
	
	This problem occurs only with the Mailbox folder, and the messages will not be
	deleted until the Current Server Memory Allocation option is increased in the
	Server Settings dialog box (on the Mail menu).
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
