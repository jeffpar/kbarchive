---
layout: page
title: "Q272225: SNA Server and NetBIOS ScopeIDs on Windows 2000 Server"
permalink: kb/272/Q272225/
---

## Q272225: SNA Server and NetBIOS ScopeIDs on Windows 2000 Server

	Article: Q272225
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP3; :
	Operating System(s): 
	Keyword(s): kbDSupport kbsna
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server and Host Integration Server are not compatible with NetBIOS ScopeIDs
	on a Microsoft Windows 2000 Server. If a ScopeID is enabled, it is not possible
	to add link services from SNA Server Manager or SNA Management Console. The user
	interface does not respond for several minutes. It eventually recovers, although
	the link service is not added.
	
	MORE INFORMATION
	================
	
	If the ScopeID is disabled, SNA Server works as expected. There are no known
	problems with SNA Server and ScopeIDs in a computer that is running Microsoft
	Windows NT. If ScopeIDs are required, there are two ways to work around this
	problem:
	
	- Disable the ScopeID and add the link service, then re-enable the ScopeID.
	
	- Use the LINKCFG command-line utility to add the link service.
	
	For additional information about this utility, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q262807 How to Use the SNA Server Linkcfg.exe on Windows 2000
	
	REFERENCES
	==========
	
	For additional information about NetBIOS ScopeIDs, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q244438 How to Enable NetBIOS Scope IDs in Windows 2000
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP3; :
	
	=============================================================================
	
