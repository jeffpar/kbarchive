---
layout: page
title: "Q225092: Evicting a Node in a Cluster Can Cause Problems in SQL"
permalink: kb/225/Q225092/
---

## Q225092: Evicting a Node in a Cluster Can Cause Problems in SQL

	Article: Q225092
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0,6.5,7.0
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbFAQ
	Last Modified: 28-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may seem easy to troubleshoot a node in a cluster by evicting the node and
	reinstalling the cluster service. This process can be disastrous to the SQL
	Virtual Machine and make you reinstall SQL 6.5 or 7.0.
	
	MORE INFORMATION
	================
	
	Normally evicting a cluster node is not a problem. Reinstalling the cluster and
	joining the other node typically replicates the proper entries. However, when an
	SQL virtual machine is involved, it becomes complex.
	
	Before you evict a Cluster Node running SQL, you must uninstall the SQL Virtual
	Machine first. The process is to run the cluster Wizard for SQL Virtual machine
	(not the SQL install) and uncluster SQL on both nodes. The path on the SQL
	CD-ROMs are:
	
	  SQL 6.5 = \i386\cluster
	  SQL 7.0 = \x86\cluster
	
	For Alpha computers, it would be in the Alpha folders.
	
	Changing the name of the computer forces an eviction and has a similar effect
	because after the computer name is changed, it does not communicate with the
	other node.
	
	The evict a node, follow these steps:
	
	1. In Cluster Administrator, right-click the node name.
	
	2. Click Evict Node.
	
	NOTE: If you evict a node like this while running an SQL Virtual cluster, you
	need to completely reinstall SQL.
	
	Additional query words: MSCS SQL 6.5 7.0
	
	======================================================================
	Keywords          : kbenv kbinterop kbFAQ 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch
	Version           : winnt:1.0,4.0,6.5,7.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	
