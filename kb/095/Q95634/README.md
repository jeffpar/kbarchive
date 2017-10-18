---
layout: page
title: "Q95634: Manual Installation Err Msg: Incompatible Partition"
permalink: kb/095/Q95634/
---

## Q95634: Manual Installation Err Msg: Incompatible Partition

	Article: Q95634
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to perform a manual installation of MS-DOS Upgrade, using the
	"You need to install MS-DOS manually" procedure in Diagnosing and Solving
	Problems, step 3 says to use the SETUP /Q command. However, if Setup detects you
	have a special master boot record (MBR) or an incompatible partition, Setup
	displays the "Incompatible partition" screen.
	
	WORKAROUND
	==========
	
	If you have one of the following drives and you receive this error message, run
	setup with the /U and /Q switches (for example, A:SETUP /U /Q).
	
	- Priam
	
	- Everex
	
	- SpeedStor Bootall
	
	- Micro House DrivePro
	
	If you use SETUP /I without the /U switch, you will continue to receive the error
	message.
	
	NOTE: This information was inadvertently omitted from an early printing of the
	User's Guide; the omission was corrected in subsequent printings.
	
	Installing the Optional Programs
	--------------------------------
	
	If you attempt to install the optional programs at a later date, you should also
	use the /U switch. For example:
	
	  setup /u /e
	
	Setup Syntax
	------------
	
	/E Installs Windows and MS-DOS optional programs. /Q Copies MS-DOS files to a
	hard disk. /U Installs MS-DOS even if Setup detects disk partitions that might
	be incompatible with MS-DOS 6.x.
	
	For more information of Setup switches, insert MS-DOS 6.x Upgrade Setup Disk 1 in
	one of your floppy disk drives, change to that drive at the MS-DOS command
	prompt and type "SETUP /?" (without the quotation marks).
	
	Additional query words: 6.22 6.00 docerr 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
