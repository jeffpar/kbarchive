---
layout: page
title: "Q167206: XFOR: Extension LSQVIEW Could Not Be Loaded"
permalink: /kb/167/Q167206/
---

## Q167206: XFOR: Extension LSQVIEW Could Not Be Loaded

	Article: Q167206
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup exc4 exc5 exc55
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you load the LinkAge connector property pages under Windows NT Server 4.0,
	the following error message appears:
	
	  Extension "LSQVIEW" could not be loaded.
	
	CAUSE
	=====
	
	The LinkAge connector property pages require a DLL, Rpcdce4.dll, that does not
	exist in Windows NT Server 4.0.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Copy Rpcdce4.dll from the Linkage (or Linkage\Redist) directory into
	  Winnt\system32 directory wherever you are running the Exchange Server
	  Administrator program remotely.
	
	-OR-
	
	- Copy Rpcdce4.dll be from the Winnt\System32 directory from a Windows NT 3.51
	  computer to the WINNT\SYSTEM32 directory of the Windows NT Server 4.0
	  computer where you are running the Exchange Server Administrator program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup exc4 exc5 exc55 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2; winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
