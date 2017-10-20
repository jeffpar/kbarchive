---
layout: page
title: "Q257465: First Character Typed After Logon Is Ignored in 16-Bit Programs"
permalink: /kb/257/Q257465/
---

## Q257465: First Character Typed After Logon Is Ignored in 16-Bit Programs

{% raw %}

	Article: Q257465
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbtool kbWinNT4sp6fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The first character you type after logging on to a Terminal Server session may
	be ignored if you type it in a 16-bit program or a Windows NT Virtual DOS
	Machine (NTVDM).
	
	This problem can also occur if the NUM LOCK state is changed and the Terminal
	Server Client session window is not the active window. This affects only NTVDMs
	or programs running within an NTVDM.
	
	CAUSE
	=====
	
	When you are logging on to a Terminal Server session, a simulated NUM LOCK
	keystroke is generated to synchronize the keyboard state with that of the client
	computer. This simulated keystroke does not have the Extended Keyboard flag set,
	causing NTVDMs to lose the next keystroke.
	
	STATUS
	======
	
	This problem was first corrected in Windows NT Server version 4.0, Terminal
	Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
