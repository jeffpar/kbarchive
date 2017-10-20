---
layout: page
title: "Q258443: Cluster Spooler Reports Node Name Instead of Virtual Name"
permalink: /kb/258/Q258443/
---

## Q258443: Cluster Spooler Reports Node Name Instead of Virtual Name

{% raw %}

	Article: Q258443
	Product(s): Microsoft Windows NT
	Version(s): 4.0; winnt:1.1
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server, version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows NT 4.0 Enterprise Edition with Microsoft Cluster Server
	(MSCS) and you receive a print spooler notification, the notification reports
	the node name of the print server instead of the virtual name.
	
	CAUSE
	=====
	
	MSCS registers clustered printers with the local Spooler service. Because
	notification is the responsibility of the Spooler service, this behavior occurs.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Windows NT Server
	Enterprise Edition version 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch kbClustServ110
	Version           : :4.0; winnt:1.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
