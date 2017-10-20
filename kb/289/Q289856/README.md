---
layout: page
title: "Q289856: User Name Mapping May Not Be Updated"
permalink: /kb/289/Q289856/
---

## Q289856: User Name Mapping May Not Be Updated

{% raw %}

	Article: Q289856
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool w2000sfu kbUNIXService
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The User Name Mapping service that is used by Server for NFS may not be updated
	after the default cache-update limit is reached and users that have been added
	recently to the computer may not be able to access network file system (NFS)
	services.
	
	CAUSE
	=====
	
	This problem can occur because Server for NFS ignores the default cache-update
	settings in the registry for updating the User Name Mapping service. The
	following registry key holds the settings:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Server For NFS Mapping\CurrentVersion
	
	Registry Value: CacheRefresh
	Data Type: DWORD
	Range: 300 to 86,400 seconds (5 minutes to 24 hours)
	Default: 1,800 seconds (30 minutes)
	
	If you change this registry key, there is no effect upon the User Name Mapping
	service because the settings are completely ignored.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem, use either of the two methods:
	
	- Restart the server.
	
	- Stop and restart both Server for NFS and the User Name Mapping service:
	  a. Start the Services for UNIX Administration tool. Right-click "Server for
	     NFS", and then click Stop. When the service has stopped, click the start
	     option from the same menu to start the service.
	
	  b. Repeat the same process for the User Name Mapping service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: SFU
	
	======================================================================
	Keywords          : kbtool w2000sfu kbUNIXService 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
