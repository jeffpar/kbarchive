---
layout: page
title: "Q136107: TC4045 Token Ring Adapter Detected But Does Not Work"
permalink: /kb/136/Q136107/
---

## Q136107: TC4045 Token Ring Adapter Detected But Does Not Work

	Article: Q136107
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
	
	When you install a Thomas Conrad TC4045 Token Ring network adapter, the adapter
	is detected properly but may not function because it is assigned the wrong
	resources.
	
	CAUSE
	=====
	
	Windows 95 assigns the factory default IRQ and DMA channel resources for this
	network adapter, which may conflict with other device settings. Windows 95
	assigns a correct base I/O address for the adapter.
	
	RESOLUTION
	==========
	
	To assign the correct IRQ and DMA channel resources for the TC4045 network
	adapter, follow these steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, click Computer, and then click the Properties
	  button.
	
	3. Click the Interrupt Request (IRQ) option button, and note an available IRQ
	  setting.
	
	4. Click the Direct Memory Access (DMA) option button, and note an available DMA
	  setting.
	
	5. Click Cancel.
	
	6. Double-click the Network Adapters branch to open it, click the TC4045
	  adapter, and then click Properties.
	
	7. On the Resources tab, click the Use Automatic Settings check box to clear it.
	
	8. In the Resource Settings box, click Interrupt Request. Click Change Setting,
	  and then enter the IRQ setting you noted in step 3. Click OK.
	
	9. Repeat step 8 for the DMA channel setting. Click OK until you return to
	  Control Panel.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
