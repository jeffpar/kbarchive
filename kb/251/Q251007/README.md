---
layout: page
title: "Q251007: Some Cluster Disks Are Not Available After Installing SP6"
permalink: kb/251/Q251007/
---

## Q251007: Some Cluster Disks Are Not Available After Installing SP6

	Article: Q251007
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT400PreSP7Fix kbWin2000SP2Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Microsoft Windows NT 4.0 Service Pack 6 (SP6), some cluster
	disks may not come online. If the quorum disk is affected, the entire cluster
	does not start. The problem is most likely to occur after you "cold boot" the
	computer. If cluster logging is enabled, you may see an entry similar to the
	following example:
	
	  Physical Disk <Disk X:> : SCSI, error reserving disk, error 21.
	
	CAUSE
	=====
	
	The partition table on the disk contains an invalid entry that is misinterpreted
	by the cluster disk driver.
	
	
	RESOLUTION
	==========
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	To resolve this problem, apply the fix described in the following article:
	
	  Q272569 System Process Loses Delayed-Write Data with Windows Clustering
	
	STATUS
	======
	
	
	
	Additional query words: mscs disappear missing
	
	======================================================================
	Keywords          : kberrmsg kbWinNT400PreSP7Fix kbWin2000SP2Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTSEnt400SP6a
	Version           : :4.0,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
