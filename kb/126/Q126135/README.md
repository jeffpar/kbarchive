---
layout: page
title: "Q126135: Problems Saving a Text File From Lotus 123 for Windows Running"
permalink: /kb/126/Q126135/
---

## Q126135: Problems Saving a Text File From Lotus 123 for Windows Running

{% raw %}

	Article: Q126135
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to save a file as text only from Lotus 123 for Windows version
	4.0 or 5.0 under Windows NT, the following error appears:
	
	  Unable to access output device
	
	This error also occurs when you print from Lotus 123 for MS-DOS using the
	backslash key (/) instead of using the Windows menus to print.
	
	CAUSE
	=====
	
	Lotus 123 exports text and prints through a the WINGEN.DRV driver. This driver
	was developed by Lotus to work with Windows and does not work with Windows NT.
	
	RESOLUTION
	==========
	
	To work around this problem, print to file using the Generic Text Only driver
	included in Windows NT 3.51 or 4.00.
	
	Additional query words: prodnt 1-2-3 spreadsheet spread sheet
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51 4.00
	
	=============================================================================
	

{% endraw %}
