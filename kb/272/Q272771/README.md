---
layout: page
title: "Q272771: Clustering Doesn't Start If Cluster Files on Extended Partition"
permalink: /kb/272/Q272771/
---

## Q272771: Clustering Doesn't Start If Cluster Files on Extended Partition

{% raw %}

	Article: Q272771
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbcluster kbClustering
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows Clustering on a Windows NT 4 Server, Enterprise
	Edition-based computer and place the cluster files in a logical volume on an
	extended partition, the installation procedure may finish, but Windows
	Clustering may not start.
	
	CAUSE
	=====
	
	This problem can occur if the logical volume is the second or later volume on
	the extended partition.
	
	RESOLUTION
	==========
	
	To resolve this problem, repartition the hard disk in which you want to place
	the cluster files so that it is a primary partition. You may want to do this
	because there are very few situations where you must put the cluster files on an
	extended partition.
	
	If you need to place the cluster files in a logical volume on an extended
	partition, you can use only the first logical volume on the extended partition
	for the cluster files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you install Windows Clustering by using the Cluster Wizard, you can select
	the second or third logical volume on an extended partition. However, Windows
	Clustering does not start. Additionally, the following events may be logged in
	the System event log:
	
	  Source: ClusSvc
	  Event: 1073
	  Description: Microsoft Cluster Server was halted to prevent an inconsistency
	  within the cluster. The error code was 5028.
	
	  -and-
	
	  Source: ClusSvc
	  Event: 1000
	  Description: Microsoft Cluster Server suffered an unexpected fatal error at
	  line 1112 of source module G:\nt\private\cluster\service\dm\dmlog.c. The
	  error code was 1.
	
	If you enable cluster logging, log entries similar to the following log entries
	may be logged:
	
	  0ab::13-14:43:53.703 Physical Disk <Disks Z: Y: X:>: SCSI, error
	  reserving disk, error 1.
	  0ab::13-14:44:03.812 Physical Disk <Disks Z: Y: X:>: SCSI, error
	  reserving disk, error 1.
	  0ab::13-14:44:03.812 Physical Disk <Disks Z: Y: X:>: Arbitrate returned
	  status 1.
	  0e7::13-14:44:03.812 [FM] FmGetQuorumResource failed, error 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcluster kbClustering 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
