---
layout: page
title: "Q106274: Certain Network Adapters Can Use DMA Channels 0-3 Only"
permalink: /kb/106/Q106274/
---

## Q106274: Certain Network Adapters Can Use DMA Channels 0-3 Only

{% raw %}

	Article: Q106274
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Windows for Workgroups version 3.11 with a network
	adapter that uses direct memory access (DMA) in Slave DMA mode, only DMA
	channels 0, 1, 2, and 3 can be used.
	
	NOTE: An example of a network adapter that uses Slave DMA mode is the
	Hewlett-Packard 27248A EtherTwist card.
	
	If the card operates in Master DMA mode, it can work on any available DMA
	channel.
	
	CAUSE
	=====
	
	This problem is due to a limitation in the Windows for Workgroups 3.11 Virtual
	Direct Memory Access driver (VDMAD).
	
	WORKAROUND
	==========
	
	The only workaround is to use DMA channel 0, 1, 2, or 3 for your network
	adapter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Windows for
	Workgroups version 3.11 VDMAD driver. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	Additional query words: 3.11 hewlett packard HP27248A
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
