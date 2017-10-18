---
layout: page
title: "Q171451: Cluster Node May Fail to Join Cluster"
permalink: kb/171/Q171451/
---

## Q171451: Cluster Node May Fail to Join Cluster

	Article: Q171451
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
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
	
	If you evict a node from a cluster and then start the computer, the following
	message may appear in the system event log:
	
	  EVENT: 1009
	  SOURCE: ClusSvc
	  DESCRIPTION: Microsoft Cluster Server could not join an existing cluster and
	  could not form a new cluster. Microsoft Cluster Server has terminated.
	
	CAUSE
	=====
	
	The cluster service terminated because it could not join or form a cluster. The
	failure may occur if you evict a node from a cluster and attempt to start it
	without removing Microsoft Cluster Server.
	
	The evict function should be used to completely remove a system from the cluster.
	After using this feature, the system cannot rejoin the cluster without
	reinstalling Microsoft Cluster Server.
	
	This problem may also be caused by a corrupt configuration on the node that has
	the error. In either case, it may be possible to resolve this situation if you
	remove and reinstall Microsoft Cluster Server on that computer. If you do not
	want it to be a member of the cluster, only remove Microsoft Cluster Server from
	the affected system.
	
	RESOLUTION
	==========
	
	To remove Microsoft Cluster Server from a computer, use the Add/Remove Programs
	tool in the Control Panel.
	
	To install Microsoft Cluster Server, use the Setup.exe program from the MSCS
	folder on the Microsoft Windows NT Server, Enterprise Edition CD-ROM.
	
	For more information about removal or installation of Microsoft Cluster Server,
	please consult the product release notes or the Administrator's Guide for
	Microsoft Cluster Server, or see the Support/Books folder on CD-ROM 1.
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
