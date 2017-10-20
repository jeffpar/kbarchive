---
layout: page
title: "Q128435: Error Printing From Lotus Notes in Windows NT"
permalink: /kb/128/Q128435/
---

## Q128435: Error Printing From Lotus Notes in Windows NT

{% raw %}

	Article: Q128435
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
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
	
	When you print from Lotus Notes in Windows NT to a printer with the printer name
	longer than 32 characters, the following error message may appear:
	
	  Cannot access printer or printer driver (may be due to insufficient memory)
	
	CAUSE
	=====
	
	Lotus Notes maintains a 32-byte internal buffer size for file names. The long
	file name of the printer is correctly reported, but Notes accepts only the first
	32 characters. Therefore Notes is not able to locate the printer.
	
	RESOLUTION
	==========
	
	To resolve this issue, use a printer name shorter than 32 characters. To rename
	a printer, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click the printer, and then click Rename on the
	  menu that appears.
	
	Lotus Notes is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this products' performance or
	reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
