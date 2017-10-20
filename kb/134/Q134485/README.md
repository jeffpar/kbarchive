---
layout: page
title: "Q134485: After Dynamic Load/Unload of NDIS3, Server Service Stops"
permalink: /kb/134/Q134485/
---

## Q134485: After Dynamic Load/Unload of NDIS3, Server Service Stops

{% raw %}

	Article: Q134485
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IPX/SPX-compatible protocol and File And Print Sharing for
	Microsoft Networks, other computers can no longer connect to your computer.
	
	CAUSE
	=====
	
	When the IPX protocol is dynamically loaded and unloaded, VSERVER cannot
	properly handle the system messages to start and stop. VSERVER is the component
	that provides sharing for Microsoft Networks.
	
	RESOLUTION
	==========
	
	To workaround this problem, restart your computer after dynamically loading or
	unloading the IPX protocol.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
