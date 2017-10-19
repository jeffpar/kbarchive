---
layout: page
title: "Q155246: Shared Resources Unavailable When Organic Screen Saver Active"
permalink: /kb/155/Q155246/
---

## Q155246: Shared Resources Unavailable When Organic Screen Saver Active

	Article: Q155246
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
	
	When you are running the Windows 95 Anniversary screen saver Organic Art,
	Microsoft Edition, background tasks are disabled and shared resources are
	unavailable while the screen saver is active.
	
	CAUSE
	=====
	
	The screen saver has been set to RealTime priority.
	
	RESOLUTION
	==========
	
	If you need to share resources or run background tasks, disable the Realtime
	Priority option by following these steps:
	
	1. In Control Panel, double-click Display.
	
	2. Click the Screen Saver tab.
	
	3. Click Settings.
	
	4. Click the Preferences tab.
	
	5. Click the RealTime Priority check box to clear it.
	
	6. Click OK.
	
	MORE INFORMATION
	================
	
	If the RealTime Priority option is enabled, all background tasks are disabled.
	The following message is displayed if you click Help for the RealTime Priority
	option:
	
	  Realtime priority gives the fastest and smoothest 3D performance, but
	  prevents any background tasks running while the saver is active,
	  including accessing your computer from a network.
	
	The Organic Art, Microsoft Edition, screen saver was made available online as a
	free party favor during the Windows 95 Anniversary. No support is provided for
	this screen saver from Microsoft.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
