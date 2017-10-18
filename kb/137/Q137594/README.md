---
layout: page
title: "Q137594: System Hangs Using EtherExpress PRO/100 in EISA/PCI Computer"
permalink: kb/137/Q137594/
---

## Q137594: System Hangs Using EtherExpress PRO/100 in EISA/PCI Computer

	Article: Q137594
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
	
	If you are using an Intel EtherExpress PRO/100 EISA-based network adapter in a
	computer with both an EISA and a PCI bus, the computer may stop responding
	(hang) when you try to install Windows 95 or copy the Windows 95 cabinet (.cab)
	files from a server. This problem can occur regardless of the network protocols
	or clients in use, but does not occur on computers with only an EISA bus, or if
	you are using real-mode (NDIS 2) network drivers.
	
	CAUSE
	=====
	
	This problem is caused by bus timing problems that occur when both an EISA and a
	PCI bus are present in a computer.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. In Control Panel, double-click the Network icon.
	
	2. Click the Intel EtherExpress PRO/100 (EISA) network adapter, and then click
	  Properties.
	
	3. Click the Advanced tab.
	
	4. In the Property box, click Off, and then change the number in the Value box
	  to 10.
	
	5. In the Property box, click On, and then change the number in the Value box to
	  10.
	
	6. Click OK.
	
	NOTE: The above procedure may not completely eliminate this problem, but should
	significantly improve system stability when you are accessing the network. To
	completely eliminate the problem, you must use real-mode drivers for the Intel
	EtherExpress PRO/100 network adapter. To configure the adapter to use real-mode
	drivers, follow these steps:
	
	1. In Control Panel, double-click the Network icon.
	
	2. Click the Intel EtherExpress PRO/100 (EISA) network adapter, and then click
	  Properties.
	
	3. Click the Real Mode (16 Bit) NDIS Driver option button.
	
	4. Click OK.
	
	You may want to contact the network adapter's manufacturer to inquire about a
	possible updated protected-mode driver that resolves this problem.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
