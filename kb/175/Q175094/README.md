---
layout: page
title: "Q175094: XADM: ErrMsg Attempting to Install Exchange 5.5 on WinNT 3.5"
permalink: kb/175/Q175094/
---

## Q175094: XADM: ErrMsg Attempting to Install Exchange 5.5 on WinNT 3.5

	Article: Q175094
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to install Exchange Server version 5.5 on a Windows NT Server
	version 3.51 computer, the following error messages will appear:
	
	  Setup.Exe Entry Point Not found
	  The procedure entry point TryEnterCriticalSection could not be located
	  in the dynamic link library KERNEL32.dll.
	
	-and-
	
	  Setup.Exe Application Error
	  The application failed to initialize properly (oxc00000139). Click on OK
	  to terminate the application.
	
	CAUSE
	=====
	
	Exchange Server version 5.5 is intended to be installed only on Windows NT
	Server version 4.0 Service Pack 3 or later.
	
	MORE INFORMATION
	================
	
	The following message will be displayed if you attempt to install Exchange
	Server 5.5 on Windows NT Server version 4.0 with no service packs:
	
	  This version of Microsoft Exchange Server requires Windows NT Server
	  version 4.0 (Build 1381: Service Pack 3) or later.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	
	=============================================================================
	
