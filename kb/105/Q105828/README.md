---
layout: page
title: "Q105828: Disks Created by MS-DOS 6.2 Upgrade and Step-Up Setup /F"
permalink: /kb/105/Q105828/
---

## Q105828: Disks Created by MS-DOS 6.2 Upgrade and Step-Up Setup /F

{% raw %}

	Article: Q105828
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With MS-DOS 6.2 Upgrade or MS-DOS 6.2 Step-Up, you can create a single startup
	floppy disk for drive A by using the /F parameter. The contents of the disk vary
	based on the destination disk capacity.
	
	NOTE: MS-DOS 6.2 Upgrade and MS-DOS Step-Up do not have the ability to install
	the complete operating system (with all programs) to floppy disks.
	
	MORE INFORMATION
	================
	
	Floppy Disk Contents for MS-DOS 6.2 Upgrade SETUP /F
	----------------------------------------------------
	
	When you run MS-DOS 6.2 Upgrade SETUP /F, it creates a bootable floppy disk with
	the following files:
	
	                     File
	  Filename    Attributes              Disk Size
	  -------------------------------------------------------
	
	                              360K/720K      1.2MB/1.44MB
	                             (5.25"/3.5")    (5.25"/3.5")
	
	  DBLSPACE.BIN     SHR            X               X
	  IO.SYS           SHR            X               X
	  MSDOS.SYS        SHR            X               X
	  COMMAND.COM        R            X               X
	  ATTRIB.EXE      A               X               X
	  CHKDSK.EXE      A               X               X
	  DEBUG.EXE       A               X               X
	  EXPAND.EXE      A               X               X
	  FDISK.EXE       A               X               X
	  FORMAT.COM      A               X               X
	  MEM.EXE         A               X               X
	  SYS.COM         A               X               X
	  DBLSPACE.EXE    A                               X
	  EDIT.COM        A                               X
	  MSD.COM         A                               X
	  MSD.EXE         A                               X
	  QBASIC.EXE      A                               X
	  SCANDISK.EXE    A                               X
	  UNDELETE.EXE    A                               X
	  XCOPY.EXE       A                               X
	
	Floppy Disk Contents for MS-DOS 6.2 Step-Up SETUP /F
	----------------------------------------------------
	
	When you run MS-DOS 6.2 Step-Up SETUP /F, it creates a bootable floppy disk with
	the following files:
	
	                  File
	  Filename    Attributes              Disk Size
	  -------------------------------------------------------
	
	                              360K/720K      1.2MB/1.44MB
	                             (5.25"/3.5")    (5.25"/3.5")
	
	  DBLSPACE.BIN     SHR            X              X
	  IO.SYS           SHR            X              X
	  MSDOS.SYS        SHR            X              X
	  COMMAND.COM        R            X              X
	  DBLSPACE.EXE    A                              X
	  SCANDISK.EXE    A               X              X
	
	Additional query words: 6.20 floppy diskette dosdir stepup inch
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	

{% endraw %}
