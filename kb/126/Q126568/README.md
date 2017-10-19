---
layout: page
title: "Q126568: Automap Road Atlas: GP Fault in Module HP500C.DRV"
permalink: /kb/126/Q126568/
---

## Q126568: Automap Road Atlas: GP Fault in Module HP500C.DRV

	Article: Q126568
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Road Atlas for Windows, versions 1.06, 1.10, 3.02 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Hewlett-Packard (HP) DeskJet 500C printer driver is selected, and you
	attempt to print a map from within Road Atlas for Windows, you may receive the
	following error message:
	
	  AMW.EXE has caused a general protection fault in module HP500c.drv
	
	RESOLUTIONS
	-----------
	
	Turn Off the Draw Database Symbols Option
	-----------------------------------------
	
	Turn off the Draw Database Symbols option for the HP DeskJet 500C printer driver
	version 4.0 and later, as follows:
	
	1. In Automap Road Atlas, choose Print from the File menu.
	
	2. Choose Options and clear the Draw Database Symbols check box.
	
	-or-
	
	Set the Printout Option to a Setting Other than Automatic
	---------------------------------------------------------
	
	When you use the HP DeskJet 500C printer driver version 4.0 and later, set the
	Printout Option to a setting other than Automatic, as follows
	
	1. From the File menu, choose Print.
	
	2. Choose Setup.
	
	3. In the Printout section, select an option other than Automatic.
	
	-or-
	
	Set the Dithering Option to a Setting Other than Standard
	---------------------------------------------------------
	
	When using the HP DeskJet 500C printer driver version 3.1 and earlier, set the
	Dithering option to a setting other than Standard, as follows:
	
	1. In Automap Road Atlas, choose Print from the File menu.
	
	2. Choose Setup and then choose Options.
	
	3. From the Dithering section select any option except Standard.
	
	-or-
	
	Other Resolutions
	-----------------
	
	Upgrade to Road Atlas version 3.05 for Windows or greater.
	
	-or-
	
	Change to the HP DeskJet 500 or 500C (Monochrome) printer driver shipped with
	Microsoft Windows. For more information about how to perform this task in
	Windows, see your Windows printed documentation or online Help.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by Hewlett- Packard, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: auto auto-map automap reference hp
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbAutomapSearch kbAutomapRoadAtlas106 kbAutomapRoadAtlas302
	
	=============================================================================
	
