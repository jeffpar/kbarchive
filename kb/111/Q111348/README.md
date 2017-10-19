---
layout: page
title: "Q111348: Stripe Set with Parity Incorrectly Displays RECOVERED"
permalink: /kb/111/Q111348/
---

## Q111348: Stripe Set with Parity Incorrectly Displays RECOVERED

	Article: Q111348
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Upon restarting Windows NT Advance Server with fault tolerance, a striped set
	with parity is not recovered even though you regenerated it and received the
	message "Stripe set with parity #x [RECOVERED]."
	
	CAUSE
	=====
	
	When an NTFS fault tolerant stripe set with parity encounters discrepancies in
	redundant data (eg: by removing a disk drive), you can choose the Regenerate
	command from the Fault Tolerance menu even if there is not enough space (eg: a
	new disk) to regenerate the redundant data. After you choose the Regenerate
	command, the stripe set is shown as "Stripe set with parity #x [RECOVERED],"
	even though it has is not actually been regenerated. When you restart your
	computer, Disk Administrator correctly shows the strip set as [RECOVERABLE]
	again.
	
	This behavior can be reproduced with the following steps:
	
	1. Set up a stripe set with parity.
	
	2. Disable one drive in the set.
	
	3. Start Disk Administrator.
	
	4. Select the stripe set with parity; the status will be [RECOVERABLE].
	
	5. From the Fault Tolerance menu, choose the Regenerate command.
	
	6. Select the stripe set again, the status will be [RECOVERED].
	
	7. Exit Disk Administrator, save changes, and restart your computer.
	
	8. Disk Administrator shows the stripe set as [RECOVERABLE] again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt RAID5 UI
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
