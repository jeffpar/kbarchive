---
layout: page
title: "Q139304: PPT7: Unexpected Font Substitution Caused by Some Printer Driver"
permalink: /kb/139/Q139304/
---

## Q139304: PPT7: Unexpected Font Substitution Caused by Some Printer Driver

	Article: Q139304
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbprint kbFont kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you print a PowerPoint for Windows 95 presentation to a Hewlett-Packard (HP)
	DeskJet, Hewlett-Packard DeskJet Plus, Hewlett-Packard DeskJet 500, Okidata
	OL-830, or an Okidata OL-400, the text may be printed in a Symbol or Dingbats
	font. These fonts do not include the regular alphabet, so your output may appear
	as gibberish, or the chosen font (such as Times New Roman) may appear unusual,
	improperly spaced, or corrupted.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Make sure the presentation's orientation and the orientation of the printer
	  driver are the same:
	  a. On the Windows Start menu, point to Settings, and then click Printers.
	
	  b. Right-click the DeskJet printer icon, and then click Properties on the
	     menu that appears.
	
	  c. Click the Paper tab. Change the orientation to Landscape.
	
	  d. Click OK.
	
	2. To reinitialize the HP DeskJet driver, switch your presentation to a
	  different printer driver and then switch it back again. To do this, follow
	  these steps:
	  a. On the File menu, click Print.
	
	  b. Choose a printer other than a DeskJet from the list of installed printers.
	
	  c. To register this change, you must click OK, but you may then cancel the
	     print job by double-clicking the printer icon on the status bar at the
	     bottom of the screen.
	
	     NOTE: You may need to exit and restart PowerPoint for your printer change
	     to take effect.
	
	  d. On the File menu, click Print.
	
	  e. Select DeskJet from the list of installed printers.
	
	  f. Make whatever other print choices you want to use and click OK.
	
	MORE INFORMATION
	================
	
	These steps also work if you encounter the same problem with other printers.
	Here is a list of other printers that may exhibit this problem:
	
	
	Additional query words: 7.00 pp95 pp7 ppt95 ppt7 w_powerpt powerpnt wingdings dingbats garbled messed up unreadable foreign garbage characters
	
	======================================================================
	Keywords          : kbprint kbFont kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Issue type        : kbprb
	
	=============================================================================
	
