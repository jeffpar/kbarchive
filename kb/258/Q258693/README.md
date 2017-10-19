---
layout: page
title: "Q258693: CLUSTER:IIS Server Instance Resources Offline After NNTP Install"
permalink: /kb/258/Q258693/
---

## Q258693: CLUSTER:IIS Server Instance Resources Offline After NNTP Install

	Article: Q258693
	Product(s): Internet Information Server
	Version(s): 2000,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 15-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the setup of the Network News Transport Protocol (NNTP) service is
	complete, the services in the Service Control Manager are restarted, but the
	Internet Information Services (IIS) Server Instance resources (as listed in
	Cluster Administrator) are not brought back online.
	
	CAUSE
	=====
	
	Like other new cluster resources, the IIS Server Instance resources have a
	persistent state of 1 after they are created.
	
	WORKAROUND
	==========
	
	To bring the services back online, select Bring Online in Cluster Administrator.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Windows 2000 with Cluster service and default (WWW) IIS services.
	
	2. Configure the server cluster with IIS Server Instance resources for each of
	  the IIS services.
	
	3. From Add/Remove Windows Components, add NNTP IIS service.
	
	During installation, the currently configured IIS Server Instance resources
	(listed in Cluster Administrator) are taken offline. After the NNTP service is
	installed, the services in the Service Control Manager are restarted, but the
	IIS Server Instance resources are not brought back online.
	
	Additional query words: iis5 kbiisSearch
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Search kbiisSearch kbiis500 kbWinAdvServSearch
	Version           : :2000,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
