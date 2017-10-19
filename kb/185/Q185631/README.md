---
layout: page
title: "Q185631: Connectivity Problems Using Olicom ATM Adapter"
permalink: /kb/185/Q185631/
---

## Q185631: Connectivity Problems Using Olicom ATM Adapter

	Article: Q185631
	Product(s): Microsoft Windows NT
	Version(s): WinNT: 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a computer running Windows NT temporarily looses its physical connectivity
	(disconnection and reconnection of cable) to an ATM network, clients cannot
	re-establish a NetBIOS session without the server being restarted.
	
	RESOLUTION
	==========
	
	There is a new Olicom OC-615x driver, version 3.55 that resolves this problem.
	You can verify that the new version of the driver is loaded by running Olicom
	Adapter Information for Windows (AIW - this will be renamed to LanScout in the
	future) which came with the ATM adapter. Pressing F3 to generate a report.
	
	MORE INFORMATION
	================
	
	The problem has been experienced with a computer running Windows NT 4.0
	connected to an ATM network using an Olicom OC-615x (OC-6151 & OC-6152) with
	driver version 3.54. Olicom has confirmed that this is because of the way the
	driver reports the functional address to the NetBIOS stack when re- establishing
	the connection. Lower parts of the stack are unaffected, as the server still has
	TCP/IP connectivity.
	
	This problem is also experienced in earlier versions of the driver.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT: 4.0
	Issue type        : kbprb
	
	=============================================================================
	
