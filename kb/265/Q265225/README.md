---
layout: page
title: "Q265225: INF: HIS2000 AD Client Is Slow to Find Restarted Server"
permalink: /kb/265/Q265225/
---

## Q265225: INF: HIS2000 AD Client Is Slow to Find Restarted Server

	Article: Q265225
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When a Host Integration Server 2000 client is configured to use Active Directory
	to locate server resources, and a server is started after the client SnaBase
	process, any client application (such as 3270, Logical Unit Application [LUA],
	advanced program-to-program communications [APPC], or Common Programming
	Interface for Communications [CPIC]) may not be able to get a session through
	the newly started server for several minutes.
	
	During this time, an APPC application may receive an [MC_]ALLOCATE failure when
	the application attempts to open a session through the newly started server. For
	example:
	
	  primary_rc = 0xF004 (AP_COMM_SUBSYSTEM_NOT_LOADED)
	  secondary_rc = 0xF0000001
	
	Or, if the newly started server is the only one that supports the remote APPC LU
	being requested, the following error message may be returned:
	
	  primary_rc = 0x0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 0x0000015B (AP_BAD_PARTNER_LU_ALIAS)
	
	Likewise, a CPIC application will receive this error when it issues an Allocate
	(CMALLC) request:
	
	  rc = 20 (CM_PRODUCT_SPECIFIC_ERROR)
	
	Even though the server has been started, the Host Integration Server 2000 client
	only queries the Active Directory for new server state information after 7
	minutes has elapsed. If a client application attempts to open a new session, and
	the locally cached server information is more than 7 minutes old, the client
	will then retrieve new state information from Active Directory before attempting
	to contact the server.
	
	See the "More Information" section of this article for instructions on
	configuring a client registry parameter to specify a shorter refresh interval.
	However, note that Active Directory has a replication delay between servers
	within a site and across sites that is outside the control of Host Integration
	Server 2000. For additional information, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q214678 How to Modify the Default Intra-Site Domain Controller Replication
	
	MORE INFORMATION
	================
	
	When a Host Integration Server 2000 client is configured to use Active Directory
	and the client SnaBase process starts, it scans the Active Directory
	organizational unit for all running servers and caches the server state
	information within an internal "service table" within client memory. When an SNA
	application attempts to open a session, the client checks if the service table
	information is 7 minutes old. If not, the client attempts to activate a session
	through a running server, using the state information within its local service
	table. If the service table information is more than 7 minutes old, the client
	requeries the Active Directory for the latest server state information before it
	attempts to contact a server.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can configure the Host Integration Server 2000 client with a different
	refresh interval by setting the ServiceTableRefreshTime registry key as
	follows:
	
	If a server installation or an admin client installation is being used (where the
	admin client SnaBase is configured to run as a service):
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Snabase\Parameters\ServiceTableRefreshTime:
	  REG_DWORD: (time in minutes)
	
	If the end-user client or the admin client is being used (where the admin client
	SnaBase is not running as a service):
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Snabase\Parameters\ServiceTableRefreshTime:
	  REG_DWORD: (time in minutes)
	
	If not configured, ServiceTableRefreshTime defaults to 7 minutes. All values
	except 0 are accepted.
	
	NOTE: When the server-side SnaBase, MngAgent, and SNA Server services start, and
	Active Directory is being used, these services register themselves as "running"
	by adding an object within the Active Directory organizational unit. You can see
	these objects by using the Active Directory Users and Computers MMC Snap-In.
	From the View menu, choose Advanced Features, and examine the following
	objects:
	
	[Domain Name]  (for example,subdomain.NTTEST.MICROSOFT.COM)
	- [Organizational Unit Name]  (for example, SNAOU)
	 - snaResources
	   - snaServerServices
	     - snaBases
	         Name              Type
	         SERVER1/SNABASE   msHostIntegrationServerService
	         SERVER2/SNABASE   msHostIntegrationServerService
	
	     - snaMngagents
	         Name              Type
	         SERVER1/MNGAGENT  msHostIntegrationServerService
	         SERVER2/MNGAGENT  msHostIntegrationServerService
	
	     - snaNodes
	         Name              Type
	         SERVER1/SNASERVR  msHostIntegrationServerService
	         SERVER2/SNASERVR  msHostIntegrationServerService
	
	 - snaWMIServers
	         Name
	         SERVER1
	         SERVER2
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	
	=============================================================================
	
