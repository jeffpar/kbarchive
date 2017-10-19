---
layout: page
title: "Q108195: PC DOS: Err Msg: Notice 109 Private Folders on Local Storage.."
permalink: /kb/108/Q108195/
---

## Q108195: PC DOS: Err Msg: Notice 109 Private Folders on Local Storage..

	Article: Q108195
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 3.0, 3.0a, and 3.2 of Microsoft Mail for PC Networks, MS-DOS
	workstation may give the following error immediately after signing in:
	
	  Notice 109 Private folders on local storage cannot be found
	
	CAUSE
	=====
	
	This error is caused when the user has moved private folders to local storage,
	but the folders are not available in the path specified under Options, Folders,
	Private-Storage.
	
	RESOLUTION
	==========
	
	The problem can be resolved by restoring the files from backup to the path
	specified under Options, Folders, Private-Storage. If a backup copy is not
	available, the administrator will have to reset Folder privileges for the user.
	This is done from the Admin program by going into Local_Admin, Folders, Reset
	and choosing the user from the list. This will delete all references to the old
	folders, so the folders can be rebuilt from scratch.
	
	Additional query words: 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0,3.0a,3.2
	
	=============================================================================
	
