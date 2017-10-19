---
layout: page
title: "Q88784: Using the LaserMaster Print Card and Windows"
permalink: /kb/088/Q88784/
---

## Q88784: Using the LaserMaster Print Card and Windows

	Article: Q88784
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses using the LaserMaster printer controller card with
	Windows. The following issues are covered:
	
	- LaserMaster Controller Card Overview
	
	- LaserMaster UAE Error Messages
	
	- Windows 3.0 Unable to Run in any Mode
	
	- LMDPS: DDPI Load Failure (LaserMaster 1000)
	
	- Windows 3.1 TrueType and LaserMaster
	
	MORE INFORMATION
	================
	
	LaserMaster Controller Card Overview
	------------------------------------
	
	LaserMaster makes a printer controller card series that allows non-PostScript
	printers to print PostScript faster and with greater quality than normally
	obtainable from a PostScript printer cartridge.
	
	Windows 3.0 LaserMaster UAE Error Messages
	------------------------------------------
	
	When printing from version 3.0 of Excel for Windows, Aldus PageMaker version 4.0,
	and Micrografx Designer version 3.02, UAEs are generated if a driver earlier
	than version 3.56 is used.
	
	Windows 3.0 Unable to Run in Any Mode
	-------------------------------------
	
	If you are using the LaserMaster card and version 3.2 of the LaserMaster printer
	driver, Windows cannot run in any mode, if the printer is turned off.
	
	To correct this problem, turn on the printer. Version 3.58 of this driver from
	LaserMaster corrects this problem.
	
	LMDPS: DDPI Load Failure (LaserMaster 1000)
	-------------------------------------------
	
	When installing the LaserMaster 1000 printer driver in Windows 3.0, you may get
	the error message:
	
	  LMDPS : DDPI Load Failure
	
	This is caused by a faulty installation of the printer driver. Contact
	LaserMaster for instructions on how to install LaserMaster drivers correctly.
	
	Windows 3.1 TrueType and LaserMaster
	------------------------------------
	
	LaserMaster technical support has confirmed that LaserMaster's current printer
	and video drivers for the GS-1280 do not work with Windows 3.1's TrueType
	fonts.
	
	LaserMaster suggests the following as a workaround for using printer and video
	drivers version 3.58 and 3.58b with Windows 3.1:
	
	1. Install Windows 3.1 with the standard VGA driver included.
	
	2. Run Control Panel and choose the Fonts icon.
	
	3. Choose the TrueType button.
	
	4. Clear the Enable TrueType Fonts check box.
	
	5. Reinstall the Laser Master drivers.
	
	The printer driver can be identified as LMLX6.DRV; the video driver is LMDPS.DRV.
	Both files for version 3.58 have a date of 7/22/91; 3.58b is dated 11/22/91.
	LaserMaster will be releasing a version of the drivers compatible with
	TrueType.
	
	The LaserMaster, Micrografx, and PageMaker products included here are
	manufactured by vendors independent of Microsoft; we make no warranty, implied
	or otherwise, regarding these products' performance or reliability.
	
	
	
	Additional query words: 3.00 3.00a 3.0 3.0a 3.10 3.11 3rdparty Laser Master win31 micrographics micrographx micrografix
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
