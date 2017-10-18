---
layout: page
title: "Q137602: PPT: Slides Not Centered When Printing from HP DeskJet Printer"
permalink: kb/137/Q137602/
---

## Q137602: PPT: Slides Not Centered When Printing from HP DeskJet Printer

	Article: Q137602
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,7.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print slides to a Hewlett-Packard (HP) DeskJet printer, the slides may
	be printed off-center. This problem may also occur with the Epson Color Stylus
	and other ink jet printers.
	
	CAUSE
	=====
	
	This problem occurs because of the unprintable region of the printer and the way
	PowerPoint prints slides.
	
	For example, when set to landscape orientation, the HP DeskJet has the following
	unprintable regions:
	
	  Left:     .33 inch
	  Right:    .6 inch
	  Top:      .2 inch
	  Bottom:   .2 inch
	
	This means that if a slide is too big to fit on a page, it is cropped unevenly.
	
	Also, when PowerPoint positions slides on a page, it starts from the center of
	the page and works out equally in all directions. Some printer drivers do not
	provide the correct location for the center of the page.
	
	
	RESOLUTION
	==========
	
	Change HP DeskJet Paper Settings
	--------------------------------
	
	If you change the paper settings in the printer driver to A4 (European size, 8.27
	by 11.69 inches) but do not change the slide setup options, the slide looks more
	centered when it is printed. The printout is centered left and right with a
	slightly larger margin on the top than on the bottom. If you set the paper size
	to A4, the nonprintable region is set for A4 paper. The unprintable region is:
	
	  Left:    .5 inch
	  Right:   .5 inch
	  Top:     .65 inch
	  Bottom:  .33 inch
	
	In some cases, you may have to change the settings to force A4 paper size in
	PowerPoint as well as on the printer. To do this, follow the steps appropriate
	for your version of Windows.
	
	Changing Paper Settings in Windows 95
	-------------------------------------
	
	1. On the Start menu, point to Settings, and then click Printers.
	
	2. Right-click the printer icon, and then click Properties.
	
	3. Change the Paper Source or Paper Size option to A4.
	
	Changing Paper Settings in Windows 3.x
	--------------------------------------
	
	1. Double-click the Control Panel icon in the Main Program group.
	
	2. Double-click the Printers icon.
	
	3. Select the printer and then click Settings.
	
	4. Change the Paper Source option to A4.
	
	You may also need to change the paper source or page size in PowerPoint.
	
	
	Additional query words: 4.00 ppt4 HP Deskjet Print Slides Center Crooked w_powerpt powerpoint powerpnt offcenter off-center skewed slanted shifted align
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search kbPowerPt400
	Version           : WINDOWS:4.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	
