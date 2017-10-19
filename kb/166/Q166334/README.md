---
layout: page
title: "Q166334: OpenGL Access Violation on Windows NT Version 4.0"
permalink: /kb/166/Q166334/
---

## Q166334: OpenGL Access Violation on Windows NT Version 4.0

	Article: Q166334
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbgraphickbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under heavy stress, OpenGL applications may experience access violations. Also,
	OpenGl Line and Polygon texture clipping functions may fail when fogging is
	enabled.
	
	
	CAUSE
	=====
	
	Some OpenGL modules do not perform adequate error checking, and therefore make
	invalid assumptions about the status of certain data structures.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbgraphic kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
