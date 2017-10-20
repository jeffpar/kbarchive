---
layout: page
title: "Q172951: How to Recover from a Corrupted Quorum Log"
permalink: /kb/172/Q172951/
---

## Q172951: How to Recover from a Corrupted Quorum Log

{% raw %}

	Article: Q172951
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Cluster Server maintains details about changes within the cluster via
	a quorum log file. If this file becomes corrupted for any reason, it is possible
	that the cluster service may not start.
	
	MORE INFORMATION
	================
	
	The quorum log contains recovery information for the cluster and information
	about changes to the cluster configuration. When the cluster service starts, it
	reads the quorum log file. The service can handle some error conditions
	regarding this file and may elect to discard the file and create a new one. In
	this case, Microsoft Cluster Server writes the following message in the Windows
	NT system event log:
	
	  Event ID:1019
	  Event Type:Warning
	  Event Source:ClusSvc
	  Event Category:Log Mgr
	  Description: The log file Q:\MSCS\quolog.log was found to be corrupt. An
	  attempt will be made to reset it, or you should use the Cluster Administrator
	  utility to adjust the maximum size.
	
	If the log file becomes corrupted and cannot be reset, the cluster service may
	not start. To correct this problem, you must use the "noquorumlogging" option
	when starting the Cluster service. This option allows the cluster to start
	without quorum logging. You may then access the quorum disk and remove the
	corrupted Quolog.log file.
	
	Use the following procedure to help recover from this situation:
	
	1. If the Cluster service is running, use Control Panel on both nodes to stop
	  the Cluster service.
	
	2. On one node, use the Services tool in Control Panel to specify
	  "-noquorumlogging" as the startup parameter for the Cluster service and start
	  the service.
	
	3. On the quorum disk, run Chkdsk. If the disk does not show corruption, the log
	  file may be corrupted. In this case, delete the Quolog.log file and any .tmp
	  files located in the MSCS folder on the quorum disk.
	
	4. In Services, stop the Cluster service, and then start the Cluster service
	  without startup parameters. After the service starts, you may start the
	  service on the other node.
	
	NOTE: When you disable quorum logging within a cluster, changes to the cluster
	configuration cannot be logged. If a node goes offline during this period,
	recent changes may be lost if changes could not be communicated to the other
	node. Quorum logging should only be disabled when necessary to recover from log
	file corruption.
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
