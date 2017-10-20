---
layout: page
title: "Q174555: STOP 0x0000001E When IIS Service Is Stopped"
permalink: /kb/174/Q174555/
---

## Q174555: STOP 0x0000001E When IIS Service Is Stopped

{% raw %}

	Article: Q174555
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you stop the Internet Information Server (IIS) service while an Active
	Server Page (ASP) from a Visual FoxPro DLL is still loaded on a client computer,
	the following blue screen STOP error message will be displayed:
	
	  STOP 0x0000001E (0xc0000005, 0xa0026579, 00000000, 0x000000d4)
	  KMODE_EXCEPTION_NOT_HANDLED
	  Win32K.sys
	
	NOTE: The first and fourth parameters will be the same each time.
	
	CAUSE
	=====
	
	Win32k.sys was attempting to get thread information from a window that had
	already been destroyed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
