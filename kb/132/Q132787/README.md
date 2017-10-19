---
layout: page
title: "Q132787: Eagle NE200T PCMCIA NE200.COM ODI Driver Does Not Work"
permalink: /kb/132/Q132787/
---

## Q132787: Eagle NE200T PCMCIA NE200.COM ODI Driver Does Not Work

	Article: Q132787
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
	
	The Eagle NE200T PCMCIA card does not work with the provided NE200.com ODI
	driver. This only affects users trying to run the NE200.com ODI driver with a
	real mode card and socket services and any of the Microsoft protected mode
	32-bit network clients.
	
	CAUSE
	=====
	
	The driver from Eagle conflicts with the Msodisup.Vxd file because it randomly
	writes to memory space required by Microsoft network support.
	
	RESOLUTION
	==========
	
	Run the ODI driver with the real mode Novell Netware Client. This requires the
	removal of any of Microsoft's network clients.
	
	-or-
	
	Use the Microsoft 32-bit network driver for this card. Use of this driver
	requires the installation of the Microsoft Client for Netware that provides the
	user with full 32-bit network functionality on a Netware network.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
