---
layout: page
title: "Q94775: Disks Created by MS-DOS 6 Upgrade Using SETUP /F"
permalink: /kb/094/Q94775/
---

## Q94775: Disks Created by MS-DOS 6 Upgrade Using SETUP /F

{% raw %}

	Article: Q94775
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With MS-DOS 6 Upgrade, you can create a single startup floppy disk for drive A
	using the /F parameter. The contents of this disk vary based on disk capacity.
	
	NOTE: MS-DOS 6 Upgrade does NOT have the ability to install the complete
	operating system (with all programs) to floppy disks.
	
	MORE INFORMATION
	================
	
	Floppy Disk Contents for SETUP /F:
	
	            File
	  Filename    Attributes              Disk Size
	  ---------------------------------------------------------
	                              360K    720K    1.2MB   1.44MB
	                             (5.25") (3.5")  (5.25")  (3.5")
	
	  IO.SYS           SHR          X       X       X        X
	  MSDOS.SYS        SHR          X       X       X        X
	  COMMAND.COM        R          X       X       X        X
	  DBLSPACE.BIN     SHR          X       X       X        X
	  ATTRIB.EXE      A             X       X       X        X
	  DEBUG.EXE       A             X       X       X        X
	  EXPAND.EXE      A             X       X       X        X
	  FDISK.EXE       A             X       X       X        X
	  FORMAT.COM      A             X       X       X        X
	  RESTORE.EXE     A             X       X       X        X
	  SYS.COM         A             X       X       X        X
	  CHKDSK.EXE      A             X       X       X        X
	  EDIT.COM        A                     X       X        X
	  QBASIC.EXE      A                     X       X        X
	  XCOPY.EXE       A                             X        X
	  MSD.EXE         A                             X        X
	  MSAV.EXE        A                     X       X        X
	  DBLSPACE.EXE    A                             X        X
	
	Additional query words: 6.00 floppy diskette
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
