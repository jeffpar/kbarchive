---
layout: page
title: "Q224999: How to Use the Cluster TMP file to Replace a Damaged Clusdb File"
permalink: /kb/224/Q224999/
---

## Q224999: How to Use the Cluster TMP file to Replace a Damaged Clusdb File

{% raw %}

	Article: Q224999
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool w2000mscs kbClustering
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to restore the Clusdb file using a .tmp file.
	
	MORE INFORMATION
	================
	
	If the Clusdb file is damaged you may be able to restore this file using a .tmp
	file in the cluster hive.
	
	
	The Clusdb file is the registry used for Microsoft Cluster Server and is
	reproduced on both nodes when you are using cluster server. Cluster Server
	creates a copy of the Clusdb file named Chk<xxx>.tmp located in the Mscs
	folder on the shared disk where the quorum information is.
	
	How to Restore the Clusdb File From the Chk<xxx>.tmp File on Both Nodes
	---------------------------------------------------------------------
	
	To restore the Clusdb file from the Chk<xxx>.tmp file on both nodes in the
	cluster, use the following steps:
	
	1. On both nodes, change the Startup value to Manual for the following items:
	
	  Clusdisk (in the Devices tool in Control Panel)
	  Cluster Service (in the Services tool in Control Panel)
	
	2. Shut down node 2.
	
	3. Restart node 1.
	
	4. Copy the Chk<xxx>.tmp file with the most recent time and date stamp
	  from the \Mscs folder on the shared quorum drive to a disk and to the local
	  %SystemRoot%\Cluster folder.
	
	5. Rename the Clusdb file in the %SystemRoot%\Cluster folder to Clusdb.old.
	
	6. Rename the Chk<xxx>.tmp file in the %SystemRoot%\Cluster folder to
	  Clusdb.
	
	7. Change the Startup value back to the following settings:
	
	  System for Clusdisk (in the Devices tool in Control Panel)
	  Automatic for the Cluster service (in the Services tool in Control Panel)
	
	8. Restart node 1.
	
	9. Verify that the Cluster service starts correctly after you restart the node.
	
	10. Start node 2.
	
	11. On node 2, copy the Chk<xxx>.tmp file from the disk to the
	  %SystemRoot%\Cluster folder.
	
	12. Rename the Clusdb file in the %SystemRoot%\Cluster folder to Clusdb.old.
	
	13. Rename the Chk<xxx>.tmp file in the %SystemRoot%\Cluster folder to
	  Clusdb.
	
	14. Change the Startup value back to the following settings:
	
	  System for Clusdisk (in the Devices tool in Control Panel)
	  Automatic for the Cluster service (in the Services tool in Control Panel)
	
	15. Restart node 2.
	
	16. Verify that the Cluster service starts correctly after you restart the node
	  and that you can failover resources.
	
	How to Restore the Clusdb File From the Chk<xxx>.tmp File on Only One Node
	------------------------------------------------------------------------
	
	To restore the Clusdb file from the Chk<xxx>.tmp file on only one node, use
	the following steps:
	
	1. Using the Services tool in Control Panel, set the Cluster service to Manual
	  on the node where the service does not start.
	
	2. Restart the node.
	
	3. From the correctly functioning node, copy the Chk<xxx>.tmp file with
	  the most recent time and date stamp from the Mscs folder on the shared quorum
	  drive to a disk.
	
	4. On the non-functioning node, rename the Clusdb file in the
	  %SystemRoot%\Cluster folder.
	
	5. Copy the Chk<xxx>.tmp file from the disk to the %SystemRoot%\Cluster
	  folder.
	
	6. Rename the Chk<xxx>.tmp file in the %SystemRoot%\Cluster folder to
	  Clusdb.
	
	7. Using the Services tool in Control Panel, start the Cluster service.
	
	8. Verify that the service starts correctly and that you can failover resources.
	
	9. Set the Cluster service back to Automatic using the Services tool in Control
	  Panel.
	
	Additional query words: mscs
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool w2000mscs kbClustering 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
