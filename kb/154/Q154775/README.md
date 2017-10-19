---
layout: page
title: "Q154775: &quot;Memory Full&quot; Error Opening Large Lotus 1-2-3 for MS-DOS File"
permalink: /kb/154/Q154775/
---

## Q154775: &quot;Memory Full&quot; Error Opening Large Lotus 1-2-3 for MS-DOS File

	Article: Q154775
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a very large Lotus 1-2-3 for MS-DOS spreadsheet, you receive a
	"Memory is full" error message.
	
	WORKAROUND
	==========
	
	To work around this problem, Lotus suggests using 123memsize=32,767 as an
	environment variable. You can add this environment variable to either the User
	Environment Variables tab of Control Panel System, or the Autoexec.nt file.
	
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
