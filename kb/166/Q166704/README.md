---
layout: page
title: "Q166704: Err Msg: Not Enough Storage Is Available to Complete This..."
permalink: /kb/166/Q166704/
---

## Q166704: Err Msg: Not Enough Storage Is Available to Complete This...

{% raw %}

	Article: Q166704
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Start button, point to Settings, and then click Printers, or
	when you double-click Printers in Control Panel, you may receive the following
	error message:
	
	  Not Enough Storage is Available to Complete this Operation
	
	CAUSE
	=====
	
	The Printui.dll file in the Winnt\System32 folder is missing or damaged.
	
	RESOLUTION
	==========
	
	Extract a new copy of the Printui.dll file from your Windows NT CD-ROM. To do
	so, follow these steps:
	
	1. At a command prompt, change to the <cd-rom>:\<platform> folder,
	  where <cd-rom> is your CD-ROM drive and <platform> is the
	  computer platform you are using. Use the I386 folder for Intel-based
	  computers.
	
	2. Type the following line:
	
	  expand printui.dl_ winnt\system32\printui.dll
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kberrmsg kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
