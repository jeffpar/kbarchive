---
layout: page
title: "Q293088: XADM: How to Use Regedt32 to Determine Organization and Site"
permalink: kb/293/Q293088/
---

## Q293088: XADM: How to Use Regedt32 to Determine Organization and Site

	Article: Q293088
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to use Registry Editor (Regedt32.exe) to determine
	the organization and site name.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	In some cases, if MSExchangeDS fails to start in a single-organization,
	single-site, and single-server environment, you may need to rebuild the Exchange
	Server computer, and then restore Dir.edb. To restore Dir.edb, you must use the
	same organization, site, and server names. To determine these names:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	3. Double click X500 DN : REG_SZ:, and then make a note of the string value. The
	  value looks similar to the following text:
	
	  /o=<Organization_name>/ou=<Site_name>/cn=Configuration/cn=Servers/cn=<Server_name>/cn=Microsoft
	  MTA
	
	4. Quit Registry Editor.
	
	
	Additional query words: find org site name xgen
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
