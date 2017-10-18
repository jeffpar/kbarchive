---
layout: page
title: "Q299681: FIX: Syntax Error on Form Makes Form Unusable"
permalink: kb/299/Q299681/
---

## Q299681: FIX: Syntax Error on Form Makes Form Unusable

	Article: Q299681
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbOOP kbvfp kbvfp600 kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fi
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you type a value that has a syntax error in one of the properties on a form,
	you may receive the following error message when run or save the form:
	
	  Syntax error.
	
	After you receive the error message, you cannot modify or run the form.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Save the following code as a program:
	
	  *!* Q299681 FIX: Syntax Error in Form Properties Makes Form Unusable
	  SET RESOURCE OFF
	  _CLIPTEXT = "(=DATE())"
	  LOCAL aobj[1], xx
	  DELETE FILE testxx.sc?
	  CREATE FORM testxx NOWAIT
	  =ASELOBJ(aobj,1)
	  xx = aobj[1]
	  xx.AutoCenter = .t.
	  xx.AddObject('txt1','textbox')
	
	2. Click the text box and select the Value property in the Properties window.
	
	3. Use CTRL+V to paste the contents of the clipboard into the Value property.
	
	4. Save and run the form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbOOP kbvfp kbvfp600 kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fix kbvfp700 kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
