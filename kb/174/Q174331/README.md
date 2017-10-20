---
layout: page
title: "Q174331: Error Message Received Adding Second Time Service to Cluster"
permalink: /kb/174/Q174331/
---

## Q174331: Error Message Received Adding Second Time Service to Cluster

{% raw %}

	Article: Q174331
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to add a second Time Server resource within a single cluster
	using Microsoft Cluster Server (MSCS), an error message similar to the following
	text may be displayed:
	
	  An error occurred attempting to read properties for the 'Time2'
	  resource. The cluster resource could not be created in the specified
	  resource monitor. Error ID: 5017 (00001399)
	
	CAUSE
	=====
	
	In MSCS, a single cluster may have only one Time Service resource. If you
	attempt to add another, the error message may appear. The same message may also
	appear if you attempt to use a separate resource monitor for the resource.
	
	Additional query words: MSCS
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
