---
layout: page
title: "Q134512: Problems Installing Hardware Drivers Across NetWare Network"
permalink: /kb/134/Q134512/
---

## Q134512: Problems Installing Hardware Drivers Across NetWare Network

{% raw %}

	Article: Q134512
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
	
	When you try to install the drivers for new hardware from a NetWare server by
	clicking the Have Disk button, you may receive the message "No devices were
	found."
	
	CAUSE
	=====
	
	If an Oem.inf file exists on a user-level-security share that you have not yet
	accessed, no devices are found. This occurs because the Add New Hardware Wizard
	handles security differently than Windows Explorer does.
	
	RESOLUTION
	==========
	
	Use Windows Explorer to connect to and then disconnect from the share containing
	the drivers, and then set up the hardware again.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
