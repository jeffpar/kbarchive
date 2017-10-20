---
layout: page
title: "Q118554: PRB: &quot;SQL Column Not Found&quot; with Macro Substitution in SELECT"
permalink: /kb/118/Q118554/
---

## Q118554: PRB: &quot;SQL Column Not Found&quot; with Macro Substitution in SELECT

{% raw %}

	Article: Q118554
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c; MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error message below will be generated when you are using macro substitution
	for the table name in the <alias>.<select_item> clause in a
	SELECT-SQL statement:
	
	     SQL column <macro variable + table field> not found
	
	MORE INFORMATION
	================
	
	Normally macro substitution will not cause a problem when used in the FROM
	<table> clause. Macro substitution is a good way of using replaceable
	parameters during program execution, such as when you are specifying that the
	same field name from several tables should be used as the <select_item>.
	For example, using the FoxPro 2.x CUSTOMER and INVOICES tables:
	
	     table1='customer'
	     table2='invoices'
	     SELECT customer.cno, invoices.cno FROM &table1, &table2;
	        WHERE customer.cno=invoices.cno INTO CURSOR QUERY
	
	However, using all macro substitution in the example below will result in the
	error message mentioned above:
	
	     SELECT &table1.cno, &table2.cno FROM &table1, &table2;
	        WHERE &table1.cno=&table2.cno INTO CURSOR QUERY
	
	RESOLUTION
	==========
	
	To work around this behavior, insert an extra period (".") between each of the
	macro-substituted tables and the table field names. For example:
	
	     SELECT &table1..cno, &table2..cno FROM &table1, &table2;
	        WHERE &table1..cno=&table2..cno INTO CURSOR QUERY
	
	The extra period is required as a terminator for the macro substitution.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250cMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b,2.5c; MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	
	=============================================================================
	

{% endraw %}
