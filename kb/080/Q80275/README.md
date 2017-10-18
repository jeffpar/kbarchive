---
layout: page
title: "Q80275: Windows: HP DeskJet Series 2.0 Driver Error Detection"
permalink: kb/080/Q80275/
---

## Q80275: Windows: HP DeskJet Series 2.0 Driver Error Detection

	Article: Q80275
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Hewlett-Packard (HP) DeskJet Series version 2.0 printer driver has the
	ability to detect errors from the printer, such as running out of paper. The
	enhanced error detection is only available when the printer is connected
	directly to the computer (no print sharing devices and no network printing).
	This may cause printing conflicts.
	
	MORE INFORMATION
	================
	
	When initializing a printer using the HP DeskJet Series version 2.0 printer
	driver, the Initializing dialog box may stay on the screen for a prolonged
	period of time with no error messages being returned. During this time, the
	system will appear to be locked, but it will return within a few minutes.
	
	If this happens, ask yourself the following:
	
	1. Does the printer type specified in the series version 2.0 driver match the
	  printer that is actually being used? If not, make the appropriate change.
	
	2. Is the interface cable being used a standard parallel (that is, Centronics)
	  or serial (that is, RS-232-C) cable? If not, try a standard cable.
	
	3. Is the enhanced error detection enabled? If so, try disabling it. The
	  enhanced error detection can be disabled by adding the following to the end
	  of the WIN.INI file:
	
	  [STATDLL]
	  override=yes
	
	The HP DeskJet product discussed here is manufactured by HP and independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: DJ DJ500 DJ500C Plus 2.0 version
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
