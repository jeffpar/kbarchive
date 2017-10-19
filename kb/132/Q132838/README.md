---
layout: page
title: "Q132838: Compiling in Microsoft Visual C++ Switches Screen to Text Mode"
permalink: /kb/132/Q132838/
---

## Q132838: Compiling in Microsoft Visual C++ Switches Screen to Text Mode

	Article: Q132838
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build or compile a program in the IDE of Microsoft Visual C++, the
	screen switches to text mode. After the program is built or compiled, the screen
	switches back to graphics.
	
	CAUSE
	=====
	
	An old _Default.pif file is located on the path that is marked as "full screen."
	The reason this affects compiling is because Microsoft Visual C++ spawns hidden
	console programs to compile. Because Microsoft Visual C++ version 2.x itself is
	marked as a Windows version 3.x program, for compatibility, Windows 95 searches
	for a Default.pif file when it runs console or MS-DOS programs.
	
	RESOLUTION
	==========
	
	To work around this behavior, do one of the following:
	
	- Remove the old _Default.pif file from the current path
	
	- Set the _Default.pif file as windowed using PIFEDIT
	
	- Delete the _Default.pif file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
