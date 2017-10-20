---
layout: page
title: "Q252770: How to Change Logging Verbosity for Services for UNIX NFS Client"
permalink: /kb/252/Q252770/
---

## Q252770: How to Change Logging Verbosity for Services for UNIX NFS Client

{% raw %}

	Article: Q252770
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article provides information about how to change the logging level of
	Services for UNIX (SFU) network file system (NFS) clients.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To change the logging level, use Registry Editor to view the following registry
	key, and then modify the following value:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Client For NFS\CurrentVersion\Default
	
	Value Type: REG_DWORD: LoggingLevel
	Value Data: The following logging levels are available:
	
	0 - Log error events only (default)
	1 - Log warning and error events
	2 - Log informational, warning and error events
	3 - Log all errors and successes
	
	NOTE: The value data is a binary value.
	
	After setting the logging level, stop and then start the SFU NFS client.
	
	Additional query words: verbose
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
