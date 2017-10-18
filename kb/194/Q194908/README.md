---
layout: page
title: "Q194908: BUG: Control Repaint Problems When ClipControls Set to False"
permalink: kb/194/Q194908/
---

## Q194908: BUG: Control Repaint Problems When ClipControls Set to False

	Article: Q194908
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clicking on an application's icon on the operating system's taskbar causes some
	controls to disappear.
	
	CAUSE
	=====
	
	This problem occurs when a modal form is displayed while a second form in this
	application is visible in the background and the background form consists of all
	of the following:
	
	1. Its "ClipControls" property is set to "False."
	
	2. The controls not displaying correctly are child controls of another control
	  rather than placed directly on the form (such as option buttons within a
	  Frame control).
	
	This problem will occur with any type of control as long as the conditions above
	are met.
	
	RESOLUTION
	==========
	
	There are two potential workarounds for this issue:
	
	- Avoid setting ClipControls to False when a second modal form will be
	  displayed.
	
	- Leave the ClipControls property set to False but only display non-modal
	  forms.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following example uses a Frame with OptionButtons to demonstrate this
	behavior.
	
	Steps To Reproduce
	------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Add a Frame Control to Form1.
	
	3. Place an OptionButton within the Frame.
	
	4. Place an OptionButton directly on the form.
	
	5. Set the form's "ClipControls" property to "False."
	
	6. Add a CommandButton to Form1.
	
	7. Paste the following code into Form1's code window:
	
	         Private Sub Command1_Click()
	            Form2.Show vbModal
	         End Sub
	
	8. From the Project menu, add a second form, Form2, to the Project.
	
	9. Run the Project.
	
	10. Click the CommandButton.
	
	11. Position the forms such that they are both visible.
	
	12. Click the Win95/Win98/WinMe/NT4/Win2000 Taskbar item labeled "Form1." Note
	  that the OptionButton within the Frame control disappears. The OptionButton
	  and CommandButton located directly on Form1 continue to display correctly.
	
	Additional query words: paint
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
