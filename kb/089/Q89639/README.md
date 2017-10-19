---
layout: page
title: "Q89639: WRKs NEWIPX May Not Upgrade IPX.COM"
permalink: /kb/089/Q89639/
---

## Q89639: WRKs NEWIPX May Not Upgrade IPX.COM

	Article: Q89639
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): ; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Resource Kit 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The NEWIPX utility, included with the Microsoft Windows Resource Kit for
	operating system version 3.1, may not upgrade a Novell NetWare IPX.COM file if
	it is unable to determine the current IPX.COM configuration.
	
	MORE INFORMATION
	================
	
	NEWIPX uses the Novell NetWare linker (NLINK.EXE) to generate a new IPX.COM with
	an updated version of IPX.OBJ. To do this, NEWIPX must be able to determine the
	current configuration of the IPX.COM file before making any changes to it. If
	NEWIPX cannot determine the current IPX.COM configuration, then it will be
	unable to configure the newly generated IPX.COM so that it will still work. In
	this case, NEWIPX returns the error message:
	
	  Error: cannot duplicate original settings from "IPX.COM" in upgrade.
	  No upgrade performed.
	
	At this point the IPX.COM is still intact and has not been modified.
	
	If NEWIPX cannot determine the current IPX.COM configuration, the problem may be
	related to the IPX.COM file having a "Configurable by Jumpers" option.
	
	When an IPX.COM is generated using the "Jumpers Configurable" option (assuming it
	has this option), initially it will be unusable until the JUMPERS utility is run
	to configure the IPX.COM. If an IPX.COM file has been generated in this way and
	has not yet been configured by JUMPERS, the NEWIPX utility cannot determine the
	configuration and returns the above error message.
	
	The Novell NetWare IPX.COM file is generated from two parts:
	
	1. An IPX.OBJ file, which is what NEWIPX attempts to upgrade.
	
	2. A network-card specific .OBJ file. This file is referred to as the "driver"
	  and is specific to the Network Interface Card (NIC).
	
	These parts are linked together by NLINK.EXE, the Novell NetWare linker, using
	either the WSGEN or SHGEN Novell utilities, depending upon the version of Novell
	NetWare in use. (SHGEN and WSGEN both generate IPX.COM files.)
	
	An IPX.COM file has a fixed list of configuration options dependent on the
	driver. Some drivers, however, have an option that allows the Novell NetWare
	JUMPERS utility to be used to select the IRQ, I/O Base Address, and Base Memory
	address individually.
	
	For more information on WSGEN, JUMPERS, SHGEN, NLINK, or IPX.COM files and their
	configuration, consult your Novell NetWare documentation.
	
	For information on using the NEWIPX utility, see the IPX.WRI file that ships with
	NEWIPX in the Windows 3.1 Resource Kit.
	
	The NetWare Turbo RX-Net ARCnet driver is an example of a JUMPERS-configurable
	driver that ships with Novell NetWare version 3.11.
	
	Additional query words: 3.10 3.11 shell generation generate spx new ipx novell 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :; WINDOWS:3.1,3.11
	
	=============================================================================
	
