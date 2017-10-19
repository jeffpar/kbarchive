---
layout: page
title: "Q153084: Encarta World Atlas: Invalid Page Fault in Kernel32.dll"
permalink: /kb/153/Q153084/
---

## Q153084: Encarta World Atlas: Invalid Page Fault in Kernel32.dll

	Article: Q153084
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg kbimukbfaq
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 World Atlas for Windows 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are using Encarta World Atlas, you may receive the following error
	message:
	
	  This program has performed an illegal operation and will be shut down.
	
	If you click the Details button, you receive the following message:
	
	  MSWORLD caused an invalid page fault in module Kernel32.dll.
	
	CAUSE
	=====
	
	This behavior can occur if you configure your display adapter to use a 32-bit
	color palette.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the color palette to High Color (16-bit) or 256
	colors. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Color Palette box, click High Color (16-bit) or 256 Colors.
	
	  NOTE: If you are using Windows 98, click High Color (16-bit) or 256 Colors in
	  the Colors box.
	
	5. Click OK. If you are prompted to restart your computer, click Yes.
	
	Additional query words: 1996 kbmm multi multi-media media mmtitles ipf kbimu mm
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbimu kbfaq
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaWorldAtlas1996
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
