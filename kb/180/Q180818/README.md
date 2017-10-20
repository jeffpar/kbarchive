---
layout: page
title: "Q180818: BUG: Code Outside of Procedures Executes on Application Startup"
permalink: /kb/180/Q180818/
---

## Q180818: BUG: Code Outside of Procedures Executes on Application Startup

{% raw %}

	Article: Q180818
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500bug kbVBp600bug kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Code placed outside of procedures or functions is executed on application
	startup.
	
	CAUSE
	=====
	
	Neither compiler warnings nor errors are generated.
	
	RESOLUTION
	==========
	
	Do not place code other than declarations outside of subs, functions, or event
	procedures.
	
	Although this could be used for the same purpose as a SubMain or the Form Load
	event, it is strongly recommended that this behavior be avoided to provide
	future compatibility.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. Place the following code in the code module for Form1:
	
	        Option Explicit
	
	        Dim myMessage
	        myMessage = "Hello from the Declarations section of Form1."
	        MsgBox myMessage
	
	        Private Sub Form_Click()
	            MsgBox "Hello from the Form Click event."
	        End Sub
	
	        MsgBox "Hello from somewhere else."
	
	        Private Sub Form_Load()
	            MsgBox "Hello from the Form Load event."
	        End Sub
	
	3. Press F5 to run the project, and note that the message boxes outside of the
	  event procedures are executed before the Form Load event.
	
	Additional query words: wince 10 wce vbce vbce6 evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp500bug kbVBp600bug kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
