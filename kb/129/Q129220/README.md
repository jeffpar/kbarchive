---
layout: page
title: "Q129220: Taskbar Button Not Updated After Exiting Command Prompt"
permalink: /kb/129/Q129220/
---

## Q129220: Taskbar Button Not Updated After Exiting Command Prompt

{% raw %}

	Article: Q129220
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an MS-DOS-based program in Windows 95 and then start a command
	prompt from that program, the taskbar button for that program may not be updated
	properly when you exit the command prompt. That is, the taskbar button may still
	show that the command prompt is the active program even though you have exited
	the command prompt and returned to the MS-DOS-based program.
	
	CAUSE
	=====
	
	The MS-DOS-based program has moved its program segment prefix (PSP). (The PSP is
	a small data structure that Windows 95 uses to determine the program name that
	should be displayed on the taskbar button.) When the PSP is moved, Windows 95
	cannot find it and cannot accurately report the active program on the taskbar
	button.
	
	RESOLUTION
	==========
	
	Quit and restart the MS-DOS-based program to update the taskbar button for that
	program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you start a command prompt from an MS-DOS-based program, a new instance of
	the command interpreter (COMMAND.COM) is started, and the taskbar button for the
	original program is updated to reflect the fact that COMMAND.COM is the active
	program (Windows 95 gets this information from the PSP for the new instance of
	COMMAND.COM). When you exit the command prompt, Windows 95 attempts to update
	the taskbar button with information from the PSP for the original MS-DOS-based
	program. If the PSP cannot be found, the taskbar button is not updated and still
	indicates that COMMAND.COM is the active program.
	
	
	Additional query words: systray tray task bar
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
