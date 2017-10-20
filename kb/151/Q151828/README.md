---
layout: page
title: "Q151828: Automap Streets: Locator Box Missing from Overview Window"
permalink: /kb/151/Q151828/
---

## Q151828: Automap Streets: Locator Box Missing from Overview Window

{% raw %}

	Article: Q151828
	Product(s): Microsoft Automap
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbenv kbimu
	Last Modified: 19-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Streets for Windows, version 4.0 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The red locator box may be missing from the Overview window in Microsoft Automap
	Streets.
	
	CAUSE
	=====
	
	This behavior can occur if an STB PowerGraphics 64 display adapter is installed
	in the computer and is configured to use a High Color (16-bit) color palette.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the color palette to 256 colors. To do so, follow
	these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Display.
	
	3. Click the Settings tab.
	
	4. In the Color Palette box, click 256 Colors.
	
	  NOTE: If you are using Windows 98, click 256 Colors in the Colors box.
	
	5. Click OK. If you are prompted to restart the computer, click Yes.
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: kbmm auto map automap auto-map mmtitles
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbenv kbimu 
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeMMsearch kbAutomapSearch kbAutomapStreets400
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
