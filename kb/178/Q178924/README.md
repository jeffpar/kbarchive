---
layout: page
title: "Q178924: How to Upgrade an Evaluation Version of Cluster Server"
permalink: /kb/178/Q178924/
---

## Q178924: How to Upgrade an Evaluation Version of Cluster Server

{% raw %}

	Article: Q178924
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 11-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An installation of an evaluation copy of Microsoft Windows NT Server 4.0,
	Enterprise Edition, may produce the following error message:
	
	  STOP:0x00000098(0x647CDCB0,0x01BC9900,0x0002A300,0x00000000)
	  END_OF_NT_EVALUATION_PERIOD
	
	  The evaluation period for this installation of Windows NT has expired. This
	  system will shutdown in one hour. To restore access to this installation of
	  Windows NT, please upgrade this installation using a licensed distribution of
	  this product.
	
	RESOLUTION
	==========
	
	You must upgrade to a licensed version of Microsoft Windows NT Server 4.0,
	Enterprise Edition.
	
	There is, however, a specific procedure to be followed to maintain an existing
	Microsoft Cluster Server Installation.
	
	If the loss of printer shares and folder shares is not an issue, follow the steps
	that are outlined in the following article in the Microsoft Knowledge Base:
	
	  Q173507 Evaluation Period Expires on Non-Evaluation Copy of Windows NT
	
	If the Cluster Server has share information that cannot be lost, do the
	following:
	
	1. Evict one of the nodes from the cluster.
	
	2. Uninstall Cluster Server on the evicted node.
	
	3. Follow the directions listed in Knowledge Base article Q173507 on this node.
	
	4. Complete the "In place upgrade" of a licensed copy of Microsoft Windows NT
	  4.0 Enterprise Server.
	
	5. Reinstall Cluster Server, and rejoin the cluster.
	
	6. Move all the groups and resources from the evaluation node, to the licensed
	  node.
	
	7. Evict the remaining evaluation node.
	
	8. Uninstall Cluster Server on the evicted node.
	
	9. Follow the directions listed in Knowledge Base article Q173507 on this node.
	
	10. Complete the "In place upgrade" of a licensed copy of Microsoft Windows NT
	  4.0 Enterprise Server.
	
	11. Reinstall Cluster Server, and rejoin the cluster.
	
	
	Additional query words: RTM Evaluation copy mscs timebomb time bomb
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
