---
layout: page
title: "Q127955: NT LPD Fails to Remove Double Digit Job Numbers via LPRM"
permalink: kb/127/Q127955/
---

## Q127955: NT LPD Fails to Remove Double Digit Job Numbers via LPRM

	Article: Q127955
	Product(s): Microsoft Windows NT
	Version(s): 3.50
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
	
	Under Windows NT 3.5, if the LPD Server is issued an LPRM command (remote
	removal of a job) from an LPR client (such as UNIX), any jobs with double digits
	(10 or >) are not removed properly. However, single digit jobs (1 to 9) are
	removed properly.
	
	
	WORKAROUND
	==========
	
	To work around this problem, remove pending jobs sent from an LPR client using
	Print Manager on the LPD Server or Print Manager from a Windows NT client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
