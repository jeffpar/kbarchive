---
layout: page
title: "Q248635: XADM: Recommended Install Order for Exchange, Cluster, and SP's"
permalink: /kb/248/Q248635/
---

## Q248635: XADM: Recommended Install Order for Exchange, Cluster, and SP's

	Article: Q248635
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The order that Exchange Server, Windows NT, Cluster Server, and their associated
	service packs are installed in is very important. If you do not install these
	components in the recommended order, your systems may be unable to perform some
	functions.
	
	Following is the recommended order of installation:
	
	1. Install Windows NT version 4.0 on the first node in the cluster.
	
	2. Finish the installation by applying Windows NT Service Pack 3 from the
	  Enterprise Edition CD.
	
	3. Install Windows NT version 4.0 on the second node in the cluster.
	
	4. Finish the installation by applying Windows NT Service Pack 3 from the
	  Enterprise Edition CD.
	
	5. Install Cluster Server from the Windows NT Enterprise Edition CD on both
	  nodes.
	
	6. Apply the current Windows NT service pack to both nodes in the cluster.
	
	NOTE: You must apply a Windows NT service pack that is later than Windows NT
	Service Pack 3. Exchange Server requires a post-Windows NT Service Pack 3
	roll-up fix to work properly.
	
	7. Install Exchange Server version 5.5 on the first node in the cluster.
	
	8. To update the second node in the cluster, insert the Exchange Server 5.5
	  setup CD and select Update Node.
	
	9. Apply the current Exchange Server 5.5 Exchange Service Pack to the first node
	  in the cluster.
	
	10. Update the second node in the cluster by inserting the Exchange Service Pack
	  CD and select Update Node.
	
	If Cluster Server and Exchange Server are already installed and a service pack
	needs to be reapplied, or a newer service pack needs to be installed, apply the
	Windows NT service packs to each node in the cluster before you apply any
	Exchange Server updates to either node.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:4.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
