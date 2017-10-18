---
layout: page
title: "Q242075: Establish Mirror Command Unavailable in Disk Administrator"
permalink: kb/242/Q242075/
---

## Q242075: Establish Mirror Command Unavailable in Disk Administrator

	Article: Q242075
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create a mirror partition, the Establish Mirror command is
	unavailable on the Fault Tolerance menu in Disk Administrator.
	
	CAUSE
	=====
	
	This issue can occur if both partitions that you are using to establish a mirror
	are not selected in Disk Administrator.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. In Disk Administrator, press and hold down the CTRL key, click the partition
	  you want to mirror, and then click the partition where you want to establish
	  the mirror.
	
	2. The first drive needs to have a partition created, and the 2nd drive consist
	  of free space.
	
	3. On the Fault Tolerance menu, click Establish Mirror.
	
	Additional query words: partition fault
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
