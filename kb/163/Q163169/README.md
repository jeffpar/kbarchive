---
layout: page
title: "Q163169: Windows NT Does Not Recognize Second PCMCIA Network Adapter"
permalink: /kb/163/Q163169/
---

## Q163169: Windows NT Does Not Recognize Second PCMCIA Network Adapter

	Article: Q163169
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have multiple identical PCMCIA (PC Card) network adapters installed,
	Windows NT recognizes only the first adapter.
	
	CAUSE
	=====
	
	This is a limitation of the NDIS support layer in Windows NT. This limitation
	does not exist with PCI, EISA, ISA, and MCA network adapters.
	
	RESOLUTION
	==========
	
	To use multiple PC Card network adapters simultaneously, the adapters must not
	be identical. PC Card network adapters from different manufacturers, or
	different models from the same manufacturer, work correctly.
	
	MORE INFORMATION
	================
	
	The optional parameters in the database inform Pcmcia.sys how the slot is to be
	configured. This configuration information is required because most network
	adapters do not specify the correct information. The following parameters are
	valid in this section:
	
	  AttributeMemorySize: REG_DWORD: Size
	  CardMemorySize: REG_DWORD: Size
	
	This information is stored in the driver section of the registry. Because only a
	single set of optional parameters can be associated with a PC Card adapter, only
	one card of a particular type can be used.
	
	REFERENCES
	==========
	
	Windows NT Device Driver Kit Design Guide for Network Cards:
	
	  Chapter 2: Miniport NIC Drivers
	  Chapter 7: NDIS NIC Driver Installation
	  Chapter 7.2: PCMCIA Network Interface Card Support in Windows NT
	  Chapter 7.2.1: Optional Parameters in the PCMCIA
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
