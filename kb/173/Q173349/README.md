---
layout: page
title: "Q173349: FIX: OLEDropMode=0 Doesn't Stop DragDrop of File to Rich TextBox"
permalink: /kb/173/Q173349/
---

## Q173349: FIX: OLEDropMode=0 Doesn't Stop DragDrop of File to Rich TextBox

{% raw %}

	Article: Q173349
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the OLEDragMode property of a Rich TextBox control to 0-rtfOLEDropNone
	does not disable the ability to drag files from the Windows Explorer and drop
	them into the Rich Textbox control.
	
	CAUSE
	=====
	
	The control should be allowed to accept dropped files independent of the
	OLEDragMode property. This behavior is allowed because DragAcceptFiles works
	independently of OLE drag and drop.
	
	RESOLUTION
	==========
	
	You can call the DragAcceptFiles API to set the Rich TextBox control so that it
	does not accept files in a DragDrop operation.
	
	The following is the declaration for the DragAcceptFiles API function:
	
	     Declare Sub DragAcceptFiles Lib "shell32.dll" (ByVal hwnd As Long, _
	          ByVal fAccept As Long)
	
	You can then use the following line of code to set the Rich Textbox control so
	that it cannot accept files in a DragDrop operation:
	
	     DragAcceptFiles ByVal RichTextBox1.hwnd, ByVal 0&
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	The steps provided below are for the Visual Basic 5.0 IDE.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project.
	
	2. Click Components on the Project Menu.
	
	3. Check the "Microsoft Rich Textbox Control" in the Controls Tab of the
	  Components dialog box, and click OK.
	
	4. From the Project Menu, select Add Module to add a new module to the project.
	
	5. Place a Rich Textbox control and two Command buttons on Form1.
	
	6. Add the following code to Module1:
	
	        Declare Sub DragAcceptFiles Lib "shell32.dll" (ByVal hwnd As _
	           Long, ByVal fAccept As Long)
	
	7. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	          Me.Caption = "DragDrop Enabled"
	          RichTextBox1.OLEDragMode = rtfOLEDragAutomatic
	          RichTextBox1.OLEDropMode = rtfOLEDropAutomatic
	        End Sub
	
	        Private Sub Command2_Click()
	          Me.Caption = "DragDrop Disabled"
	          RichTextBox1.OLEDropMode = rtfOLEDropNone
	          RichTextBox1.OLEDragMode = rtfOLEDragManual
	          'Uncomment the following line to disable DragDrop of files
	          'DragAcceptFiles ByVal RichTextBox1.hwnd, ByVal 0&
	        End Sub
	
	        Private Sub Form_Load()
	          Me.Caption = "DragDrop Enabled"
	          Command1.Caption = "Enable DragDrop"
	          Command2.Caption = "Disable DragDrop"
	          RichTextBox1.OLEDragMode = rtfOLEDragAutomatic
	          RichTextBox1.OLEDropMode = rtfOLEDropAutomatic
	        End Sub
	
	8. Press F5 to run the application.
	
	9. Drag a text file from the Windows Explorer and drop it on the Rich Textbox
	  control. Try doing this with DragDrop Enabled and Disabled. You can still
	  drop a file on the Rich Textbox control after you have run the code in
	  Command2_Click. Uncomment the DragAcceptFiles API call and then try to drop
	  the file on the Rich TextBox control after you have clicked the Disable
	  DragDrop button.
	
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Brian
	Combs, Microsoft Corporation
	
	
	Additional query words: kbIDE kbVBp500bug kbVBp600fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
