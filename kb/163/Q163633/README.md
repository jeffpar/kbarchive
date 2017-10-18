---
layout: page
title: "Q163633: Err Msg: No Disk in Drive"
permalink: kb/163/Q163633/
---

## Q163633: Err Msg: No Disk in Drive

	Article: Q163633
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Restoring the Registry"
	Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in
	Regedt32.exe.
	
	When you open or receive mail in the Microsoft Exchange client, one of the
	following error messages may occur:
	
	  Exchng32.exe - No Disk
	  There is no disk in the drive. Please insert a disk into <drive>:
	
	  -or-
	
	  WMS Spooler: Mapisp32.exe - No Disk
	
	  -or-
	
	  OleMainThreadWndName: Mapisp32.exe - No Disk
	
	NOTE: If you select the Abort option, the message box clears. Selecting Retry or
	Ignore only works if a floppy disk is inserted into the drive.
	
	CAUSE
	=====
	
	This problem occurs when the PATH statement in the Autoexec.bat file, Windows NT
	System Environment Variables, or User Environment Variables for <user
	name> refers to a floppy disk drive or CD-ROM drive.
	
	If the Autoexec.bat file refers to a floppy disk or CD-ROM drive, Windows NT 4.0
	does not display the error when you log on, but when you run applications.
	
	WORKAROUND
	==========
	
	To work around this problem, you should either have a disk in the drive or
	remove the entry from the PATH statement.
	
	The drive letter may not be entered in the PATH statement, but may be found in
	the following registry location:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\SETUP\WinntPath
	
	Delete the entry here and log back in.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	MORE INFORMATION
	================
	
	When a user logs on to their account, Windows NT searches for an Autoexec.bat
	file in the root directory of drive C. If the file is found, Ntvdm.exe appends
	its PATH environment variable to the system PATH environment variable. Only the
	DOS virtual machine (VDM) PATH variable is affected.
	
	Ntvdm.exe tests the PATH statement for validity. If the drive physically exists,
	Ntvdm.exe tests for the drive type (removable media or fixed). If the drive is a
	floppy disk or CD-ROM, Ntvdm.exe tests for the presence of valid media. If no
	valid media is found, the error message is displayed. If invalid drives are used
	in the Autoexec.bat PATH statement, no error message is displayed; however, the
	PATH variable in any previously opened VDMs may be invalid.
	
	For more information, please see the following Microsoft Knowledge Base article:
	
	  Q102418 NTVDM Error: There Is No Disk in the Drive
	
	
	This problem can also occur after you save an attachment to removable media, and
	then eject the media. For example, when you save an attachment to a zip drive,
	and then eject the disk and attempt to open another message, the error message
	appears. To work around this problem, insert a new disk in to the same drive and
	open a message.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
