---
layout: page
title: "Q162072: FIX: SELECT - SQL from Table with 252 Fields Causes Page Fault"
permalink: /kb/162/Q162072/
---

## Q162072: FIX: SELECT - SQL from Table with 252 Fields Causes Page Fault

	Article: Q162072
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIXkbbuglist kbfixlist
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a SELECT - SQL statement using a table that has more than 251 fields may
	cause Visual FoxPro to terminate with an Invalid Page Fault.
	
	NOTE: This behavior has been duplicated with as few as 190 fields under a variety
	of conditions (projects open, variables in memory, and so forth). The exact
	number of fields that causes this behavior may vary.
	
	RESOLUTION
	==========
	
	The workaround to the Invalid Page Fault is to perform the SQL SELECT as
	identified in the second and third SELECT statements in the "Steps to Reproduce
	Behavior" section below.
	
	     SELECT *, .T. FROM <table>
	
	-or-
	
	     SELECT * FROM <table> INTO CURSOR <cursorname> NOFILTER
	
	STATUS
	======
	
	This problem has been fixed in Visual FoxPro 5.0a.
	
	MORE INFORMATION
	================
	
	Issuing a SELECT - SQL statement using a table that has more than 251 fields may
	cause Visual FoxPro to terminate with an Invalid Page Fault. The following code
	creates a table with 252 fields, inserts a single record, and performs three
	different SQL SELECT statements. Generally, the first SELECT statement causes an
	Invalid Page Fault.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create and run a program with the following code:
	
	      fldlist="("
	     FOR i = 1 TO 251
	          fldlist=fldlist+"fld"+ALLTRIM(STR(i))+" C(5),"
	     ENDFOR
	
	     fldlist=fldlist+"FLD"+ALLTRIM(STR(i))+" C(5))"
	
	     valuelst=""
	     valuelst=valuelst+REPLICATE("'"+'DATA'+"', ",i-1)+"'DATA'"
	
	     CREATE TABLE manyflds FREE &fldlist
	     INSERT INTO manyflds VALUES (&valuelst)
	
	     SELECT * FROM manyflds        && Causes an Invalid Page Fault in VFP 5
	     SELECT *,.T. FROM manyflds    && Works fine
	     SELECT * FROM manyflds INTO CURSOR temp NOFILTER  && Works fine
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
