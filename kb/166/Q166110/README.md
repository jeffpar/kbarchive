---
layout: page
title: "Q166110: FIX: Can Set SQL Breakpoints on Invalid Lines Inside a Trigger"
permalink: /kb/166/Q166110/
---

## Q166110: FIX: Can Set SQL Breakpoints on Invalid Lines Inside a Trigger

	Article: Q166110
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbEEdition kbVC kbVC500bug kbVC600fix
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While using the SQL Debugger to debug a Trigger, the debugger doesn't break on
	each breakpoint that you have set.
	
	CAUSE
	=====
	
	The SQL Debugger allows you to set breakpoints on any line of code inside a
	Trigger regardless of whether it is a valid line of code.
	
	RESOLUTION
	==========
	
	The breakpoints that the debugger skips are placed on invalid lines of code.
	
	To avoid this issue, place breakpoints on valid debuggable lines of SQL code
	only.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	This bug only pertains to Triggers. While debugging a Stored Procedure, the
	debugger only allows you to set breakpoints on valid lines of code. If you try
	to set a breakpoint on an invalid line of code while debugging a stored
	procedure, the breakpoint is moved to the next valid debuggable line of SQL
	code.
	
	When you are using a stored procedure and setting breakpoints before you start
	debugging, you can set breakpoints anywhere in the code including non-debuggable
	statements. However, as soon as you start debugging, you receive the following
	warning and breakpoints are moved:
	
	  One or more breakpoints are not positioned on valid lines.
	  These breakpoints have been moved to the next valid lines.
	
	When you are using a trigger and setting breakpoints before you start debugging,
	you can set breakpoints anywhere in the code including non- debuggable
	statements. The warning listed above is not shown and invalid breakpoints are
	not removed during debugging.
	
	Sample Code
	-----------
	
	     CREATE TRIGGER MyTrigger
	     ON authors
	     FOR DELETE
	     AS
	
	     /* Can set a breakpoint on the DECLARE line however since this isn't a
	     valid debuggable line the debugger will skip over it and stop on the
	     SELECT line */ 
	
	        DECLARE  @charVar CHAR
	
	        SELECT * FROM Authors
	
	Additional query words: kbvc500bug kbvc600fix kbEEdition kbSQL kbDebug kbtools
	
	======================================================================
	Keywords          : kbEEdition kbVC kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
