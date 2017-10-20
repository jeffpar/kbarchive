---
layout: page
title: "Q127872: APM Does Not Function with NDIS 2 Adapter Driver"
permalink: /kb/127/Q127872/
---

## Q127872: APM Does Not Function with NDIS 2 Adapter Driver

{% raw %}

	Article: Q127872
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
	
	After you install Windows 95 on a computer that supports Advanced Power
	Management (APM), the APM features in Windows 95 do not work.
	
	CAUSE
	=====
	
	This behavior occurs if you are using a real-mode (NDIS 2) network adapter
	driver in Windows 95.
	
	RESOLUTION
	==========
	
	If one is available, use a protected-mode (NDIS 3.1) driver for the network
	card. To determine whether a protected-mode driver is available for the network
	card, follow these steps:
	
	1. Use the right mouse button to click the Network Neighborhood icon and then
	  click Properties on the menu that appears.
	
	2. In the "The following network components are installed" box, click the
	  network card installed in your computer.
	
	3. Click the Properties button. If there is an "Enhanced mode (32-bit and
	  16-bit) NDIS driver" option on the Driver Type tab, there is an NDIS 3.1
	  driver for the network card. If this option does not exist on the Driver Type
	  tab, contact the manufacturer of the card to determine whether updated
	  drivers exist.
	
	MORE INFORMATION
	================
	
	Windows 95 rejects all APM requests if an NDIS 2 network card driver is
	installed. Windows 95 does this because the network mapping file (NDIS.VXD)
	cannot know in what state the real-mode driver would resume upon resumption of
	power.
	
	Additional query words: shutdown suspend
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
