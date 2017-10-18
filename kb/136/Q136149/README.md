---
layout: page
title: "Q136149: Optical Disks and Save Configuration in Disk Administrator"
permalink: kb/136/Q136149/
---

## Q136149: Optical Disks and Save Configuration in Disk Administrator

	Article: Q136149
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you work with optical disks in Disk Administrator you cannot save the
	configuration.
	
	CAUSE
	=====
	
	Disk Administrator does not recognize the optical drive as valid partitionable
	media while it is active. However, when you choose Exit from the Partition menu,
	you are prompted to save the configuration.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	WARNING: This procedure removes all data from the optical drive.
	
	1. Run Disk Administrator
	
	2. Delete all existing partitions.
	
	3. Exit Disk Administrator. Save the configuration when you exit.
	
	4. Restart Disk Administrator.
	
	5. Create a new partition.
	
	6. Exit Disk Administrator. Save the configuration when you exit.
	
	7. Restart Disk Administrator.
	
	8. Format the new partition (choose Format from the Tools menu).
	
	9. Exit Disk Administrator. Save the configuration when you exit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: disk opti removable gray grey grayed out unavailable prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
