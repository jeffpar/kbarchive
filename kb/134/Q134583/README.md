---
layout: page
title: "Q134583: Xircom PE3 Parallel Adapter Does Not Work on Toshiba Laptops"
permalink: /kb/134/Q134583/
---

## Q134583: Xircom PE3 Parallel Adapter Does Not Work on Toshiba Laptops

{% raw %}

	Article: Q134583
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
	
	The protected-mode driver for the Xircom PE3 Pocket Ethernet Parallel Port
	Adapter may not function correctly on Toshiba laptop computers that support
	bidirectional parallel ports.
	
	CAUSE
	=====
	
	The protected-mode driver from Xircom does not support the bidirectional
	parallel ports on these computers.
	
	RESOLUTION
	==========
	
	To correct the problem, use any one of the following methods:
	
	- Contact Xircom to inquire about obtaining an updated driver.
	
	- Use the real-mode driver for the adapter. For information about installing
	  this driver, please consult the adapter's documentation or manufacturer.
	
	- If you installed Windows 95 from a CD-ROM, install the Pe3ndis.vxd driver
	  from the Drivers\Network\Xircom folder.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
