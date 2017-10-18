---
layout: page
title: "Q160651: OpenGL May Cause an Exception 0xc0000090"
permalink: kb/160/Q160651/
---

## Q160651: OpenGL May Cause an Exception 0xc0000090

	Article: Q160651
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application that uses OpenGL may crash with an exception 0xC0000090.
	
	CAUSE
	=====
	
	OpenGL does not clip backfaces, and it computes colors incorrectly in some
	limited cases involving two sided lighting. This problem specifically occurs
	using Lightwave 5.0.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
