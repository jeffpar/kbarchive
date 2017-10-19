---
layout: page
title: "Q126227: Applications Hang When Printing to File with Comma"
permalink: /kb/126/Q126227/
---

## Q126227: Applications Hang When Printing to File with Comma

	Article: Q126227
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
	
	An application will stop responding (hang) if you print to a file with a comma
	in its file or directory name. 32-bit applications such as Notepad hang and
	cannot be ended from Task Manager. 16-bit applications such as Write hang. If
	you end them with Task Manager, the entire Windows-on- Windows (WOW) subsystem
	will be terminated. However, the hanging 16-bit application will not terminate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT Workstation or Server version 4.0.
	
	Additional query words: prodnt hang comma file
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
