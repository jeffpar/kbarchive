---
layout: page
title: "Q84150: TrueType Fonts Print Incorrectly with 25 in One! Cartridge"
permalink: /kb/084/Q84150/
---

## Q84150: TrueType Fonts Print Incorrectly with 25 in One! Cartridge

	Article: Q84150
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the 25 in One! font cartridge from Pacific Data Products is used with a
	Hewlett-Packard (HP) LaserJet or compatible under Microsoft Windows version 3.1,
	text formatted to use TrueType fonts may print in a different font.
	
	CAUSE
	=====
	
	This problem is due to printer firmware limitations on the total number of fonts
	the printer can use. For all HP LaserJet Series II and later printers, the
	printer driver attempts to download TrueType fonts to the printer by default. If
	the printer reaches its upper limit on the number of fonts it may use,
	downloaded TrueType fonts are ignored and text prints in some other font.
	
	WORKAROUND
	==========
	
	You can work around this limitation by having the printer driver send TrueType
	font information to the printer as raster graphics. To do this, you must select
	the Print TrueType As Graphics option:
	
	1. Run Control Panel.
	
	2. Choose the Setup button.
	
	3. Choose the Options button.
	
	4. Select the Print TrueType As Graphics check box.
	
	You might also be able to resolve this problem by choosing a different font
	cartridge that does not contain as many fonts.
	
	MORE INFORMATION
	================
	
	For more information, contact Pacific Data Products.
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 3.10 25inOne True Type LJ LJII HP HPII II typeface
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
