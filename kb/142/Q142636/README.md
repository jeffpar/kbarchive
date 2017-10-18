---
layout: page
title: "Q142636: Kernel Debugger 3.51 Not Compatible with Windows NT 4.0"
permalink: kb/142/Q142636/
---

## Q142636: Kernel Debugger 3.51 Not Compatible with Windows NT 4.0

	Article: Q142636
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Kernel Debugger provided with the 3.51 DDK and with the Windows NT 3.51
	distribution compact disc is not compatible with Windows NT 4.0.
	
	If you run the Kernel Debugger of Windows NT 3.51 to debug a Windows NT 4.0 host,
	it cannot connect to the host. Moreover, the Windows NT 4.0 host stops
	responding at restart time when trying to connect to the debugger.
	
	RESOLUTION
	==========
	
	Debugging a Windows NT 4.0 host with the Kernel Debugger requires the debugger
	computer to use the Windows NT 4.0 Kernel Debugger. The Kernel Debugger is
	provided both in the Support\Debug directory of the Windows NT distribution
	compact disc and with the DDK for Windows NT 4.0.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
