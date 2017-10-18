---
layout: page
title: "Q139937: Cannot Print More Than 99 Copies with HP LaserJet Series II"
permalink: kb/139/Q139937/
---

## Q139937: Cannot Print More Than 99 Copies with HP LaserJet Series II

	Article: Q139937
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:3.1,3.11,6.0,6.0a,6.0c,7.0,7.0a,95,97
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Word for Windows 95, versions 7.0, 7.0a 
	- Microsoft Word for Windows, versions 6.0, 6.0a, 6.0c 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Printing more than 99 copies from Word to a Hewlett-Packard (HP) LaserJet Series
	II printer:
	
	
	- Prints only 1 copy using Windows 95.
	
	- Prints only 99 copies using Microsoft Windows version 3.1 or 3.11 or
	  Microsoft Windows for Workgroups 3.11.
	
	CAUSE
	=====
	
	The driver for the HP LaserJet Series II printer (HPPCL.DRV) was not corrected
	during the transition to Windows 95. Problems with this driver were evident
	using Microsoft Windows operating system 3.1 and 3.11 and Microsoft Windows for
	Workgroups 3.11. It is this subsequent version of The driver (HPPCL.DRV Version
	3.1) that is shipped with Windows 95.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the Hewlett-Packard printer
	driver HPPCL.DRV. Microsoft is researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	RESOLUTION
	==========
	
	To work around this problem, limit the number of copies you print to 99 per
	Print command. For example, to print 100 copies, issue one Print command for 99
	copies and a second Print command for 1 copy.
	
	MORE INFORMATION
	================
	
	The HPPCL.DRV driver is used for the following printers:
	
	  HP LaserJet
	  HP LaserJet Plus
	  HP LaserJet 2000
	  HP LaserJet 500+
	  HP LaserJet IID
	  HP LaserJet Series II
	
	In Windows 95, check which version of the printer driver you are using by doing
	the following:
	
	1. Click the Windows Start button, point to Settings, and then click Printers.
	
	2. Using the right mouse button, click the HP LaserJet Series II printer (or
	  other printer listed above).
	
	3. On the menu that appears, click Properties.
	
	4. Click the Paper tab.
	
	5. Click the About button.
	
	For more information on troubleshooting printing problems, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q128345 Troubleshooting Printing Problems in Windows 95
	
	For a list of printers that emulate the Hewlett-Packard LaserJet printers, and
	therefore may be using the HPPCL.DRV printer driver, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q81626 Complete Removal of a Windows Printer Driver
	
	The LaserJet series printers discussed here are manufactured by Hewlett- Packard,
	a vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: 6.00a 6.00c word95 Plus 2000 500+ IID word97
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbOSWin95 kbWordSearch kbOSWinSearch kbWord97 kbWord97Search kbWord95Search kbZNotKeyword6 kbZNotKeyword2 kbWord600 kbWord600a kbWord600c kbWord95 kbWord95a kbOSWin310 kbOSWin311
	Version           : WINDOWS:3.1,3.11,6.0,6.0a,6.0c,7.0,7.0a,95,97
	
	=============================================================================
	
