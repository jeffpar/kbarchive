---
layout: page
title: "Q140239: SMODE Tool Does Not Affect Client for NetWare Networks"
permalink: /kb/140/Q140239/
---

## Q140239: SMODE Tool Does Not Affect Client for NetWare Networks

{% raw %}

	Article: Q140239
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use the Novell SMODE tool to modify the search mode that is used for a
	particular program, the program may not run. When this occurs, you may receive
	error messages stating that an auxiliary file needed by the program cannot be
	found. This behavior can occur when you are using the Microsoft Client for
	NetWare Networks.
	
	CAUSE
	=====
	
	The Microsoft Client for NetWare Networks is not compatible with Novell's SMODE
	tool. When you run a program after using SMODE to modify the search mode for
	that program, the current search mode is used instead of the search mode you
	specified with SMODE.
	
	RESOLUTION
	==========
	
	To work around this behavior, use the Novell VLM or NETX network client instead
	of the Microsoft Client for NetWare Networks.
	
	STATUS
	======
	
	This behavior occurs because the Microsoft Client for NetWare Networks does not
	provide exactly the same functionality as the Novell VLM and NETX clients, not
	because of a problem in Windows 95.
	
	MORE INFORMATION
	================
	
	The Novell SMODE tool is used to modify the search mode that is used when you
	run a particular program. When you run the program, the search mode you
	specified with SMODE overrides the current search mode.
	
	For additional information about search modes and the Microsoft Client for
	NetWare Networks, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q129055 Search Mode Limitation in Client for NetWare Networks
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
