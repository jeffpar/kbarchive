---
layout: page
title: "Q135668: Hardware Detection Hangs with Xircom Pocket Ethernet Adapter"
permalink: kb/135/Q135668/
---

## Q135668: Hardware Detection Hangs with Xircom Pocket Ethernet Adapter

	Article: Q135668
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
	
	The hardware detection portion of Setup may stop responding (hang) if you have a
	Xircom Pocket Ethernet adapter connected to a parallel port on your computer
	using a Phantom Power cable.
	
	CAUSE
	=====
	
	The Phantom Power cable plugs into the PS/2 mouse port and the Xircom Pocket
	Ethernet adapter to power the adapter. However, most laptop computers do not
	have enough power on the PS/2 mouse port to fully power the Xircom adapter. This
	problem has been observed with the following Xircom parallel port adapters:
	
	- PE3-10B2 (BNC connector)
	
	- PE3-10BT (twisted pair)
	
	- PE3-10BC (both BNC and twisted pair)
	
	
	RESOLUTION
	==========
	
	Use the AC power cord supplied with the Xircom power adapter during Setup. Once
	Setup is finished, you can use the Phantom Power cable.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
