---
layout: page
title: "Q98753: ERR: &quot;Feature Not Available&quot;; MODIFY/CREATE QUERY in .EXE File"
permalink: /kb/098/Q98753/
---

## Q98753: ERR: &quot;Feature Not Available&quot;; MODIFY/CREATE QUERY in .EXE File

	Article: Q98753
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MODIFY QUERY and CREATE QUERY commands return "Feature not available" error
	messages when called from an executable file built with the FoxPro Distribution
	Kit.
	
	CAUSE
	=====
	
	The MODIFY QUERY and CREATE QUERY commands are intended only for use in the
	interactive development environment of FoxPro. End users must possess the full
	product in order to access these commands.
	
	RESOLUTION
	==========
	
	To work around this limitation, use the RQBE window to construct a SELECT- SQL
	statement, then copy the results from the See SQL window and paste them into a
	.PRG file. Using this method, you can also create a RQBE-like screen/window that
	contains variables that can be used in the SELECT-SQL statement.
	
	The following sample code demonstrates this workaround:
	
	
	     dbfname = space(12)
	     value = space(12)
	     fieldname = space(12)
	
	     @ 5,5 SAY "Enter the database name: " GET dbfname
	     @ 7,5 SAY "Enter the fieldname: " GET fieldname
	     @ 9,5 SAY "Enter the value: " GET value
	     READ
	
	     fieldname = ALLTRIM(fieldname)
	     dbfname = ALLTRIM(dbfname)
	     value = ALLTRIM(value)
	
	     SELECT &fieldname from &dbfname ; && Macro expansion is OK here.
	       WHERE &fieldname = (value) ; && Parentheses ARE required here.
	       INTO cursor query
	     BROWSE
	
	
	Additional query words: VFoxWin FoxDos FoxWin SQL SELECT MODI QUERY errmsg err msg relational by example dk
	
	======================================================================
	Keywords          : kbcode kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
