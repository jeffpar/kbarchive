---
layout: page
title: "Q140905: PCI Device Settings Not Retained with Safe Recovery Option"
permalink: /kb/140/Q140905/
---

## Q140905: PCI Device Settings Not Retained with Safe Recovery Option

{% raw %}

	Article: Q140905
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
	
	If Windows 95 Setup is terminated abnormally after the hardware detection
	portion of Setup has run on a computer using PCI devices, the PCI device
	settings are not retained when you run Setup again and choose the Safe Recovery
	option. Specifically, settings for the keyboard, mouse, and display drivers are
	not retained.
	
	CAUSE
	=====
	
	Setup does not receive device information from all the enumerated branches when
	you use the Safe Recovery option.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Remove the PCI devices in Device Manager, and then use the Add New Hardware
	  tool in Control Panel to redetect them.
	
	- Run Setup again and do not use the Safe Recovery option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
