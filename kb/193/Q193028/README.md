---
layout: page
title: "Q193028: Wine Guide: Error Message When Starting in 640 x 480 Resolution"
permalink: /kb/193/Q193028/
---

## Q193028: Wine Guide: Error Message When Starting in 640 x 480 Resolution

	Article: Q193028
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbenv kberrmsg kbimu
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Wine Guide on a Windows 98-based computer, you may
	receive the following error message:
	
	  This screen (640 x 480 pixels) is too small for this publication which
	  requires 640 x 485 pixels.
	
	CAUSE
	=====
	
	This behavior can occur if you are using a Matrox Millennium display adapter and
	your screen resolution is set to 640 x 480 pixels.
	
	RESOLUTION
	==========
	
	To resolve this issue, click OK. Wine Guide should function properly at a screen
	resolution of 640 x 480 pixels.
	
	To prevent this issue from occurring, increase your screen resolution to a
	setting of 800 x 600 pixels or higher. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. Move the Screen Area slider to the right until the screen resolution shown
	  underneath the slider is 800 x 600 pixels or higher.
	
	5. Click OK, and then click OK again.
	
	6. When you are prompted to keep the new desktop setting, click Yes.
	
	7. Close Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Wine Guide, versions
	1.0 and 1.0a.
	
	MORE INFORMATION
	================
	
	The third-party product discussed here is manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: multi multi-media media mm
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbenv kberrmsg kbimu 
	Technology        : kbOSWin98 kbOSWinSearch kbHomeProdSearch kbWine100 kbWine100a
	Version           : WINDOWS:1.0,1.0a
	Issue type        : kbprb
	
	=============================================================================
	
