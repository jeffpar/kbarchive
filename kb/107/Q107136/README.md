---
layout: page
title: "Q107136: Can't Access Compressed Drives; DBLSPACE.BIN Is Not Loaded"
permalink: kb/107/Q107136/
---

## Q107136: Can't Access Compressed Drives; DBLSPACE.BIN Is Not Loaded

	Article: Q107136
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	You may receive the following error message when you start your computer:
	
	  You cannot access any DoubleSpace-compressed drives because DBLSPACE.BIN is
	  not loaded.
	
	NOTE: DBLSPACE.BIN is the portion of MS-DOS that provides access to
	DoubleSpace-compressed drives.
	
	CAUSE
	=====
	
	This problem occurs when you have the following line in your CONFIG.SYS file and
	DBLSPACE.BIN is not in the root directory:
	
	  device=c:\dos\dblspace.sys /move
	
	RESOLUTION
	==========
	
	If you have DoubleSpace-compressed drives, you should copy DBLSPACE.BIN to the
	root directory of your boot drive. You can either copy it from the directory
	containing your MS-DOS files or expand it from your setup disks to C:\.
	
	If you are not using DoubleSpace, remove all references to DBLSPACE.SYS from your
	CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	This situation can occur when:
	
	- You remove MS-DOS 6.2 and Uninstall restores your pre-MS-DOS 6.2 CONFIG.SYS
	  file, which includes the DEVICE command for DBLSPACE.SYS.
	
	- You format the host drive (to remove DoubleSpace) and then restore your
	  backed up files (including your CONFIG.SYS file with the DBLSPACE.SYS
	  reference).
	
	- You have one or more DoubleSpace-compressed drives, drive C is not
	  compressed, and you delete DBLSPACE.BIN from the root directory of C.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
