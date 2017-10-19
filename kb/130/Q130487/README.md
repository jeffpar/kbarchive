---
layout: page
title: "Q130487: Event 560 When Opening a Read-Only File for Read Access"
permalink: /kb/130/Q130487/
---

## Q130487: Event 560 When Opening a Read-Only File for Read Access

	Article: Q130487
	Product(s): Windows for Workgroups and Windows NT Networking Issues
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
	
	If a file has only read and execute permissions, event 560 (Audit Failure) may
	be written to the security log when the file is opened for read access. For this
	symptom to occur, auditing for file write failure must be enabled.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
