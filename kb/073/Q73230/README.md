---
layout: page
title: "Q73230: Cannot Change Orientation with MoreFonts HP LaserJet II Driver"
permalink: /kb/073/Q73230/
---

## Q73230: Cannot Change Orientation with MoreFonts HP LaserJet II Driver

{% raw %}

	Article: Q73230
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using the MoreFonts driver version 1.0 for the HP LaserJet II, and
	you run Microsoft Windows Control Panel, select Printers, and select the Printer
	Setup Option, there is no option in the Printer Setup dialog box to change the
	paper orientation from portrait to landscape.
	
	CAUSE
	=====
	
	This driver, which is available from MicroLogic to support its printer fonts,
	does not support landscape mode.
	
	WORKAROUND
	==========
	
	The only workaround for this problem is to remove the MicroLogic MoreFont driver
	and install an HP LaserJet II driver provided with Windows, the SDL, or HP. You
	will lose the printer fonts from MoreFonts, but will be able to print in
	landscape mode.
	
	MORE INFORMATION
	================
	
	For more information contact MicroLogic.
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3rdparty HP hewlett packard lazer laser jet LJ
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
