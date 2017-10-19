---
layout: page
title: "Q102087: Mac Bkup: Backup Status Message Could Not Be Sent"
permalink: /kb/102/Q102087/
---

## Q102087: Mac Bkup: Backup Status Message Could Not Be Sent

	Article: Q102087
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After backing up a version 3.1 Microsoft Mail for AppleTalk Networks Mail Data
	file, the Mail Backup utility may display the following message:
	
	  Your Microsoft Mail Datafile was backed up successfully. However, a status
	  message explaining this could not be sent.
	
	CAUSE
	=====
	
	This message may appear for either of the following reasons:
	
	1. The user name specified in the Send Status To field of the Backup utility
	  dialog box is incorrectly defined or does not exist.
	
	2. The Mail server for the specified user name is unavailable.
	
	This error often occurs when multiple mail servers are scheduled for backup at
	the same time, with multiple backup messages addressed to the same user.
	Additionally, it may occur if you are sending the status message to the Network
	Manager account in a multi-server environment.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following (corresponding to the causes
	listed above):
	
	1. In the Mail Backup utility dialog box, enter a user's name in the following
	  format:
	
	  " USER@MAILSERVER " (without the quotation marks)
	
	  where USER matches exactly the user'[ASCII 146]s sign-in name and MAILSERVER
	  matches exactly the name of the server as specified in the Server Settings
	  dialog box.
	
	2. Stagger the times of the scheduled backups to make sure that the mail server
	  receiving the backup messages is operating when the other servers complete
	  their backup cycles.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
