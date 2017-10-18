---
layout: page
title: "Q84927: Print TrueType As Graphics Check Box Is Grayed"
permalink: kb/084/Q84927/
---

## Q84927: Print TrueType As Graphics Check Box Is Grayed

	Article: Q84927
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If the Print TrueType As Graphics check box in Control Panel printer setup is
	grayed, check the printer driver's Graphics Resolution setting. Some Microsoft
	Windows version 3.1 printer drivers allow Print TrueType As Graphics to be
	enabled only at certain resolutions.
	
	MORE INFORMATION
	================
	
	When using a Hewlett-Packard (HP) LaserJet 4 printer driver, you have to set the
	Graphics Mode of the driver to RASTER (instead of HP-GL/2)to enable the Print
	Truetype as Graphics box.
	
	Steps to Reproduce Problem
	--------------------------
	
	If a Hewlett-Packard (HP) LaserJet IID Windows 3.1 driver is installed, do the
	following to reproduce the problem:
	
	1. Run Control Panel.
	
	2. Choose the Printers icon.
	
	3. From the list of printers, select HP LaserJet IID On LPTx.
	
	4. Choose the Setup button.
	
	Adjusting the Graphics Resolution setting and choosing the Options button will
	exhibit the enabling and disabling of the Print TrueType As Graphics check box.
	When the Resolution is set to 300 dots per inch (dpi), Print TrueType As
	Graphics can be enabled. The 75 and 150 dpi resolutions disable this check box
	and cause it to be grayed.
	
	
	Additional query words: 3.10 out greyed true type dimmed unavailable 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
