---
layout: page
title: "Q175310: XCLN: 16-bit Exchange Client Startup Problem"
permalink: /kb/175/Q175310/
---

## Q175310: XCLN: 16-bit Exchange Client Startup Problem

	Article: Q175310
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting 16-bit Exchange Client for Windows 3.x, the user may get the
	following error message:
	
	  The MAPI spooler could not be started. Close and restart all mail-enabled
	  applications. MAPI 1.0[000004c7]
	
	WORKAROUND
	==========
	
	Modify the [Exchange Provider] section of the Exchng.ini file located in the
	Windows directory to move the protocol in use to the first in the order. For
	example, if TCP/IP is being used, list ncacn_ip_tcp first for RPC binding.
	
	For more information about general troubleshooting of the above error due to
	memory issues, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q162670 16-Bit Exchange Client Memory Issue
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
