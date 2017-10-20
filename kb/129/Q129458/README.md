---
layout: page
title: "Q129458: Printers are not Displayed in Connect To Printer Dialog Box"
permalink: /kb/129/Q129458/
---

## Q129458: Printers are not Displayed in Connect To Printer Dialog Box

{% raw %}

	Article: Q129458
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT Print Manager, choose Connect To Printer from the
	Printer menu, and browser a domain, it's printers are not displayed.
	
	CAUSE
	=====
	
	This problem occurs when the domain name includes an exclamation point. Because
	the exclamation point (!) character is used as a separator by the code that
	enumerates printers, the printers do not get enumerated correctly.
	
	WORKAROUND
	==========
	
	To work around this problem, do not use the exclamation point character in your
	domain or printer names.
	
	Additional query words: 3.10 prodnt enumerate
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	

{% endraw %}
