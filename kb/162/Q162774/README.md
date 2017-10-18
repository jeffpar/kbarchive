---
layout: page
title: "Q162774: Policy Editor Crashes When Using Large Custom ADM Files"
permalink: kb/162/Q162774/
---

## Q162774: Policy Editor Crashes When Using Large Custom ADM Files

	Article: Q162774
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to save a policy file, Poledit.exe performs an access violation.
	
	CAUSE
	=====
	
	A large custom policy template (an ADM file) has been added to enable the
	configuration of new (custom) policy entries. Because of the way memory is
	allocated for holding the template in memory, corruption of the template occurs,
	which makes the policy editor unstable. This corruption results in an access
	violation when a policy (.pol) file based on this template is saved to disk.
	
	
	RESOLUTION
	==========
	
	A fixed version of the policy editor is available from Microsoft Technical
	Support.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00 prodnt GPF General Protection Fault
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
