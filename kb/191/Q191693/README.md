---
layout: page
title: "Q191693: BUG: Ambiguous Name Detection for Private Functions Named &quot;Main&quot;"
permalink: /kb/191/Q191693/
---

## Q191693: BUG: Ambiguous Name Detection for Private Functions Named &quot;Main&quot;

	Article: Q191693
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Visual Basic project contains two or more functions named "Main" (but
	only one is Public) and Sub Main is set as the Startup Object, the following
	error is received when the Project is compiled or run:
	
	  "Ambiguous name detected: main"
	
	CAUSE
	=====
	
	In addition to Public functions, Visual Basic also searches for Private
	functions for any name conflict.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Select Project Properties from the Project menu.
	
	3. Change the Startup Object to Sub Main.
	
	4. Add two code modules to the Project by choosing Add Module from the Project
	  menu twice.
	
	5. Paste the following code in the code window of Module1:
	
	        Public Sub Main
	           Msgbox "Hello"
	        End Sub
	
	6. Paste the following code in the code window of Module2:
	
	        Private Sub Main
	           Msgbox "Hi"
	        End Sub
	
	7. Press the F5 key to run the project. Note that the following error message is
	  received:
	
	  "Ambiguous name detected: main"
	
	Additional query words: kbDSupport kbVBp600bug kbCompiler kbdss kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
