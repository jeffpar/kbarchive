---
layout: page
title: "Q142433: BUG: Can't Open Performance Monitor Settings Files Read-Only"
permalink: kb/142/Q142433/
---

## Q142433: BUG: Can't Open Performance Monitor Settings Files Read-Only

	Article: Q142433
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You can't open a Performance Monitor settings file -- including an alert
	(*.pma), chart (*.pmc), log (*.pml), report (*.pmr), or workspace (*.pmw) file
	-- that has a read-only attribute. No error message is returned.
	
	RESOLUTION
	==========
	
	Before attempting to open the read-only file, remove the read-only attribute.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
