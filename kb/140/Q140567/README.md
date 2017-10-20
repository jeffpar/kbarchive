---
layout: page
title: "Q140567: Error Message: WINOLDAP Caused GP Fault in Module USER.EXE"
permalink: /kb/140/Q140567/
---

## Q140567: Error Message: WINOLDAP Caused GP Fault in Module USER.EXE

{% raw %}

	Article: Q140567
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When System Agent tries to stop an MS-DOS-based program, you may receive the
	following error message:
	
	  WINOLDAP caused a general protection fault in module USER.EXE at
	  0004:00001d43.
	
	CAUSE
	=====
	
	When System Agent tries to shut down an MS-DOS session, the message "Windows
	cannot shut down this program automatically..." is normally displayed.
	
	If this message is left open (either because it is behind a currently running
	program or it is ignored) and System Agent tries to shut down a second MS-DOS
	session, the general protection (GP) fault occurs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Plus! version 1.0 for
	Windows 95. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	You may also receive this error message when you try to install a program, even
	if you have not installed Microsoft Plus!. If you receive this error message and
	you do not have Microsoft Plus! installed, check to make sure that the correct
	monitor type is selected in Display properties. To do so, follow these steps:
	
	1. In Control Panel, double-click Display.
	
	2. Click the Settings tab, and then click Change Display Type.
	
	3. If the Monitor Type box contains "Unknown monitor," click Change, and then
	  select your monitor.
	
	Additional query words: gpf
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
