---
layout: page
title: "Q159576: FIX: Cannot Open Stored Procedure from Call Stack Context"
permalink: /kb/159/Q159576/
---

## Q159576: FIX: Cannot Open Stored Procedure from Call Stack Context

{% raw %}

	Article: Q159576
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2
	Operating System(s): 
	Keyword(s): kbDebug kbEEdition kbSQL kbVC kbVC500fix kbSQLProg
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you debug a stored procedure and you close the associated source code
	window, you cannot reopen it from the call stack context.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Open a SQL Server stored procedure and start debugging it.
	
	2. When the debugger stops at the first executable statement, close the Source
	  Code window for the procedure.
	
	3. Go to the call stack and double-click the procedure name to bring up the
	  source code window.
	
	A 'Find Source' dialog box might appear and request the stored procedure's path.
	When you cancel this dialog box, the debugger opens a disassembly window at an
	arbitrary address.
	
	
	RESOLUTION
	==========
	
	Select the View/Project Workspace menu to open the Project Workspace window.
	Open the stored procedure from the data pane in the Project Workspace window. If
	you double-click the procedure name in the call stack, the debugger points (with
	a green arrow) to the correct statement in the procedure where the debugger is
	stopped. Now you can continue debugging.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual C++ version 5.0.
	
	Additional query words: kbVC420bug kbDSupport
	
	======================================================================
	Keywords          : kbDebug kbEEdition kbSQL kbVC kbVC500fix kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
