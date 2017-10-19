---
layout: page
title: "Q171470: FIX: Resize Event Not Fired When UserControl Copied &amp; Pasted"
permalink: /kb/171/Q171470/
---

## Q171470: FIX: Resize Event Not Fired When UserControl Copied &amp; Pasted

	Article: Q171470
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a UserControl is copied and pasted onto a Form, the new control's resize
	event does not fire as expected. The Resize event of the UserControl fires only
	when made part of a control array.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project.
	
	2. Add a UserControl to the project.
	
	3. Add the following code to the Resize event of the UserControl:
	
	        Private Sub UserControl_Resize()
	            MsgBox "Resize"
	        End Sub
	
	4. Add an instance of the UserControl to Form1. Note that the Resize event
	  triggers the first time.
	
	5. Select the instance of the UserControl and click Copy on the Edit Menu.
	
	6. Click Paste on the Edit menu. When asked if you want to make a control array,
	  click No.
	
	  NOTE: As long as you continue to copy and paste the control, the new controls
	  are added without the Resize event firing (if they are not part of a control
	  array).
	
	7. Paste the control, and choose Yes when asked to make a control array.
	
	  NOTE: Because the control is now part of a control array, the Resize event
	  triggers correctly when added to the form.
	
	Additional query words: cut copy paste
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
