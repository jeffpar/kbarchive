---
layout: page
title: "Q131769: Adding A Second Adaptec 154x SCSI Adapter Fails in Windows NT"
permalink: kb/131/Q131769/
---

## Q131769: Adding A Second Adaptec 154x SCSI Adapter Fails in Windows NT

	Article: Q131769
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a second Adaptec 154x SCSI host adapter, Windows NT 3.5 detects it,
	but the initialization process fails and reports a memory conflict with the
	first Adaptec 154x SCSI host adapter.
	
	CAUSE
	=====
	
	When the Adaptec 154x SCSI host adapter driver performs detection of the second
	adapter card, it incorrectly detects the BIOS already detected for the first
	adapter card as BIOS of the second adapter card.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt aha154x
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
