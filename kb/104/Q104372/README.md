---
layout: page
title: "Q104372: PC DOS: Err Msg: Notice 132 Folder Busy, Try Again Later"
permalink: /kb/104/Q104372/
---

## Q104372: PC DOS: Err Msg: Notice 132 Folder Busy, Try Again Later

	Article: Q104372
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.0 of Microsoft Mail for PC Networks, MS-DOS workstation, when you
	try to delete a folder (private or shared) by selecting Options, Folders,
	Delete, the following error message may be displayed:
	
	  Notice 132 Folder busy. Try again later.
	
	CAUSE
	=====
	
	This error occurs if the folder is missing, is locked open, or has read- only
	attributes.
	
	RESOLUTION
	==========
	
	Determine the 8-digit ID (hexid) for the folder. If it is a public folder, use
	the following command:
	
	  dumpidx -n foldroot.idx
	
	If the folder is a private folder, use the following command:
	
	  DUMPIDX -n HEXID.IDX
	
	If the <xxxxxxxx>.FLD file is missing, you can restore the file from a
	backup copy. If a backup is not available, create a new folder and copy the new
	<xxxxxxxx>.FLD file to the <xxxxxxxx>.FLD file that is missing.
	
	For example, if the missing folder file is 00000010.FLD and the new folder
	created is 00000011.FLD, copy 00000011.FLD to 00000010.FLD. The file size for
	the new folder should be 129 bytes. You now can delete the folder.
	
	If the <xxxxxxxx>.FLD file exists, check the attributes and remove the
	read- only attribute if it has been set.
	
	If the folder file is locked open, use the FOLDCOMP -S command when folders are
	not being accessed. This will release the semaphore lock on the file.
	
	MORE INFORMATION
	================
	
	You can determine the user's 8-digit ID by using the LISTUSER utility. The
	LISTUSER and DUMPIDX utilities are available as part of the "Database
	Maintenance Utilities" document, which describes operational details for
	utilities used to repair and maintain the database for Microsoft Mail for PC
	Networks. The procedures described apply to versions 2.1 and later of Microsoft
	Mail except where noted.
	
	To obtain the document containing the Database Maintenance Utilities, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	The FOLDCOMP utility is located in the MAILEXE subdirectory of the Mail database.
	You should run FOLDCOMP and DUMPIDX from the FOLDERS\PUB subdirectory if the
	folder is a shared folder, or from the user's FOLDERS\LOC\HEXID subdirectory if
	the folder is a private folder.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0
	
	=============================================================================
	
