---
layout: page
title: "Q171390: Cluster Service May Not Start if DC Is Unavailable"
permalink: kb/171/Q171390/
---

## Q171390: Cluster Service May Not Start if DC Is Unavailable

	Article: Q171390
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Microsoft Cluster Server on a non-domain controller, the cluster
	service may not start and may yield the following events in the system event
	log:
	
	  EVENT: 7013
	  SOURCE: Service Control Manager
	  DESCRIPTION: Logon attempt with current password failed with the following
	  error: There are currently no logon servers available to service the logon
	  request.
	
	  EVENT: 7000
	  SOURCE: Service Control Manager
	  DESCRIPTION: The Cluster Service failed to start due to the following error:
	  The service did not start due to a logon failure.
	
	CAUSE
	=====
	
	The cluster service could not start because the domain account that it uses
	could not be validated. This situation may occur if domain controllers are
	unavailable and the cluster nodes are only members of the domain, not domain
	controllers. Clusters in a domain with only one domain controller have a much
	higher potential for this type of failure.
	
	RESOLUTION
	==========
	
	To reduce the potential for cluster startup failure, do one of the following:
	
	- Install Windows NT Server, Enterprise Edition on each cluster node as a
	  domain controller, before you install Microsoft Cluster Server.
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q281662 Windows 2000 Cluster Nodes as Domain Controllers
	
	  -or-
	
	- Install additional domain controllers within the domain and make sure they
	  are available to the cluster at all times.
	
	NOTE: This error can occur if the format of the account which the cluster starts
	with (at Services\Cluster Service Properties\Log ON) is in the format
	<clusteraccount>@<domain-name> e.g. clustersvc@microsoft.com. It
	should be changed to DOMAIN\account, e.g. MICROSOFT\clustersvc. After this is
	changed, the service should start automatically.
	
	Additional query words: setup MSCS
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
