---
layout: page
title: "Q153480: XADM: Exchange Stops Responding; Event 7200 1711 1025"
permalink: kb/153/Q153480/
---

## Q153480: XADM: Exchange Stops Responding; Event 7200 1711 1025

	Article: Q153480
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Client or Microsoft Exchange Server stops responding and/or
	events similar to the following are reported in the Application Log of Event
	Viewer:
	
	  7200
	  MSExchangeIS Private
	  Error
	  Background thread FDoMaintenance halted due to error code 4015.
	
	  7200
	  MSExchangeIS Private
	  Error
	  Background thread FDoQuotaCheck halted due to error code 4015.
	
	  1171
	  MSExchangeDS
	  Error
	  Exception c0000005 has occured with parameters 404762 and 0 (Internal ID
	  1101093). Please contact Microsoft Product Support Services for
	  assistance.
	
	  1025
	  MSExchangeIS Private
	  Warning
	  An error occurred. Function name or description of problem:
	  EcGenerateReadReport: Error: 1244
	
	CAUSE
	=====
	
	These problems occur when the maximum size paged of non-paged pool that can be
	allocated by one process has been limited on the Microsoft Exchange Server
	computer.
	
	The non-paged pool is an area of system memory reserved for objects that must
	remain in physical memory as long as they are active. The paged pool is an area
	of system memory reserved for objects that can be paged to disk when they are
	not being used.
	
	The maximum amount of space that can be allocated by one process in the paged and
	non-paged pools is controlled with the following registry keys:
	
	  PagedPoolQuota
	  NonPagedPoolQuota
	
	These registry keys are located in the following registry path:
	
	  HKEY_LocalMachine\SYSTEM\CurrentControlSet\Control\Session
	  Manager\Memory Management
	
	The default value of these registry keys is 0. If a nonzero value between 1 and
	128 has been specified, no single process can allocate more space in the pool
	than the specified amount.
	
	When value of these registry keys is set to 0, there are no pool quotas.
	
	RESOLUTION
	==========
	
	Make sure these registry keys are set to the default value of 0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	
