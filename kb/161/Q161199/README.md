---
layout: page
title: "Q161199: FIX: FOR EACH...ENDFOR Does Not Work with Object Variable"
permalink: /kb/161/Q161199/
---

## Q161199: FIX: FOR EACH...ENDFOR Does Not Work with Object Variable

	Article: Q161199
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FOR EACH...ENDFOR command does not work with an object variable in the group
	setting. When the group setting is an object variable, the following error
	message appears:
	
	  <variable name> cannot be enumerated
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	The example provided below assumes that the computer has Visual FoxPro 5.0 and
	Microsoft Excel for Windows 95 version 7.0a installed. The FOR EACH...ENDFOR
	command is not available in earlier versions of FoxPro.
	
	The code opens Excel, adds two workbooks, and lists their names on the Visual
	FoxPro desktop.
	
	Steps to Reproduce Problem
	--------------------------
	
	Place the following code in a program and run it:
	
	  PUBLIC otest
	     otest=CREATE("excel.application")
	     otest.Visible=1
	     otest.workbooks.ADD
	     otest.workbooks.ADD
	
	     FOR EACH wb IN otest.WorkBooks  && this works fine
	        ?  wb.Name
	     ENDFOR
	
	     myvar = otest.WorkBooks   && create an object variable
	     FOR EACH wb IN myvar      && this fails with error message
	        ? wb.Name
	     ENDFOR
	     otest.Quit
	
	The first FOR EACH...ENDFOR loop places the names for the two workbooks on the
	Visual FoxPro desktop. The second loop, using the object variable, causes an
	error message.
	
	NOTE: In the above example, if you choose to Ignore the first error message, a
	"Nesting Error" occurs and the second wb.Name is displayed on the screen.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
