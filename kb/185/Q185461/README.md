---
layout: page
title: "Q185461: PRB: UseSafeSubset Allows Non-Safe Objects to Be Called"
permalink: kb/185/Q185461/
---

## Q185461: PRB: UseSafeSubset Allows Non-Safe Objects to Be Called

	Article: Q185461
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbScript kbVBp kbGrpDSVBDB
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic for Applications version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Script control with the UseSafeSubset property set to
	TRUE, script code is still able to instantiate objects that have not been marked
	safe for scripting.
	
	CAUSE
	=====
	
	The program is using version 1.0 of the Microsoft Script Control.
	
	NOTE: An alternate cause, not addressed elsewhere in this article is that your
	VBA application is resetting the UseSafeSubset property to FALSE.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to version 6.0 of the Microsoft Script Control.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q184739 INFO: Where to Obtain the Script Control
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic create a new project and add the following component:
	
	        Microsoft Script Control 1.0
	
	2. Add the Script control (ScriptControl1), a text box (Text1), and a command
	  button (Command1) to a form. In Visual Basic, set the MultiLine property of
	  the text box to TRUE. For ease of use change the size of Text1 so that it
	  will accommodate 5 lines of 60 characters.
	
	3. Add the following code:
	
	        Private Sub Command1_Click()
	          On Error Resume Next
	          With ScriptControl1
	            .UseSafeSubset = True
	            .Language = "VBScript"
	            .AllowUI = True
	            .AddCode Text1.Text
	            .Run "Test"
	          End With
	        End Sub
	
	4. Run the form and open the Debug window.
	
	5. Type the following script into the text box. If you do not have Microsoft
	  Excel, use a different server application.
	
	        Sub Test()
	        Dim X
	          Set X = CreateObject("Excel.Application")
	          X.Visible = True     ' this line is Excel-specific
	          MsgBox "Pausing for effect...."
	          Set X = Nothing
	        End Sub
	
	6. Click the command button. Microsoft Excel is displayed.
	
	7. Click OK on the message box and Excel will close.
	
	8. Install version 6.0 of the control and re-run. You will get a trappable error
	  indicating that the object is not marked safe for scripting:
	
	  Run-time error '429':
	  ActiveX component can't create object 'createobject'
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Malcolm
	Stewart, Microsoft Corporation
	
	
	Additional query words: kbAutomation kbScript kbVBp kbVBp500 kbVBp400 kbVBA5 kbVBp600 kbdse kbDSupport
	
	======================================================================
	Keywords          : kbScript kbVBp kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVB500 kbVB600 kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
