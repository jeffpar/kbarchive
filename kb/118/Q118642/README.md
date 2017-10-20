---
layout: page
title: "Q118642: Windows 95 Err Msg: Win32 Exec App Unable to Find..."
permalink: /kb/118/Q118642/
---

## Q118642: Windows 95 Err Msg: Win32 Exec App Unable to Find...

{% raw %}

	Article: Q118642
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to load an application, Windows 95 may report one of the following
	error messages
	
	  Win32 Loader Error
	  Win32 Exec App unable to find C:\<directory\filename>
	
	  where <directory\filename> is the executable file you were trying to
	  start.
	
	-or-
	
	  Error Starting Program
	  There is not enough memory to start (filename). Quit some programs, and then
	  try again.
	
	You may receive the following error when you try to close a 32-bit application,
	such as WordPad:
	
	  Insufficient memory to perform operation.
	
	CAUSE
	=====
	
	These errors occur when the virtual memory settings are too low. They occur more
	often on systems with less than 8 megabytes (MB) of extended memory available.
	
	RESOLUTION
	==========
	
	To correct this problem, increase the virtual memory settings. If the maximum
	setting is already set, you may need to choose a different hard disk or remove
	files from the current hard disk chosen to increase the amount of disk space
	reserved for extra memory. You can increase the amount of hard disk space
	reserved for extra memory by performing the following steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the System icon.
	
	3. Click the Performance tab, and then click Virtual Memory.
	
	4. Click the "Let me specify my own virtual memory settings" option.
	
	5. Adjust the Hard Disk, Minimum, and Maximum settings as necessary.
	
	6. Click OK or Close until you return to Control Panel.
	
	MORE INFORMATION
	================
	
	The minimum recommended amount of hard disk space reserved for extra memory is 5
	MB. Windows 95 dynamically allocates available disk space for use as extra
	memory when applications demand it.
	
	Additional query words: err msg
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
