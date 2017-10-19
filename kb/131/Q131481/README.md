---
layout: page
title: "Q131481: Settings for HP LaserJet 4Si Not Maintained During Upgrade"
permalink: /kb/131/Q131481/
---

## Q131481: Settings for HP LaserJet 4Si Not Maintained During Upgrade

	Article: Q131481
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Windows for Workgroups 3.11 to Windows 95, any non-
	default settings for your Hewlett-Packard (HP) LaserJet 4Si printer are lost.
	All settings for the printer are returned to their default values.
	
	CAUSE
	=====
	
	When you install an HP LaserJet 4Si printer in Windows for Workgroups, entries
	in the WIN.INI file refer to the printer as an HP LaserJet 4/4M, not as an HP
	LaserJet 4Si.
	
	When you upgrade to Windows 95, Windows attempts to maintain any current printer
	settings for the HP LaserJet 4Si by searching the WIN.INI file for a section
	corresponding to that printer. Because the section in the WIN.INI file for the
	printer refers to the printer as an HP LaserJet 4/4M, Windows does not realize
	that this section applies to the 4Si, and does not maintain the current printer
	settings.
	
	RESOLUTION
	==========
	
	After you upgrade to Windows 95, manually restore the non-default settings for
	the printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: hppcl5ms
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
