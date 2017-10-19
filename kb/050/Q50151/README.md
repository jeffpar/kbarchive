---
layout: page
title: "Q50151: Mac Srv: Out-of-Memory Error When Loading Mail Server"
permalink: /kb/050/Q50151/
---

## Q50151: Mac Srv: Out-of-Memory Error When Loading Mail Server

	Article: Q50151
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Server is a start-up (INIT) document that loads into the
	Macintosh's memory on start-up.
	
	Start-up documents load into memory alphabetically. If a message is displayed at
	start-up explaining that the server cannot start because there is not enough
	memory for it to load, you must remove some of the start-up documents that are
	being loaded before the Microsoft Mail Server file.
	
	If some of the removed start-up documents are needed on the server Macintosh, the
	amount of memory dedicated to the Server file can be lowered to free more space
	for the other start-up documents.
	
	MORE INFORMATION
	================
	
	To lower the memory allocation of the Server file, do the following:
	
	1. After the server starts, put the start-up documents that are needed back in
	  the System Folder and sign in to Mail as the Network Manager.
	
	2. From the Mail menu, choose Server Settings and lower the memory allocation
	  setting in the Server Settings dialog box.
	
	3. Click the Update button. The server will restart, and both the start-up
	  documents and Server file will load (if the server allocation is low enough).
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
