---
layout: page
title: "Q125964: Visual C++ Needs Updated Linker for Windows NT 3.5"
permalink: /kb/125/Q125964/
---

## Q125964: Visual C++ Needs Updated Linker for Windows NT 3.5

{% raw %}

	Article: Q125964
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive compile, link, or disk errors using Microsoft Visual C version
	1.5 (16-bit) or the Microsoft Visual C version 1.1 (32-bit) under Windows NT.
	The file size after linking may be the same regardless of the program you
	compile.
	
	RESOLUTION
	==========
	
	To correct this problem, copy the appropriate linker (either 32-bit or 16- bit)
	from the Windows NT Workstation CD \support\linkers directory to the Microsoft
	Visual C BIN directory.
	
	NOTE: These files are not on the Windows NT 3.5 Server CD.
	
	Additional query words: prodnt 1.51 MFC link msvc
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	

{% endraw %}
