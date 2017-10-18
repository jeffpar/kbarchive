---
layout: page
title: "Q132555: TYPE Command Displays Garbage After Displaying File Contents"
permalink: kb/132/Q132555/
---

## Q132555: TYPE Command Displays Garbage After Displaying File Contents

	Article: Q132555
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you display the contents of a file using the TYPE command, garbage is
	displayed after the contents of the file are displayed.
	
	CAUSE
	=====
	
	This problem occurs when a ^Z character is positioned one byte past an integral
	multiple of 512 (for example, the byte at position 513 or 1025 in a file is ^Z).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1, 3.5,
	and 3.51. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.10 prodnt cntl/Z control
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
