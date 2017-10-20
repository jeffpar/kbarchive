---
layout: page
title: "Q136573: Win32s Requires Virtual Memory"
permalink: /kb/136/Q136573/
---

## Q136573: Win32s Requires Virtual Memory

{% raw %}

	Article: Q136573
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	2.00a
	WINDOWS
	kbsetup kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During Golf Setup you may receive the following error message:
	
	  Win32s Requires Virtual Memory.
	
	You receive this message if you do not have Virtual Memory turned on, regardless
	of the amount of physical RAM that your computer has.
	
	You are able to bypass the error message. However, you then receive the following
	error message:
	
	  Win32s - Error: Improper installation Win32s requires Windows to run with
	  virtual memory enabled. Reinstall Win32s
	
	CAUSE
	=====
	
	This occurs if you try to Start Golf without configuring Virtual Memory.
	
	RESOLUTION
	==========
	
	Properly configure Virtual Memory.
	
	If you have more than 12 MB of RAM, you can create a permanent swap file of at
	least 2048k. If you have less that 12 MB of RAM, you would want to create a
	permanent swap file of at least 4MB in size.
	
	For more information about how to accomplish this task in Windows, see your
	Windows printed documentation or online help.
	
	Additional query words: 2.00a Golf Virtual Memory Swap File Win32s
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
