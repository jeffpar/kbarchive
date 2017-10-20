---
layout: page
title: "Q86181: Programs with Reserved Windows Filenames May Not Run"
permalink: /kb/086/Q86181/
---

## Q86181: Programs with Reserved Windows Filenames May Not Run

{% raw %}

	Article: Q86181
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows version 3.1, if a program's executable filename is a name
	that is reserved by Windows, the file will not run. There is no error message
	associated with this behavior.
	
	In addition, if a program's executable file has a name that is already running in
	memory and the program running in memory can only occur once, the duplicate
	program will:
	
	- not execute
	
	- not return an error message
	
	- may execute the duplicate program
	
	MORE INFORMATION
	================
	
	This occurs because when Windows gets the request to run a new program, it
	checks for another occurrence of this program in memory. It does this by looking
	at the first eight characters of the filename and then comparing the information
	to the programs in memory.
	
	If Windows finds another version of this program in memory, it sends this new
	instance to the currently running program. It is then up to this program whether
	or not to execute a new instance. If the program is set up to make itself
	active, then it will become active. If the program is reserved by Windows or its
	operating system, such as KERNEL.EXE, then the new program will not execute.
	
	Unusable executable filenames:
	
	  CGA40WOA.EXE
	  COMM.EXE
	  COMMDLG.EXE
	  GDI.EXE
	  DISPLAY.EXE
	  DOSAPP.EXE
	  FIXFONTS.EXE
	  FONTS.EXE
	  KERNEL.EXE
	  KEYBOARD.EXE
	  MMSYSTEM.EXE
	  MOUSE.EXE
	  PROGMAN.EXE
	  SHELL.EXE
	  USER.EXE
	
	There may be other executable filenames that cannot be duplicated, depending on
	the configuration and third-party applications.
	
	KBCategory: kbother kbdisplay kbprb
	KBSubcategory: win31
	
	Additional query words: 3.10 3.11 file name
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
