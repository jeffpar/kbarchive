---
layout: page
title: "Q130858: Windows NT Does Not Detect a Three-Button Mouse"
permalink: /kb/130/Q130858/
---

## Q130858: Windows NT Does Not Detect a Three-Button Mouse

{% raw %}

	Article: Q130858
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a three-button mouse and its driver and restart Windows NT,
	you may not be able to use all three buttons of the mouse.
	
	CAUSE
	=====
	
	By default, Windows NT configures all mice as a two-button mouse in the
	registry.
	
	RESOLUTION
	==========
	
	To correct this problem, you must modify the Windows NT Registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor and go to the following subkey:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	        \<mouse type>\Parameters
	
	
	2. Highlight the following entry: NumberOfButtons
	
	3. From the Edit menu, select DWORD.
	
	4. Change the Data value to 3. Choose OK.
	
	5. Exit Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
