---
layout: page
title: "Q247963: HOWTO: Activate the PsPC Keyboard from a VBCE/eVB Application"
permalink: kb/247/Q247963/
---

## Q247963: HOWTO: Activate the PsPC Keyboard from a VBCE/eVB Application

	Article: Q247963
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbGrpDSVB kbOSWinCE211 kbDSupport
	Last Modified: 05-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0, on platform(s):
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	- Microsoft eMbedded Visual Basic, version 3.0, on platform(s):
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to call the SipShowIM API to activate the virtual
	keyboard on a Palm-size PC device running Windows CE 2.11 using either the
	Microsoft Windows CE Toolkit for Visual Basic 6.0 (VBCE) or eMbedded Visual
	Basic 3.0 (eVB).
	
	MORE INFORMATION
	================
	
	Step by Step Example
	--------------------
	
	1. Create a new Windows CE Palm-size PC project in either Visual Basic or
	  eMbedded Visual Basic. Form1 is created by default.
	
	2. Place two CommandButtons on Form1.
	
	3. Paste the following code into Form1:
	
	  Option Explicit
	  Declare Function SipShowIM Lib "coredll" (ByVal flags As Long) As Long
	
	  Private Sub Form_Load()
	      Command1.Caption = "Show Keyboard"
	      Command2.Caption = "Hide Keyboard"
	      Form1.Caption = "SipShowIM Sample"
	  End Sub
	
	  Private Function Showkeyboard() As Long
	      Showkeyboard = SipShowIM(1)
	  End Function
	
	  Private Function Hidekeyboard() As Long
	      Hidekeyboard = SipShowIM(0)
	  End Function
	
	  Private Sub Command1_Click()
	      Showkeyboard
	  End Sub
	
	  Private Sub Command2_Click()
	      Hidekeyboard
	  End Sub
	
	4. Run the project and click the CommandButtons to show and hide the virtual
	  keyboard.
	
	NOTE: This sample only runs on the device and not in the emulator.
	
	NOTE: On PocketPC and PocketPC2002 devices, the SIP can be displayed using the
	SIPVisible property of the Form object.
	
	REFERENCES
	==========
	
	  Q209014 HOWTO: Call Windows CE APIs from VBCE
	
	Additional query words: vbce vbce6 wce sipinfo SHSipInfo eVB sip
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbGrpDSVB kbOSWinCE211 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :1.0,2.11,3.0
	Issue type        : kbhowto
	
	=============================================================================
	
