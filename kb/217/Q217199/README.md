---
layout: page
title: "Q217199: Static WINS Entries Cause the Network Name to Go Offline"
permalink: /kb/217/Q217199/
---

## Q217199: Static WINS Entries Cause the Network Name to Go Offline

	Article: Q217199
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 23-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, used with:
	   - Microsoft Cluster Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you add static entries in the WINS database for a server cluster virtual
	server, the network name resource may fail to come online.
	
	CAUSE
	=====
	
	Microsoft Cluster Server (MSCS) attempts to dynamically create WINS entries for
	Network Name resources when they are brought online, if the entries cannot be
	created (in this case because static entries already exist) then the cluster
	service will fail the resources.
	
	MSCS virtual servers use static IP addresses, static WINS entries are not
	necessary. Using static WINS entries will prevent failover from occurring.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove static entries for the clusters network name
	resources from the WINS database.
	
	MORE INFORMATION
	================
	
	WINS entries from a WINS replication partner may cause the static WINS entries
	to be replicated back to the server from which the entries have been removed.
	Verify that all static mappings in WINS that reference the clusters virtual
	network names are removed from all WINS servers.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q257903 Cluster Network Name May Not Come Online with Event ID 1052
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
