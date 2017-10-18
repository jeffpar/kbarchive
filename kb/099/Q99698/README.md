---
layout: page
title: "Q99698: Mac Bkup: Backup Can Stop Remote Connection"
permalink: kb/099/Q99698/
---

## Q99698: Mac Bkup: Backup Can Stop Remote Connection

	Article: Q99698
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1,3.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.1, 3.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the MS Mail Backup utility (a Control Panel device) and Remote Server
	Connection (RSC) are enabled on the same version 3.1 Microsoft Mail for
	AppleTalk Networks server, RSC may be in the middle of transmitting mail
	messages at the same time the mail server is scheduled to be backed up.
	
	RESOLUTION
	==========
	
	The backup will proceed as scheduled and, in the process, shut down the mail
	server, and this will disconnect the dial-up connection to the remote server.
	
	After the backup has been completed, the Macintosh will be restarted and will
	return to its normal operating state. RSC will not attempt to reconnect to the
	remote server until its next scheduled connection time, or earlier depending on
	the other options enabled within RSC.
	
	Since the Backup utility and the RSC are independent processes that can run at
	any time, there is no resolution to this potential problem.
	
	Additional query words: 3.10 3.1a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310 kbMailATN310a
	Version           : WINDOWS:3.1,3.1a
	
	=============================================================================
	
