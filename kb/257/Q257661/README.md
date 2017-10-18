---
layout: page
title: "Q257661: FIX: Form Double-Click Event May Fire SSTab Events"
permalink: kb/257/Q257661/
---

## Q257661: FIX: Form Double-Click Event May Fire SSTab Events

	Article: Q257661
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbTabCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you cover the SSTab control with a Form and double-click on that form in the
	area above any tab of the SSTab control, then either the GotFocus event itself
	or both the GotFocus and the Click events are fired.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the latest service pack for Visual Studio 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, choose Components.
	
	3. Add a reference to Microsoft Tabbed Dialog Control 6.0.
	
	4. Place an SSTab control and a CommandButton control on Form1.
	
	5. Paste the following code into Form1's code window:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	    Form2.Show vbModal
	  End Sub
	
	  Private Sub SSTab1_Click(PreviousTab As Integer)
	    Debug.Print "SSTab1_Click " & PreviousTab
	  End Sub
	
	  Private Sub SSTab1_GotFocus()
	    Debug.Print "SSTab1_GotFocus"
	  End Sub
	
	6. From the Project menu, add a new Form. Form2 is added by default.
	
	7. Paste the following code into Form2's code window:
	
	  Option Explicit
	
	  Private Sub Form_DblClick()
	    Debug.Print "Form2 DblClick"
	    Unload Me
	  End Sub
	
	8. Press the F5 key to run the program.
	
	9. On the View menu, select the Immediate window.
	
	10. On Form1, the current tab of the SSTab1 control is Tab0.
	
	11. Click on Command1. Form2 pops up.
	
	12. Position Form2 so that it covers the Tab1 or Tab2 tab of the SSTab1 control.
	
	13. Double-click on Form2 in the area above the Tab1 or Tab2 tab of the SSTab1
	  control.
	
	14. Form2 unloads and you see that the current tab of the SSTab1 control has
	  switched to Tab1 or Tab2 depending on where you clicked.
	
	15. In the Immediate window, note that the Click and GotFocus events of the
	  SSTab1 control are fired.
	
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbTabCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
