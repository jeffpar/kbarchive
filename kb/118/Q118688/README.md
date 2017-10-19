---
layout: page
title: "Q118688: Problems Using COM3 or COM4 on a Gateway Computer"
permalink: /kb/118/Q118688/
---

## Q118688: Problems Using COM3 or COM4 on a Gateway Computer

	Article: Q118688
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
	
	You do not have access to the COM3 or COM4 port on your Gateway computer.
	
	CAUSE
	=====
	
	Some Gateway computers do not release the interrupt when they are finished using
	COM1 or COM2, thus preventing Windows 95 from using COM3 or COM4.
	
	
	WORKAROUND
	==========
	
	1. Consult your hardware manual or Gateway Technical Support for assistance
	  setting the extended COM port to use an interrupt other than 3 or 4.
	
	  NOTE: Most Gateway computers support IRQ 2, 5, and 7.
	
	2. In Windows 95, use Device Manager to change the settings for the COM port as
	  follows:
	
	  a. Click the Start button, point to Settings, then click Control Panel.
	
	  b. Double-click the System icon.
	
	  c. Click the Device Manager tab.
	
	  d. Click the PLUS SIGN (+) to expand the Ports listing, then double- click
	     the appropriate communications port.
	
	  e. Click the Resources tab, then double-click the Interrupt Request option.
	
	  f. Choose an IRQ other than 3 or 4.
	
	MORE INFORMATION
	================
	
	Gateway computers are manufactured by a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: gateway 2000 onboard accessing 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
