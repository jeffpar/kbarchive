---
layout: page
title: "Q321878: Host Account Cache Service May Not Start After System Restart"
permalink: kb/321/Q321878/
---

## Q321878: Host Account Cache Service May Not Start After System Restart

	Article: Q321878
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The SNA Host Account Cache (HAC) service may fail to start when you restart the
	computer the service is installed on.
	
	CAUSE
	=====
	
	Microsoft Data Engine (MSDE) may not be fully initialized when the SNA Host
	Account Cache service tries to start after a computer restart. The SNA Host
	Account Cache service requires MSDE to be fully initialized before the service
	can start and connect to the Host Account Cache database.
	
	RESOLUTION
	==========
	
	Manually start the SNA Host Account Cache service after you restart the computer
	and MSDE is fully initialized.
	
	WORKAROUND
	==========
	
	Update the following registry entry to make the SNA Host Account Cache service
	dependent upon MSDE.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the DependOnService value under the following key in the registry:
	
	  
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaDatabase
	
	3. On the Edit menu, click Multi String, type "MSSQL$MS_HI_Server_DB" (without
	  the quotation marks), and then click OK.
	
	4. Quit Registry Editor.
	
	Note: Before you add the MSSQL$MS_HI_Server_DB entry in the Multi-String Editor,
	you must make sure that the insertion point is at the end of the list of
	existing dependencies. Additionally, make sure that the existing dependencies
	are not selected before you add the new dependency.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
