---
layout: page
title: "Q217215: XADM: SP2 Update Fails: Procedure Entry Point Error w/Netif.dll"
permalink: /kb/217/Q217215/
---

## Q217215: XADM: SP2 Update Fails: Procedure Entry Point Error w/Netif.dll

{% raw %}

	Article: Q217215
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2
	Last Modified: 26-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the Exchange Server 5.5 Service Pack 2 update, you may encounter an error
	message about failing to upgrade Mdbperf.dll. If you choose to abort the Setup
	at this time, the following error will occur when you attempt to rerun the
	update or start the Exchange services:
	
	  Dsamain.exe -Entry Point Not Found The procedure entry point
	  ?HrRegisterProtocol@@YGJPAVPROTO@@FJJJKHPAXK@Z could not be located in the
	  dynamic link library Netif.dll.
	
	CAUSE
	=====
	
	The Netif.dll file version was a pre-Service Pack 2 2448 build version.
	
	RESOLUTION
	==========
	
	Rename the Netif.dll file on the Exchange Server in the Exchsrvr\Bin directory,
	and copy it from the Service Pack 2 CD. In Control Panel, click Services, and
	attempt to start the directory service manually. Proceed to the Information
	Store and Message Transfer Agent services next.
	
	If a service does not start, you may need to obtain that service executable from
	the Service Pack 2 CD. The name of the service executables are:
	
	  System Attendant - Mad.exe
	  Directory Service - Dsamain.exe
	  Information Store - Store.exe
	  Message Transfer Agent - Emsmta.exe
	
	When all of the core services start successfully, you will need to reinstall
	Service Pack 2.
	
	MORE INFORMATION
	================
	
	This error is usually encountered when Mdbperf.dll is in use. This file is
	opened by Performance Monitor. It will be necessary to stop all performance
	monitors set to run against the server performing the upgrade.
	
	NOTE: Customers may also report the following error message:
	
	  STORE.EXE
	  The procedure entry point could not be located in the dynamic link library
	  Msvcrt.dll.
	
	Customers should copy the files Store.exe and Msvcrt.dll from the latest service
	pack.
	
	NOTE: If you apply the following Store hotfix:
	
	  5.5.2611.9
	
	you also need to apply the following DSA hotfix:
	
	  5.5.2600.0
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
