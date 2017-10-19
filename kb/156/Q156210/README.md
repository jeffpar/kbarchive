---
layout: page
title: "Q156210: Cannot Expand or Extend the Stripe Set After Creation"
permalink: /kb/156/Q156210/
---

## Q156210: Cannot Expand or Extend the Stripe Set After Creation

	Article: Q156210
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you create a stripe set with Disk Administrator under Microsoft Windows NT,
	there is no way to extend the size of the stripe set after its creation.
	
	Microsoft Windows NT implements disk striping, which increases disk performance.
	Windows NT Server also adds the ability to create fault tolerant stripe sets
	with parity. In either case, the stripe sets are created as a fixed size, using
	free space on the selected disks.
	
	The smallest amount of free space from the selected disks will be used as a
	common partition size. As a result of the fixed size limitations, stripe sets
	may not be extended beyond their original size without deleting and re-creating
	the stripe set. If you decide to create a larger stripe set, you should first
	back up all valuable information from the stripe set before deleting it, because
	deleting a stripe set causes all data within it to be lost.
	
	Additional query words: prodnt expand
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
