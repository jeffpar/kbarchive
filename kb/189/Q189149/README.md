---
layout: page
title: "Q189149: Disk Counters on Clustered Disk Record Zero Values"
permalink: kb/189/Q189149/
---

## Q189149: Disk Counters on Clustered Disk Record Zero Values

	Article: Q189149
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Performance Monitor to record activity on a shared clustered drive
	in a Microsoft Cluster Server, the Physical and Logical Disk counters may record
	zero or incorrect values. Even after enabling Diskperf -Y and restarting the
	servers in the cluster, the first server to boot may properly record the disk
	counters but if the shared drive is failed over to a second server, the disk
	counters record zero and show no activity on the shared drive on the second
	server.
	
	RESOLUTION
	==========
	
	To work around this problem, you can initiate a failover to the shared disk and
	then fail back again using the following steps:
	
	1. Launch Cluster Administrator.
	
	2. Right-click the group where the shared disk resides, and then click Move
	  Group.
	
	3. After the disk is online, repeat step 2 and move the group back again. This
	  resets Performance Monitor and allows you to monitor disk activity.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	This problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	Additional query words: mscs chart log perfmon
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
