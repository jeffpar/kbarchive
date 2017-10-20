---
layout: page
title: "Q256171: Group Policy Custom Shell Entry Overrides ICA Published Program"
permalink: /kb/256/Q256171/
---

## Q256171: Group Policy Custom Shell Entry Overrides ICA Published Program

{% raw %}

	Article: Q256171
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv kbWinNT4sp6fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a system policy that uses the Custom Shell option is defined and you use an
	Independent Computing Architecture (ICA) client to connect to a published
	program, you receive the custom shell instead of the published program.
	
	The system policy entry is:
	
	  Default User, Windows NT Shell, Custom User Interface, Custom Shell
	
	CAUSE
	=====
	
	This behavior can occur if you choose the custom shell before checking for the
	existence of a published program or initial program.
	
	STATUS
	======
	
	This problem was first corrected in Windows NT Server version 4.0, Terminal
	Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
