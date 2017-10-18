---
layout: page
title: "Q248663: Booting Node may Prevent Running Node from Accessing Quorum Disk"
permalink: kb/248/Q248663/
---

## Q248663: Booting Node may Prevent Running Node from Accessing Quorum Disk

	Article: Q248663
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the network connection between cluster nodes does not function properly on
	Windows NT 4.0-based computers that are configured as part of a cluster with a
	quorum disk, a cluster node that is starting can prevent a node that is
	currently running from gaining access to the quorum disk. This may cause the
	cluster on the running node to stop and all processing to be moved to the second
	node.
	
	During Windows NT 4.0 arbitration when a communication loss occurs, drives owned
	by the non-quorum owner may not have their cache flushed during arbitration.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time        Size      File name      Platform
	  -------------------------------------------------------
	  11/22/1999   02:43p    29,424   Clusdisk.sys   x86
	  11/22/1999   02:42p   175,888   Clusres.dll    x86
	  11/22/1999   02:36p    49,360   Clusdisk.sys   Alpha
	  11/22/1999   02:36p   281,872   Clusres.dll    Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about clusters and quorum disks, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q245626 INFO: Use the -localquorum Switch to Install a Single-Node MSCS
	  Cluster
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
