---
layout: page
title: "Q104819: PC Win: Err Msg: Switching Between Private and Shared Folders"
permalink: kb/104/Q104819/
---

## Q104819: PC Win: Err Msg: Switching Between Private and Shared Folders

	Article: Q104819
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows, if you try to
	switch between private and shared folders, the following error message may be
	displayed:
	
	  There was an error switching between private and shared folders. Check your
	  message file and your network connection to the postoffice.
	
	CAUSE
	=====
	
	This error occurs if the FOLDROOT.IDX file is inaccessible. The FOLDROOT.IDX
	file should be present in the FOLDERS\PUB subdirectory of the Microsoft Mail for
	PC Networks postoffice database.
	
	This problem may occur if the FOLDROOT.IDX file is not present in the FOLDERS\PUB
	subdirectory, if the PUB subdirectory does not exist, or if the entire FOLDERS
	subdirectory does not exist.
	
	RESOLUTION
	==========
	
	If the FOLDROOT.IDX file is missing, restore this file to the FOLDERS\PUB
	subdirectory from a backup copy.
	
	If the subdirectories are missing, create them and restore their contents from a
	backup copy.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
