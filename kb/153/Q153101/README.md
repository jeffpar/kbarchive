---
layout: page
title: "Q153101: EnumPrinters Fails When Enumerating Connected Printers"
permalink: /kb/153/Q153101/
---

## Q153101: EnumPrinters Fails When Enumerating Connected Printers

{% raw %}

	Article: Q153101
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a service, or an application running in the context of a service (for
	example, started by the scheduler service), calls EnumPrinters with the
	PRINTER_ENUM_CONNECTIONS flag to get printer connections to a Windows NT Server,
	the API might fail with error code 122 (ERROR_INSUFFICIENT_BUFFER) even if you
	have specified plenty of buffer space. It will return an arbitrary size of
	memory needed in pcbNeeded.
	
	An example of this behavior is starting Print Manager using the scheduler
	service. Since Print Manager will call this API multiple times to find how much
	memory it needs, it can end up in multiple scenarios (depending on the value of
	pcbNeeded):
	
	- An out of memory dialog box appears and then Print Manager displays a dialog
	  box stating that it could not get printer information.
	
	- Print Manager causes an Access Violation.
	
	- SPOOLSS (Spooler Services) causes an Access Violation.
	
	CAUSE
	=====
	
	To look up the printer connections, the Spooler Service, which implements this
	API on Windows NT, tries to access the registry of the calling user by accessing
	its current user hive. However, a service does not have such a hive because it
	is created by WinLogon and services are logged in by Service Control Manager.
	
	The EnumPrinter API did not handle the absence of the current user hive
	correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	The problem will be fixed in Windows NT 4.0. The API will not return connected
	printers if it cannot access the current user hive.
	
	Additional query words: 3.5 3.51 prodnt kbbug3.5 kbbug3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
