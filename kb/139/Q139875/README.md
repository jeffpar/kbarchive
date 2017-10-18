---
layout: page
title: "Q139875: D-Link Network Adapter Not Recognized During Setup"
permalink: kb/139/Q139875/
---

## Q139875: D-Link Network Adapter Not Recognized During Setup

	Article: Q139875
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
	
	When you upgrade a computer from Windows for Workgroups version 3.11 to Windows
	95, the D-Link NDIS 3 network driver used in Windows for Workgroups is not
	recognized by Windows 95. When you start Windows 95, you receive the following
	error message:
	
	  Your network adapter is not working properly. You may need to set it up
	  again. For more information, see the Network Troubleshooter in Windows Help.
	
	CAUSE
	=====
	
	Windows 95 Setup detects the D-Link network adapter as an NE2000 or compatible
	network adapter, and uses the default addressing for the NE2000 or compatible
	card. Setup detects the presence of the adapter, but cannot set up the correct
	resources. Setup sets the network adapter to use IRQ 3 and I/O address 300,
	which may not work and may conflict with another device.
	
	RESOLUTION
	==========
	
	Configure the resources assigned to the network adapter to avoid a conflict. To
	do so, follow these steps:
	
	1. In Control Panel, double-click the Network icon.
	
	2. Click the network adapter, and then click Properties.
	
	3. On the Resources tab, select an available Interrupt and I/O address range.
	
	4. Click OK.
	
	5. Click OK. When you are prompted to restart your computer, do so.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
