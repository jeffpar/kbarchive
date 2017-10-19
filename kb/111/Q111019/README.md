---
layout: page
title: "Q111019: List of Hardware Devices and Common I/O Base Address Conflicts"
permalink: /kb/111/Q111019/
---

## Q111019: List of Hardware Devices and Common I/O Base Address Conflicts

	Article: Q111019
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install a network adapter card, sound card, or other hardware adapter,
	you typically have to choose an input/output (I/O) base address. If the base
	address you choose for your network adapter card is currently being used by
	another hardware adapter card, Protocol Manager may report an unsuccessful
	binding, or your system may stop responding (hang).
	
	This article provides a list of I/O base addresses that may already be in use on
	your system and what hardware devices use them.
	
	NOTE: Most network adapter cards have the default I/O base address 300.
	
	MORE INFORMATION
	================
	
	The I/O base address for each hardware adapter card installed on your system
	must be unique to avoid potential problems. Before you install your network
	adapter card, you should know which I/O base addresses are currently in use by
	existing hardware adapter cards installed in your system. I/O base addresses are
	typically set using jumpers on the card or using a software configuration
	program in EPROM.
	
	The following list shows I/O base address ranges commonly used by hardware
	devices (other than network adapter cards) and what I/O base address they would
	conflict with.
	
	The I/O base address list does not list all available I/O base address. In
	addition, some of these addresses may not be supported by your network adapter
	card. For more information on I/O base addresses supported by your network
	adapter card, consult your hardware documentation or contact the network adapter
	card vendor.
	
	Potential conflicting devices and their I/O base addresses:
	
	                                                     Potential I/O Base
	  Device                              Range Used       Address Conflict
	  ---------------------------------------------------------------------
	  Game Controller                      200-20F               200
	  Expansion unit                       210-217               200
	  LPT3:                                278-27F*              260
	  LCD display on Wyse 2108 PC                                280
	  COM4                                 2E8-2EF               2E0
	  COM2                                 2F8-2FF               2E0
	  XT Hard drives                                             320
	  LPT2:                                378-37F*               360
	  Secondary Bi-Sync interface          380-38C               380
	  Primary Bi-Sync interface            3A0-3A9               3A0
	  Monochrome Display/Printer Card      3B0-3BF               3A0
	  LPT1:                                3BC-3BF*               3A0
	  EGA Adapter                          3C0-3CF               3C0
	  CGA Display                          3D0-3DF               3C0
	  COM3                                 3E8-3EF               3E0
	  Floppy Controller                    3F0-3F7               3E0
	  COM1-Asynchronous Communications     3F8-3FF               3E0
	
	NOTE: Some video cards use I/O base address 320. If you are using I/O base
	address 320 for your network adapter card and are experiencing problems, try a
	different I/O base address.
	
	* These addresses are for older PS/2 computers. ISA computers use the following
	address ranges:
	
	    Device   Range Used
	    -------------------
	    LPT1:    378-37F
	    LPT2:    278-27F
	    LPT3:    3BC-3BF
	
	
	The information in this article can also be found on page 20 of the SMC Elite 16
	network card manual.
	
	Additional query words: 3.10 3.11 nic interface board boards
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
