---
layout: page
title: "Q98842: Resize Err Msg Occurs When Running DoubleSpace from Drive A"
permalink: kb/098/Q98842/
---

## Q98842: Resize Err Msg Occurs When Running DoubleSpace from Drive A

	Article: Q98842
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If you start your computer from a 1.2-megabyte (MB) 5.25-inch disk created with
	SETUP /F, you receive the following error message if you try to resize a
	compressed volume on your hard disk drive:
	
	  DoubleSpace cannot change the size of drive A because there is not enough
	  free space on your original startup drive, which is now drive A. DoubleSpace
	  will need at least 0.14 MB of free space on that drive. Delete some files on
	  that drive, and try this operation again.
	
	NOTE: Although the a 1.2-MB boot disk most commonly causes this error message,
	you receive this error message any time you try to resize the compressed drive
	when the boot drive has insufficient disk space.
	
	CAUSE
	=====
	
	This problem occurs because the following files must be copied to drive A:
	
	  DBLSPACE.INF
	  DBLSPACE.HLP
	  DEFRAG.EXE
	  Backup copy of AUTOEXEC.BAT
	  Backup copy of CONFIG.SYS
	
	DoubleSpace requires these tools are on boot drive to ensure it can continue if
	it must restart the computer or if the computer is restarted inadvertently.
	
	WORKAROUND
	==========
	
	To work around this problem, make available approximately 151,040 kilobytes (K)
	of disk space (on the disk in drive A) for the backup files. To do this, delete
	MSD.EXE and XCOPY.EXE from drive A. For example, type the following commands at
	the MS-DOS command prompt and then press ENTER after each line:
	
	  " del a:\msd.exe
	  del a:\xcopy.exe " (without the quotation marks)
	
	You should now be able to resize the compressed volume on your hard disk drive.
	
	NOTE: Deleting these two files frees up enough disk space as long as your
	CONFIG.SYS and AUTOEXEC.BAT files are not larger that 1024K each. If they are
	larger, you may need to delete additional files from the startup disk.
	
	MORE INFORMATION
	================
	
	The following is a complete list of the files that must be present on the boot
	drive to be able to resize a DoubleSpace-compressed drive:
	
	  DBLSPACE.EXE
	  DBLSPACE.HLP
	  DBLSPACE.INF
	  DBLSPACE.WIN - Temporary file of approximately 100 bytes
	  DEFRAG.EXE
	  AUTOEXEC.BAT
	
	These files require approximately 424,079 bytes.
	
	NOTE: The bytes-required values in this article are calculated based on 512K
	sector allocation.
	
	Additional query words: 6.00 6.20 double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
