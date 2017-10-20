---
layout: page
title: "Q216799: STOP 0x0000007B Error on Alpha-Based Compaq Computer"
permalink: /kb/216/Q216799/
---

## Q216799: STOP 0x0000007B Error on Alpha-Based Compaq Computer

{% raw %}

	Article: Q216799
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbui kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, on platform(s):
	   - the hardware: DEC Alpha 
	- Microsoft Windows NT Workstation version 4.0, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart your computer after installing Windows NT 4.0 Service Pack 4 on
	a Compaq Alpha-based computer with a Mylex RAID controller, you may receive the
	following error message:
	
	  STOP 0x0000007B - Inaccessible Boot Device
	
	CAUSE
	=====
	
	This issue can occur because the Mylex RAID controller has a DMA configuration
	conflict with the new hardware abstraction layer (HAL) in Windows NT 4.0 Service
	Pack 4. Because of this DMA conflict, the RAID controller is unavailable when
	you start your computer, and the error message is generated.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Compaq to inquire about the availability of a fix
	for this issue.
	
	Additional query words: alpha sp4 mylex
	
	======================================================================
	Keywords          : kbenv kbhw kbui kbHardware 
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
