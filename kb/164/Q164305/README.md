---
layout: page
title: "Q164305: Performance Problems Using USB Camera"
permalink: /kb/164/Q164305/
---

## Q164305: Performance Problems Using USB Camera

{% raw %}

	Article: Q164305
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv osr2 win95 win98
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.1 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a USB camera with certain PCI video cards in Windows 95 OEM Service
	Release version 2.1 (OSR2.1), performance may be reduced or your computer may
	seem to stop responding (hang). Video playback may also be affected.
	
	CAUSE
	=====
	
	Certain PCI video cards may not work well with isochronous transactions, which
	USB cameras require. The video card may require several attempts to complete an
	operation.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the following steps:
	
	1. In Control Panel, double-click Display.
	
	2. On the Settings tab, click Advanced Properties.
	
	3. On the Performance tab, move the Hardware Acceleration slider to None.
	
	4. Click OK or Close until you return to Control Panel. When you are prompted to
	  restart the computer, do so.
	
	
	Additional query words: 95 pcmcia
	
	======================================================================
	Keywords          : kbenv osr2 win95 win98 
	Technology        : kbWin95search kbWin98search kbOPKSearch kbWin98 kbWin95OPKOSR210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
