---
layout: page
title: "Q132287: 3Com 3C509B ODI Driver Fails to Load in Windows 95"
permalink: kb/132/Q132287/
---

## Q132287: 3Com 3C509B ODI Driver Fails to Load in Windows 95

	Article: Q132287
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
	
	When you attempt to load the ODI driver for the 3Com Etherlink III 3C509B Plug
	and Play network adapter, the driver fails to load or is unable to find the
	adapter at the specified I/O address. However, if you restart Windows 95 and
	choose "Safe mode command prompt only" from the Startup menu, you can load LSL
	and 3C5X9.COM without errors.
	
	CAUSE
	=====
	
	This problem can occur if Windows 95 sets the adapter to Plug and Play mode
	before the 3C5X9.COM driver is loaded. Because the 3C509B adapter is a Plug and
	Play adapter, Windows 95 attempts to enumerate the adapter along with the other
	Plug and Play devices on the system during the boot process. The enumeration
	process sets the adapter to Plug and Play mode, causing it to no longer maintain
	its manually specified hardware settings. This causes the driver to fail to
	locate the adapter.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the 3C509B configuration utility to disable support
	for Plug and Play when using an ODI driver.
	
	NOTE: You can also disable Plug and Play for the 3C509B adapter by obtaining the
	latest EtherDisk (version 4.2) for the Etherlink III and running the
	PNPDSABL.BAT file located in the root directory of the disk. For more
	information about the 3Com Etherlink III or 3Com utilities, contact 3Com.
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
