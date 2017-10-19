---
layout: page
title: "Q96948: WFWG: 3C509 Modem Setting May Disable Network Functionality"
permalink: /kb/096/Q96948/
---

## Q96948: WFWG: 3C509 Modem Setting May Disable Network Functionality

	Article: Q96948
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 3Com 3C509 network interface card (NIC) has a diagnostic setting to adjust
	its use of processor time if a modem is present on the computer. If a higher
	modem speed is set (such as 38.4 kilobits per second [Kbps] to 14.4 Kbps)
	instead of the default value of 9600 bits per second (BPS), the following
	problems may occur:
	
	- Loss or lack of network functionality, for example:
	
	   - Inability to send packets over the network
	
	   - Inability to maintain network connections
	
	   - Inability to be "seen" on the network
	
	- Dropped characters and/or excessive retries with modem connections.
	
	- One of the following error messages may appear after the NET START command is
	  executed:
	
	  Error #5: Access Denied
	
	  -or-
	
	  Error 5740: The Protocol Manager has reported that a protocol has failed
	  initialization
	
	WORKAROUND
	==========
	
	If any of the above problems occur, use 3Com's diagnostic utility to change the
	modem speed setting. Slower computers should lower the modem speed settings to
	2400, 1200, or No Modem to improve performance.
	
	If either of the error message persists, reset the adapter to 9600 BPS support
	(the default), then soft-boot the computer. If the message still occurs, set the
	3C509 card to No Modem.
	
	NOTE: On faster computers, there should only be a slight difference between
	settings.
	
	MORE INFORMATION
	================
	
	3Com's Etherlink III (3C509) card takes advantage of a new standard in network
	adapter architecture known as Parallel Tasking. The adapter uses Application
	Specific Integrated Circuits (ASIC) and other advanced components to allow a
	higher level of integration so that an adapter can handle multiple tasks per
	frame. Using this technology, the 3C509 adapter can use "predictive interrupts"
	to issue an interrupt to the CPU when something important is about to happen and
	continue to process user data until the CPU actually responds. Accordingly, the
	3C509 card can allocate some of its resources to affect the maximum modem speed
	setting, which is on the card. This setting allows for faster access of a modem
	on a machine using a network.
	
	The modem speed setting tells the adapter how long it can disable interrupts
	without causing problems with the serial port. The lower the modem speed, the
	longer the adapter can keep interrupts disabled. Performance issues concerning
	modem settings are more drastic on slower computers. The default value setting
	of 9600 BPS works whether you have a modem or not, or if the modem is slower
	than the default. The modem value should not be changed unless performance
	problems result.
	
	Other setting options that may be modified with the 3C509 adapter diagnostic
	utility include the following: I/O Base Address, IRQ, Boot PROM, Transceiver
	Type, and Network Driver Optimization. Additionally, the program contains the
	option to test the card and display diagnostic and troubleshooting information
	files.
	
	If the maximum modem speed of 38.400 is used, 3Com provides a patch that replaces
	the ELNK3.DOS driver in the CONFIG.SYS file. With the maximum modem setting
	enabled, this patch will protect against the PRO0032E error message that may
	display when the NDIS protocols attempt to bind at startup (bootup).
	
	The diagnostic utility (3C509N.ZIP) and the patch file (MAX509.EXE) may be
	downloaded from 3Com's bulletin board service by calling (408) 980-8204 or from
	CompuServe by typing "go Threecom" (without the quotation marks).
	
	For additional information on 3Com's 3C509 card and its diagnostic utility
	program, contact 3Com technical support at (800) 876-3266.
	
	The 3C509 network interface card is manufactured by 3Com, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	KBCategory: kbnetwork kbdisplay kb3rdparty kbhw
	KBSubcategory: wfw wfwg wincomm
	
	Additional query words: 3.1 3.10 3.11 slow
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
