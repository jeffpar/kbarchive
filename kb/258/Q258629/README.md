---
layout: page
title: "Q258629: Error 997 Attempting to Delete Online Cluster Server Resource"
permalink: /kb/258/Q258629/
---

## Q258629: Error 997 Attempting to Delete Online Cluster Server Resource

{% raw %}

	Article: Q258629
	Product(s): Microsoft Windows NT
	Version(s): 4.0; winnt:
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to delete a resource by using the Cluster Administrator tool
	while the resource is still online, Cluster Administrator attempts to take the
	resource offline and the following error message may be displayed:
	
	  System error 997 has occurred.
	  Overlapped I/O operation is in progress.
	
	CAUSE
	=====
	
	The error message is misleading. Cluster Administrator cannot delete a resource
	until you take it offline.
	
	RESOLUTION
	==========
	
	Take the resource offline and then delete it.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: mscs
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : :4.0; winnt:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
