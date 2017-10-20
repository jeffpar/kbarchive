---
layout: page
title: "Q130733: Cannot Connect with Evercom 2400 Modem"
permalink: /kb/130/Q130733/
---

## Q130733: Cannot Connect with Evercom 2400 Modem

{% raw %}

	Article: Q130733
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an Evercom 2400 modem to dial with a program such as HyperTerminal
	or The Microsoft Network, the modem dials, connects, stops responding (hangs)
	for a while, and then disconnects.
	
	CAUSE
	=====
	
	Windows 95 detects the Evercom 2400 as a standard modem type. For the standard
	initialization string to work with this modem, the maximum port speed needs to
	be set to 2400.
	
	
	RESOLUTION
	==========
	
	To set the maximum port speed to 2400, use these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click Properties.
	
	4. In the Maximum Speed box, click 2400.
	
	5. Click OK or Close until you return to Control Panel.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
