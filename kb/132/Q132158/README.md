---
layout: page
title: "Q132158: Third Port Detected with CMD PCI Dual Port IDE Controller"
permalink: /kb/132/Q132158/
---

## Q132158: Third Port Detected with CMD PCI Dual Port IDE Controller

	Article: Q132158
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
	
	When you are using a CMD PCI Dual Port IDE controller with at least one device
	on both the primary and secondary port, Device Manager displays a third port.
	The third port is displayed with an exclamation point inside a yellow circle.
	
	
	CAUSE
	=====
	
	The Plug and Play BIOS in your computer is erroneously reporting that a third
	port is present.
	
	
	RESOLUTION
	==========
	
	Windows 95 does not allocate any resources to the third port, and the existence
	of the third port in Device Manager should not cause any problems. However, if
	you want to disable the third port, follow these steps:
	
	1. Use the right mouse button to click My Computer, then click Properties on the
	  menu that appears.
	
	2. Click the Device Manager tab.
	
	3. Click the third port, then click Properties. Note that you may need to expand
	  a branch of the hardware tree by double-clicking the branch, or by clicking
	  the plus sign (+) to the left of the branch, before you can click the port.
	
	4. Click the Original Configuration (Current) check box to clear it, then click
	  OK.
	
	For more information about this problem, please contact your computer
	manufacturer.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
