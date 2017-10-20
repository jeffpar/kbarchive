---
layout: page
title: "Q83480: Automatically Starting All Applications in a Given Group"
permalink: /kb/083/Q83480/
---

## Q83480: Automatically Starting All Applications in a Given Group

{% raw %}

	Article: Q83480
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A quick way to automatically start all applications within a group is to add the
	following entry to the PROGMAN.INI file of the Microsoft Windows version 3.1:
	
	     [Settings]
	     Startup="group name"
	
	where "group name" (within quotation marks) is any acceptable group in Windows).
	For example, to start the applications in the Main group, you would add the
	following line to the PROGMAN.INI file:
	
	  Startup="Main"
	
	MORE INFORMATION
	================
	
	The PROGMAN.INI file is located in the WINDOWS directory. You can edit
	PROGMAN.INI with any text editor (for example, Windows Notepad or MS-DOS
	Editor). As with any system setting modification, make a backup copy of the
	PROGMAN.INI file before you edit the file.
	
	To determine acceptable group names, view the contents of the Window menu in
	Program Manager or look at the title bar of the group you want to automatically
	start.
	
	If the Startup= line is blank (that is, no group is specified), the startup group
	will be disabled until the line is removed or commented out.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
