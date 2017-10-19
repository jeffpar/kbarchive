---
layout: page
title: "Q258465: Error Message C00E0044 Appears When You Create Queues in MSMQ"
permalink: /kb/258/Q258465/
---

## Q258465: Error Message C00E0044 Appears When You Create Queues in MSMQ

	Article: Q258465
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT400 kbDSupport kbNTOSPEC
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create queues on a cluster in Microsoft Message Queue Server (MSMQ),
	the error message C00E0044 can appear.
	
	CAUSE
	=====
	
	This error message occurs because the MSMQ installation is corrupt due to
	multiple installations.
	
	RESOLUTION
	==========
	
	To resolve this behavior, perform the following:
	
	1. Backup the shared MSMQ directory.
	
	2. Remove MSMQ from node 1.
	
	3. Restore the backup of the MSMQ shared directory.
	
	4. Remove MSMQ from node 2.
	
	5. Remove virtual server from Message Queue Information Store (MQIS) through the
	  Primary Enterprise Controller's (PEC) MSMQ Explorer.
	
	6. Verify that MSMQ is completely removed from both nodes.
	
	7. Install MSMQ on node 1 from Windows NT Option Pack (NTOP), but do not
	  restart.
	
	8. Stop both MSMQ and Microsoft Distributed Transaction Coordinator (MSDTC)
	  resources.
	
	9. Move all resources to node 2 to ensure that MSMQ and DTC resources are
	  offline.
	
	10. Install MSMQ on both nodes, but do not restart.
	
	11. Click OK, restart node 2 first, and then restart node 1.
	
	MORE INFORMATION
	================
	
	For additional information about how to ensure that MSMQ has been removed
	completely from both nodes, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q202124 How to Manually Uninstall Microsoft Message Queue Server
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          : kbOSWinNT400 kbDSupport kbNTOSPEC 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
