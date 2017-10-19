---
layout: page
title: "Q113760: 150 DPI printing with the Windows Printing System"
permalink: /kb/113/Q113760/
---

## Q113760: 150 DPI printing with the Windows Printing System

	Article: Q113760
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Printing System, version 1.0 
	- Microsoft Windows 3.1 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print at 150 dots per inch (dpi) with the Windows Printing System
	(WPS), the printout may appear to have extra space between the letters and
	lines. Also, some non-TrueType screen or raster fonts may print larger than
	expected at 150 dpi. (Programs like Microsoft Windows Notepad, Calendar, and
	Cardfile, which use a raster or screen font to print, exhibit this problem.)
	
	WORKAROUND
	==========
	
	- Use 300-dpi resolution with the Windows Printing System driver.
	
	  -or-
	
	- Use the HP printer driver.
	
	MORE INFORMATION
	================
	
	The regular Hewlett-Packard (HP) printer drivers print correctly at 150 and 300
	dpi, but you may experience the above results with the Windows Printing System
	printer driver at 150 dpi. The WPS should print without these problems when
	using 300 dpi.
	
	Additional query words: 3.10 3.1 3.11 dots per inch true type 150dpi raster big huge 300dpi true-type
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWFW310 kbWFW311 kbWinPrint100
	Version           : :1.0; WINDOWS:3.1,3.11
	
	=============================================================================
	
