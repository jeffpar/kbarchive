---
layout: page
title: "Q271516: Offline Servers Are Not Removed from the Service Table"
permalink: /kb/271/Q271516/
---

## Q271516: Offline Servers Are Not Removed from the Service Table

	Article: Q271516
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna400sp3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The DeleteNonActiveServers registry entry that is documented in the Microsoft
	Knowledge Base does not appear to work as described when you use the Microsoft
	Systems Network Architecture (SNA) Server client for Microsoft Windows NT. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q236578 Offline Servers Should Be Removed from Clients' Service Table
	
	After you restart SnaBase on a client computer, an offline server may still be
	shown in the list of sponsor servers.
	
	CAUSE
	=====
	
	The DeleteNonActiveSponsors registry entry behaves differently on Windows NT
	clients compared to Microsoft Windows 95 and Microsoft Windows 98 clients. The
	Windows 95 or Windows 98 client removes a sponsor server entry if a server's
	SnaBase is not active. However, the Windows NT client only removes the sponsor
	server entry if the server's name cannot be resolved to a network address during
	the service startup. If the name of the offline server can be resolved, the
	entry is not removed.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Remove references to the offline computer from the WINS, DNS, LMHosts, or Hosts
	file. The next time the SnaBase service starts up, the sponsor server entry
	should be removed. The entry can also be removed manually from the client
	configuration either by opening the client configuration and removing the
	offline server from the list of sponsor servers or by removing the entry from
	the registry. The sponsor server information is located at:
	
	  HKLM\System\CurrentControlSet\Services\SNABase\Parameters\Sponsors
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3
	Version           : :4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
