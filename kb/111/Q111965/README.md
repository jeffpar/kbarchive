---
layout: page
title: "Q111965: MS-DOS 6 Upgrade Setup /M Erroneously Updates SYSTEM.INI"
permalink: kb/111/Q111965/
---

## Q111965: MS-DOS 6 Upgrade Setup /M Erroneously Updates SYSTEM.INI

	Article: Q111965
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you perform a minimal installation of the MS-DOS 6 Upgrade (SETUP /M) on a
	system with Microsoft Windows 3.x or Windows for Workgroups 3.x, the following
	error message appears when you start Windows:
	
	  Cannot find a device that may be needed to run Windows in 386 enhanced mode.
	
	  You need to run the Setup program again.
	  c:\[directory]\vfintd.386
	  Press a key to continue..
	
	At this point, the system stops responding (hangs).
	
	CAUSE
	=====
	
	If you use SETUP /M, the setup program incorrectly updates the [386Enh] section
	of the Windows SYSTEM.INI file by replacing the line DEVICE=*VFD with the
	following
	
	  DEVICE=C:\<directory>\VFINTD.386
	
	where <directory> contains the current MS-DOS 6.0 files.
	
	Since the installation of Microsoft Backup for Windows is not included in a SETUP
	/M installation, the 386 enhanced mode virtual floppy device driver used by the
	utility (VFINTD.386) is not present in the MS-DOS 6.0 directory, causing Windows
	to generate the error message.
	
	RESOLUTION
	==========
	
	To correct this problem, expand the file VFINTD.38_ from Disk 3 (in the
	5.25-inch disk set) or Disk 2 (in the 3.5-inch disk set) of the MS-DOS 6.0
	Upgrade disks to the MS-DOS 6.0 directory as VFINTD.386, or edit the SYSTEM.INI
	file, remove the line
	
	  DEVICE=[drive:directory]\VFINTD.386
	
	and replace it with
	
	  DEVICE=*VFD.
	
	
	Additional query words: 6.00 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
