---
layout: page
title: "Q79614: Windows: PATH Command Searches All Entries"
permalink: /kb/079/Q79614/
---

## Q79614: Windows: PATH Command Searches All Entries

{% raw %}

	Article: Q79614
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows, or when you execute an application from inside Windows
	without specifying a path, you may receive the following error message
	
	  System Error
	  Cannot read from drive <x>:
	
	where <x>: is a floppy disk drive or a removable media drive letter.
	
	CAUSE
	=====
	
	This error is caused when you specify a removable media's drive letter in the
	MS-DOS PATH statement of the AUTOEXEC.BAT file. Windows reads all path
	specifications in the PATH command before it runs an application. It does not
	stop the search after finding the specified file in the search path.
	
	RESOLUTION
	==========
	
	Make sure that the drive letter for a removable drive does not appear on the
	search path in the AUTOEXEC.BAT file.
	
	Example
	
	1. Quit Windows.
	
	2. Type the following at the MS-DOS command prompt and then press ENTER:
	
	  path = c:\;c:\dos;c:\windows;a:\
	
	3. Run Windows.
	
	4. In Program Manager, choose Run from the File menu.
	
	5. Type the following and press ENTER:
	
	  chkdsk
	
	Windows then tries to read drive A before running the MS-DOS CHKDSK command. If
	no disk is in drive A, then it generates a "Cannot read from drive A:" error
	message.
	
	Additional query words: 3.00 err msg floppy 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
