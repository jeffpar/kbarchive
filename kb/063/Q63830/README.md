---
layout: page
title: "Q63830: PRB: Incomplete Printing of File Using File Print Option"
permalink: /kb/063/Q63830/
---

## Q63830: PRB: Incomplete Printing of File Using File Print Option

{% raw %}

	Article: Q63830
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS 
	- Microsoft Programmer's Workbench for OS/2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, the final page may not be fully printed when printing a file from
	within Programmer's WorkBench (PWB) versions 1.0 and 1.1.
	
	CAUSE
	=====
	
	This usually results from the printer buffer not dumping the end of file.
	
	RESOLUTION
	==========
	
	One work-around to this problem is to force a form feed to the printer after the
	file is printed in order to clear the buffer.
	
	MORE INFORMATION
	================
	
	The following is an example of how to set the PWB "printcmd" switch in the
	TOOLS.INI file to print the file and force a form feed:
	
	  printcmd: copy %s+form.txt prn
	
	Note that the FORM.TXT file is a file that you must create in the current
	directory that contains a single form feed character (ASCII 12). You can create
	this file in PWB by opening a new file and pressing CTRL+P (the quote function)
	and then CTRL+L to insert a literal form feed character.
	
	Additional query words: 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
