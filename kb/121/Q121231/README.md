---
layout: page
title: "Q121231: Net Watcher Isn't Displaying an Open File from Another Machine"
permalink: kb/121/Q121231/
---

## Q121231: Net Watcher Isn't Displaying an Open File from Another Machine

	Article: Q121231
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Net Watcher indicates that another machine is attached, but it does not show
	that a file is open when one actually is.
	
	CAUSE
	=====
	
	Some applications open a file, read it into memory, and then close it to save
	file handles. When the application needs to write to the file, it reopens it.
	Examples of such applications are WordPad and Notepad.
	
	Additional query words: 3.10 3.11 netwatcher netwatch.exe wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW310 kbWFW311
	
	=============================================================================
	
