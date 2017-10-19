---
layout: page
title: "Q136940: Valid Uses for the View Parameters"
permalink: /kb/136/Q136940/
---

## Q136940: Valid Uses for the View Parameters

	Article: Q136940
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use the "?" character to build a parameterized
	view. In particular, it addresses the issue of the location of the "?" in the
	WHERE clause, and of using macro substitution with parameterized views.
	
	MORE INFORMATION
	================
	
	View parameters provide a mechanism for value substitution, not macro
	substitution.
	
	In the View Designer, you can specify parameters on the right side of the WHERE
	clause (and the HAVING clause). However, parameters are still legal on the left
	side of the WHERE clause.
	
	Both of the following commands create a valid parameterized SQL view:
	
	     CREATE SQL VIEW viewname AS SELECT * FROM tablename;
	        WHERE field1 = ?param1
	
	-or-
	
	     CREATE SQL VIEW viewname AS SELECT * FROM tablename;
	        WHERE ?param1 = view1
	
	In both cases, when the VIEWNAME view is opened, the user is prompted for a value
	for PARAM1, which is then used in the WHERE clause.
	
	An example of macro substitution in the left side of the clause would be if the
	following view allowed the user to supply a field name for FIELDPARAM rather
	than just a value.
	
	     CREATE SQL VIEW viewname AS SELECT * FROM tablename;
	        WHERE ?fieldparam = ?param1
	
	Although this is a valid view, the effect is to compare the value entered for
	?FIELDPARAM with that entered for PARAM1 for all records. The macro substitution
	does not occur.
	
	Additional query words: VFoxWin question mark parameterized view database
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
