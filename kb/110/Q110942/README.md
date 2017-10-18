---
layout: page
title: "Q110942: Hang on Reboot Autocheck of Stripe Set with Parity"
permalink: kb/110/Q110942/
---

## Q110942: Hang on Reboot Autocheck of Stripe Set with Parity

	Article: Q110942
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you restart after a system failure that caused data corruption, Microsoft
	Windows NT Advanced Server stops responding (hangs) while autochecking a stripe
	set with parity.
	
	CAUSE
	=====
	
	When you reboot after a system failure, CHKDSK calls NTFS to search for data
	corruption. When NTFS finds discrepancies in the redundant data, it attempts to
	replace the bad sector with its redundant sector. The FTDISK driver calls the
	SCSI driver to read the redundant sector, but Windows NT hangs because the SCSI
	driver's asynchronous procedure call (APC) completion thread does not have
	priority over the FTDISK driver synchronous thread waiting for the call to
	return.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
