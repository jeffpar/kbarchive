---
layout: page
title: "Q158978: FIX: SQL Debugger Stops Working"
permalink: /kb/158/Q158978/
---

## Q158978: FIX: SQL Debugger Stops Working

{% raw %}

	Article: Q158978
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbDebug kbEEdition kbSQL kbVC kbSQLProg
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2, used with:
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After working for a while, the SQL Debugger starts to skip breakpoints set in
	SQL code.
	
	The Event Viewer log on the server reveals the following error message:
	
	  CreateDispatch failed (Class not registered). Check to make sure
	  Automation manager is running on debugger machine.
	
	CAUSE
	=====
	
	There is a bug in Autprx32.dll (version 4.00.2415) that shipped with Visual C++
	Enterprise Edition, version 4.2, that causes leaks of thread local storage
	indices each time it completes a load and unload cycle.
	
	There is a per process limit of 64 thread local storage indices on Windows NT.
	
	While remote SQL debugging is in process, Autprx32.dll is loaded and unloaded on
	the server. It is unloaded each time the number of remote debugging sessions
	hits zero.
	
	The debugger starts to skip breakpoints set in SQL code after approximately 25
	load/unload cycles of Autprx32.dll.
	
	RESOLUTION
	==========
	
	To resolve this problem, stop and restart the SQL Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	This problem only happens during remote debugging (when Visual C++ and SQL
	Server reside on different computers). It doesn't happen during local debugging
	(when Visual C++ and SQL Server reside on the same computer).
	
	Additional query words: kbVC420bug kbDSupport
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbDebug kbEEdition kbSQL kbVC kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
