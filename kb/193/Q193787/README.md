---
layout: page
title: "Q193787: Memory Leaks on HP NetServers Running HP TopTools v3.11"
permalink: kb/193/Q193787/
---

## Q193787: Memory Leaks on HP NetServers Running HP TopTools v3.11

	Article: Q193787
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Memory leaks in the HP SCSIINFO Agent, the HPLER agent, or the HP NIC agent may
	be observed on Hewlett Packard computers that have HP TopTools for Servers
	version 3.11. Side effects of these memory leaks may include "Out of Virtual
	Memory" messages or the complete system may stop responding (hang) when memory
	is totally exhausted.
	
	Performance Monitor logs indicate that Private Bytes and Virtual Bytes for these
	processes are increasing linearly with time.
	
	MORE INFORMATION
	================
	
	Some versions of HP TopTools have memory leaks. Version 3.2 of the HP NT Agents
	should fix the problem and be available on the Hewlett Packard Web site in
	September 98.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
