---
layout: page
title: "Q179289: XFOR: IMS Fails to Start w/ Multiple RelayFlags Reg Entries"
permalink: kb/179/Q179289/
---

## Q179289: XFOR: IMS Fails to Start w/ Multiple RelayFlags Reg Entries

	Article: Q179289
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Internet Mail Service fails to start and it generates an application
	exception. The following is an example of the application exception that will be
	displayed in Windows NT and allow the user to break into the debugger:
	
	  The application, exe\MSEXCIMC.dbg, generated an application error. The
	  error occurred on 12/ 2/1997 @ 17:27:29.240 The exception generated was
	  c0000005 at address 77f64654 (RtlAllocateHeap)
	
	CAUSE
	=====
	
	Exchange Server has the registry entries RelayFlags and "RelayAllowList"
	configured under the Internet Mail Service with multiple entries.
	
	The following is an example:
	
	  RelayFlags REG_DWORD 2
	   RelayAllowList REG_MULTI_SZ 192.168.42.1 192.168.42.2
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
