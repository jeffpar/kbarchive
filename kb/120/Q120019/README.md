---
layout: page
title: "Q120019: Windows NT Remote Printer Administration Limitations"
permalink: /kb/120/Q120019/
---

## Q120019: Windows NT Remote Printer Administration Limitations

	Article: Q120019
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50 3.51
	
	WINDOWS
	
	kbprint ntprint
	
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
	
	Although the "Microsoft Windows NT System Guide" states that Print Manager can
	create, remove, and administer printers on remote servers, it has the following
	limitations administering remote server print queues:
	
	- The Print menu Connect To Printer option connects printers only on the local
	  server, even when the focus is set to a remote server. If you want to create
	  a NetWare printer that is shared through the Gateway service, you must create
	  it at the local machine (because you have to create a connection to the
	  NetWare printer share).
	
	- When creating a printer on a remote server, Print Manager cannot choose a
	  printer that is not physically connected to that remote server. When you
	  attempt to create remote printer, the following error message appears:
	
	  The parameter is incorrect
	
	- The Print menu Connect To Printer option under Windows NT 3.5 can create a
	  printer based on a port that is already defined on the remote server. If you
	  choose Create Printer from the Print menu and attempt to connect to a port
	  for DLC or LPR, the following error appears:
	
	  Could not add port. The network request is not supported.
	
	  This type of action requires the DLL, which is responsible for managing the
	  port, to load. Loading the DLL across the network is not supported at this
	  time.
	
	Additional query words: prodnt 3.10 view
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
