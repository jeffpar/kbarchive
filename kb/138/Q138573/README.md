---
layout: page
title: "Q138573: Moving Large Number of Files With Wildcard (&#42;) File Names Fails"
permalink: /kb/138/Q138573/
---

## Q138573: Moving Large Number of Files With Wildcard (&#42;) File Names Fails

	Article: Q138573
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to move a large number of files from one directory to a
	specified directory and you use wildcards (*) in the file name, the files are
	not moved to the specified directory. For example:
	
	  move c:\test\135*.dgn d:\test\135
	  move c:\test\136*.dgn d:\test\136
	
	If this example, the 135*.dgn and 136*.dgn files are moved to the d:\test\135
	directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
