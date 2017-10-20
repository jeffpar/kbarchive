---
layout: page
title: "Q180787: PRB: Explicitly Referring to Variables in a Module Causes Error"
permalink: /kb/180/Q180787/
---

## Q180787: PRB: Explicitly Referring to Variables in a Module Causes Error

{% raw %}

	Article: Q180787
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you explicitly refer to variables in a module, such as Module1.Variable1,
	the following error occurs:
	
	  An error was encountered while running this program.
	
	RESOLUTION
	==========
	
	When you compile Windows CE projects in Visual Basic all module information is
	concatenated together and module names are not retained. Thus, making the module
	variables public and referring to them elsewhere in the project without the
	module name avoids the error. Ensure that the names of those variables do not
	conflict with any public variables declared in any form or code module.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. Add a Standard Module to the project, named Module1 by default.
	
	3. Add the following code to Module1:
	
	        Option Explicit
	        Public VariableInModule
	
	4. Add the following code to the code module of Form1:
	
	        Option Explicit
	
	        Private Sub Form_Click()
	           'This does not work:
	           Module1.VariableInModule = "Test"
	        End Sub
	
	        Private Sub Form_Load()
	           'This works:
	           VariableInModule = "Test"
	           MsgBox "VariableInModule = " & VariableInModule
	        End Sub
	
	5. Press the F5 key to run the project. Note that the form load event executes
	  as expected, and a message box is displayed showing the value of
	  VariableInModule. However, clicking the form generates an error.
	
	Additional query words: vbce vbce6 wince wce evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
