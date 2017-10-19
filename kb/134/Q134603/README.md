---
layout: page
title: "Q134603: Cannot Change I/O Value on EtherExpress 16 Network Adapter"
permalink: /kb/134/Q134603/
---

## Q134603: Cannot Change I/O Value on EtherExpress 16 Network Adapter

	Article: Q134603
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
	
	After you change the IRQ and I/O range of the Intel EtherExpress 16 network
	adapter in Device Manager, only the IRQ changes on the network adapter.
	
	CAUSE
	=====
	
	Windows 95 is able to reassign the IRQ value on the network adapter, but cannot
	alter the I/O value.
	
	RESOLUTION
	==========
	
	To change the I/O range, alter the value in Device Manager and then run Intel's
	Softset.exe tool, which is included with the network adapter.
	
	MORE INFORMATION
	================
	
	Windows 95 is able to reconfigure Plug and Play devices, but the Intel
	EtherExpress 16 network adapter is a legacy device. Such legacy devices require
	vendor-provided configuration programs to change the hardware-level settings.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
