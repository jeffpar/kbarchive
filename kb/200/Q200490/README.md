---
layout: page
title: "Q200490: XADM: Installing Exchange Server 5.5 SP1 on a Cluster"
permalink: kb/200/Q200490/
---

## Q200490: XADM: Installing Exchange Server 5.5 SP1 on a Cluster

	Article: Q200490
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp1
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Installing Exchange Server 5.5 Service Pack 1 (SP1) on a computer running
	clustering services provided by Windows NT 4.0 Service Pack 4 (SP4) release
	candidate is not recommended. Setup may not work because the IrpStackSize
	parameter is too small.
	
	MORE INFORMATION
	================
	
	If the following entry is created in the Windows NT application event log during
	installation of Exchange Server 5.5 SP1, you can use a workaround to run
	clustering services and SP1.
	
	  ID: 2011
	  Source: srv
	  The server's configuration parameter "irpstacksize" is too small for the
	  server to use a local device. Please increase the value of this parameter.
	
	The workaround is to increase the value of the IrpStackSize parameter.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	- If the following DWORD key exists in the registry, increase the current value
	  by one.
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\
	  Lanmanserver\Parameters\IrpStackSize
	
	- If this registry key does not exist, add it to the registry, and set the
	  value to 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
