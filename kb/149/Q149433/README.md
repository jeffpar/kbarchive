---
layout: page
title: "Q149433: How to Stop a Form from Loading"
permalink: /kb/149/Q149433/
---

## Q149433: How to Stop a Form from Loading

	Article: Q149433
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to conditionally stop a form from loading based on the
	value of an expression by returning false (.F.) from an expression in the Init
	event of the form.
	
	MORE INFORMATION
	================
	
	You can stop a form from loading if a variable or expression evaluates to false
	(.F.). For example, if you want to load an inquiry form based on a table called
	Students only if the table has records, place the following code in the Init
	event of the form:
	
	     IF RECCOUNT("students")==0
	        =messagebox("No students have been entered",64,"Student table empty")
	        RETURN .F.
	     ENDIF
	
	The Load event occurs, but the form is never instantiated.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
