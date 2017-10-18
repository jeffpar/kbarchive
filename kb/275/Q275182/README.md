---
layout: page
title: "Q275182: PRB: FormResize Appears to Have No Effect When the SIP Is Shown"
permalink: kb/275/Q275182/
---

## Q275182: PRB: FormResize Appears to Have No Effect When the SIP Is Shown

	Article: Q275182
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB kbDSupport kbOSWinCEPsPC200 kbOSWinCE300
	Last Modified: 19-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0, used with:
	   - Microsoft Windows CE Platform SDK for Pocket PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the FormResize property setting of 0 - vbFormFullSIPResize, the
	expected behavior is that the complete form is resized when the soft input panel
	(SIP) is displayed. This does not appear to happen because controls that are on
	the bottom of the form are covered by the SIP when it is shown.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The form is actually being resized (the height property is changed), but none of
	the controls are actually moved. This is an implementation detail that is left
	to the developer.
	
	You can deal with this by using one of several alternatives, two of which are
	listed here:
	
	- Change the Top property of the controls in the SIPChange event to display
	  them appropriately.
	
	- Add a vertical scrollbar when the SIP is shown to handle the user interface
	  (UI) requirements.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Start a new Windows CE for the Pocket PC project in eMbedded Visual Basic
	  (eVB). Form1 is created by default.
	
	2. Add a CommandButton control to Form1.
	
	3. Paste the following code into Form1:
	
	  Private Sub Form_Load()
	      Command1.Move 120, 3000
	      Form1.Caption = "Form height = " & Form1.Height
	  End Sub
	
	  Private Sub Form_SIPChange(bSIPVisible As Boolean)
	      Form1.Caption = "Form height = " & Form1.Height
	  End Sub
	
	4. Run the application, and note that the height of the form is changed when you
	  show and hide the SIP.
	
	Additional query words: wce pocketpc ppc
	
	======================================================================
	Keywords          : kbGrpDSVB kbDSupport kbOSWinCEPsPC200 kbOSWinCE300 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
