---
layout: page
title: "Q252974: Error Message: System Process - Lost Delayed-Write Data"
permalink: /kb/252/Q252974/
---

## Q252974: Error Message: System Process - Lost Delayed-Write Data

	Article: Q252974
	Product(s): Microsoft Windows NT
	Version(s): 2000,2000 SP1,4.0
	Operating System(s): 
	Keyword(s): kbWin2000SP2Fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows versions 2000, 2000 SP1 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you shut down a cluster node that currently owns cluster resources, you may
	receive the following error message:
	
	  System Process - Lost Delayed-Write Data
	
	  The system was attempting to transfer file data from buffers to
	  \Device\Harddisk#\Partition#\. The write operation failed, and only some of
	  the data may have been written to the file.
	
	CAUSE
	=====
	
	During shutdown, the Cluster service first stops the network heartbeat to the
	other node. This ensures that the surviving node eventually takes the resources
	and restarts the services. This avoids a situation in which a service simply
	hangs during shutdown but both nodes continue to exchange the heartbeat. In this
	situation, a failover would never occur.
	
	If a service requires a long time to complete its shutdown, the other node may
	graft the disk resources while the service is still writing to the disk. This
	causes the error message.
	
	This behavior has been observed with the MSDTC resource and Microsoft Exchange.
	
	This is a general design issue that conflicts with the design goal of Cluster
	Server for a guaranteed failover time. The fix described below extends the
	allowed time for all resources from 9 seconds to 15 seconds. In addition, the
	Generic Service resource terminates the controlled service during shutdown if it
	does not exit within 3 seconds.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	Windows 2000
	------------
	
	For additional information about a fix for Windows 2000, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q272569 System Process Loses Delayed-Write Data with Windows Clustering
	
	Windows NT 4.0
	--------------
	
	To resolve this issue, apply the hotfix described in the following Microsoft
	Knowledge Base article:
	
	  Q251007 Some Cluster Disks Are Not Available After Installing SP6
	
	This fix also includes new Microsoft Transaction Coordinator (MSDTC) components,
	and includes the modifications described in the following article in the
	Microsoft Knowledge Base:
	
	  Q256326 Cluster Server Cannot Use Disk Beyond Device Number 25
	
	To work around this issue, before you initiate a shutdown, move all groups in
	Cluster Administrator to another node. Or, use a batch file in which you first
	stop the Cluster service (with the "net stop clussvc" command), and then use
	Shutdown.exe from the Resource Kit to shut down the node.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows 2000 Service Pack 2.
	
	MORE INFORMATION
	================
	
	The problem described in this article is indicated by the following entry in the
	Cluster log:
	
	  ... [FM] FmpCleanupGroups: Timed out on the CleanupThread
	
	Additional query words: Event ID: 26
	
	======================================================================
	Keywords          : kbWin2000SP2Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch kbWin2000AdvServSP1
	Version           : :2000,2000 SP1,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
