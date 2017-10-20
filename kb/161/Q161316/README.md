---
layout: page
title: "Q161316: Ejecting Network PC Card from CardBus Socket Reboots Computer"
permalink: /kb/161/Q161316/
---

## Q161316: Ejecting Network PC Card from CardBus Socket Reboots Computer

{% raw %}

	Article: Q161316
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you eject a PC Card (PCMCIA) network adapter from a CardBus socket without
	stopping the card in PC Card properties, your computer may restart.
	
	CAUSE
	=====
	
	This behavior occurs when the PC Card network adapter is removed from the
	CardBus socket without correctly notifying VMM, which controls the resources
	used by the PC Card.
	
	RESOLUTION
	==========
	
	To prevent this behavior from occurring, stop the PC Card network adapter using
	the PC Card tool in Control Panel or the PC Card icon on the taskbar before you
	remove the card.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

{% endraw %}
