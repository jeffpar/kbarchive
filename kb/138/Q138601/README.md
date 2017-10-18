---
layout: page
title: "Q138601: How to Make a Form Disappear"
permalink: kb/138/Q138601/
---

## Q138601: How to Make a Form Disappear

	Article: Q138601
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	At times, it may be necessary to run a form without displaying it. If the
	Visible property of a form is set to False (.F.) at design time, the DO FORM
	<form name> command will still display the form.
	
	MORE INFORMATION
	================
	
	When the DO command is issued, an implicit This.Show is run and the form is
	displayed. To run the form invisibly, add the following code to the Show method
	of the form:
	
	  IF THIS.VISIBLE = .f.
	     NODEFAULT
	  ENDIF
	
	This code tells Visual FoxPro that the form should not do its normal Show routine
	and to execute the code following the NODEFAULT clause.
	
	NOTE: To make the form visible prior to releasing the form from memory, use the
	NAME clause of the DO FORM command. For example, DO FORM test NAME myform could
	be used and issuing myform.visible = .t. in the Command window would make the
	form visible again.
	
	Step-by-Step Example
	--------------------
	
	1. In the Command window, type:
	
	     CREATE FORM TEST
	
	2. Select the Property sheet, and change the Visible property to false (.F.).
	
	3. Close and save the form.
	
	4. In the Command window, type:
	
	     DO FORM test
	
	5. To make the form disappear, add the following code to the Show method of the
	  form:
	
	     IF THIS.VISIBLE = .f.
	        NODEFAULT
	     ENDIF
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
