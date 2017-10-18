---
layout: page
title: "Q107580: Net Watcher Event Log May Not Clear"
permalink: kb/107/Q107580/
---

## Q107580: Net Watcher Event Log May Not Clear

	Article: Q107580
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose the Clear button in the View Event Log window of Net Watcher,
	the event log sometimes does not clear.
	
	CAUSE
	=====
	
	This problem occurs when one of the following conditions exists:
	
	- Scrolling is required to see all the events in the log.
	
	  -or-
	
	- Your WFWAUDIT.DLL file is corrupted.
	
	RESOLUTION
	==========
	
	If your WFWAUDIT.DLL file is corrupted, you can correct this problem by
	expanding WFWAUDIT.DL_ from your original Windows for Workgroups disk set.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows for Workgroups
	version 3.11. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	STEPS TO REPRODUCE PROBLEM
	==========================
	
	
	Additional query words: 3.11 netwatcher
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
