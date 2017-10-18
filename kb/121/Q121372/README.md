---
layout: page
title: "Q121372: How to Configure Non-Intelligent Digiboard PC/8 Adapters"
permalink: kb/121/Q121372/
---

## Q121372: How to Configure Non-Intelligent Digiboard PC/8 Adapters

	Article: Q121372
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50 3.51
	
	WINDOWS
	
	kbhw kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Adapter drivers for the non-intelligent Digiboard PC/8 adapters are not
	available for Windows NT versions 3.1 and 3.5. The configuration for the adapter
	is accomplished through the Windows NT Registry only. This article describes how
	to configure and utilize the non-intelligent Digiboard PC/8 adapter in Windows
	NT versions 3.1 and 3.5.
	
	MORE INFORMATION
	================
	
	There are nine switch blocks on the Digiboard PC/8 adapter. Listed below are the
	switch block settings of the adapter and Registry settings for each
	communications port of the adapter.
	
	Switch Block Settings
	---------------------
	
	Switch Block One (DS1) is used to configure the adapter's Interrupt Status
	Register address.
	
	Switches       Description
	
	--------------------------
	
	Switches 1-7   Adapter I/O port address
	Switches 8-9   Set these to the ON position
	Switch 10      Enables (ON position) the Interrupt Status Register
	
	The remaining eight switch blocks are used to configured the I/O port addresses
	for each communications port of the adapter. Switch 8 on each of these blocks
	enables (ON position) the port. The I/O port addresses available range from 000H
	to 3F8H.
	
	Registry Settings
	-----------------
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start REGEDT32.EXE and locate the following Registry subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet \Services\Serial\Parameters
	
	2. Listed below are entries that need to be manually added to be able to use the
	  ports on the Digiboard PC/8 adapter. To add a key for each entry, choose Add
	  Key from the Edit menu. Enter "Serial3" (without the quotation marks) for
	  COM3 on the entry for Key Name. Leave the Class entry blank, and then choose
	  OK.
	
	  To enter each value, choose Add Value from the Edit menu. Enter values of the
	  following:
	
	     Serial3
	     -------
	     DosDevices : REG_SZ : COM3
	     ForceFifoEnable : REG_DWORD : 0x1
	     Indexed: REG_DWORD : 0x1
	     Interrupt : REG_DWORD : 0x5
	     InterruptStatus : REG_DWORD : 0x140
	     PortAddress : REG_DWORD : 0x100
	     PortIndex : REG_DWORD : 0x1
	
	     Serial4
	     -------
	     DosDevices : REG_SZ : COM4
	     ForceFifoEnable : REG_DWORD : 0x1
	     Indexed: REG_DWORD : 0x1
	     Interrupt : REG_DWORD : 0x5
	     InterruptStatus : REG_DWORD : 0x140
	     PortAddress : REG_DWORD : 0x108
	     PortIndex : REG_DWORD : 0x2
	
	     Serial5
	     -------
	     DosDevices : REG_SZ : COM5
	     ForceFifoEnable : REG_DWORD : 0x1
	     Indexed: REG_DWORD : 0x1
	     Interrupt : REG_DWORD : 0x5
	     InterruptStatus : REG_DWORD : 0x140
	     PortAddress : REG_DWORD : 0x110
	     PortIndex : REG_DWORD : 0x3
	
	     Serial6
	     -------
	     DosDevices : REG_SZ : COM6
	     ForceFifoEnable : REG_DWORD : 0x1
	     Indexed: REG_DWORD : 0x1
	     Interrupt : REG_DWORD : 0x5
	     InterruptStatus : REG_DWORD : 0x140
	     PortAddress : REG_DWORD : 0x118
	     PortIndex : REG_DWORD : 0x4
	
	     Serial7
	     -------
	     DosDevices : REG_SZ : COM7
	     ForceFifoEnable : REG_DWORD : 0x1
	     Indexed: REG_DWORD : 0x1
	     Interrupt : REG_DWORD : 0x5
	     InterruptStatus : REG_DWORD : 0x140
	     PortAddress : REG_DWORD : 0x120
	     PortIndex : REG_DWORD : 0x5
	
	     Serial8
	     -------
	     DosDevices : REG_SZ : COM8
	     ForceFifoEnable : REG_DWORD : 0x1
	     Indexed: REG_DWORD : 0x1
	     Interrupt : REG_DWORD : 0x5
	     InterruptStatus : REG_DWORD : 0x140
	     PortAddress : REG_DWORD : 0x128
	     PortIndex : REG_DWORD : 0x6
	
	     Serial9
	     -------
	     DosDevices : REG_SZ : COM9
	     ForceFifoEnable : REG_DWORD : 0x1
	     Indexed: REG_DWORD : 0x1
	     Interrupt : REG_DWORD : 0x5
	     InterruptStatus : REG_DWORD : 0x140
	     PortAddress : REG_DWORD : 0x130
	     PortIndex : REG_DWORD : 0x7
	
	     Serial10
	     --------
	     DosDevices : REG_SZ : COM10
	     ForceFifoEnable : REG_DWORD : 0x1
	     Indexed: REG_DWORD : 0x1
	     Interrupt : REG_DWORD : 0x5
	     InterruptStatus : REG_DWORD : 0x140
	     PortAddress : REG_DWORD : 0x138
	     PortIndex : REG_DWORD : 0x8
	
	3. When complete, quit REGEDT32.
	
	4. Quit Windows NT and turn off your computer.
	
	5. Restart your computer and Windows NT.
	
	COM1 through COM9 can be directly referenced just like a filename from programs
	and from the command line. However, COM10 must be referenced with the following
	syntax:
	
	  \\.\COM10
	
	NOTE: The command line MODE command does not recognize ports above COM9.
	
	The products included here are manufactured by Digiboard, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: prodnt 3.10 prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
