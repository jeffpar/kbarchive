---
layout: page
title: "Q157450: Matrox Millennium Adapter Occasionally Displays Blue Pixels"
permalink: kb/157/Q157450/
---

## Q157450: Matrox Millennium Adapter Occasionally Displays Blue Pixels

	Article: Q157450
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbdisplay kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using DirectDraw YUV surfaces, the Matrox Millennium video adapter
	sometimes erroneously displays bright blue pixels after the conversion to RGB
	space. This is most likely to occur when you are playing ActiveMovie videos.
	
	CAUSE
	=====
	
	This behavior is caused by a hardware saturation problem that occurs during the
	conversion.
	
	RESOLUTION
	==========
	
	You can work around this problem in ActiveMovie by clicking the Advanced tab in
	the ActiveMovie Control Properties dialog box, clicking Properties, clicking the
	DirectDraw tab, and then disabling the YUV Offscreen option.
	
	NOTE: The resolution setting is NOT in the retail product.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbdisplay kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
