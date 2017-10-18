---
layout: page
title: "Q86307: Windows Err Msg: The Version of the SETUP.INF File on Your..."
permalink: kb/086/Q86307/
---

## Q86307: Windows Err Msg: The Version of the SETUP.INF File on Your...

	Article: Q86307
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows version 3.1, Setup may return the following error while
	trying to copy the SETUP.INF file from Disk 1 of the Windows disks to the hard
	drive:
	
	  The version of the SETUP.INF file on your system is not valid for use with
	  this version of SETUP.EXE. If you continue, Windows may not run properly. It
	  is recommended that you quit Setup and then copy SETUP.INF from Windows disk
	  number 1 to your Windows SYSTEM directory. Press ENTER to continue Setup.
	  Press F3 to quit Setup now.
	
	CAUSE
	=====
	
	The above error message may be caused by one of the following:
	
	- There is an earlier and possibly corrupt Windows version or incompatible OEM
	  version of the SETUP.INF file on the hard disk. If MS-DOS version 5.0 is
	  installed on the machine, type the following command from the drive C MS-DOS
	  command prompt to search for other versions of this file:
	
	  dir setup.inf /s
	
	  Rename any pre-existing SETUP.INF files that are found.
	
	- The SETUP.INF file is corrupt. Try copying the SETUP.INF file from Disk 1 to
	  the Windows SYSTEM subdirectory. If the SETUP.INF file is damaged on the
	  Setup disk, it will not copy successfully.
	
	- There is not enough memory on the machine to read the SETUP.INF file. This
	  error message may be returned on systems having only 640K base plus 1024K
	  extended memory. Remove memory resident programs and devices from the
	  CONFIG.SYS and AUTOEXEC.BAT files and then try Setup again. Memory may need
	  to be added to the machine before setting up Windows.
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
