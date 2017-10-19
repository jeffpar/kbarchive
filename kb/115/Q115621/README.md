---
layout: page
title: "Q115621: Err Msg: 32-Bit File System Cannot Be Used When DoubleSpace..."
permalink: /kb/115/Q115621/
---

## Q115621: Err Msg: 32-Bit File System Cannot Be Used When DoubleSpace...

	Article: Q115621
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.11,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows for Workgroups, you receive the following error message:
	
	  32-Bit File System
	
	  The 32-bit file system cannot be used when DoubleSpace is running with MS-DOS
	  6.0 You can disable 32-bit file access by using Control Panel:
	
	  1. Choose the 386 Enhanced icon.
	
	  2. Choose Virtual Memory, and then choose Change.
	
	  3. Clear the check box next to Use 32-Bit File Access, and then choose OK.
	
	  You can use the 32-bit file access and DoubleSpace if you upgrade to MS-DOS
	  6.2.
	
	This error message is incorrect--you cannot disable 32-bit file access in Control
	Panel because the Use 32-Bit File Access check box is not available.
	
	CAUSE
	=====
	
	This problem occurs if the MS-DOS 6.0 version of DoubleSpace was installed after
	32-bit file access was enabled. The MS-DOS 6.0 version of DoubleSpace is not
	compatible with 32-bit file access. When DBLSPACE.BIN is loaded into memory, it
	disables the Use 32-Bit File Access setting. This problem can also occur if
	DoubleSpace was removed but the DBLSPACE.INI file was not deleted. (DBLSPACE.BIN
	continues to load when it detects the DBLSPACE.INI file.)
	
	NOTE: 32-bit file access still mounts uncompressed drives in this situation;
	however, the error message screen described above cannot be disabled without
	following one of the resolution methods below.
	
	RESOLUTION
	==========
	
	To correct this problem, use one of the following methods:
	
	- In an ASCII text editor, such as Windows Notepad, open the SYSTEM.INI file
	  located in the Windows directory, and place a semicolon in front of the line
	  DEVICE=VFAT.386 in the [386Enh] section to disable 32-bit file access.
	
	  -or-
	
	- If you are no longer using DoubleSpace, but the DBLSPACE.BIN driver is still
	  loading into memory, do the following:
	
	  1. Remove the Hidden, Read-Only, and System attributes from the DBLSPACE.INI
	     file by typing the command:
	
	  attrib dblspace.ini -r -s -h
	
	  2. Rename the DBLSPACE.INI file by typing the following command:
	
	  ren dblspace.ini dblspace.xxx
	
	  3. Reboot the computer.
	
	  -or-
	
	- To use disk compression and 32-bit file access simultaneously, upgrade to the
	  latest version of MS-DOS.
	
	Additional query words: 6.00 6.20 6.21 6.22 3.11 vfat vcache
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311 kbMSDOSSearch kbMSDOS600
	Version           : :3.11,6.0
	
	=============================================================================
	
