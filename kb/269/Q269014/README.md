---
layout: page
title: "Q269014: XADM: How to Move the Edb.chk File on a Cluster"
permalink: /kb/269/Q269014/
---

## Q269014: XADM: How to Move the Edb.chk File on a Cluster

{% raw %}

	Article: Q269014
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to move the Edb.chk file on a Microsoft Cluster.
	
	MORE INFORMATION
	================
	
	The Edb.chk files are located in the information store and Directory Working
	paths. If you use Exchange Performance Optimizer to move your Exchange Server
	databases and log files to a different location, these paths are not changed.
	The following article advises you to use the Exchange Administrator program to
	change these paths.
	
	  Q196332 Edb.chk Does Not Move During Performance Optimization
	
	However, if you try to do this on a Microsoft Cluster server, you receive the
	following message:
	
	  The Administrator program has detected that this is a clustered Exchange
	  Server. When running on a cluster, Server Paths cannot be modified using the
	  Administrator program. Please use the Microsoft Exchange Optimizer to modify
	  these parameters.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The only way to change these paths is to use Registry Editor (Regedt32) and
	follow these steps:
	
	1. Stop all Exchange Server services.
	
	2. Move the Edb.chk file from the C:\Exchsrvr\Dsadata folder to its new
	  location.
	
	3. Click Start, click Run, type "regedt32" (without the quotation marks), and
	  then press Enter.
	
	4. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeDS\Parameters\DSA
	  Working Directory
	
	5. Change the path to reflect the new location of Directory Edb.chk.
	
	6. Move the Edb.chk file from the C:\Exchsrvr\Mdbdata folder to its new
	  location.
	
	7. Click Start, click Run, type "regedt32" (without the quotation marks), and
	  then press Enter.
	
	8. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersSystem\Working
	  Directory
	
	9. Change the path to reflect the new location of the Edb.chk file.
	
	10. Start all Exchange services.
	
	Additional query words: perfwiz
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
