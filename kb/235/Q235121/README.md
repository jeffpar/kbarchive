---
layout: page
title: "Q235121: Performance Optimizing Network Shares"
permalink: kb/235/Q235121/
---

## Q235121: Performance Optimizing Network Shares

	Article: Q235121
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, used with:
	   - Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On high traffic file servers, you can increase file server throughput by
	partitioning the workload and segmenting the clients by network and file system
	volume.
	
	By using the following practices, users with high-traffic file servers can
	increase the file server throughput.
	
	1. Partition the workload across multiple network segments. This increases file
	  server throughput by increasing network bandwidth, and improved network
	  partitioning.
	
	2. Partition the workload across multiple file system volumes on network file
	  shares. This reduces file system contention, resulting in better usage of the
	  server resources. Again, the end result is better file server throughput.
	
	MORE INFORMATION
	================
	
	The following example explains how you can use these practices to increase your
	file server throughput.
	
	A network file server with 1,000 users, who each have been assigned a network
	file share to store their work and documents, can increase file server
	throughput by:
	
	1. Segmenting the clients across multiple network segments; in this case, a
	  customer can have four network segments with the users divided evenly amongst
	  segments.
	
	2. Distributing the user file shares across different file system volumes;
	  depending on the number of disks and the amount of disk space, this can vary.
	  Dividing the users evenly amongst volumes would limit any contention that
	  could be caused by a single NTFS volume.
	
	
	Additional query words: performance ntfs log share
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	
