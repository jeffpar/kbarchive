---
layout: page
title: "Q125218: Madge Smart 16/4 AT Plus Ringnode Token Ring Adapter Fails"
permalink: /kb/125/Q125218/
---

## Q125218: Madge Smart 16/4 AT Plus Ringnode Token Ring Adapter Fails

	Article: Q125218
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows NT version 3.5 using a Madge Smart 16/4 AT Plus Ringnode
	Token Ring adapter, it may fail and the following error message appears:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	The following events are written to the system log of Event Viewer:
	
	  Event ID: 5002, Source: MdgMPort, Type: Error
	  Description: Adapter MdgMPort1: The adapter failed to initialize.
	
	  Event ID: 7000, Source: Service Control Manager, Type: Error
	  Description: The MdgMPort service failed to start due to the
	  following error: A device attached to the system is not
	  functioning.
	
	  Event ID: 2012, Source: Srv, Type: Error
	  Description: The server has encountered a network error.
	
	  Event ID: 2504, Source: Server, Type: Error
	  Description: The server could not bind to the transport
	  \Device\Nbf_MdgMPort1.
	
	  Event ID: 9006, Source: Nbf, Type: Error
	  Description: Nbf could not find adapter \Device\MdgMPort1.
	
	  Event ID: 9005, Source: Nbf, Type: Error
	  Description: Nbf failed to bind to adapter \Device\MdgMPort1.
	
	CAUSE
	=====
	
	This problem occurs when the Madge Smart 16/4 AT Plus Ringnode Token Ring
	adapter is configured for Normal software operating mode. This token ring
	adapter has two software operating modes: Normal mode and AT mode. By default,
	the adapter is set to Normal mode, and if the adapter is used in Normal mode,
	you can only use the drivers shipped with the Madge Token Ring adapter. If the
	adapter is used in AT mode, you can use previous versions of the drivers, and
	the Madge configuration software cannot override the I/O base address, Ring
	Speed, and SmartROM switch settings.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do the following:
	
	1. Boot the system to MS-DOS.
	
	2. Run ATPMODE.EXE (software utility that is shipped with the Madge Token Ring
	  adapter to change the software operating mode) at the MS-DOS command line, as
	  follows:
	
	  ATPMODE /IO=0A20 /WRITE /MODE=AT
	
	  NOTE: The command above is used if the I/O base address on the adapter is set
	  to 0A20. Please refer to the Madge Token Ring adapter documentation for more
	  information about this utility.
	
	3. For more information, contact Madge Networks Technical Support at (800)
	  876-2343.
	
	The Madge products discussed here is manufactured by Madge Networks, Inc., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt nic netcard port
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
