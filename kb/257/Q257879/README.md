---
layout: page
title: "Q257879: Event ID 1073 Occurs When You Attempt to Move the Quorum Disk"
permalink: /kb/257/Q257879/
---

## Q257879: Event ID 1073 Occurs When You Attempt to Move the Quorum Disk

{% raw %}

	Article: Q257879
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): w2000mscs kbClustering
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to move the group that contains the physical disk that is used
	for the quorum resource, the operation may fail, and the following event may be
	logged in the system event log:
	
	  Event ID 1073 Source ClusSvc
	  Microsoft Cluster Server was halted to prevent an inconsistency within the
	  cluster. The error code was 5028.
	
	This error code means that the Cluster service could not mount the quorum log on
	the disk designated as the quorum disk.
	
	CAUSE
	=====
	
	This issue can occur if the device drivers from another program are not
	compatible with the Cluster service. Third-party filter drivers can prevent the
	Cluster service from accessing cluster resources. Programs and tools such as
	antivirus packages, quota software, and defragmentation tools are suspect.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the third-party driver to verify that this is the
	cause of the issue, or contact the manufacturer to find out if the program is
	designed to run on a clustered server.
	
	Additional query words: av quotas managment defrag
	
	======================================================================
	Keywords          : w2000mscs kbClustering 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
