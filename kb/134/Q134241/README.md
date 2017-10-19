---
layout: page
title: "Q134241: PCI Bus Incorrectly Detected on IBM ValuePoint DX4-100"
permalink: /kb/134/Q134241/
---

## Q134241: PCI Bus Incorrectly Detected on IBM ValuePoint DX4-100

	Article: Q134241
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
	
	After you install Windows 95 on an IBM ValuePoint DX4-100 computer, a PCI bus is
	displayed with a red "X" in Device Manager. The PCI bus is displayed in Device
	Manager even though the computer does not have a PCI bus.
	
	CAUSE
	=====
	
	IBM ValuePoint DX4-100 computers have a mother/daughter board layout instead of
	the standard motherboard layout. This configuration causes Windows 95 to
	incorrectly detect a PCI bus in the computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Add New Hardware icon.
	
	3. Click Next, click the No option button, then click Next.
	
	4. In the Hardware Types box, click System Devices, then click Next.
	
	5. If your ValuePoint computer contains one or more VL-bus slots, click "ISA
	  Plug and Play bus with VL slots." If your computer does not contain any
	  VL-bus slots, click "ISA Plug and Play bus."
	
	6. Click Next.
	
	7. Click Finish.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
