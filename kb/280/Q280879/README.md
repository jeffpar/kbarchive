---
layout: page
title: "Q280879: SNA DB2 Service Not Removed During Upgrade"
permalink: /kb/280/Q280879/
---

## Q280879: SNA DB2 Service Not Removed During Upgrade

{% raw %}

	Article: Q280879
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you upgrade an SNA Server 4.0 system that uses the OLEDB Provider for DB2
	or ODBC Driver for DB2, the SNA DB2 Service is not removed.
	
	If you attempt to start the SNA DB2 Service after the upgrade to Host Integration
	Server 2000 is complete, you receive the following error message:
	
	  Could not start the SNA DB2 Service on Local Computer.
	  Error 2: The system cannot find the file specified.
	
	CAUSE
	=====
	
	The OLEDB Provider for DB2 and the ODBC Driver for DB2 that are included in Host
	Integration Server 2000 have been redesigned and no longer utilize the SNA DB2
	Service. The HIS 2000 Setup program incorrectly leaves this service listed in
	the Services utility in Control Panel.
	
	WORKAROUND
	==========
	
	In the Properties for the SNA DB2 Service, set the Startup option to disabled.
	This will keep the SNA DB2 Service from trying to start on your system.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To completely remove the SNA DB2 Service from the Services utility in Control
	Panel, remove the following key from the system registry, and then restart the
	system:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and select the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaDb2
	
	3. From the Edit menu, click Delete.
	
	4. Quit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
