---
layout: page
title: "Q93165: Intel EtherExpress Card Conflicts with Scanning Hardware"
permalink: /kb/093/Q93165/
---

## Q93165: Intel EtherExpress Card Conflicts with Scanning Hardware

	Article: Q93165
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You install Windows for Workgroups, and your graphics scanning device doesn't
	work.
	
	CAUSE
	=====
	
	The base I/O port address for many graphics scanning devices is 300. Because
	this is also the default I/O port address for the Intel EtherExpress card that
	is included with the Windows for Workgroups Starter Kit, many graphics scanning
	devices don't work with Windows for Workgroups until you change the port address
	on one of the cards.
	
	WORKAROUND
	==========
	
	To work around this problem, change the base I/O port address on either the
	graphics scanning device or the EtherExpress card.
	
	To change the port for the EtherExpress card:
	
	1. Run Control Panel and choose the Network icon.
	
	2. Choose the Adapters button.
	
	3. Select the EtherExpress card from the Network Adapters In Use list.
	
	4. Choose the Setup button.
	
	5. Change the Base I/O Port address to an address that does not conflict with
	  your graphics scanning device (or any other hardware devices) in your system.
	
	Additional query words: 3.1 3.10 3.11 card nic hardware software package text scan scanner
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
