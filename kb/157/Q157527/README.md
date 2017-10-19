---
layout: page
title: "Q157527: INFO: New Visual SourceSafe Commands and Functionality"
permalink: /kb/157/Q157527/
---

## Q157527: INFO: New Visual SourceSafe Commands and Functionality

	Article: Q157527
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses the new commands and functionality that were added to
	Visual SourceSafe 4.0, including properties, about, pin, unpin, merge on GET,
	UNC's, drag-and-drop sharing, and integration. These commands and functionality
	are also available in Visual SourceSafe 5.0.
	
	MORE INFORMATION
	================
	
	Properties Using the Command Line
	---------------------------------
	
	When 'ss properties <file name>' is run, it gives information about a
	file:
	
	  Example:
	  File:  $/Project/file.txt
	  Type:  Text
	  Size:  1444 bytes      25 lines
	  Store only latest version:  No
	  Latest:                        Last Label:  Version1
	    Version:  1                     Version:  4
	    Date:     7/26/96    6:13p      Date:     7/26/96    6:18p
	
	    Comment: This is the comment for adding file.txt to the database
	
	Properties Using the Visual SourceSafe Explorer
	-----------------------------------------------
	
	Similar Properties information can be found on the General Tab when the
	properties dialog is invoked from File->Properties menu option. The
	properties dialog can also be invoked with the ALT+ENTER key combination.
	
	About Using the Command Line
	----------------------------
	
	When 'ss about' is run, it gives the following information about Visual
	SourceSafe:
	
	  Microsoft (R) SourceSafe Version 4.00
	  Copyright (C) Microsoft Corp. 1994-1995. All rights reserved.
	  Version 4.00 (Build 831)
	
	About Using the Visual SourceSafe Explorer
	------------------------------------------
	
	Similar About information can be found under the Help->About menu option.
	
	Pin Using the Command Line
	--------------------------
	
	When 'ss pin <file name> -V#' is run, it stops development of the file
	temporarily at the version number given in the command. When users GET a copy of
	the file, they will receive the contents of the file when it was at the version
	indicated by the pin command. Unless the -G- switch is used, pinning
	automatically does a GET on the file. Shared files can be pinned. A file cannot
	be pinned if it is checked out. Users will not be able to check out the file
	while it is pinned. If a file is pinned and a check out is attempted, the
	following message is returned:
	
	  "You are using an old version of <file name>, and cannot change it.
	  Rollback to make that version the most recent if you need to change it."
	
	Pin Using the Visual SourceSafe Explorer
	----------------------------------------
	
	Pin is a button available from the History dialog of a file. The History dialog
	can be invoked by right-clicking the file and choosing Show History..., or by
	using the Tools->Show History... menu option.
	
	Unpin Using the Command Line
	----------------------------
	
	When 'ss unpin <file name>' is run, it will remove the pin and the file can
	then be checked out and modified.
	
	Unpin Using the Visual SourceSafe Explorer
	------------------------------------------
	
	Unpin is a button available from the History dialog of a file. The file must
	already be pinned for the Unpin button to appear. The History dialog can be
	invoked by right-clicking the file and choosing Show History... or by using the
	Tools->Show History... menu option.
	
	Merge on GET
	------------
	
	This functionality allows a user to merge the version that is in Visual
	SourceSafe into their local writable file. It is primarily invoked when one user
	does a check out on a file for editing. Meanwhile, other users check out, change
	and check in their changes. The version that is in Visual SourceSafe is now
	different than the version the first user did a check out on. Therefore, the
	first user can do a merge on GET to update the local file without losing the
	changes.
	
	To accomplish this, hold down the SHIFT key while doing a GET on the file. This
	should bring up a dialog box with an Advanced>> button. Click the
	Advanced>> button, and change the Replace Writable textbox to Merge. Then
	click the OK button.
	
	NOTE: The administrator of the Sourcesafe database must have "Allow Multiple
	Checkouts" enabled. Click OK.
	
	Universal Naming Conventions (UNC's)
	------------------------------------
	
	In previous versions of SourceSafe, drive letters needed to be used to refer to
	path names. Now UNC's can be used. This allows for more flexibility in
	connecting to and using Visual SourceSafe.
	
	Drag and Drop Sharing
	---------------------
	
	Users can now drag and drop a file to share it. This is more intuitive than using
	the menus. In addition, if the right mouse is held down during the drag and drop
	process, a menu will appear giving the user a choice of Share, Share and Branch,
	or Cancel.
	
	Additional Accelerator Keys
	---------------------------
	
	More shortcut keys have been added for convenience. For more information, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q138387 Visual SourceSafe Viewer Accelerator Keys
	
	Integration
	-----------
	
	Visual SourceSafe 4.0 integrates with Visual Basic 4.0 Standard, Professional,
	and Enterprise Editions, and with Visual C++ 4.0 Professional. This allows users
	to do basic Visual SourceSafe functionality from within Visual Basic or Visual
	C++. For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q136019 FAQ: Visual SourceSafe Integration with Visual C++ 4.0
	
	  Q135995 Visual SourceSafe Integration with Visual Basic 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbinfo
	
	=============================================================================
	
