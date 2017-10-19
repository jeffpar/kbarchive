---
layout: page
title: "Q171904: Err Msg: MSNVIEWR Caused an Access Violation Fault in Module..."
permalink: /kb/171/Q171904/
---

## Q171904: Err Msg: MSNVIEWR Caused an Access Violation Fault in Module...

	Article: Q171904
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are connected to MSN, The Microsoft Network, you may receive the
	following error message:
	
	  This program has performed an illegal operation and will be shut down.
	  If the problem persists, contact the program vendor.
	
	If you click Details, you receive the following error message:
	
	  MSNVIEWR caused an access violation fault in module GDI32.DLL
	
	CAUSE
	=====
	
	You may be using an outdated or incompatible video driver.
	
	RESOLUTION
	==========
	
	Reduce the color palette to 256 colors and the display resolution to 640 X 480
	pixels. To do so, follow these steps in Windows 95:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Color Palette box, click 256 Color.
	
	5. Move the Desktop Area slider all the way to the left to reduce the display
	  resolution to 640 X 480 pixels.
	
	6. Click OK.
	
	If these steps do not resolve the issue, contact your video card manufacturer to
	obtain the most up-to-date video drivers for your video card.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg 
	Technology        : kbMSNSearch kbMSN200
	Version           : WINDOWS:2.0
	
	=============================================================================
	
