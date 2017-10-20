---
layout: page
title: "Q131669: Error Message: Invalid Entry for DMAChannel in PROTOCOL.INI"
permalink: /kb/131/Q131669/
---

## Q131669: Error Message: Invalid Entry for DMAChannel in PROTOCOL.INI

{% raw %}

	Article: Q131669
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
	
	When you are using a DCA IRMAtrac Convertible Token Ring network adapter in ISA
	mode, you may receive the following error message when you use the NET START
	command:
	
	  Invalid entry for DMAChannel in PROTOCOL.INI
	
	This problem occurs only if you are loading real-mode (NDIS 2) drivers for the
	network adapter.
	
	CAUSE
	=====
	
	The network adapter is configured to use DMA channel 3 or 7. Windows 95 does not
	support the use of DMA channel 3 or 7 with the DCA IRMAtrac Convertible Token
	Ring network adapter.
	
	RESOLUTION
	==========
	
	Configure the network adapter to use DMA channel 5 or 6 in ISA mode. To do so,
	follow these steps:
	
	1. Use the right mouse button to click My Computer, then click Properties on the
	  menu that appears.
	
	2. Click the Device Manager tab.
	
	3. Click the DCA network adapter, then click Properties. Note that you may have
	  to expand a branch of the hardware tree by double-clicking the branch, or
	  clicking the plus sign (+) to the left of the branch, before you can click
	  the network adapter.
	
	4. Click the Resources tab.
	
	5. Click Direct Memory Access, then click Change Setting.
	
	6. Type the DMA channel you want to use, then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
