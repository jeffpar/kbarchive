---
layout: page
title: "Q49322: Linker Err Msg Under OS/2: L1083: Cannot Open Run File"
permalink: /kb/049/Q49322/
---

## Q49322: Linker Err Msg Under OS/2: L1083: Cannot Open Run File

{% raw %}

	Article: Q49322
	Product(s): Microsoft Programming Utilities
	Version(s): OS/2:5.0x,5.1x
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for OS/2, versions 5.0x, 5.1x 
	-------------------------------------------------------------------------------
	
	When linking a program that is currently running in another session,
	the linker returns the following error:
	
	  L1083 CANNOT OPEN RUN FILE
	
	This error disappears when the program that is running is closed.
	
	This error occurs because OS/2 may want to discard the program's code
	segment and reload it later. If the linker writes a new EXE file and
	OS/2 reloads the code segment, it will be different and cause the
	accompanying problems.
	
	Additional query words: kbinf 5.00 5.10 5.0x 5.1x
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK50xOS2Search
	Version           : OS/2:5.0x,5.1x
	
	=============================================================================
	

{% endraw %}
