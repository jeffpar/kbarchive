---
layout: page
title: "Q64793: Bus Speed 3C603 Token Link Card Problem w/ LAN Manager"
permalink: kb/064/Q64793/
---

## Q64793: Bus Speed 3C603 Token Link Card Problem w/ LAN Manager

	Article: Q64793
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	  When attempting to start OS/2 or MS-DOS LAN Manager version 2.x for the first
	  time on a Gateway 2000 (25-MHz 386, 8 MB) computer with a 3Com 3C603 Token
	  Link card, NET STARTing the server causes the OS/2 system to hang. At this
	  point, only a power shutdown can revive the system.
	
	CAUSE
	=====
	
	  By default, a Gateway 2000 computer has a bus speed of 12 MHz, which must be
	  changed to 8 MHz by setting the appropriate jumpers on the motherboard. Once
	  the bus speed has been set to a lower value (8 MHz), the 3C603 Token Link
	  card will work correctly, and so will OS/2 or DOS LAN Manager.
	
	  The reason the bus speed must be changed is that all ISA net cards are
	  designed to run with a bus clock of 6 to 8.333 MHz. Therefore, a higher (or
	  different) bus clock frequency will affect all ISA devices in an unspecified
	  manner.
	
	  EISA devices (net cards) are designed to handle higher bus clock frequencies
	  (up to 33 MHz).
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
