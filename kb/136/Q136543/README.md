---
layout: page
title: "Q136543: Madge PCI Ringnode Network Adapter Hangs Using NDIS 3 Driver"
permalink: kb/136/Q136543/
---

## Q136543: Madge PCI Ringnode Network Adapter Hangs Using NDIS 3 Driver

	Article: Q136543
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
	
	If you install the NDIS 3.1 driver for the Madge Smart 16/4 PCI Ringnode token
	ring network adapter, your computer may stop responding (hang) at startup.
	
	You may also experience problems using the NDIS 3.1 driver for the Madge Smart
	16/4 Ringnode MCA network adapter.
	
	CAUSE
	=====
	
	There is a hardware compatibility problem between the Madge Smart 16/4 PCI
	Ringnode token ring network adapter and some computers.
	
	RESOLUTION
	==========
	
	Use the NDIS 2 drivers for the network adapter. The NDIS 2 drivers should be
	included with the network adapter or should be available from Madge.
	
	MORE INFORMATION
	================
	
	The following computers may not be able to use the NDIS 3.1 driver:
	
	- NEC Ready P60M, AMI BIOS revision 1.0.01
	
	- Digital Starion Minitower PC
	
	- Gateway 2000 4DX2-66P, Phoenix BIOS revision 1.03
	
	- Dell Latatude XPI90
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
