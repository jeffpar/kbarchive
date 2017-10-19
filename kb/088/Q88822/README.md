---
layout: page
title: "Q88822: PRINTER.WRI Incorrectly States TTFavor Switch"
permalink: /kb/088/Q88822/
---

## Q88822: PRINTER.WRI Incorrectly States TTFavor Switch

	Article: Q88822
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 3.1 
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The PRINTER.WRI files from the following retail packages containing Windows 3.1
	incorrectly document a WIN.INI switch called TTFavor=<0-or-1>:
	
	- Microsoft Windows operating system versions 3.1, 3.11
	
	- Microsoft Windows & MS-DOS 5 for IBM PS/2
	
	The correct switch is FavorTT=<0-or-1>.
	
	In Windows 3.1, the FavorTT setting must be placed in the [ModelName,Port]
	section of the WIN.INI file, not in the [PostScript,Port] section. For example:
	
	  Correct:        [Apple LaserWriter II NTX,LPT3]
	                  advflags=696
	                  header=1
	                  FavorTT=1
	
	  Incorrect:      [PostScript,LPT1]
	                  ATM=placeholder
	                  FavorTT=1
	
	FavorTT=<0-or-1> [default: 0]
	-----------------------------
	
	If a request for a font can be equally satisfied by both a device font or a
	TrueType font, use the TrueType font if FavorTT is set to 1. Otherwise use a
	device font.
	
	These ties can easily occur. For example, if the application requests Tms Rmn but
	only Times and Times New Roman are available, this is considered a tie.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbMSDOSSearch kbMSDOS500
	Version           : WINDOWS:3.1,3.11; :
	
	=============================================================================
	
