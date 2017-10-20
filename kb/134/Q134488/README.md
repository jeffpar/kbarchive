---
layout: page
title: "Q134488: Xircom CE2 PCMCIA Network Adapter Card Problems"
permalink: /kb/134/Q134488/
---

## Q134488: Xircom CE2 PCMCIA Network Adapter Card Problems

{% raw %}

	Article: Q134488
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
	
	When you insert a Xircom CE2 PCMCIA network adapter card, the card may not work
	and the computer may not be connected to the network. When this occurs, your
	computer may stop responding (hang).
	
	CAUSE
	=====
	
	This network adapter may require a real-mode enabler or different MAC drivers to
	work.
	
	RESOLUTION
	==========
	
	To correct this problem, load the real-mode card and socket services drivers in
	the Config.sys file.
	
	Although the actual drivers that are required vary from one system to another,
	they typically look like:
	
	  device=cs.exe
	  device=sscirrus.exe
	
	MORE INFORMATION
	================
	
	There have been cases in which the NDIS 2 drivers cause the computer to hang. In
	these cases, the real-mode network drivers should be replaced with the Novell
	NetWare ODI/NETX or VLM drivers.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
