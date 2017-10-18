---
layout: page
title: "Q133410: The Breakpoint &quot;{,&lt;filename&gt;,} .&lt;line&gt;&quot; Cannot Be Set"
permalink: kb/133/Q133410/
---

## Q133410: The Breakpoint &quot;{,&lt;filename&gt;,} .&lt;line&gt;&quot; Cannot Be Set

	Article: Q133410
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When debugging projects located on a Novell Netware server from Windows NT
	version 3.51, you can receive this error:
	
	  The breakpoint "{,<filename>,} .<line>" cannot be set.
	
	CAUSE
	=====
	
	There is a problem in NWRDR.SYS. The file read modes are not set correctly.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 2.00 2.10 2.20 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
