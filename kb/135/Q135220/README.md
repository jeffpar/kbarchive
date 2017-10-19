---
layout: page
title: "Q135220: Bold Text on PostScript Printer Has Downward Slant"
permalink: /kb/135/Q135220/
---

## Q135220: Bold Text on PostScript Printer Has Downward Slant

	Article: Q135220
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print bold text no larger than 24 points to a PostScript printer, the
	text may be printed with a downward slant.
	
	CAUSE
	=====
	
	Some fonts do not include bold versions. When this is the case, Windows 95
	simulates the bold effect. The code responsible for this effect can sometimes
	cause the behavior described above.
	
	RESOLUTION
	==========
	
	To work around this behavior, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click the PostScript printer icon, and then
	  click Properties on the menu that appears.
	
	3. On the Fonts tab, click the Sends Fonts As button.
	
	4. Change the "Threshold to switch between downloading bitmap or outline fonts"
	  setting to 1. (The default value is 100.)
	
	5. Click OK. Click OK.
	
	These steps cause the font to be sent as outlines, rather than bitmaps.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
