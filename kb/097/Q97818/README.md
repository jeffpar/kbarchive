---
layout: page
title: "Q97818: Memory Manager Hangs System with Net Card Memory Conflict"
permalink: kb/097/Q97818/
---

## Q97818: Memory Manager Hangs System with Net Card Memory Conflict

	Article: Q97818
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If the LOAD [protocol] command in AUTOEXEC.BAT causes a system with a memory
	manager to hang, it can be due to the memory manager failing to exclude memory
	used by the network card. This is caused by a loading sequence problem, and can
	be corrected by using the proper exclude parameter to reserve network card
	memory areas.
	
	SYMPTOMS
	========
	
	In a system using a memory manager, the LOAD [protocol] command in AUTOEXEC.BAT
	hangs the system. This can indicate a conflict with the shared RAM segment of
	the network adapter.
	
	CAUSE
	=====
	
	The memory manager cannot automatically exclude memory used by the network card
	because the memory is not detectable in the system until the card's device
	driver loads, which is AFTER the memory manager loads.
	
	RESOLUTION
	==========
	
	Use the appropriate exclude parameter in CONFIG.SYS to exclude the memory taken
	up by the network card. Some cards use two blocks (RAM and ROM), and neither is
	automatically detected.
	
	Check the documentation included with the particular memory manager to use the
	correct syntax.
	
	For example, to exclude the 32K beginning at segment D000 with EMM386, the
	exclude syntax is:
	
	  X=D000-D800
	
	Notice that the second number is the start of the usable block, not the end of
	the excluded block.
	
	Additional query words: 386MAX NETROOM QEMM UMB EXPANDED 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
