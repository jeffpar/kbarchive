---
layout: page
title: "Q126854: NetWare Servers On FDDI Ring with Windows NT 3.5 May Fail"
permalink: /kb/126/Q126854/
---

## Q126854: NetWare Servers On FDDI Ring with Windows NT 3.5 May Fail

	Article: Q126854
	Product(s): Microsoft Windows NT
	Version(s): 3.50
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
	
	When you start Windows NT version 3.5 using a Cabletron EISA F70XX FDDI adapter
	with the Gateway Service for NetWare (GSNW) or the Client Service for NetWare
	(CSNW), the NetWare servers residing on the same FDDI ring may fail.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Type the following at the NetWare console prompt to modify the STARTUP.NCF
	  file:
	
	  LOAD INSTALL
	
	2. Add or change the following line in the STARTUP.NCF file:
	
	  Set Maximum Physical Receive Packet Size=8192
	
	  NOTE: The default value is 4096.
	
	The F70XX FDDI adapter and NetWare products discussed here are manufactured by
	Cabletron and Novell, Inc., vendors independent of Microsoft; we make no
	warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
