---
layout: page
title: "Q85256: Windows 3.1 Expand Utility -R Switch"
permalink: /kb/085/Q85256/
---

## Q85256: Windows 3.1 Expand Utility -R Switch

	Article: Q85256
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Expand utility (EXPAND.EXE) included with the Microsoft Windows version 3.1
	contains a command line switch, -R, to automatically rename an expanded Windows
	3.1 file after copying it to the destination drive.
	
	MORE INFORMATION
	================
	
	The Expand utility is used to copy and decompress files that are stored on the
	Windows 3.1 distribution disks. The -R switch automatically renames the
	destination file.
	
	For example, to expand the WINHELP.EX_ file from Microsoft Windows 3.1 disk 1 and
	have the file automatically renamed to WINHELP.EXE on the destination drive, do
	the following:
	
	1. Copy the EXPAND.EXE file from disk 3 of the 3.1 install disks to the Windows
	  directory if it is not already there.
	
	2. From the Windows directory, type the following
	
	  expand -r a:winhelp.ex_ c:\windows
	
	  where "a:" is the source disk and "c:\windows" is the destination drive and
	  directory.
	
	  WINHELP.EX_ will be renamed to WINHELP.EXE, and the following message will be
	  displayed:
	
	  Expanding A:WINHELP.EX_ to C:\WINDOWS\WINHELP.EXE.
	  A:WINHELP.EX_: 163861 bytes expanded to 256192 bytes, 56% increase.
	
	The -R switch only works on files that were compressed with this feature. If the
	-R switch is used on a file that is not compatible with this feature, the
	following may occur:
	
	- The last character of the filename extension is replaced with a space.
	
	- The following error message is displayed:
	
	  ERROR - Can't open input file: -r
	
	
	KBCategory: kbusage kberrmsg
	KBSubcategory: win31
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
