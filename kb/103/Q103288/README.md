---
layout: page
title: "Q103288: Mac Srv: Recovering Deleted User Mail"
permalink: kb/103/Q103288/
---

## Q103288: Mac Srv: Recovering Deleted User Mail

	Article: Q103288
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1,3.1a,3.1c,3.1d
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1, 3.1a, 3.1c, 3.1d 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to recover the mail of deleted users from version 3.1
	of Microsoft Mail for AppleTalk Networks.
	
	NOTE: This process requires that you use a recent backup copy of a server's Mail
	Data file.
	
	To recover mail
	---------------
	
	1. Install version 3.1 of the Mail workstation on a Macintosh.
	
	2. Place a backup of the Microsoft Mail Data file and the Microsoft Mail 3.1
	  server software on the same Macintosh. The backup must be old enough to
	  include any mail you want to recover.
	
	3. Physically disconnect the machine from the network and restart.
	
	4. Log into each of the accounts that contain mail to be recovered. Choose New
	  Folder from the Mail menu to create a folder stored on this computer
	  (locally). To copy any mail messages to be recovered from these accounts to
	  this folder, hold down the OPTION key and select the Copy button, or hold
	  down the OPTION key while you drag messages to the Local Folder icon.
	
	5. Disable the server by removing the Microsoft Mail Server file and the
	  Microsoft Mail Data file from the System Folder.
	
	6. Shut down the Macintosh.
	
	7. Reconnect the Macintosh to the network and restart the computer.
	
	8. Log into each of the new accounts on the active Microsoft Mail 3.1 server
	  with the same account name as that from which you recovered the deleted mail.
	
	9. Move any mail to be recovered to any server-based folder.
	
	10. From the Mail menu, choose Close & Sign Out.
	
	11. For each user whose mail you recovered, remove any Local Mail files. The
	  Local Mail file is stored in MS Mail Local Folders in the Preferences
	  folder.
	
	MORE INFORMATION
	================
	
	You can use the technique listed above to recover mail from a version 3.0
	server.
	
	By using a licensed copy of Mail 3.1, you can upgrade both the active server and
	the backup server to version 3.1 while you complete the steps. After the mail
	has been restored, you can downgrade the Microsoft Mail Data file to version
	3.0. If you use this method, you should remove both servers from the network
	during conversion.
	
	NOTE: If the backed up server data file (SDF) is large in size (150 MB or more),
	the recovery machine should have plenty of RAM to support the server. In most
	cases, the amount of memory that the server originally used or more.
	
	Additional query words: 3.00 3.10 3.10a 3.10c 3.10d
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310 kbMailATN310a kbMailATN310c kbMailATN310d
	Version           : WINDOWS:3.0,3.1,3.1a,3.1c,3.1d
	
	=============================================================================
	
