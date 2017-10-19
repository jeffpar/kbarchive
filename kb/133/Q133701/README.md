---
layout: page
title: "Q133701: Forward Slash May Be Ignored As A Path Delimiter In 3.51"
permalink: /kb/133/Q133701/
---

## Q133701: Forward Slash May Be Ignored As A Path Delimiter In 3.51

	Article: Q133701
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Functions like stat() may fail when a forward slash is used as a path delimiter.
	
	CAUSE
	=====
	
	Windows NT 3.51 ignores the '/' as a path delimiter when the ExpandDosPath
	function is called.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51. A fix was made to ExpandDosPath(PSTR pszPathGiven) in WKFILEIO.C
	to pass over the path name string first and convert any "/" characters to "\".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt pathname
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
