---
layout: page
title: "Q246830: Event ID 60 Occurs after Updating to Windows NT 4.0 SP4 or Later"
permalink: /kb/246/Q246830/
---

## Q246830: Event ID 60 Occurs after Updating to Windows NT 4.0 SP4 or Later

	Article: Q246830
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When SNA Server is unable to locate the Invokable Auto-started TP in the SNA
	Server Subdomain, an event ID 60 occurs in the Application Event Viewer. For
	example:
	
	  Event ID: 60
	  Source: SNA Server
	  Description: Failed to invoke APPC TP (HEX TP NAME) (ASCII TP NAME), local LU
	  = (Local APPC LU), sense data = 84c0000
	
	  Event ID: 730
	  Source: SNA Server
	  Description: The SNA Server was unable to locate an invokable TP (Name), APPC
	  LU Alias (Local APPC LU), Workstation name: (null).
	
	This Invokable TP is written as a service and is started by the Service Control
	Manager under Windows NT. The SNA Server service attempts to locate the service
	by the TP Name included in the ALLOCATE received from the Host or AS/400. When
	the status of the TP service is verified, it is either not registered or it is
	in an inactive state. SNA Server logs the event ID 60 after the timeout has been
	exceeded. The timeout setting is a configurable setting located in the
	properties of the Local LU Advanced settings. The default is 60 seconds.
	
	CAUSE
	=====
	
	This can be caused by the TP starting before the SNA Server SnaBase service has
	finished initializing.
	
	This problem can also occur when you upgrade from Windows NT Server 4.0 Service
	Pack 3 to Service Pack 4 or later. For additional information, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q197286 Third-Party Services May Fail to Start After Upgrade to NT SP4
	
	Service Pack 4 changes the order of how the services are loaded for all Windows
	NT services. Because the TP may not use the following resolution, the TP is
	loaded before the initialization of SNABASE. Therefore, the TP does not
	successfully register in the SNA Service Table. See the "More Information"
	section of this article for information concerning the importance of the SNA
	Service Table.
	
	RESOLUTION
	==========
	
	To correct this issue, perform the following steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\<TP NAME>
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	  Value Name: DependOnService
	  Data Type: REG_MULTI_SZ
	  Value: SnaBase
	
	4. Quit Registry Editor.
	
	By adding this entry, the Service Control Manager verifies that the SnaBase
	service has successfully started before starting the TP. This ensures that the
	TP will register properly with the ST, giving the proper location and active
	state information.
	
	MORE INFORMATION
	================
	
	All SNA Server services and resources are required to register themselves in the
	SNA Service Table(ST). Because the ST is a dynamic memory allocated table, the
	SNA Server service (and SNA clients) locates the needed services through the ST
	within that current SNA Server Subdomain. In this case, the Auto-started
	Invokable TP will register in the ST. With an Invoking TP, an ALLOCATE or
	MC_ALLOCATE is received by the SNA Server outbound from the HOST. In the
	ALLOCATE, the TP name resides ( for further information on the ALLOCATE review
	the SNA Server SDK included with SNA Server). The SNA Server service checks the
	TP name in the ALLOCATE, finds a match in the Service Table, and verifies that
	it is in an active state (the Invokable TP has issued a RECEIVE_ALLOCATE). Once
	this is found and verified, the conversation will continue.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
