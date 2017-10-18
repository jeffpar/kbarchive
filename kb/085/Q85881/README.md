---
layout: page
title: "Q85881: PC Win: Sending Objects That Point to a Document"
permalink: kb/085/Q85881/
---

## Q85881: PC Win: Sending Objects That Point to a Document

	Article: Q85881
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are instructions for embedding documents into a version 3.0
	Microsoft Mail for Windows, mail message. Using these instructions will not
	submit large attachments to the Microsoft PC Mail database, but will contain
	only the pointer to the file (which can be a document, executable file, and so
	forth). The instructions direct how to embed a pointer to a document on a
	Microsoft LAN Manager network (or 100 percent compatible). This is a much more
	efficient use of the PC Mail system and will also result in less disk space
	being tied up by the Mail Message File (MMF).
	
	1. While composing a message, choose Insert Object from the Edit menu and select
	  Package.
	
	2. From Packager, choose Command Line from the Edit menu. Type the UNC path name
	  of the file. Such as:
	
	  \\SERVER\SHARE\DIR1\DIR2\FILENAME.EXT
	
	  NOTE: If the server share is password protected, you will receive the error
	  message:
	
	  Cannot find \\SERVER\SHARE\FILENAME.EXT. Do you want to create a new file?
	
	  There is no way to force a password.
	
	3. Select an icon for the package using the Insert Icon button. If desired,
	  enter a label by choosing Label from the Edit menu.
	
	4. Close Packager and send the message.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
