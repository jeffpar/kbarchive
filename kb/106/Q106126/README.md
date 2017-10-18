---
layout: page
title: "Q106126: DoubleSpace DoubleGuard Error Codes"
permalink: kb/106/Q106126/
---

## Q106126: DoubleSpace DoubleGuard Error Codes

	Article: Q106126
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22; WINDOWS:95
	Operating System(s): 
	Keyword(s): msdos win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for
	commands and file names.
	
	SUMMARY
	=======
	
	If a DoubleGuard Alarm message appears, DoubleGuard has detected that an
	application has damaged memory that DoubleSpace was using. DoubleGuard halts
	your computer to prevent any further damage to your data.
	
	This article contains information about the four possible DoubleGuard Alarm
	messages.
	
	MORE INFORMATION
	================
	
	The DoubleGuard Alarm message reads as follows
	
	  DoubleGuard Alarm #<nn>
	
	  A program has corrupted memory belonging to DoubleSpace. Further disk activity
	  could result in the loss of some or all of the data on your drive. Therefore,
	  DoubleGuard has halted your computer. For more information, see the
	  README.TXT file
	
	where <nn> is 13, 14, 15, or 16.
	
	These errors occur when DoubleSpace detects that a software application, device
	driver, or terminate-and-stay-resident (TSR) program has corrupted memory used
	by DBLSPACE.BIN.
	
	  DoubleGuard Alarm Number  Area Corrupted
	  ----------------------------------------
	  13                        BitFAT buffer
	
	  14                        MDFAT buffer
	
	  15                        File Fragment List
	
	  16                        DBLSPACE.BIN Code Block
	
	
	The following programs are known to cause a DoubleGuard Alarm errors:
	
	Program                         More Information
	----------------------          ----------------------------------------
	Qemm (in Stealth mode)          Contact Quarterdeck Office Systems for
	                               an upgrade
	Vertisoft SpaceManager 1.53     Causes DoubleGuard error #15 when used
	                               on a 286 machine running MS-DOS 6.2
	
	
	Text from the MS-DOS 6.2 README.TXT:
	
	7.19  You receive a DoubleGuard Alarm message
	---------------------------------------------
	
	If a DoubleGuard Alarm message appears, DoubleGuard has detected that an
	application has damaged memory that DoubleSpace was using. DoubleGuard halts
	your computer to prevent any further damage to your data.
	
	Normally, each program "owns" a separate area of memory, and does not use memory
	that another program is already using. However, a few programs contain
	programming errors that cause them to inadvertently use memory belonging to
	another program. If such a program inadvertently uses memory belonging to
	DoubleSpace, that program could write its own data over the data DoubleSpace was
	storing there. Since the data that DoubleSpace stores in memory usually includes
	files you are currently using, this could cause damage to your data.
	
	DoubleSpace's DoubleGuard safety-checking feature detects when another program
	has violated DoubleSpace's memory, and immediately shuts down your computer to
	minimize the chance of data loss. (If further disk activity were to occur
	instead, you could lose some or all of the data on your drive, since the data
	DoubleSpace has in memory is probably invalid due to damage by the other
	program.)
	
	If you receive a DoubleGuard Alarm message, do the following:
	
	1. Restart your computer by turning the power switch off and then on again.
	
	2. Type the following at the command prompt:
	
	  " SCANDISK /ALL " (without the quotation marks)
	
	  NOTE: If you are using Windows 95, restart your computer to a command prompt
	  before typing this line.
	
	  This runs ScanDisk on all your drives to detect and correct any problems that
	  might have been caused by the program that violated DoubleSpace's memory.
	
	3. Make a note of which program, if any, you were running when the DoubleGuard
	  Alarm occurred. That program is probably (but not necessarily) the program
	  that caused the DoubleGuard Alarm. If you receive additional DoubleGuard
	  Alarms, take notes about what you were doing and see if you can detect a
	  pattern.
	
	Additional query words: tshoot 6.20 dblguard double guard spaceman
	
	======================================================================
	Keywords          : msdos win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95 kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22; WINDOWS:95
	
	=============================================================================
	
