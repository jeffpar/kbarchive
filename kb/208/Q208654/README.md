---
layout: page
title: "Q208654: BUG: FontChanged Fires Twice When a Font Object Property Changed"
permalink: kb/208/Q208654/
---

## Q208654: BUG: FontChanged Fires Twice When a Font Object Property Changed

	Article: Q208654
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbFont kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FontChanged event sink fires more than once if the user sets a Stdfont
	object to a font more than once. Setting the font object twice may be necessary
	if the font object is destroyed for some reason, and then recreated. The
	expected behavior is that the FontChanged event fires only once when a property
	is changed.
	
	RESOLUTION
	==========
	
	Create the font object explicitly again after destroying it, and then set up the
	properties again. This makes the event fire only once.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton control to Form1.
	
	3. Add the following code to Form1's code module:
	
	  Option Explicit
	  Private WithEvents f As StdFont
	
	  Private Sub Command1_Click()
	      Me.Font.Bold = Not Me.Font.Bold
	  End Sub
	
	  Private Sub f_FontChanged(ByVal PropertyName As String)
	      Print PropertyName
	  End Sub
	
	  Private Sub Form_Load()
	      Set f = Me.Font
	      Set f = Me.Font
	  End Sub
	
	4. Press the F5 key to run the project, and then click the CommandButton.
	
	5. The Bold property is being changed. Note that the word Bold is printed twice
	  on the form.
	
	Step-by-Step Resolution
	-----------------------
	
	1. Start a new Standard EXE in Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton control to Form1.
	
	3. Add the following code to the code module of Form1:
	
	  Option Explicit
	  Private WithEvents f As StdFont
	  Private x As StdFont
	
	  Private Sub Command1_Click()
	     Me.Font.Bold = Not Me.Font.Bold
	  End Sub
	
	  Private Sub f_FontChanged(ByVal PropertyName As String)
	      Print PropertyName
	  End Sub
	
	  Private Sub Form_Load()
	     Set x = New StdFont
	     x.Name = "Times New Roman"
	     x.Bold = True
	     x.Italic = True
	     Set f = x
	     Set Me.Font = f
	
	     Set x = New StdFont
	     x.Name = "Times New Roman"
	     x.Bold = True
	     x.Italic = False
	     Set f = x
	     Set Me.Font = f
	  End Sub
	
	4. Press the F5 key to run the project, click the CommandButton, and note that
	  the word Bold is printed only once.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFont kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
