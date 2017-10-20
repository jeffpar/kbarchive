---
layout: page
title: "Q129041: Word for Windows NT Prints Slowly When Project 4.0 is Running"
permalink: /kb/129/Q129041/
---

## Q129041: Word for Windows NT Prints Slowly When Project 4.0 is Running

{% raw %}

	Article: Q129041
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
	
	When print from Word for Windows NT, print performance is extremely sluggish or
	Word for Windows NT becomes unresponsive.
	
	CAUSE
	=====
	
	This problem occurs when you print from Word for Windows NT, you have the print
	in background option selected, and Project version 4.0 is running.
	
	RESOLUTION
	==========
	
	To correct this problem, turn off background printing in Word for Windows NT.
	
	NOTE: If Word for Windows NT stops responding (hangs), you may be able to work
	around the problem by pressing ALT+TAB to get to the Project 4.0 window and
	choosing one of the menu items.
	
	This problem is caused by Project 4.0 constantly polling for I/O. For additional
	information, please see the following article(s) in the Microsoft Knowledge
	Base:
	
	  Q124481: Project: All Idle Processor Time Used by Project
	
	
	Additional query words: 3.10 prodnt winword winwordnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	

{% endraw %}
