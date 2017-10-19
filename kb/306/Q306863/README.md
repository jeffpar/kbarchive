---
layout: page
title: "Q306863: SnaBase Fails to Start Automatically on HIS 2000 Admin Client"
permalink: /kb/306/Q306863/
---

## Q306863: SnaBase Fails to Start Automatically on HIS 2000 Admin Client

	Article: Q306863
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000 kbhis2000bug
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The SnaBase service may fail to start when you are using the Host Integration
	Server (HIS) 2000 Admin Client even though the service is configured for
	automatic startup . In addition, an event ID 590 may be logged in the
	application event log.
	
	The SnaBase service does start successfully if it is manually started after the
	system finishes its initialization.
	
	CAUSE
	=====
	
	The Setup program for the Host Integration Server 2000 Admin Client does not
	create the following registry entries for the SnaBase service:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaBase\DependOnService
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaBase\DependOnGroup
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can manually add a registry entry to correct the problem, as shown in the
	following steps.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaBase
	
	3. From the Edit menu, click Add Value, and then add the following registry
	  value:
	
	  Value name: DependOnService
	  Data type: REG_MULTI_SZ
	
	  Add the following entries to the Multi-String Editor dialog box:
	
	  LanmanWorkstation
	  NtLmSsp
	
	  NOTE: Each entry must be on a separate line. Press "ENTER" after the first
	  entry to move down to the next line. Press "ENTER" after the second entry to
	  move down to a blank line, and then click OK to close the dialog box.
	
	4. Quit Registry Editor.
	
	The DependOnGroup entry does not have to be added because it does not contain any
	values by default. If the DependOnGroup value is added manually, you must define
	it as a REG_MULTI_SZ data type and do not add any values to the Multi-String
	Editor dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	MORE INFORMATION
	================
	
	The SnaBase service cannot start until all dependency services have completed
	initialization. The SnaBase service is designed to time out if the dependency
	services do not start after 10 seconds. The Host Integration Server 2000 Admin
	Client's SnaBase service is dependent upon the following two services:
	
	  Workstation and NT LM Security Support Provider
	
	If any of these other services do not start in a timely fashion, the SnaBase
	service will not be able to start, and an event ID 590 may be logged in the
	application event log.
	
	The following Microsoft Knowledge Base article describes a registry parameter
	that can be configured to increase SnaBase's default service timeout if 10
	seconds is not sufficient:
	
	  Q192807 SNABase Service Fails to Start on SNA Server
	
	The ServerStartupTimeout registry parameter applies to the Windows NT Client for
	SNA Server and the Host Integration Server 2000 Admin Client in addition to SNA
	Server and HIS 2000 Server. This parameter was added to SNA Server 3.0 SP4 and
	SNA Server 4.0 SP2 and is available in all later versions.
	
	The Host Integration Server 2000 Admin Client can be configured to allow SnaBase
	to operate as either a service or an application. If SnaBase is configured to
	operate as an application, the problem described in this article is not likely
	to occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
