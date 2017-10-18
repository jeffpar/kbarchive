---
layout: page
title: "Q89098: Novell Err Msg: Error Sending on Network, Abort, Retry?"
permalink: kb/089/Q89098/
---

## Q89098: Novell Err Msg: Error Sending on Network, Abort, Retry?

	Article: Q89098
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Novell workstations can produce the following error message when attempting to
	run Windows in 386 enhanced mode
	
	  Network Error on Server XXXXXXXX:Error Sending on network
	  Abort, Retry?
	
	-or-
	
	  System Error cannot read from device NETWORK
	
	where XXXXXXXXX represents the file server name.
	
	CAUSE
	=====
	
	These messages mean the client (workstation) and the server are no longer
	communicating. The error conditions is caused by one of the following:
	
	- IRQ conflict with the network card
	
	- Windows 3.0 and 3.0a patch is needed
	
	- Server is no longer operating
	
	- RAM or base I/O address conflict with network card
	
	NOTE: You cannot disable this error message (CASTOFF /ALL does not work.)
	
	MORE INFORMATION
	================
	
	To resolve the problem, you must first determine where the communication problem
	is located. Follow each set of procedures, below, until you locate the cause.
	
	Determining How the Network Card Is Configured
	----------------------------------------------
	
	1. Search the hard drive for IPX.COM. There should be one copy only. When you
	  find the file, change to the directory where IPX.COM resides.
	
	2. Type the following at the MS-DOS command line:
	
	  ipx i
	
	This tells you the IRQ, base I/O address, RAM address, and software versions
	being used. If you see a message about the card being self-configurable, then
	you may need to run a utility program that came with the card or computer to
	find this information.
	
	NOTE: The information returned by "ipx i" may not be the exact settings of the
	network card. The card settings and the ipx settings can be different and the
	network may still connect. If this happens,Microsoft Windows may stop responding
	(hang) because of the upper memory conflict. If the card is not found at the ipx
	address, it may default to "First Software Configured Adapter." The card is
	simply searched out and its settings are used.
	
	When you are reconfiguring a network card, you must generate a new IPX.COM with
	SHGEN or WSGEN (NetWare 386). For more information about this, refer to your
	system administrator or to the Novell manuals.
	
	IRQ Conflict with the Network Card
	----------------------------------
	
	The network card should be on a unique IRQ that is not being used by any other
	device. If there is a conflict, reconfigure the network card or the other device
	to use a different IRQ.
	
	An IRQ is considered in use if it is being monitored by the peripheral interrupt
	controller (PIC). For example, if the COM2 port is using IRQ 3, and no physical
	device (printer or modem) is connected to IRQ 3, it would still be in use.
	
	Windows 3.0 and 3.0a Patch Needed
	---------------------------------
	
	If you attempt to use IRQ2 or an IRQ located on the second PIC chip, then you
	need to obtain the Novell patch VPICDA.386 and install it.
	
	If this patch is installed correctly and the error message continues, select
	another network card IRQ.
	
	Server Is No Longer Operating
	-----------------------------
	
	If the Novell server goes, then this error message appears and the workstation
	locks or hangs. This is a limitation of the Novell drivers. For more information
	on this, query on the following in the Microsoft Knowledge Base:
	
	  novell and standard and disconnects
	
	RAM or Base I/O Address Conflict with Network Card
	--------------------------------------------------
	
	The network card should have unique base I/O and RAM addresses. If there is a
	conflict or if the error message continues, try setting the base I/O address to
	300h or higher. Some network cards (such as ARCNET cards and some Western
	Digital Ethernet card), when configured for D000h do not operate properly.
	Reconfigure them for D800h.
	
	Displaying Available Network Card Hardware Configurations
	---------------------------------------------------------
	
	Change to the MS-DOS directory that contains the IPX.COM file. Type the following
	at the command line:
	
	  ipx d
	
	This displays the choices available when generating an IPX.COM for the selected
	network interface card. Current hardware configuration is denoted by an
	asterisk.
	
	Additional query words: 3.00 3.00a 3.10 3.11 crashes tshoot stops 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
