---
layout: page
title: "Q245067: Cannot Synchronize Time on a Cluster"
permalink: kb/245/Q245067/
---

## Q245067: Cannot Synchronize Time on a Cluster

	Article: Q245067
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	You may be unable to synchronize the time against a time source on your cluster.
	You cannot use the Timeserv utility from the Resource Kit because its name is
	already being used by the cluster Timeserv service.
	
	If you attempt to add a second Time Server resource within a single cluster using
	Microsoft Cluster Server (MSCS), an error message similar to the following text
	may be displayed:
	
	  An error occurred attempting to read properties for the 'Time2' resource. The
	  cluster resource could not be created in the specified resource monitor.
	  Error ID: 5017 (00001399)
	
	CAUSE
	=====
	
	The Timeserv service used in clustering is designed only to provide a consistent
	cluster-wide time, but does not allow real-time synchronization. Note that this
	service is not mandatory for cluster reliability purposes and can be deleted to
	use Resource Kit utilities such as Timeserv or W32Time instead.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To use a Resource Kit utility instead, remove the Timeserv cluster resource:
	
	1. In the Cluster Administration tool, set the Time Service resource to offline.
	
	2. Delete the Time Service resource.
	
	3. Move the cluster group to the other node.
	
	4. Delete the Timeserv key in the following registry key on both nodes:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	
	5. Install the Time Service or W32Time Resource Kit utility from the following
	  Microsoft FTP site:
	
	  ftp://ftp.microsoft.com/reskit/y2kfix/
	
	Note that removing the Timeserv cluster resource does not affect the reliability
	of the cluster.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0, Enterprise
	Edition.
	
	MORE INFORMATION
	================
	
	The Timeserv and W32Time Resource Kit utilities use .ini files to configure
	their role and primary time source, and run as services.
	
	For information about their installation and use, including year 2000 (Y2K)
	information, see the following Microsoft FTP site:
	
	  ftp://ftp.microsoft.com/reskit/y2kfix/
	
	Additional query words: mscs
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
