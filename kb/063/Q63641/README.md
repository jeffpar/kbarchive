---
layout: page
title: "Q63641: Configuring IBM PS/2s &amp; 3Com Adapters for Thick Ethernet"
permalink: kb/063/Q63641/
---

## Q63641: Configuring IBM PS/2s &amp; 3Com Adapters for Thick Ethernet

	Article: Q63641
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	To configure an IBM PS/2 Micro Channel Architecture (MCA) bus computer with a
	3Com EtherLink/MC 3C523 adapter for thick Ethernet, you must boot from the
	Reference Disk and set the "Transceiver Type" option to "External
	Transceiver(DIX)" for the Ethernet card.
	
	This differs from the thick Ethernet configuration of an ISA standard computer
	with a 3Com EtherLink II 3C503 adapter, where the line "Transceiver = External"
	must be in the PROTOCOL.INI file.
	
	The following steps can be used to make this modification:
	
	1. Boot from the Reference Disk.
	
	2. Choose the Main Menu option.
	
	3. Choose Set Configuration, and go to the appropriate section. For example:
	
	     SLOT5     3Com EtherLink/MC Ethernet Adapter
	      Enable/Disable Adapter............Adapter Enabled
	      I/O Address Range.................300 to 307
	      Interrupt Level...................Channel 3
	      Packet Buffer RAM Address Range...0C0000 to 0C5FFF
	      Transceiver Type..................External Transceiver(DIX)
	
	4. Set "Transceiver Type" to the following:
	
	     External Transceiver(DIX)
	          for thick Ethernet (with a 15 pin DIX connector)
	
	     On-Board Transceiver(BNC)
	          for thin Ethernet (with a BNC "T-connector")
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
