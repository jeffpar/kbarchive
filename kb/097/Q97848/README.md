---
layout: page
title: "Q97848: EZTape Hangs or Generates Error with Compressed Drive"
permalink: kb/097/Q97848/
---

## Q97848: EZTape Hangs or Generates Error with Compressed Drive

	Article: Q97848
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	When you run Irwin Magnetic Systems' EZTape for MS-DOS, version 2.22 or version
	3.1, on a DoubleSpace-compressed drive, the following problems may occur:
	
	- EZTape may stop responding (hang) when performing a backup or restore on the
	  DoubleSpace-compressed drive.
	
	-or-
	
	- EZTape may display one of the following error messages when performing a
	  backup or restore on a compressed drive:
	
	   - Run-time error R6001 null pointer assignment
	
	   - EMM386 exception error #12, enter to reboot computer
	
	CAUSE
	=====
	
	EZTape for MS-DOS version 2.22 or 3.1 may identify a DoubleSpace- compressed
	drive as a nonstandard drive and may require that the DOSONLY environment
	variable is set before you can begin an action ona compressed drive.
	
	WORKAROUND
	==========
	
	To work around this problem, set the MS-DOS environment variable to DOSONLY=1
	before you use EZTape for MS-DOS.
	
	To do this, using MS-DOS Editor (or another ASCII text editor), insert the
	following statement in the AUTOEXEC.BAT file:
	
	  " SET DOSONLY=1 " (without the quotation marks)
	
	Setting the DOSONLY environment variable forces EZTape for MS-DOS to use standard
	MS-DOS system calls to access the drive. You must reboot your computer for this
	change to take effect.
	
	NOTE: The DOSONLY environment variable should not be necessary for use on
	uncompressed drives.
	
	
	For more information, contact Irwin Magnetic Systems Technical Support.
	
	EZTape for MS-DOS is manufactured by Irwin Magnetic Systems, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 6.00 double space back up 3rdparty 6.20 dblspace easy tape errmsg err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
