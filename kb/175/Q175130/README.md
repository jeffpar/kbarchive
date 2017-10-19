---
layout: page
title: "Q175130: XADM: Initialization of DLL Fails Starting Exchange Server"
permalink: /kb/175/Q175130/
---

## Q175130: XADM: Initialization of DLL Fails Starting Exchange Server

	Article: Q175130
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During computer startup, the following error message may appear:
	
	  Store.exe - DLL Initialization Failed
	  Initialization of the dynamic link library
	  c:\winnt\system32\imagehlp.dll
	  failed. The process is terminating abnormally.
	
	CAUSE
	=====
	
	This error may occur if the system is running low on virtual memory. Depending
	on the amount of resources available, one or more services may report this
	error.
	
	RESOLUTION
	==========
	
	You may increase the amount of virtual memory by going to Control Panel,
	clicking the System icon, and clicking the Performance tab. Increasing the
	amount of physical memory on this computer may also be necessary.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	
	=============================================================================
	
