---
layout: page
title: "Q121071: No Ports in Print Manager with Services for NetWare Installed"
permalink: /kb/121/Q121071/
---

## Q121071: No Ports in Print Manager with Services for NetWare Installed

	Article: Q121071
	Product(s): Microsoft Windows NT
	Version(s): 3.10
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10
	
	WINDOWS
	
	kbprint
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Services for NetWare installed, if you try to create a printer on a remote
	machine, the port entries are missing in the Print Manager Create Printer dialog
	box.
	
	CAUSE
	=====
	
	The NetWare print provider returns ERROR_NOT_SUPPORTED instead of
	ERROR_INVALID_NAME from EnumPorts().
	
	RESOLUTION
	==========
	
	Currently the only resolution is to remove Services for NetWare.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1. This
	problem was corrected in Windows NT version 3.5.
	
	
	Additional query words: prodnt 3.10 Novell gateway client nwcs ncc
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10
	
	=============================================================================
	
