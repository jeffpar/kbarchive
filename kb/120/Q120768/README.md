---
layout: page
title: "Q120768: Disks Created by MS-DOS 6.22 Upgrade and Step-Up Setup /F"
permalink: /kb/120/Q120768/
---

## Q120768: Disks Created by MS-DOS 6.22 Upgrade and Step-Up Setup /F

{% raw %}

	Article: Q120768
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With MS-DOS 6.22 Upgrade or MS-DOS 6.22 Step-Up, you can create a single startup
	floppy disk for drive A by using the /F parameter. The contents of this disk
	vary based on the destination disk capacity.
	
	NOTE: MS-DOS 6.22 Upgrade and MS-DOS 6.22 Step-Up do not have the ability to
	install the complete operating system (with all programs) to floppy disks.
	
	MORE INFORMATION
	================
	
	Floppy Disk Contents for MS-DOS 6.22 Upgrade SETUP /F
	-----------------------------------------------------
	
	When you run MS-DOS 6.22 Upgrade SETUP /F, it creates a bootable floppy disk with
	the following files:
	
	                File
	  Filename    Attributes              Disk Size
	  ---------------------------------------------------------
	                              360K/720K      1.2 MB/1.44 MB
	                             (5.25"/3.5")    (5.25"/3.5")
	
	  IO.SYS           SHR            X               X
	  MSDOS.SYS        SHR            X               X
	  COMMAND.COM        R            X               X
	  DRVSPACE.BIN     SHR            X               X
	  ATTRIB.EXE      A               X               X
	  CHKDSK.EXE      A               X               X
	  DEBUG.EXE       A               X               X
	  EXPAND.EXE      A               X               X
	  FDISK.EXE       A               X               X
	  FORMAT.COM      A               X               X
	  MEM.EXE         A               X               X
	  SYS.COM         A               X               X
	  EDIT.COM        A                               X
	  QBASIC.EXE      A                               X
	  SCANDISK.EXE    A                               X
	  XCOPY.EXE       A                               X
	  DRVSPACE.EXE    A                               X
	  MSD.EXE         A                               X
	  UNDELETE.EXE    A                               X
	
	Floppy Disk Contents for MS-DOS 6.22 Step-Up SETUP /F
	-----------------------------------------------------
	
	When you run MS-DOS 6.22 Step-Up SETUP /F, it creates a bootable floppy disk with
	the following files:
	
	               File
	  Filename    Attributes                Disk Size
	  --------------------------------------------------------------
	                            360K       720K       1.2 MB/1.44 MB
	                           (5.25")    (3.5")      (5.25"/3.5")
	
	  IO.SYS           SHR        X          X             X
	  MSDOS.SYS        SHR        X          X             X
	  COMMAND.COM        R        X          X             X
	  DRVSPACE.EXE    A           X          X
	  SCANDISK.EXE    A           X          X             X
	  DRVSPACE.BIN     SHR        X                        X
	
	NOTE: When using the 1.44 MB 3.5-inch MS-DOS 6.22 Step-Up disks to create a
	startup disk on a 360K floppy, you receive the following error message:
	
	  SETUP ERROR DETECTED
	
	  The following disk error was detected.
	  The listed file was not copied.
	
	  Error writing --> scandisk.exe
	
	  To continue, press ENTER.
	
	If you press the ENTER key, the startup disk is created; however, it will contain
	the following files only:
	
	                          File
	  Filename    Attributes
	  ----------------------
	  IO.SYS           SHR
	  MSDOS.SYS        SHR
	  COMMAND.COM        R
	  DRVSPACE.EXE    A
	
	NOTE: This problem does not occur when using the 1.2 MB 5.25-inch MS-DOS 6.22
	Step-Up disks.
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: floppy diskette stepup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
