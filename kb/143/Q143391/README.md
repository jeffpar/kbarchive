---
layout: page
title: "Q143391: PC Mac: Err Msg: Could Not Create Preferences File..."
permalink: kb/143/Q143391/
---

## Q143391: PC Mac: Err Msg: Could Not Create Preferences File...

	Article: Q143391
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0x, on platform(s):
	   - the operating system: Mac OS (all) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Macintosh workstation version 3.0 and higher, you may receive
	the following error message:
	
	  Microsoft Mail Fatal Error:
	  Could not create preferences file in System Folder
	
	NOTE: The only button available in this dialog is Finder, which will return you
	to the Finder.
	
	CAUSE
	=====
	
	The preferences file is either locked or corrupt.
	
	RESOLUTION
	==========
	
	To determine if the file is locked:
	
	1. Open the System Folder.
	
	2. Select the file MS Mail/PC LANs Prefs.
	
	3. From the File menu, choose Get Info.
	
	If the Locked check box is selected, clear it and close the dialog box.
	
	If the preferences file is not locked, it may be corrupt. The MS Mail/PC LANs
	Prefs file is recreated when you run the workstation. Therefore, you can drag
	the file to the trash, and run the workstation to check for corruption.
	
	
	Additional query words: 3.00 3.0.6
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0x
	
	=============================================================================
	
