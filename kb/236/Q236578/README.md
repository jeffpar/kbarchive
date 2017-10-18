---
layout: page
title: "Q236578: Offline Servers Should Be Removed from Clients' Service Table"
permalink: kb/236/Q236578/
---

## Q236578: Offline Servers Should Be Removed from Clients' Service Table

	Article: Q236578
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fea kbFEA kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	SNA Clients for Microsoft Windows NT versions 4.0 Service Pack 1 (SP1) and 4.0
	Service Pack 2 (SP2), and SNA Clients for Microsoft Windows 95 and Microsoft
	Windows 98 version 4.0 SP2 may suffer long delays when trying to acquire an SNA
	resource from the subdomain if one or more configured sponsor servers are
	offline.
	
	When configured for remote access, the SNA Clients listed above have their
	sponsor SnaBase entries created with a flag that guarantees that they are never
	removed from the client's service table. This is to avoid problems if the
	sponsor connection is lost and later reopened.
	
	If the SNA Client tries to get an SNA resource from a configured server that is
	currently not available for any reason, it must wait for all connection retries
	to time out before trying another server from its list.
	
	MORE INFORMATION
	================
	
	Although this behavior is by design, there have been requests for an update to
	dynamically remove offline servers from the client's service table so that the
	client will not try to connect to the offline servers when looking for an SNA
	resource.
	
	In addition to that update, a new registry value must be added on the SNA
	Client.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Windows NT
	----------
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Snabase\Parameters\
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: DeleteNonActiveSponsors
	  Data Type: REG_SZ
	  Value: YES
	
	4. Quit Registry Editor.
	
	Windows 95 or Windows 98
	------------------------
	
	1. Start Registry Editor (Regedit.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SnaBase\Parameters\
	
	3. On the Edit menu, click New, String Value, and then add the following
	  registry value:
	
	  Value Name: DeleteNonActiveSponsors
	  Value: YES
	
	4. Quit Registry Editor.
	
	
	NOTE: The DeleteNonActiveSponsors registry value requires that you enable the
	"Update sponsor servers list dynamically" option on the SNA Client. This option
	is available in the SNA Client Configuration program.
	
	Some other SNA Client settings may affect the delay to connect to an SNA
	resource. Please see the following article in the Microsoft Knowledge Base:
	
	  Q178126 SNA NT Clients Should not Fall Back to Named Pipes
	
	This feature is available in the latest service pack for SNA Server version 4.0.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	This feature was first included in SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fea kbFEA kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
