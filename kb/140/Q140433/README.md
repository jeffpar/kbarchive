---
layout: page
title: "Q140433: ScanDisk Err Msg: This Drive Was Compressed By a Program..."
permalink: /kb/140/Q140433/
---

## Q140433: ScanDisk Err Msg: This Drive Was Compressed By a Program...

{% raw %}

	Article: Q140433
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use ScanDisk to check a drive that was compressed with
	DriveSpace 3 for errors, you may receive the following error message:
	
	  This drive was compressed by a program that is not supported by ScanDisk. As
	  a result, ScanDisk is unable to detect and repair compression-related errors.
	
	If you click OK, ScanDisk checks the drive. This problem can occur even if the
	drive you want to check was compressed by a program that is supported by
	ScanDisk.
	
	CAUSE
	=====
	
	This problem can occur if the Dskmaint.dll file in the Windows\System folder is
	the version of the file included with Windows 95, not the version included with
	Microsoft Plus!.
	
	RESOLUTION
	==========
	
	Replace the Dskmaint.dll file in the Windows\System folder with the version of
	the file included with Microsoft Plus!. To do so, follow these steps:
	
	1. If ScanDisk is running, close it.
	
	2. Type the following line at a command prompt, and then press ENTER:
	
	  " ren c:\windows\system\dskmaint.dll dskmaint.xxx " (without the quotation
	  marks)
	
	3. Extract the Dskmaint.dll file from the Plus_2.cab cabinet file on the
	  Microsoft Plus! CD-ROM or from disk 2 of the original Microsoft Plus! disks
	  to the Windows\System folder.
	
	  For information about using the Extract tool, type "extract" (without
	  quotation marks) at a command prompt, or see the following article in the
	  Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
