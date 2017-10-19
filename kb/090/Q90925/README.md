---
layout: page
title: "Q90925: Mail Message File Size in Windows for Workgroups"
permalink: /kb/090/Q90925/
---

## Q90925: Mail Message File Size in Windows for Workgroups

	Article: Q90925
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft PC Mail, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mail message files vary in size, depending on the size and type of messages
	stored in the file. Folders and the Personal Address Book also take additional
	space in the mail message file (MMF).
	
	MORE INFORMATION
	================
	
	An empty mail message file is about 43K in size. The mail message file grows
	with each additional Message, Folder, and Personal Address Book entry.
	
	There are about 128 bytes overhead for each message and about 256 bytes overhead
	for each attachment or object-linking-and-embedding (OLE) object in a message.
	Because there is no real data compression in the mail message file, a message
	containing 100K of information actually adds 100K plus the message overhead to
	the mail message file.
	
	Each folder adds from 42 to 300 bytes to the mail message file.
	
	Personal Address Book entries are stored in the mail message file. One Personal
	Address Book entry of 500 characters would add about 720 bytes to the mail
	message file.
	
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbWFWSearch kbWFW310 kbWFW311 kbPCMail300
	Version           : WINDOWS:3.1,3.11; :3.0
	
	=============================================================================
	
