---
layout: page
title: "Q123319: PC Win: Err Msg: Mailbag File Required for Accessing Message.."
permalink: kb/123/Q123319/
---

## Q123319: PC Win: Err Msg: Mailbag File Required for Accessing Message..

	Article: Q123319
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access the New Messages option from the View menu in Microsoft Mail for
	Windows, you may get the following error message:
	
	  The mailbag file for accessing your messages is missing or invalid, contact
	  your administrator to restore from a backup.
	
	CAUSE
	=====
	
	This is caused by either corruption in the .MBG file or a corrupt message
	sitting in the Inbox of the Microsoft Mail for PC Networks, MS-DOS workstation.
	
	RESOLUTION
	==========
	
	The following procedure will resolve this issue:
	
	1. Run LISTUSER.EXE to determine the hex-id for the user.
	
	2. Check to see if the user's (hex-id).KEY and (hex-id).MBG files are locked
	  open or ownerless. To check if a file is locked open, you can try renaming
	  the file. If it allows you to do so, the file is not locked open. Make sure
	  that you rename it back once tested.
	
	3. Login to mail in the MS-DOS client (MAIL.EXE) as this user and check the
	  messages in the Inbox for possible corruption. You should check for
	  abnormalities such as all fives in the time and date stamp of the message or
	  graphics characters in the subject and/or body of the message.
	
	4. Delete the corrupt messages. If unable to do so, continue to the next step.
	
	5. Reset the user's (hex-id).KEY and (hex-id).MBG files. This can be done with
	  the following two procedures:
	
	  a. Procedure 1
	
	     To manually reset (hex-id).KEY:
	
	  DEBUG (hex-id).KEY [return]
	  -f100,32f,0 [return] (this resets the file)
	  -w [return] (to write the file)
	  -q [return] (to quit debug)m
	
	     The correct filesize should be 560 bytes.
	
	     To manually reset (hex-id).MBG:
	
	  TYPE NUL > (hex-id).MBG
	
	     The correct filesize should be 0 bytes.
	
	  b. Procedure 2
	
	     1. Run ADMIN.EXE and create a test user.
	
	     2. Run LISTUSER.EXE to determine the hex-id of the test user.
	
	     3. Copy (test user).KEY and .MBG to (user).KEY and .MBG.
	
	     4. Run ADMIN.EXE and delete the test user.
	
	Additional query words: 3.00 3.00b 3.20 3.20a reset .key
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a
	
	=============================================================================
	
