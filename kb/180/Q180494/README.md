---
layout: page
title: "Q180494: BUG: Private Variables in a Module Are Public"
permalink: /kb/180/Q180494/
---

## Q180494: BUG: Private Variables in a Module Are Public

{% raw %}

	Article: Q180494
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp kbVBp500bug kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a variable is declared in a module as Private, it is seen throughout the
	project as if it were declared Public.
	
	RESOLUTION
	==========
	
	Take care when declaring form variables and module variables so that the wrong
	variable is not inadvertently addressed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE project in either eMbedded Visual Basic or Visual
	  Basic 6.0. Form1 is created by default.
	
	2. Add a module to the project.
	
	3. In the module, add the following line of code:
	
	   
	        Private myMessage
	
	4. Add a command button to Form1.
	
	5. Paste the following code into Form1:
	
	        
	        Option Explicit 
	        
	        Private Sub Command1_Click()
	            myMessage = "myMessage is set"
	            MsgBox myMessage
	        End Sub
	
	6. Press F5 to run the project and note that the Click event has full access to
	  the module's private variable. The expected behavior is to get the message
	  "Variable not defined."
	
	(c) Microsoft Corporation Mike Dixon, All Rights Reserved. Contributions by 1999,
	Microsoft Corporation.
	
	
	Additional query words: wince vbce vbce6 evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp kbVBp500bug kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
