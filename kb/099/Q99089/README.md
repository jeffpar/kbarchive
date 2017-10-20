---
layout: page
title: "Q99089: RQBE Expression Builder Doesn't Include Path to Table"
permalink: /kb/099/Q99089/
---

## Q99089: RQBE Expression Builder Doesn't Include Path to Table

{% raw %}

	Article: Q99089
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Relational Query By Example (RQBE) Expression Builder builds the FROM clause
	as if the tables existed in the current directory or along the FoxPro path. If
	you are using a SELECT statement that points to databases that are in a
	different directory or are not located along the FoxPro path, you must code that
	statement. You cannot generate it with the RQBE Expression Builder.
	
	MORE INFORMATION
	================
	
	If the table name needs to be prefaced with fully qualified or relative path
	information, you must code the SELECT statement rather than building it through
	RQBE.
	
	The following are valid queries:
	
	  SELECT * ;
	      FROM X:\<MS-DOS PATH>\<filename>
	
	-or-
	
	  SELECT * ;
	      FROM LOCFILE('<filename>')
	
	Additional query words: VFoxWin FoxDos FoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	

{% endraw %}
