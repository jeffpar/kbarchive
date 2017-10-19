---
layout: page
title: "Q321159: Event IDs 5125 and 5149 After You Start SNA Manager in HIS 2000"
permalink: /kb/321/Q321159/
---

## Q321159: Event IDs 5125 and 5149 After You Start SNA Manager in HIS 2000

	Article: Q321159
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you start SNA Manager in Host Integration Server 2000, you may receive the
	following error message when you expand the local subdomain:
	
	  "Error Opening SubDomain"
	
	Additionally, SNA Manage Agent logs the following two Windows Application
	events:
	
	  
	
	  Event Type: Error
	  Event Source: SNA Manage Agent
	  Event Category: None
	  Event ID: 5125
	  Date: 3/19/2002
	  Time: 9:35:32 AM
	  User: N/A
	  Computer: HISTEST
	  Description:
	  Initialization of agent/proxy has failed.Proxy failed to obtain the local domain name. 
	  For more information, see Help and Support Center at <http://go.microsoft.com/fwlink/events.asp>. 
	
	  Event Type: Error
	  Event Source: SNA Manage Agent
	  Event Category: None
	  Event ID: 5149
	  Date: 3/19/2002
	  Time: 9:38:32 AM
	  User: N/A
	  Computer: HISTEST
	  Description:
	  Manage base error - error in accessing the domain table. The local domain name is not valid 
	  For more information, see Help and Support Center at <http://go.microsoft.com/fwlink/events.asp>. 
	
	NOTE: To open and manage the SNA subdomain, right-click Microsoft SNA Manager,
	and then click Open SubDomain. In the Start SNA Manager for ... dialog box,
	click Remote SNA SubDomain, and then specify either the \\<IP address> or
	\\<HostIntegrationServerName>.
	
	NOTE: This behavior does not occur when you run the SNA Manager included with the
	Host Integration Server 2000 Admin Client.
	
	CAUSE
	=====
	
	This behavior occurs if the Microsoft Windows 2000 Remote Registry service has
	been turned off or stopped.
	
	RESOLUTION
	==========
	
	To resolve this issue, start the Remote Registry service. To do this, open
	Control Panel, point to Administrative Tools, and then click Services.
	
	MORE INFORMATION
	================
	
	SNA Manage Agent traces (MGAINTx.atf) should show the following statements when
	this issue occurs:
	
	  
	
	  07c8:06dc 13:09:26.0859 semfdmra.c(6209) RRSDFS RegConnectRegistry failed : error 53
	  07c8:06dc 13:09:26.0859 semfdmra.c(6158) DGLSD RegReadSNADomainFromSponsor failed
	  07c8:06dc 13:09:26.0859 mngagent.cpp(1469) DoAgentProxy DMODGetLocalSNADomain failed
	  07c8:06dc 13:09:26.0859 mngglobl.cpp(1587) MngSetLocalDomain Setting Local Domain to ~ERROR~ 
	
	Error 53 is a Win32 error that means the following:
	
	  The network path was not found.
	
	The RegConnectRegistry function is a Win32 API that establishes a connection to a
	registry key. The SNA Manage Agent tries to connect to HKEY_LOCAL_MACHINE on the
	sponsor server, which is the local Host Integration Server 2000 computer, in
	this case. If the Remote Registry service is not running, this call to
	RegConnectRegistry fails, and then you receive the following error message:
	
	  The network path was not found.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q153183 How to Restrict Access to the Registry from a Remote Computer
	
	NOTE: By default, on Microsoft Windows NT 4.0-and-later systems, only members of
	the Administrators group have Full Control permission to remotely access the
	registry (members of the Backup Operators group have Read permission).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbprb kbhostintegserv2000
	
	=============================================================================
	
