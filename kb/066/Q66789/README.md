---
layout: page
title: "Q66789: Using 3Com EtherLink Plus w/ DOS LAN Man 2.x/Windows 3.x"
permalink: kb/066/Q66789/
---

## Q66789: Using 3Com EtherLink Plus w/ DOS LAN Man 2.x/Windows 3.x

	Article: Q66789
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Question:
	
	  I tried to run Windows version 3.0 or 3.1 in 386 enhanced mode while using a
	  3Com EtherLink Plus card. Unfortunately, Windows hung and I had to reboot my
	  machine. How can I prevent Windows from hanging?
	
	Response:
	
	  On some systems, the 3Com EtherLink Plus card should not be allowed to
	  control DMA transfers when running Windows version 3.0 or 3.1 in 386 enhanced
	  mode. The following method can be used to disable the card's control of the
	  DMA by adding one of the following lines to the [ELNKPL_NIF] section of the
	  DOS LAN Manager version 2.0 (or later) PROTOCOL.INI file:
	
	     ; Use this line if the card is in a 16-bit slot.
	        DATATRANSFER = PIO_WORD
	
	     ; Use this line if the card is in an 8-bit slot.
	        DATATRANSFER = PIO_BYTE
	
	Additional query words: 2.00 2.10 2.10a 2.20 3.00 3.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
