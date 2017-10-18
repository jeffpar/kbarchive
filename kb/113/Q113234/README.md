---
layout: page
title: "Q113234: Windows Hangs with SMC Ethernet 16 Elite Ultra 16T Adapter"
permalink: kb/113/Q113234/
---

## Q113234: Windows Hangs with SMC Ethernet 16 Elite Ultra 16T Adapter

	Article: Q113234
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows for Workgroups version 3.11, the system stops
	responding (hangs) after you type "win" (without the quotation marks) at the
	MS-DOS command prompt when you are using the SMC Ethernet 16 Elite Ultra 16T
	adapter.
	
	CAUSE
	=====
	
	This problem occurs because Network Setup detects this network card as a
	Starcard Plus and installs the driver for that card. This driver does not work
	properly with the new SMC Ethernet 16 Elite Ultra 16T adapter.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Run Windows with the network disabled. To do this type "win /n" (without the
	  quotation marks) at the MS-DOS command prompt.
	
	2. Run Network Setup from the Network group.
	
	3. Choose Drivers.
	
	4. Select the Starcard and then choose Remove.
	
	5. Install the correct driver for your card by choosing Add Adapter and then
	  Unlisted Or Updated Driver.
	
	6. When prompted by the system, install the updated driver provided by SMC for
	  this card.
	
	MORE INFORMATION
	================
	
	Versions of SMC SuperDisk earlier than version 6.4 do not work correctly with
	Windows for Workgroups version 3.11. SuperDisk versions 6.4 and later ship a
	corrected OEMSETUP.INF file, as well as NDIS 3 driver support. If you do not
	have the latest SuperDisk or driver, you can download AWW311.EXE from the SMC
	bulletin board service or the SMC forum (type "go SMC" (without the quotation
	marks)) on CompuServe.
	
	For more information, call Standard Microsystems Technical Support.
	
	The Ethernet 16 Elite Ultra 16T adapter is manufactured by Standard Microsystems,
	a vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: 3.11 phoneref
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
