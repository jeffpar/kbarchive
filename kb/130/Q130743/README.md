---
layout: page
title: "Q130743: Setup Does Not Detect IBM Token Ring 16/4 on IBM Aptiva"
permalink: kb/130/Q130743/
---

## Q130743: Setup Does Not Detect IBM Token Ring 16/4 on IBM Aptiva

	Article: Q130743
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
	
	When you install Windows 95 on an IBM Aptiva computer, the IBM Token Ring 16/4
	network adapter in the computer may not be detected. If the network adapter is
	not detected, it does not function after you install Windows 95.
	
	CAUSE
	=====
	
	This problem can occur if your IBM Aptiva computer contains a Sound Blaster
	sound card that is configured to use a base I/O address of 220. A Sound Blaster
	card using this base address prevents Windows 95 from detecting the IBM Token
	Ring network adapter.
	
	
	RESOLUTION
	==========
	
	To allow Windows 95 to detect and use the IBM Token Ring network adapter, change
	the base I/O address that the Sound Blaster card uses to an address other than
	220. For information about how to do so, please refer to the Sound Blaster
	documentation or contact the hardware manufacturer.
	
	MORE INFORMATION
	================
	
	This behavior can also occur with other IBM computer models, including the 350-
	and 750-series desktop computers. These computers contain a VIBRA 16 CT2800
	sound card, with the same problem as described above.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
