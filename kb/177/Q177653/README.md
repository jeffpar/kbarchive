---
layout: page
title: "Q177653: CRT Conflict with Getservbyname"
permalink: /kb/177/Q177653/
---

## Q177653: CRT Conflict with Getservbyname

{% raw %}

	Article: Q177653
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the getservbyname() function, an error is returned and the Services
	file located in %SystemRoot\System32\Drivers\Etc cannot be processed.
	
	CAUSE
	=====
	
	When C runtimes (CRTs) are linked dynamically (/MD - use Msvcrt.dll), the
	modules share one copy of the _fmode global variable. A change from its default
	_O_TEXT to _O_BINARY affects all modules, causing getservbyname to fail because
	it expects _O_TEXT.
	
	When the CRT is linked statically, there are multiple copies of the CRT (and,
	therefore, multiple copies of _fmode) involved, meaning that changing the value
	of _fmode in the program changes the default mode for fopen throughout the .exe,
	but the default mode for any calls to fopen from the sockets DLL accesses the
	_fmode variable in CRT DLL whose value is _O_TEXT; therefore, no failure.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Note that a specific version of this hotfix is now available for customers seeing
	this issue on Windows NT Terminal Server. Please contact Microsoft Customer
	support to obtain this fix.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
