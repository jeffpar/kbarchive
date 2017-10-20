---
layout: page
title: "Q147836: FIX: Debugger Hangs with Huge Executable with Embedded Symbols"
permalink: /kb/147/Q147836/
---

## Q147836: FIX: Debugger Hangs with Huge Executable with Embedded Symbols

{% raw %}

	Article: Q147836
	Product(s): Microsoft C Compiler
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbDebug kbide
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When debugging a large executable with embedded symbolic information (linked
	with /PDB:NONE), the debugger may hang (stop responding) before loading symbols.
	
	RESOLUTION
	==========
	
	Make the executable smaller by doing one of the following:
	
	- Reduce the amount of embedded symbolic information. You can do this by:
	
	  1. In Build Settings, select the files for which you do not need debug
	     information, and set Debug info to None in the C/C++ tab, General
	     category. For a command-line equivalent, compile these files without the
	     /Zi or /Zd options.
	
	  2. In Build Settings, select the files for which you only need line number
	     information, and set Debug info to Line Numbers Only in the C/C++ tab,
	     General category. For a command-line equivalent, compile these files with
	     the /Zd instead of /Zi option.
	
	-or-
	
	- Use a program database (.pdb) file instead of embedding the debugging
	  information in the executable. On the Build Settings menu, click the Link
	  tab, Click Customize category, and click Use program database. For a
	  command-line equivalent, link the application with the /DEBUG and /PDB
	  options. Only use the /PDB option if you want to specify the .pdb file name
	  that will be created. Do not use /PDB:NONE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++, 32-bit
	Edition, version 4.1.
	
	Additional query words: kbVC400bug 4.00 vcfixlist410
	
	======================================================================
	Keywords          : kbDebug kbide 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : 4.00
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
