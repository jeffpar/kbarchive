---
layout: page
title: "Q89104: Using Windows with LAWN Network"
permalink: kb/089/Q89104/
---

## Q89104: Using Windows with LAWN Network

	Article: Q89104
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The LAWN (Local Area Wireless Network) requires a minimum version of 1.12 10091
	or later for use with Microsoft Windows. If you are using MS-DOS 5.0, you need
	to be using LAWN version 1.12 or later. LAWN is unsupported by Microsoft
	Windows.
	
	This article discusses the following:
	
	- System requirements
	
	- Steps for printing from Windows 3.0, 3.0a
	
	- Steps for printing from Windows 3.1
	
	- Windows and LAWN compatibility
	
	MORE INFORMATION
	================
	
	System Requirements
	-------------------
	
	The following are the LAWN system requirements:
	
	- MS-DOS 2.0 or later
	
	- 512K RAM minimum
	
	- Hard disk recommended
	
	- For machines using MS-DOS 4.0 or later, running the LAWN software through the
	  MS-DOS Shell is NOT recommended
	
	Steps for Printing from Windows 3.0, 3.0a
	-----------------------------------------
	
	1. Instead of selecting LPTx in Control Panel's Printers option, select LPTx.OS2
	  (where x is the port number).
	
	Steps for Printing from Windows 3.1
	-----------------------------------
	
	1. Instead of selecting LPTx in Control Panel's Printers option, select LPTx.DOS
	  or LPTx.OS2 (where x is the port number).
	
	2. Disable Fast Printing Direct To Port if step 1 fails.
	
	3. Edit the SYSTEM.INI's [386Enh] section with an ASCII text editor and add the
	  following:
	
	  TimerCriticalSection=1
	
	Windows and LAWN Compatibility
	------------------------------
	
	Each computer or peripheral is connected to its own LAWN box through the unit's
	serial port.
	
	Windows/LAWN Compatibility and Support Chart
	--------------------------------------------
	
	  Computer   Windows    Serial                      File
	  Type       Mode       Port       PRINT   E-Mail   Transfer
	  ----------------------------------------------------------
	
	  286        Standard   Regular    (1)    (2)       (2)
	  386/486    Standard   Regular    yes    yes       yes
	  386/486    Enhanced   Regular    yes    (2)       (2)
	  All        All        Enhanced   yes    yes       yes
	
	Note the following:
	
	- 286 computers with a PS/2-style mouse may have problems with LAWN print
	  spooling.
	
	- File transfer and electronic mail (E-Mail) operations are dependent on BIOS
	  and computer speed.
	
	For more information, contact O'Neill Communications technical support or direct
	any mail correspondence to:
	
	  O'Neill Communications, Inc. (OCI)
	  100 Thanet Circle
	  Princeton NJ 08540
	
	Additional query words: 3.00 3.10 3.11 manager loader lan 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
