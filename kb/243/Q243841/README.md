---
layout: page
title: "Q243841: XCLN: How to Change Organization, Site, Exchange Server for OWA"
permalink: /kb/243/Q243841/
---

## Q243841: XCLN: How to Change Organization, Site, Exchange Server for OWA

	Article: Q243841
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0 SP1, 5.0 SP2, 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	In some instances, you may want to change the Exchange Server organization,
	site, or server name to reflect changes in the Exchange Server structure, rather
	than removing and reinstalling the Outlook Web Access (OWA) component.
	
	MORE INFORMATION
	================
	
	The Enterprise, Server, and Site registry values need to be modified on the OWA
	server to reflect the changes in the organization, site, or Exchange Server
	computer that the OWA server connects to.
	
	To modify these registry values on the OWA server, you must edit the registry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Change the following registry values, as applicable:
	
	   - To change the organization:
	
	     a. Locate the Enterprise value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeWeb\Parameters
	
	     b. On the Edit menu, click REG_SZ, type the organization name, and then
	        click OK.
	
	   - To change the server:
	
	     a. Locate the Server value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeWeb\Parameters
	
	     b. On the Edit menu, click REG_SZ, type the server name, and then click
	        OK.
	
	   - To change the site:
	
	     a. Locate the Site value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeWeb\Parameters
	
	     b. On the Edit menu, click REG_SZ, type the site name, and then click OK.
	
	3. Quit Registry Editor.
	
	4. You must restart the World Wide Web service for the changes to take effect.
	
	Additional query words: new domain option
	
	======================================================================
	Keywords          : exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange500SP1 kbExchange500SP2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
