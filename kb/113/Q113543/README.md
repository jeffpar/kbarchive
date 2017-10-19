---
layout: page
title: "Q113543: Err Msg After Installing MS-DOS 6.21: Wrong DBLSPACE.BIN..."
permalink: /kb/113/Q113543/
---

## Q113543: Err Msg After Installing MS-DOS 6.21: Wrong DBLSPACE.BIN...

	Article: Q113543
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	After you install MS-DOS 6.21 Upgrade on your MS-DOS 6.0 system, you receive the
	following error message when you start your computer:
	
	  Wrong DBLSPACE.BIN version
	
	In addition, DBLSPACE.SYS may display the following message:
	
	  You cannot access any DoubleSpace drives because DBLSPACE.BIN is not loaded.
	  (DBLSPACE.BIN is the portion of MS-DOS that provides access to
	  DoubleSpace-compressed drives.)
	
	If you have compressed any drives using DoubleSpace, you cannot access the data
	on those drives.
	
	CAUSE
	=====
	
	This problem occurs when MS-DOS 6.21 Upgrade Setup is unable to patch your
	DBLSPACE.BIN, DBLSPACE.EXE, and DBLSPACE.SYS files.
	
	The Upgrade Setup program can patch your DBLSPACE.* files only if you are running
	MS-DOS 6.0 at the time you run Setup. If you boot from the MS-DOS 6.21 disk
	before running Setup, the DBLSPACE.* files cannot be patched.
	
	RESOLUTION
	==========
	
	To correct this problem, boot your system from your Uninstall disk and restore
	your system to MS-DOS version 6.0. Then boot your computer from the hard disk
	drive using MS-DOS 6.0 and rerun MS-DOS 6.21 Upgrade Setup.
	
	If you do not have your Uninstall disk, boot from your MS-DOS 6.0 Disk 1, press
	F3 to exit the Setup program, and then rerun MS-DOS 6.21 Upgrade Setup.
	
	If you do not have your Uninstall disk and your MS-DOS 6.0 Disk 1 does not fit in
	drive A, insert your MS-DOS 6.0 Disk 1 in drive B and run B:\SETUP /F. Follow
	the instructions on the screen to create an MS-DOS 6.0 startup floppy disk in
	drive A. After completing the SETUP /F, boot from the Startup disk and rerun
	MS-DOS 6.21 Upgrade Setup.
	
	Additional query words: 6.22 6.20 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622
	Version           : MS-DOS:6.21,6.22
	
	=============================================================================
	
