---
layout: page
title: "Q260373: FIX: The SSTab Events May Fire Despite Cancel = True"
permalink: /kb/260/Q260373/
---

## Q260373: FIX: The SSTab Events May Fire Despite Cancel = True

	Article: Q260373
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActivexEvents kbTabCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600s
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SSTab control Click event and GotFocus event are fired even when the
	CausesValidation property of SSTab is True and the control losing Focus sets
	Cancel to True in the Validate event.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the latest service pack for Visual Studio 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, choose Components, and add a reference to Microsoft
	  Tabbed Dialog Control 6.0.
	
	3. Place a TextBox control and an SSTab control on Form1.
	
	4. Paste the following code into the code window of Form1:
	
	  Option Explicit
	
	  Private Sub SSTab1_Click(PreviousTab As Integer)
	    Debug.Print "SSTab1_Click " & PreviousTab
	  End Sub
	
	  Private Sub SSTab1_GotFocus()
	    Debug.Print "SSTab1_GotFocus"
	  End Sub
	
	  Private Sub Text1_Validate(Cancel As Boolean)
	    Debug.Print "Text1_Validate"
	    Cancel = True
	  End Sub
	
	5. Press the F5 key to run the program.
	
	6. On the View menu, select the Immediate window.
	
	7. Click on the tabs on the SSTab control and note that in the Immediate window
	  the GotFocus event or both the Click event and GotFocus event are fired.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActivexEvents kbTabCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
