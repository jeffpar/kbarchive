---
layout: page
title: "Q132584: Detection Hangs with NE2000 While Running Lantastic Drivers"
permalink: /kb/132/Q132584/
---

## Q132584: Detection Hangs with NE2000 While Running Lantastic Drivers

	Article: Q132584
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
	
	When you run hardware detection in Windows 95 on a computer that is configured
	for a LANtastic network, your computer locks up.
	
	CAUSE
	=====
	
	Windows 95 cannot perform safe detection on a computer with LANtastic drivers
	running. Unsafe detection on network cards can make a computer lock up.
	
	
	RESOLUTION
	==========
	
	Run Windows 95 Setup again and select the Safe Recovery option. After Setup is
	finished, make sure the IRQ for the network card is detected correctly by
	starting Device Manager and checking the properties of the network card on the
	Resources tab. If the IRQ is not correct, you need to select the correct IRQ
	manually.
	
	MORE INFORMATION
	================
	
	The LANtastic network is manufactured by Artisoft, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: crash hardware
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
