---
layout: page
title: "Q124484: Error 33: DOSRead and DOSWrite APIs from OS/2 Application"
permalink: /kb/124/Q124484/
---

## Q124484: Error 33: DOSRead and DOSWrite APIs from OS/2 Application

	Article: Q124484
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
	
	When you call a DOSRead or DOSWrite API on locked ranges from an OS/2-based
	application under Windows NT version 3.5, an error 33 appears.
	
	CAUSE
	=====
	
	The OS/2 subsystem does not resolve the DOSRead and DOSWrite APIs correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem has been corrected in the latest
	U.S. Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt OS2 OS2SRV
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
