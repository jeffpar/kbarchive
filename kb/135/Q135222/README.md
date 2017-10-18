---
layout: page
title: "Q135222: IRQ and DMA Resources Not Listed for ECP Port"
permalink: kb/135/Q135222/
---

## Q135222: IRQ and DMA Resources Not Listed for ECP Port

	Article: Q135222
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
	
	When you view an ECP port in Device Manager, the only resource listed for the
	port may be the I/O resource. There may not be IRQ or DMA resources listed.
	
	CAUSE
	=====
	
	Windows 95 cannot detect the IRQ and DMA usage on some ECP ports. When this
	occurs, Device Manager reports an ECP port with no IRQ or DMA resources, and the
	port is treated as an ordinary LPT port.
	
	RESOLUTION
	==========
	
	To use the ECP features of the port, change the port's configuration in Device
	Manager to use the correct IRQ and DMA resources.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
