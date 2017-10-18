---
layout: page
title: "Q139436: Scheduled Tasks Reported as Complete as Soon as Started"
permalink: kb/139/Q139436/
---

## Q139436: Scheduled Tasks Reported as Complete as Soon as Started

	Article: Q139436
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
	
	Some tasks scheduled in System Agent may be reported as being finished as soon
	as they begin. The Last Ended and Last Result fields in System Agent, as well as
	in the Sagelog.txt file, may indicate that the scheduled task ended successfully
	as soon as it started, even if the task is still running.
	
	CAUSE
	=====
	
	This behavior can occur with scheduled programs that launch another associated
	program.
	
	RESOLUTION
	==========
	
	If possible, change the properties of the scheduled task to run the other
	program that is run by the originally scheduled program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Plus! for Windows 95,
	version 1.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The behavior described in this article can occur if you schedule Microsoft Paint
	(Pbrush.exe) or Windows Explorer (Explorer.exe) as a program with no associated
	filename.
	
	Additional query words: kbplus
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
