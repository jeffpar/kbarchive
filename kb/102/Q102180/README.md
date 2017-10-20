---
layout: page
title: "Q102180: VB MDI Applications Missing Menu Bar with Windows NT"
permalink: /kb/102/Q102180/
---

## Q102180: VB MDI Applications Missing Menu Bar with Windows NT

{% raw %}

	Article: Q102180
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Visual Basic version 2.0 multiple document interface (MDI)
	applications may not have a menu bar when running with Windows NT.
	
	CAUSE
	=====
	
	This problem occurs when you create an MDI client window without any MDI child
	windows.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure that each MDI client window has at least
	one MDI child window or upgrade to Visual Basic version 3.0.
	
	Additional query words: prodnt workaround vb
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
