---
layout: page
title: "Q224303: SNA Server Allows Range of IP Ports w/ Distributed Link Service"
permalink: /kb/224/Q224303/
---

## Q224303: SNA Server Allows Range of IP Ports w/ Distributed Link Service

	Article: Q224303
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP3,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fea kbFEA
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP3, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	If a connection is configured to activate "On Demand" or "By Administrator," the
	node will issue an initial Open Link request. When the connection is activated,
	the node issues a Close Link request, then an Open Link request for the actual
	connection. If a distributed link service (DLS) is configured to use a fixed IP
	port number through the LocalIPport registry entry, the second Open Link request
	will fail because the port will be in a Time_Wait state from the first
	Open/Close Link request.
	
	A new registry entry has been added to allow a range of IP ports. This registry
	entry is necessary to allow the connection to recover or be recycled in a timely
	fashion. The remote link service will cycle through the range of ports specified
	in LocalIPPortRange until it either finds a free port or has exhausted all ports
	in the specified range. To add this registry key, perform the following steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaRemx\Parameters\SnaTCP
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: LocalIPPortRange
	  Data Type: REG_DWORD
	  Value: 1 (The default value is 1.)
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	SNA Server 4.0
	--------------
	
	This feature is available in the latest service pack for SNA Server version 4.0.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	SNA Server 3.0
	--------------
	
	This feature is available in the latest service pack for SNA Server version 3.0.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fea kbFEA 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP3 kbSNAServ400SP2
	Version           : :3.0 SP3,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
