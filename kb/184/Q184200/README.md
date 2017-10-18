---
layout: page
title: "Q184200: FIX: Error 405: &quot;Unable to Show Modal Form Within this Context&quot;"
permalink: kb/184/Q184200/
---

## Q184200: FIX: Error 405: &quot;Unable to Show Modal Form Within this Context&quot;

	Article: Q184200
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbDLL kbServer kbVBp kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbForms kbGr
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When opening a form from an ActiveX DLL, you may receive the following error:
	
	  Unable to show modal form within this context."
	
	CAUSE
	=====
	
	This error occurs when all of the following are true:
	
	- The computer is running Windows 95, Windows 98, or Windows Me.
	
	- The ActiveX DLL has been compiled.
	
	- The client application is in the Visual Basic IDE.
	
	- The client application form has a BorderStyle property set to Dialog.
	
	- The ActiveX DLL form has been previously opened.
	
	RESOLUTION
	==========
	
	Set the BorderStyle of the form in the client application to Fixed Single, and
	remove the Min and Max buttons from the form. This results in the form behaving
	in the same manner as a form with a Dialog BorderStyle.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available. This
	problem no longer occurs in Windows 2000.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ActiveX DLL in Visual Basic. Name the project "SrvDialog." Place
	  the following code in Class1:
	
	         Option Explicit
	         Public Sub ShowDialog()
	             Form2.Show 1
	         End Sub
	
	2. Add a form to the project. Change the Name and Caption properties to "Form2."
	  Place the following code on Form2:
	
	         Option Explicit
	         Private Sub Form_Click()
	             Unload Me
	         End Sub
	
	3. Compile the DLL.
	
	4. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	  Make a reference to SrvDialog.DLL.
	
	5. Change the BorderStyle property of Form1 to 3 (Fixed Dialog). Place a
	  CommandButton on Form1, and place the following code on Form1:
	
	         Option Explicit
	         Private Sub Command1_Click()
	         Dim x As New SrvDialog.Class1
	            x.ShowDialog
	            Set x = Nothing
	         End Sub
	
	6. Run the client application. Click Command1.
	
	7. Click Form2 to unload that form.
	
	8. Click Command1 again and note that Error 405 occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbDLL kbServer kbVBp kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbForms kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
