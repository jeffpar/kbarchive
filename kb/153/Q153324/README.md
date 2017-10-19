---
layout: page
title: "Q153324: BUG: MSDEV May Leave Orphaned Threads in the Memory After Exit"
permalink: /kb/153/Q153324/
---

## Q153324: BUG: MSDEV May Leave Orphaned Threads in the Memory After Exit

	Article: Q153324
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10 4.20
	Operating System(s): 
	Keyword(s): kbenv kbide kbVC kbGrpDSTools
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual C++ Developer Studio may leave orphaned threads in memory after
	exit.
	
	The Developer Studio disappears from the taskbar on Windows 95 or the task list
	on Windows NT, but the process sticks around with two threads, and it is visible
	from PView. Notice that the Developer Studio Debugger can attach to this process
	in a subsequent debug session.
	
	RESOLUTION
	==========
	
	The Developer Studio is orphaned in memory only when switching the books in the
	"Select Reference" dialog box after using the F1 key. To work around the
	problem, change the book selection from the Help menu by choosing Open
	Information Title before using the F1 key for online help.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the Visual C++ Developer Studio.
	
	2. Highlight a keyword in either a source file, a header file, or a help topic
	  file that has entries in different information titles. For example, the word
	  "printf" or "UNICODE" is in both the Visual C++ Books Online and the
	  Microsoft Developer Library.
	
	3. Press F1 to bring up the "Select Reference" dialog.
	
	4. Switch to the other book in the combo box named "Titles which have index
	  entries for :" and Display the topic.
	
	5. Exit the Developer Studio.
	
	Additional query words: kbVC400bug 4.00 4.10 4.20 VWBIss
	
	======================================================================
	Keywords          : kbenv kbide kbVC kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : 4.00 4.10 4.20
	
	=============================================================================
	
