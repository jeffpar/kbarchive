---
layout: page
title: "Q81330: HP LaserJet Font-Per-Page Limitation"
permalink: /kb/081/Q81330/
---

## Q81330: HP LaserJet Font-Per-Page Limitation

	Article: Q81330
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0a, 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Several Hewlett-Packard (HP) printers limit the number of fonts allowed per
	page. The information below explains the limits and which printers are affected.
	
	MORE INFORMATION
	================
	
	HP LaserJet III
	---------------
	
	The number of fonts per page for the HP LaserJet Series III printer is limited
	only by available printer memory.
	
	HP LaserJet-Compatible Printers
	-------------------------------
	
	HPPCL-supported printers, such as the HP LaserJet Plus, HP LaserJet 500 Plus, HP
	LaserJet Series II, and other HP LaserJet-compatible printers are limited to 16
	fonts per page. There is no limit on the number of fonts that can be used per
	document. However, if you send a page that has more than 16 fonts to an HP
	printer, you receive the following message:
	
	  PCL PRINTING WARNING: SOFT FONT PAGE LIMIT: Some fonts will be substituted
	
	Choosing the OK button allows printing to continue. This limitation applies to
	all fonts. Note also that using one font with 17 different pitches causes the
	same error.
	
	Original HP LaserJet Printer
	----------------------------
	
	The original HP LaserJet has a built-in limitation of eight fonts per page. You
	also cannot download soft fonts to an original HP LaserJet.
	
	For more information on the capabilities of the HP LaserJet family of printers,
	contact Hewlett-Packard.
	
	
	Additional query words: 2.0 2.00 2.03 2.1 2.10 2.11 3.00 3.00a 3.10 maximum hewlett packard hp
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300a kbWin310
	Version           : WINDOWS:2.x,3.0,3.0a,3.1
	
	=============================================================================
	
