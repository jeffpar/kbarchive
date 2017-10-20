---
layout: page
title: "Q65452: Windows 3.0 Err Msg : Cannot Open Group File (in Real Mode)"
permalink: /kb/065/Q65452/
---

## Q65452: Windows 3.0 Err Msg : Cannot Open Group File (in Real Mode)

{% raw %}

	Article: Q65452
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may get the message "Cannot open group file" when you run Microsoft Windows
	version 3.0 in real mode. In addition, a group may be missing when Program
	Manager appears.
	
	This message does not occur when you try to run Windows in standard or 386
	enhanced mode.
	
	CAUSE
	=====
	
	This can be caused by low system resources in real mode.
	
	WORKAROUND
	==========
	
	You can avoid this problem by using fewer Program Groups in the Program Manager
	and by not opening a number of applications automatically on entry into Windows.
	Remove entries in the RUN= and LOAD= lines of the WIN.INI file.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
