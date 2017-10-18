---
layout: page
title: "Q117484: Disks Created by MS-DOS 6.21 Upgrade SETUP /F"
permalink: kb/117/Q117484/
---

## Q117484: Disks Created by MS-DOS 6.21 Upgrade SETUP /F

	Article: Q117484
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.21 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With MS-DOS 6.21 Upgrade, you can create a single startup floppy disk for drive
	A by running SETUP /F from MS-DOS Setup Disk 1. The contents of the startup disk
	varies based on the target disk capacity.
	
	NOTE: MS-DOS 6.21 Upgrade does not have the ability to install the complete
	operating system (with all programs) to floppy disks.
	
	MORE INFORMATION
	================
	
	Floppy Disk Contents for SETUP /F:
	
	                File
	  Filename    Attributes              Disk Size
	  ----------------------------------------------------------
	                              360K    720K    1.2MB   1.44MB
	                             (5.25") (3.5")  (5.25")  (3.5")
	
	  IO.SYS           SHR          X       X       X        X
	  MSDOS.SYS        SHR          X       X       X        X
	  COMMAND.COM        R          X       X       X        X
	  ATTRIB.EXE         A          X       X       X        X
	  CHKDSK.EXE         A          X       X       X        X
	  DEBUG.EXE          A          X       X       X        X
	  EXPAND.EXE         A          X       X       X        X
	  FDISK.EXE          A          X       X       X        X
	  FORMAT.COM         A          X       X       X        X
	  MEM.EXE            A          X       X       X        X
	  SYS.COM            A          X       X       X        X
	  EDIT.COM           A                          X        X
	  QBASIC.EXE         A                          X        X
	  SCANDISK.EXE       A                          X        X
	  XCOPY.EXE          A                  X       X        X
	  MSD.EXE            A                  X       X        X
	  UNDELETE.EXE       A                          X        X
	
	Additional query words: floppy diskette dosdir
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621
	Version           : MS-DOS:6.21
	
	=============================================================================
	
