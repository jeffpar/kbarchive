---
layout: page
title: "Q122781: LMHOSTS #INCLUDE of Local Files May Fail on Windows NT 3.5"
permalink: /kb/122/Q122781/
---

## Q122781: LMHOSTS #INCLUDE of Local Files May Fail on Windows NT 3.5

	Article: Q122781
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the #INCLUDE statement in LMHOSTS files to include local files may not
	work reliably in Windows NT version 3.5. For example:
	
	     #INCLUDE c:\temp\lmhosts
	
	The NBTSTAT -C command may show that the names and addresses in the
	C:\TEMP\LMHOSTS file did not get loaded into cache.
	
	CAUSE
	=====
	
	A bug in the text-parsing routines resulted in an incorrect full path being
	generated for the local file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT version
	3.5. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: prodnt 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
