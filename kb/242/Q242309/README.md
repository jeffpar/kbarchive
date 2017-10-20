---
layout: page
title: "Q242309: CreateFile() Does Not Function Correctly with Certain Flags"
permalink: /kb/242/Q242309/
---

## Q242309: CreateFile() Does Not Function Correctly with Certain Flags

{% raw %}

	Article: Q242309
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbProgramming osr2 win95 win98 win98se
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating a file on a NetWare server with Read/Write access may return a handle
	to a read-only file. The caller is unaware that the file is read-only because
	GENERIC_READ and GENERIC_WRITE were specified in the CreateFile call.
	
	CAUSE
	=====
	
	When CreateFile is called, a read-only file can be opened even thought the
	GENERIC_READ and GENERIC_WRITE flags were specified by the caller. The problem
	occurs when you create a file with a long file name on a NetWare server by using
	Nwredir. The problem occurs in the bindery client as well as Services for
	NetWare Directory Services.
	
	WORKAROUND
	==========
	
	If you call CreateFile(..., GENERIC_READ, ...), this issue is likely to occur.
	If it succeeds, you can then close the returned handle and call CreateFile(...,
	GENERIC_READ | GENERIC_WRITE, ...) as normal.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming osr2 win95 win98 win98se 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
