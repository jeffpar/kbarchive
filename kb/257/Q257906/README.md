---
layout: page
title: "Q257906: Unable to Stop the Cluster Server Service"
permalink: kb/257/Q257906/
---

## Q257906: Unable to Stop the Cluster Server Service

	Article: Q257906
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Cluster Administrator to stop the Cluster Server service on a
	server that is running Microsoft Cluster Server (MSCS), you may receive the
	following error message:
	
	  An error occurred attempting to stop the cluster service on node X. A stop
	  control has been sent to a service which other running services are dependent
	  on.
	  Error ID 1051 (0000041b)
	
	CAUSE
	=====
	
	This problem occurs if you have other services that are dependent on the Cluster
	Server service running on the cluster server.
	
	RESOLUTION
	==========
	
	To work around this problem, use Server Manager or Service Control Manager to
	stop the Cluster Server service.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
