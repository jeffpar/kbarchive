---
layout: page
title: "Q118585: Mixed TrueType Text and Graphics Print Incorrectly"
permalink: /kb/118/Q118585/
---

## Q118585: Mixed TrueType Text and Graphics Print Incorrectly

	Article: Q118585
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print combined TrueType text and graphics from an application to a
	Hewlett-Packard (HP) LaserJet 4 or DeskJet 1200C, the color of the text and
	background do not appear as expected.
	
	For example, if you print a Microsoft PowerPoint version 4.0 slide with the
	SOARINGS.PPT background using the default screen colors of yellow text on a blue
	background, the text does not appear, the blue portion appears yellow, and the
	light blue portion appears white.
	
	
	CAUSE
	=====
	
	The Windows NT printer driver uses the TrueType font resident in the HP LaserJet
	4 or DeskJet 1200c printer, instead of sending the TrueType font to the printer
	as a graphic.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	The DeskJet and LaserJet printers described here are manufactured by
	Hewlett-Packard, a vendor independent of Microsoft; we make no warranty, implied
	or otherwise, regarding these products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
