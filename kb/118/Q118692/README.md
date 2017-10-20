---
layout: page
title: "Q118692: Printing Output is Always Directed to the Upper Output Tray"
permalink: /kb/118/Q118692/
---

## Q118692: Printing Output is Always Directed to the Upper Output Tray

{% raw %}

	Article: Q118692
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
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
	
	You cannot print to your printer's lower output tray.
	
	CAUSE
	=====
	
	In Windows NT 3.1 and 3.5, the miniport driver does not have the option to
	change the location of output tray. The output tray is defaulted to the upper
	bin.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.1 and 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt 3.10 hp si lower tray
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
