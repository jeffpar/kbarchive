---
layout: page
title: "Q129008: Windows NT Displays a Stall or Panic Error When Printing"
permalink: /kb/129/Q129008/
---

## Q129008: Windows NT Displays a Stall or Panic Error When Printing

	Article: Q129008
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
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
	
	Windows NT may display a stall or panic error message when printing.
	
	CAUSE
	=====
	
	This problem occurs when the size of a print job spool file, when divided by
	4096, yields a remainder between 3938 and 3958. A non-paged pool allocation in
	this range can cause a pool list array overflow.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the service pack release containing this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
