---
layout: page
title: "Q147006: CONN: MS Mail Connection Gateway Needs Purge on Novell"
permalink: kb/147/Q147006/
---

## Q147006: CONN: MS Mail Connection Gateway Needs Purge on Novell

	Article: Q147006
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Mail for PC Networks database is located on a Novell NetWare
	version 4.1 server, the Mail Connection Gateway must have the purge option
	turned on for the MS Mail Connection Gateway store directory on the postoffice
	or it may hang.
	
	WORKAROUND
	==========
	
	To enable the purge option, do the following:
	
	1. At the console prompt, type the following:
	
	  "LOAD SERVMAN" (without the quotation marks)
	
	2. Choose Console Set Commands from the Available Options menu.
	
	3. Choose File System from the Categories menu.
	
	4. Change the following parameters in the File system menu to the indicated
	  values:
	
	  Immediate Purge on Deleted Files=ON
	  File Deleted Wait Time=0
	  Minimum File Delete Wait Time=0
	
	5. Press the Escape key (ESC) twice to reach the Update Options menu.
	
	6. Choose Update AUTOEXEC.NCF & STARTUP.NCF Now from the Update Options
	  menu.
	
	7. To exit SERVMAN, press the Escape key (ESC).
	
	MORE INFORMATION
	================
	
	If the Mail Connection Gateway user account that logs into the Novell NetWare
	version 4.1 server does not purge when it deletes files, the Macintosh side of
	the gateway and the PC side of the gateway will appear to have different files
	in the subdirectory. The Macintosh will try to pick up the previously deleted
	files, and the gateway will appear to freeze.
	
	
	Additional query words: 3.20 4.00 4.01 4.10 mac macmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
