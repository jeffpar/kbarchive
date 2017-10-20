---
layout: page
title: "Q149485: FIX: Scale Method Causes Error When Scale Is a Large Value"
permalink: /kb/149/Q149485/
---

## Q149485: FIX: Scale Method Causes Error When Scale Is a Large Value

{% raw %}

	Article: Q149485
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Executing the Scale method of a PictureBox control using large numbers for the
	arguments results in an run-time error with the following message:
	
	  Run-time error "5". Invalid procedure call.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	This following sample code represents the minimum conditions where this issue
	may occur. This issue can affect programs created in Visual Basic version 3.0
	that are ported to version 4.0
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start 16-bit or 32-bit Visual Basic 4.0, or if it is already running, click
	  New Project on the File menu.
	
	2. Add a PictureBox control and a Command button to the Form1 form.
	
	3. Copy the following code to the Code window of the Form1 form:
	
	        Option Explicit
	        Private Sub Command1_Click()
	           Picture1.Scale (14000005, 14000005)-(10000005, 10000005)
	        End Sub
	
	4. On the Run menu, click Start or press the F5 key to start the program. An
	  'Invalid Procedure Call' error occurs.
	
	Additional query words: kbVBp400bug kbVBp600fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
