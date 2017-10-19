---
layout: page
title: "Q90918: MS-DOS Applications in Windows with Proteon Network Cards"
permalink: /kb/090/Q90918/
---

## Q90918: MS-DOS Applications in Windows with Proteon Network Cards

	Article: Q90918
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Proteon P-1392 or P-1390 ProNET network cards with Microsoft
	Windows or Windows for Workgroups, MS-DOS-based applications loaded from a
	network drive may cause the machine to stop responding (hang).
	
	CAUSE
	=====
	
	Proteon technical support has confirmed that MS-DOS-based applications may not
	run properly in an MS-DOS window when you use the P-1392 or P-1390 ProNET
	Proteon network cards with Windows 3.0, 3.0a, or 3.1.
	
	The symptoms occur when the Proteon card is set for bus mastering for a
	workstation that is not capable of bus mastering. In this case, the Proteon card
	becomes the bus master and takes over all I/O transfers.
	
	WORKAROUND
	==========
	
	Set the DMA channel from 5 to 0 on the Proteon card, which changes from a bus
	master to a bus slave.
	
	MORE INFORMATION
	================
	
	For more information, contact Proteon technical support.
	
	The Proteon network cards are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.0 freeze hang lockup lock up crash
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
