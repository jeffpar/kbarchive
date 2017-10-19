---
layout: page
title: "Q122150: Password Validation to NT Using ODI Drivers"
permalink: /kb/122/Q122150/
---

## Q122150: Password Validation to NT Using ODI Drivers

	Article: Q122150
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11; winnt:3.1,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your Windows for Workgroups 3.11 machine is configured with Novell ODI
	drivers, and attempts to be validated by a LAN Manager or Windows NT server, you
	receive the following error message:
	
	  No domain server was available to validate your password. You were logged on
	  without password validation.
	
	CAUSE
	=====
	
	This error occurs when you run NET START FULL before you start Windows for
	Workgroups 3.11. When you run NET START FULL with ODI drivers, Windows for
	Workgroups uses the IPX transport to obtain validation. Because Windows NT 3.1
	does not recognize IPX/SPX (it recognizes IPX/SPX with NetBIOS), Windows NT 3.1
	does not validate the client machine.
	
	NOTE: In this case, Windows for Workgroups cannot use NetBEUI and IPX/SPX because
	they are protect-mode protocols and cannot be loaded from the MS-DOS command
	prompt.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Upgrade to Windows NT Advanced Server version 3.5. Windows NT Advanced Server
	  3.5 can use the IPX transport without NetBIOS.
	
	  -or-
	
	- Load ODINSUP and NETBEUI. ODINSUP allows real-mode protocols, such as
	  NETBEUI, to load so that the network can communicate with the Windows NT
	  domain server through the real-mode protocol. Because Microsoft doesn't
	  support the use of ODINSUP, this workaround has not been tested and is not
	  supported by Microsoft.
	
	  -or-
	
	- Load the Novell implementation of NetBIOS (NETBIOS.EXE) from the MS-DOS
	  command prompt. This workaround has not been tested and is not supported by
	  Microsoft.
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.11 3rdparty net ware winnt 3.10 client validation
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.1,3.5
	
	=============================================================================
	
