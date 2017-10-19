---
layout: page
title: "Q85690: Cannot Bold Device Fonts Unless the Device Supports Bold"
permalink: /kb/085/Q85690/
---

## Q85690: Cannot Bold Device Fonts Unless the Device Supports Bold

	Article: Q85690
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print from the Microsoft Windows Write program or another Windows-
	based application, you cannot select a device font and make it print bold unless
	the printer being used supports this feature.
	
	WORKAROUND
	==========
	
	Windows 3.1 and 3.11
	--------------------
	
	If you are using Windows 3.1 or 3.11, use TrueType fonts instead of printer-
	resident fonts.
	
	Windows 3.0 and 3.0a
	--------------------
	
	If you are using Windows 3.0 and a dot-matrix printer, use the Windows raster
	bitmap fonts (such as HELVx and TMSRMNx) instead of printer-resident fonts. The
	Windows graphical device interface (GDI) can make these raster fonts bold and
	send them to your printer.
	
	If you are using Windows 3.0 and a Hewlett-Packard (HP) LaserJet or HPPCL4
	compatible, then either:
	
	- Upgrade to Windows 3.1.
	
	-or-
	
	- Purchase a soft font package that will enable you to print bold fonts.
	  Although the HPPCL4 driver can simulate bold for fonts, it cannot be used
	  with larger point sizes.
	
	MORE INFORMATION
	================
	
	A printer-resident font is the same as a device font. A bitmap font is the same
	as a raster font.
	
	
	Additional query words: 3.00 3.00a 3.10 3.11 dot matrix
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
