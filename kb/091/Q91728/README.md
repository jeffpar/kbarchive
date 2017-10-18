---
layout: page
title: "Q91728: MS-DOS 6 DoubleSpace Files and Functions"
permalink: kb/091/Q91728/
---

## Q91728: MS-DOS 6 DoubleSpace Files and Functions

	Article: Q91728
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a list of DoubleSpace files and their functions. For
	MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	Filename         Function
	----------------------------------------------------------------------
	
	DBLSPACE.BIN     Main DoubleSpace Component
	DBLSPACE.EXE     For creation or modification of a DoubleSpace drive
	DBLSPACE.HLP     DoubleSpace online help file
	DBLSPACE.INF     DoubleSpace Setup information file
	DBLSPACE.INI     DoubleSpace information file
	DBLSPACE.WIN     Used to keep track of Windows during
	                DoubleSpace installation
	DBLSPACE.SYS     Allows MS-DOS to load DoubleSpace device driver high
	DBLSPACE.00x     Actual DoubleSpace drive stored as a file
	
	
	MORE INFORMATION
	================
	
	For definitions of terms used in this article, please see the DoubleSpace Help.
	
	DBLSPACE.BIN
	------------
	
	MS-DOS uses the DBLSPACE.BIN component to mount the compressed volume file so you
	can access the files on your compressed drive. This file loads automatically if
	it is in the root directory of the startup disk (no device= line is needed). If
	you want to load DBLSPACE.BIN into upper memory, see the DBLSPACE.SYS section of
	this article.
	
	DBLSPACE.EXE
	------------
	
	This file allows you to mount, create or modify DoubleSpace drives. DoubleSpace
	accepts the following parameters:
	
	DBLSPACE /CHKDSK [/F] [drive:]
	DBLSPACE /COMPRESS drive: [/F] [/NEWDRIVE=drive2:] [/RESERVE=size]
	DBLSPACE /CREATE drive: [/NEWDRIVE=drive2:] [/SIZE=size | /RESERVE=size]
	DBLSPACE /DEFRAGMENT [/F] [drive:]
	DBLSPACE /DELETE drive:
	DBLSPACE /FORMAT drive:
	DBLSPACE [/INFO] drive:
	DBLSPACE /LIST
	DBLSPACE /MOUNT[=sss] [drive:] [/NEWDRIVE=drive2:]
	DBLSPACE /RATIO[=r.r] [drive: | /ALL]
	DBLSPACE /SIZE[=size | /RESERVE=size] [drive:]
	DBLSPACE /UNMOUNT [drive:]
	
	For more information about DoubleSpace command-line options, type "HELP DBLSPACE"
	(without the quotation marks) or "HELP DBLSPACE /switchname" (without the
	quotation marks) (where /switchname is the name of the switch about which you
	want more information) at the command prompt.
	
	DBLSPACE.HLP
	------------
	
	This file contains help on DoubleSpace. To access this file, run DoubleSpace and
	choose Contents or Index from the Help menu.
	
	DBLSPACE.INF
	------------
	
	The DoubleSpace Setup information file is helpful when creating a new DoubleSpace
	drive, but it is not required.
	
	Commands under the [SpecialFiles] section indicate actions to be taken for
	specific files; the possible actions are COPY=, IGNORE= and MOVE=. Without a
	path, any file of that name will match; wild cards (?, *) are acceptable.
	
	Programs under the [CopyFiles] section are optional utilities that are left on
	the original boot drive if there is enough room.
	
	Programs under the [dangerous] section will be remarked out using the REM command
	from CONFIG.SYS file during DoubleSpace Setup but will not be remarked after
	Setup has completed.
	
	Programs under the [prior] section will have DEVICEHIGH=DBLSPACE.SYS placed ABOVE
	them in the CONFIG.SYS file.
	
	DBLSPACE.INI
	------------
	
	This file is used by DoubleSpace to mount the compressed volume and swap drive
	letters. The file contains the following settings:
	
	  MaxRemovableDrives=
	  FirstDrive=
	  LastDrive=
	  MaxFileFragments=
	  ActivateDrive=
	
	DBLSPACE.WIN
	------------
	
	This is a temporary file that DBLSPACE.BIN generates to keep track of windows
	information when a drive is compressed. It should automatically be deleted after
	DBLSPACE.BIN completes the compression of the existing drive.
	
	DBLSPACE.SYS
	------------
	
	The DBLSPACE.SYS device driver does not provide access to the compressed drives,
	but it does provide the following functionality:
	
	- Allows DBLSPACE.BIN to be loaded high (using the devicehigh command)
	
	- Moves DBLSPACE.BIN from the top of conventional memory to the bottom (as
	  device drivers load). This can eliminate conflicts with programs that require
	  access to the top of conventional memory.
	
	DBLSPACE.00x
	------------
	
	A compressed drive is not a real disk drive, although it appears that way to most
	programs. Instead, a compressed drive exists on your disk as a hidden file
	called a compressed volume file (CVF). DBLSPACE.00x is the compressed volume
	file.
	
	
	Additional query words: 6.00 6.20 6.21 6.22 double space drive
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
