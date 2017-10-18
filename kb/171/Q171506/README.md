---
layout: page
title: "Q171506: FIX: Drag/Drop of ListView Control Fails"
permalink: kb/171/Q171506/
---

## Q171506: FIX: Drag/Drop of ListView Control Fails

	Article: Q171506
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic 5.0, the Drag-and-Drop functionality of the ListView control
	fails to function correctly if the DragMode property of the ListView control is
	set to 0 (Manual). Automatic operation of Drag-and- Drop functions correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE Project.
	
	2. Place two ListView controls on the form (ListView1 and ListView2).
	
	3. Place the following code into the General Declarations section of the form:
	
	      Private Sub Form_Load()
	          Dim Li As ListItem
	          Set Li = ListView1.ListItems.Add(, , "hello")
	          Set Li = ListView1.ListItems.Add(, , "hello2")
	          Set Li = ListView1.ListItems.Add(, , "hello3")
	      End Sub
	
	      Private Sub ListView1_MouseDown(Button As Integer, Shift As Integer, _
	      x As Single, y As Single)
	         Set ListView1.SelectedItem = ListView1.HitTest(x, y)
	         ' In the following line any ICO file will do
	         ListView1.DragIcon = LoadPicture _
	         ("C:\program files\microsoft visual basic\samples\calc\calc.ico")
	         ListView1.Drag vbBeginDrag
	      End Sub
	
	      Private Sub ListView2_DragDrop(Source As Control, x As Single, _
	      y As Single)
	         MsgBox "Hello"
	         Dim li2 As ListItem
	         Set li2 = ListView2.ListItems.Add(, , Source.SelectedItem.Text)
	      End Sub
	
	4. Run the form and attempt to drag "hello" from ListView1 to ListView2. Note
	  that the drag icon disappears when the item is moved.
	
	Additional query words: Item Click Transfer kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
