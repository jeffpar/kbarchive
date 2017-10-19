---
layout: page
title: "Q138726: PC Mac: Err Msg: Before You Can Use Private Folders,..."
permalink: /kb/138/Q138726/
---

## Q138726: PC Mac: Err Msg: Before You Can Use Private Folders,...

	Article: Q138726
	Product(s): Microsoft Mail For PC Networks
	Version(s): (all),3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.x, on platform(s):
	   - the operating system: Mac OS (all) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Macintosh client, you may get the following error message:
	
	  Before you can use private folders, your Administrator must run the Reset
	  function on your user id.
	
	If you click the OK button, the Macintosh Mail client opens as designed; however,
	the Private Folders icon is dimmed.
	
	If you try to access your private folders from the Microsoft Mail for PC
	Networks, MS-DOS workstation, you will get the following error:
	
	  Notice 127 Private Folder Index Missing.
	
	CAUSE
	=====
	
	The <HEX-ID>.IDX file is missing from the FOLDERS\LOC\<HEX-ID>
	directory on the server.
	
	You may also see this message if the mailbox was created with a version of the
	Mail Administrator's program (Admin.exe) earlier than 2.1b. Version 2.1b of
	ADMIN.EXE is dated 04-03-91 and is 290,801 bytes in size.
	
	RESOLUTION
	==========
	
	If you had private folders, you can restore the index file from a recent backup.
	The program FIXIDX can also be used if no backup is available. FIXIDX
	regenerates the <HEX-ID>.IDX file from the existing private folder files.
	
	NOTE: Running FIXIDX will result in the loss of all folder names.
	
	FIXIDX is included with Microsoft Mail Server version 3.5 on the disk labeled
	Utilities. For more details about FIXIDX, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	If you did not have any private folders, or the above procedure was not
	successful, you can use the Reset function in the Mail Administrator's program
	(Admin.exe) to generate a new index file.
	
	If a version earlier than 2.1b of the Mail Administrator's program was used to
	create the mailbox, run the Reset function with version 2.1b or later of
	Admin.exe to resolve the problem.
	
	MORE INFORMATION
	================
	
	For additional information, please see page 59 of the Microsoft Mail Workstation
	Software for the Macintosh "User's Guide."
	
	
	Additional query words: 3.20 3.50 corrupt mac
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : :(all),3.x
	
	=============================================================================
	
