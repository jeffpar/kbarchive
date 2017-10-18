---
layout: page
title: "Q156363: Tape and Drive Compatibility for QIC 117 S"
permalink: kb/156/Q156363/
---

## Q156363: Tape and Drive Compatibility for QIC 117 S

	Article: Q156363
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Compatibilty and tape capacity for QIC 117 standard tape backups depend on the
	floppy disk drive controller, tape format, and the tape backup unit.
	
	MORE INFORMATION
	================
	
	The controller requirements for floppy disk drive-based backups are as follows:
	
	QIC117 Standard      Supported Tape Formats
	===============      ======================
	QIC-40               Read/write QIC-40 tapes
	
	QIC-80               Read QIC-40 tapes
	                    Read/write QIC/80 tapes
	                    Includes WIDE and TR-1 formatted tapes
	
	QIC-3010             Read QIC-40/80 tapes
	                    Read/write QIC-3010 tapes
	                    Includes WIDE and TR-2 formatted tapes
	                    if the drive will accept these
	
	QIC-3020             Read QIC-40/80 tapes and QIC-3010 tapes
	                    Read/write QIC-3020 tapes
	                    Includes WIDE and TR-3 tapes
	
	To determine the computer's floppy disk drive controller type through the Windows
	NT registry, please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q156362
	  TITLE : Floppy Controller Requirements for QIC-117
	
	QIC drives will not read tapes formatted with a later QIC Drive series format.
	For example, QIC-3010 drives will not read QIC-3020-formatted tapes. QIC-40/80
	drives will not read QIC-3010 or QIC-3020-formatted tapes.
	
	The drive's functionality and capacity are limited to the lowest common
	denominator of floppy disk drive controller speed, tape backup unit, or the tape
	format itself. A QIC-3020 that requires a 1 Mbps controller for full
	functionality essentially becomes a QIC-3010 series drive when placed on a 500
	Kbps controller (and shares the same behavior and limitations as a 3010 Series
	drive). Compatibility and limitations are summarized in the chart below:
	
	                     Tape Format
	QIC117 Standard       40      80     3010    3020
	===============       ===========================
	40                    RW      x      x       x
	80                    R       RW     x       x
	3010                  R       R      RW      x
	3020                  R       R      R       RW
	
	x = unsupported configuration
	
	
	Additional query words: tape travan wide qic117 backup
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
