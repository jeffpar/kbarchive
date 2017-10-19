---
layout: page
title: "Q135606: FINDSTR Causes STOP Error 21a"
permalink: /kb/135/Q135606/
---

## Q135606: FINDSTR Causes STOP Error 21a

	Article: Q135606
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
	
	The Windows NT 3.5 Findstr command can cause STOP message 21a when it is used to
	search some rich text format (.RTF) files.
	
	WORKAROUND
	==========
	
	To work around this problem, copy the data from the original RTF file into a new
	RTF file. The problem should not occur when you use Findstr on the new RTF file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt blue screen 0x0000021a
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
