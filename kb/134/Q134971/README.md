---
layout: page
title: "Q134971: Cannot Create Setup Disks From MSDN CD-ROM"
permalink: kb/134/Q134971/
---

## Q134971: Cannot Create Setup Disks From MSDN CD-ROM

	Article: Q134971
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears when you create the third setup disk from
	the \checked\i386 directory of the Windows NT 3.51 MSDN CD-ROM using the WINNT
	/OX command:
	
	  File Copy Error
	  Access is denied
	  You may choose to retry the copy, skip this file, or exit setup.
	
	If you select Retry, Setup will try to copy the file again.
	
	If you select Skip File, the file will not be copied. This is intended for
	advanced users who are familiar with the various Windows NT system files.
	
	If you select Exit Setup, you will need to run Setup again later to install or
	upgrade Windows NT.
	
	CAUSE
	=====
	
	Because the checked build version of Windows NT 3.51 Workstation is used for
	development and debugging purposes, many of the files are larger than those in
	the \i386 directory. The error occurs when Windows NT attempts to copy
	NTKRNLMP.EXE, which is 1.22 MB, onto the third floppy disk, which has 1.19 MB of
	free space. The NTKRNLMP.EXE file in the \i386 directory is only 816,592 bytes.
	
	RESOLUTION
	==========
	
	To create the Windows NT 3.51 Workstation startup disks, run WINNT /OX from the
	\i386 directory instead of the \checked\i386 directory.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351
	
	=============================================================================
	
