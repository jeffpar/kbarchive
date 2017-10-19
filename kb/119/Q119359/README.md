---
layout: page
title: "Q119359: PC DB Win: Steps to Move User's Account Without Using MoveUser"
permalink: /kb/119/Q119359/
---

## Q119359: PC DB Win: Steps to Move User's Account Without Using MoveUser

	Article: Q119359
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are times when the MOVEUSER.EXE utility, included with version 3.2 of
	Microsoft Mail for Windows, will not work properly. An example of this is when
	one of the postoffices is on a DEC system.
	
	The steps below outline the method for copying existing messages from the old
	account (export), creating the new account, and then copying the existing
	messages into the new account (import).
	
	MORE INFORMATION
	================
	
	1. Use the LISTUSER utility to get the user's hexadecimal ID (hex-id) from the
	  old postoffice.
	
	2. Copy the <hex-id>.MMF file to a floppy disk.
	
	3. Set up the new account on the new postoffice. Set the password to match the
	  old password.
	
	4. Use the LISTUSER utility to get the new hex-id.
	
	5. Rename the old <hex-id>.MMF file to the new <hex-id>.MMF.
	
	6. Start Mail.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
