---
layout: page
title: "Q112908: PC DOS: Err Msg: Notice 50 Folder Damaged..."
permalink: kb/112/Q112908/
---

## Q112908: PC DOS: Err Msg: Notice 50 Folder Damaged...

	Article: Q112908
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0a, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access folders or Mail messages by selecting Folders from the MS-DOS
	client, the following error may occur:
	
	  Notice 50
	  Folder Damaged Contact Administrator
	
	CAUSE
	=====
	
	This error occurs if the folder containing the message has been corrupted.
	
	RESOLUTION
	==========
	
	To determine which folder file in the database is corrupt, the administrator
	should run DUMPIDX.EXE from the user's private folder subdirectory
	MAILDATA\FOLDERS\LOC\<HEXID> (use the LISTUSER utility to determine the
	user's hexadecimal filename), by typing the following command:
	
	  "dumpidx -n xxxxxxxx.idx" (without the quotation marks)
	
	This command will dump the folder's English names and their associated
	hexadecimal names.
	
	Once you know the hexadecimal name of the corrupt folder, you can either restore
	the folder from a backup copy or run the FIXFLD.EXE utility:
	
	1. Rename XXXXXXXX.FLD (the damaged folder) to XXXXXXX.BAD.
	
	2. Run the following command from the directory containing the damaged folder:
	
	  "fixfld xxxxxxxx.bad xxxxxxxx.fld" (without the quotation marks)
	
	  (This command will run the FIXFLD utility against the .BAD file and create the
	  repaired .FLD file.)
	
	3. From the Mail Administrator program (ADMIN.EXE), select Local Admin, Folders,
	  Compress.
	
	MORE INFORMATION
	================
	
	The DUMPIDX utility is available as part of the Database Maintenance Utilities.
	For more information about the LISTUSER utility and how to obtain it, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	Additional query words: 2.10x 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1x,3.0,3.0a,3.2
	
	=============================================================================
	
