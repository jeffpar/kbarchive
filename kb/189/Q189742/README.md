---
layout: page
title: "Q189742: BUG: SendKeys &quot;{INS}&quot; Causes Error &quot;Invalid Procedure Call&quot;"
permalink: /kb/189/Q189742/
---

## Q189742: BUG: SendKeys &quot;{INS}&quot; Causes Error &quot;Invalid Procedure Call&quot;

	Article: Q189742
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using {INS} in a SendKeys statement, the following error occurs:
	
	  Invalid procedure call or argument.
	
	CAUSE
	=====
	
	Documentation states that both {INS} and {INSERT} are valid for the SendKeys
	function. Only the {INSERT} is valid.
	
	RESOLUTION
	==========
	
	Use only the {INSERT} code to represent the Insert key stroke.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	{INS} is shorthand for the Insert key. Other abbreviated codes such as {DEL} for
	Delete do work as expected. Using upper or lower case ( {INSERT} or {insert} )is
	not a factor.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a New Standard EXE Project in Visual Basic. Form1 is created by
	  default.
	
	2. Place a TextBox (Text1) on Form1.
	
	3. Place a CommandButton (Command1) on Form1.
	
	4. Add the following code to the form's module:
	
	        Private Sub Command1_Click()
	           Text1.SetFocus
	           SendKeys "{INS}" & "This is a Test"
	        End Sub
	
	5. Run the program and click on the button. This will generate the following
	  error:
	
	  "Invalid Procedure Call or Argument"
	
	6. Now change the code for the button to:
	
	        Private Sub Command1_Click()
	           Text1.SetFocus
	           SendKeys "{INSERT}" & "This is a Test"
	        End Sub
	
	7. Run the program again and click on the button. This time it works correctly.
	
	Additional query words: kbdss kbDSupport kbVBp kbCrtl kbVBp500bug kbVBp kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
