---
layout: page
title: "Q156156: PPT7: Color Text in Shaded Objects Doesn't Print to DeskJet 1600"
permalink: kb/156/Q156156/
---

## Q156156: PPT7: Color Text in Shaded Objects Doesn't Print to DeskJet 1600

	Article: Q156156
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbprint kbPrintingkbfaq
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your slide contains a shaded object with text in any color besides white,
	that text does not print to an Hewlett-Packard (HP) DeskJet 1600c printer from
	Windows NT 4.0. The shaded object prints correctly, but the text does not print.
	
	RESOLUTION
	==========
	
	Change the Print Text As Graphics setting in the HP DeskJet 1600c printer
	driver. You must change the setting from within PowerPoint; the setting is not
	accessible from Control Panel.
	
	1. On the File menu, click Print.
	
	2. From the Printers list, click HP DeskJet 1600c. Click Properties.
	
	3. In the HP DeskJet 1600c Document Properties dialog box, click the Advanced
	  tab.
	
	4. Scroll down until you see the Document Options icon. If there is a plus sign
	  to the left of the icon, click it.
	
	5. Click the Print Text As Graphics option.
	
	6. Click On.
	
	7. Click OK. This returns you to the Print dialog box.
	
	8. Print your presentation.
	
	Additional query words: 97 w_powerpt power point missing gone white black letters disappear WinNT ppt95
	
	======================================================================
	Keywords          : kbenv kbprint kbPrinting kbfaq
	Technology        : kbOSWinSearch kbPowerPtSearch kbOSWinNT400 kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search kbOSWinNTSearch
	Version           : WINDOWS:7.0; winnt:4.0
	
	=============================================================================
	
