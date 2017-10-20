---
layout: page
title: "Q135192: Error Message: Insufficient Memory to Initialize Windows"
permalink: /kb/135/Q135192/
---

## Q135192: Error Message: Insufficient Memory to Initialize Windows

{% raw %}

	Article: Q135192
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you try to start Windows 95:
	
	  Insufficient memory to initialize Windows. Quit one or more memory- resident
	  programs or remove unnecessary utilities from your Config.sys and
	  Autoexec.bat files, and restart your computer.
	
	CAUSE
	=====
	
	This error can occur in a low-memory situation caused by real-mode drivers
	loaded in memory, or when the hard disk containing the swap file is low on free
	space.
	
	RESOLUTION
	==========
	
	Remove unnecessary drivers from the Autoexec.bat and Config.sys files, restart
	your computer, and then try to start Windows 95 again. If this does not work,
	try freeing up three or more megabytes of space on the hard disk containing the
	swap file.
	
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
