---
layout: page
title: "Q153062: Picture of Modem Does Not Appear in Modem Activity Window"
permalink: /kb/153/Q153062/
---

## Q153062: Picture of Modem Does Not Appear in Modem Activity Window

{% raw %}

	Article: Q153062
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
	
	When you double-click the modem icon on the task bar, a window displaying modem
	activity appears. However, in some cases the picture of a modem may not be
	visible in this window, although the bytes sent, bytes received, connection
	speed, connection duration, and OK button all appear correctly.
	
	CAUSE
	=====
	
	This behavior can occur if the Color Palette setting in Display properties is
	set to True Color (24 bit) or True Color (32 bit).
	
	RESOLUTION
	==========
	
	To view the picture of the modem in the window, change the Color Palette setting
	in Display properties to use a lower setting. To do so, follow these steps:
	
	1. In Control Panel, double-click Display.
	
	2. Click the Settings tab.
	
	3. In the Color Palette box, click High Color (16 bit), 256 Color, or 16 Color.
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	Additional query words: hyperterminal connect icon tray
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
