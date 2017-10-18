---
layout: page
title: "Q221736: FIX: WriteExpression Fails With Unknown Error Code -5"
permalink: kb/221/Q221736/
---

## Q221736: FIX: WriteExpression Fails With Unknown Error Code -5

	Article: Q221736
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbOOP kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3f
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under some circumstances in Visual FoxPro 6.0, the WriteExpression method might
	produce the following error:
	
	  Unknown error code -5
	
	In Visual FoxPro 5.0, the same command produces this error:
	
	  Syntax error.
	
	The syntax error is also what Visual FoxPro 6.0 should be reporting.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code:
	
	  PUBLIC oForm
	  oForm = createobject("form")
	  oForm.AddObject("mybutton","commandbutton")
	  oButton = oForm.MyButton
	  oForm.Show()
	  oButton.Visible = .t.
	  * This next line causes the error.
	  oButton.WriteExpression("Caption","Date: " + MDY(DATE()))
	  * This one is correct:
	  * oButton.WriteExpression("Caption",["Date: " + MDY(DATE())])
	
	2. Run the program.
	
	After running the program in Visual FoxPro 6.0, the following error appears:
	
	  Unknown error code -5
	
	For the code to run properly, follow the comments in the program and change the
	appropriate lines of code and execute the program again.
	
	Note that the line of code:
	
	  oButton.WriteExpression("Caption","Date: " + MDY(DATE()))
	
	contains a syntax error. The WriteExpression method is expecting the second
	argument to be enclosed in quotes. In this case, a text string is being
	concatenated with another text string returned by the MDY() function. This whole
	expression, once concatenated together, needs to be in quotes for
	WriteExpression. Single quotes (' ') or square brackets [ ] can be used to
	accomplish this. The corrected line of code could also be constructed as
	follows:
	
	  oButton.WriteExpression("Caption",'[Date: ] + MDY(DATE())')
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbOOP kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
