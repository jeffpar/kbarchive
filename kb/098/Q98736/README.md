---
layout: page
title: "Q98736: Cannot Access Hard Drive After Installing DoubleSpace on PS/1"
permalink: kb/098/Q98736/
---

## Q98736: Cannot Access Hard Drive After Installing DoubleSpace on PS/1

	Article: Q98736
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If MS-DOS is installed on an IBM PS/1 and drive C is compressed with
	DoubleSpace, the following problems occur:
	
	- You cannot access your files on the compressed drive when you use the
	  read-only memory (ROM) startup procedure.
	
	- When you run the ROM startup procedure, you can no longer change your
	  settings because the CUSTOMIZ program is on your compressed drive (which is
	  unavailable when you run the ROM startup procedure).
	
	CAUSE
	=====
	
	The ROM startup procedure (invoked by holding down both mouse buttons at system
	startup) resets the ROM option to load the operating system from ROM. Since you
	don't have MS-DOS 6.0 or 6.2 and the DBLSPACE.BIN file in your ROM-DOS,
	DoubleSpace does not load, and you cannot access your compressed data.
	
	When you invoke the ROM startup procedure and your primary partition is
	compressed with DoubleSpace, the following error message is displayed:
	
	  Error in CONFIG.SYS, line 0
	
	Other error messages may also appear, depending on what commands are in the
	CONFIG.SYS and AUTOEXEC.BAT files.
	
	The CUSTOMIZ program allows you to change the configuration options (such as boot
	sequence and the source for system files). Since CUSTOMIZ is located in the
	directory that contains your MS-DOS files (usually C:\DOS), if drive C is
	compressed you cannot change your ROM startup options. For example, you cannot
	configure your computer to do any of the following:
	
	- Start from the MS-DOS command prompt
	
	- Boot from drive A
	
	- Boot from drive C
	
	- Read the CONFIG.SYS file from disk
	
	- Read the AUTOEXEC.BAT file from disk
	
	You are essentially locked out of your system; if you choose any of the ROM menu
	options, you are prompted to insert an IBM DOS boot disk.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Turn the machine on and move to the IBM PS/1 ROM System menu (four windows
	  [quadrants] providing four basic options).
	
	2. Press the ALT+PRINT SCREEN key combination, which tells the PS/1 ROM to boot
	  from the hard disk drive.
	
	  NOTE: This key combination does not change the configuration settings; it
	  works for one restart only.
	
	3. The screen displays a window with arrows pointing to the F1 key. Press the F1
	  key. The PS/1 now boots from the hard disk drive.
	
	  NOTE: If the F1 key does not work, try SHIFT+F9.
	
	4. When the MS-DOS command prompt appears, run the CUSTOMIZ program. This
	  program allows you to set your startup options. Change your options as
	  follows:
	
	  Option                           Select
	  ------------------------------------------------------------------------
	
	  Choose where the computer looks
	     for the operating system:     Try Diskette First, Then Try Fixed Disk
	  Read Config.sys:                 From disk
	  Read Autoexec.bat:               From disk
	  Disk to read from:               C
	
	Your IBM PS/1 should function properly with MS-DOS 6.0 or 6.2 with these
	settings.
	
	Additional Troubleshooting
	--------------------------
	
	If ALT+PRINT SCREEN does not work, call the IBM PS/1 bulletin board service (BBS)
	at (919) 543-9706 to obtain the latest version of CUSTOMIZ.EXE. You can then run
	CUSTOMIZ.EXE from the floppy disk to change your startup configuration.
	
	NOTE: For convenience, you should keep a copy of CUSTOMIZ.EXE on the uncompressed
	portion of your hard disk drive.
	
	ROM-Based System Menu
	---------------------
	
	If your ROM-based System menu (started with a SHELLSTB.COM command in the
	CONFIG.SYS or AUTOEXEC.BAT file) does not work with MS-DOS 6.0 or 6.2, you need
	to obtain a patch called PS1DOS5.EXE from IBM. You can obtain this patch through
	the IBM PS/1 bulletin board service (BBS).
	
	If your ROM-based System menu doesn't work and you have already installed
	DoubleSpace, obtain a patch called 4QUADMS6.EXE instead. This file is also
	available from the IBM PS/1 BBS.
	
	Both self-extracting patch files contain the following files:
	
	  AUTOEXEC.BAT
	  DOSSHELL.BAT
	  INSTALL.EXE
	  README.DOC
	  RSSTUB.COM
	
	To use the patch, copy these files to a floppy disk (for example A), and run the
	Install program from the floppy disk. The RSSTUB.COM file is added to the
	AUTOEXEC.BAT file on drive C. When you restart your computer, the ROM System
	menu should run.
	
	According to IBM, the ROM software does not load with MS-DOS 5.0, 6.0, or 6.2
	unless the RSSTUB.COM file is run.
	
	The products included here are manufactured by IBM, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 6.0 PS/1s 2011 2121 2011, 2121(series C42), B82), C92) 5 5.0 5.0a 5.00 5.00a 6 6.00 6.20 3rdparty double space dblspace quad screen 4-quad bios setup 4quad four quadrant four-quadrant PS/1 hang no boot floppy
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
