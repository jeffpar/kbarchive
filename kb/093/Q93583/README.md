---
layout: page
title: "Q93583: Unable to Connect to a Server Using Thomas Conrad TC6242 Card"
permalink: /kb/093/Q93583/
---

## Q93583: Unable to Connect to a Server Using Thomas Conrad TC6242 Card

	Article: Q93583
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a Thomas Conrad TC6242 network adapter card with Windows for
	Workgroups, you must set the card for enhanced mode. If the card is set for
	compatible mode, you cannot connect to resources from Microsoft MS-DOS. If you
	try to connect to a server from Windows, you receive the following error
	message:
	
	  Unable to read from drive <x>
	
	where "x" is the drive letter of the server to which you are trying to connect.
	
	WORKAROUND
	==========
	
	To correct this problem, set the jumper on the TC6242 card to enhanced mode by
	setting the eighth pin on switch block sw1 to the down position (On).
	
	MORE INFORMATION
	================
	
	Enhanced Mode
	-------------
	
	Enhanced mode should be used when you want to optimize communication performance
	and minimize memory address conflicts with other hardware. This mode is also
	designed for the Thomas Conrad accelerated drivers, which feature expanded
	memory addressing options and faster data transfer. In enhanced mode, the
	adapter's base I/O address is memory mapped. Enhanced mode is the default
	setting for this card.
	
	Compatible Mode
	---------------
	
	Compatible mode should be used when you are using third-party drivers. This mode
	operates with any Novell RX-Net-compatible driver or the Thomas Conrad GXL/ARC
	driver (a global, high performance network shell driver for ArcNet adapters). In
	this mode, the adapter's I/O address must be manually set on switch block sw3.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
