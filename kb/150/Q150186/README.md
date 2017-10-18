---
layout: page
title: "Q150186: BUG: Setting Focus to a Masked Edit Control Causes Error"
permalink: kb/150/Q150186/
---

## Q150186: BUG: Setting Focus to a Masked Edit Control Causes Error

	Article: Q150186
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbControl
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting focus to a Masked Edit control, which previously did not have the focus,
	triggers the ValidationError event of the control. If the Masked Edit control
	loses the focus, the ValidationError event is fired again.
	
	The InValidText parameter received in the event represents the invalid characters
	that the user tried to type. When the event is fired erroneously because the
	control receives focus, the InValidText parameter is one character long, and
	becomes the same as the PromptChar. The example below avoids warning the user if
	a control is used to set focus to the control:
	
	     Private Sub MaskEdBox1_ValidationError(InvalidText As String, _
	     
	     StartPosition As Integer)
	      
	     If Mid$(InvalidText, StartPosition + 1, 1) <> MaskEdBox1.PromptChar Then
	          
	     MsgBox "You are typing in the wrong stuff"
	     
	     End If
	     
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default. Place a
	  Masked Edit control and a Command button on to Form1.
	
	2. Switch to the Properties window for the Masked Edit control, and change the
	  Mask to #.
	
	3. In the Click event for the Command button, place the following code:
	
	     Private Sub Command1_Click()
	
	     MaskEdBox1.SetFocus
	
	     End Sub
	
	4. In the ValidationError event for the Masked Edit control, enter the following
	  code:
	
	     Private Sub MaskEdBox1_ValidationError(InvalidText As String, _
	
	     StartPosition As Integer)
	
	         MsgBox "You are typing in the wrong stuff"
	
	     End Sub
	
	5. Run the project by clicking F5. Click on the Command button and the Msgbox
	  indicates that the ValidationError event was incorrectly fired.
	
	To correct the problem with the workaround earlier, change the code in the
	ValidationError event to:
	
	     
	     Private Sub MaskEdBox1_ValidationError(InvalidText As String, _
	     
	     StartPosition As Integer)
	     
	     If Mid$(InvalidText, StartPosition + 1, 1) <> MaskEdBox1.PromptChar Then
	          
	     MsgBox "You are typing in the wrong stuff"
	     
	     End If
	     
	     End Sub
	
	Additional query words: kbVBp400bug kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
