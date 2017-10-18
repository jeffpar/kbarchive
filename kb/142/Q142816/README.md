---
layout: page
title: "Q142816: HOWTO: Make ENTER Key Move Focus Like TAB Key for VB Controls"
permalink: kb/142/Q142816/
---

## Q142816: HOWTO: Make ENTER Key Move Focus Like TAB Key for VB Controls

	Article: Q142816
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can cause the ENTER key to move the focus to the control with the next
	higher TabIndex property value, as the TAB key does.
	
	However, using the ENTER key to move the focus does not follow recommended
	Microsoft Windows-based application design guidelines. The ENTER key should be
	used to process the default command or to process entered information, not to
	move the focus.
	
	MORE INFORMATION
	================
	
	You can detect when the user presses the ENTER key from the KeyPress event
	procedure by checking to see if the KeyAscii parameter is the character code for
	the ENTER key (13). Then you can move the focus to the next control in the
	TabIndex order with SendKeys "{tab}." You can move the focus to the previous
	control with SendKeys "+{tab}."
	
	This technique works with most kinds of controls. It does not work with command
	button controls, because command buttons do not receive the KeyPress event when
	you press the ENTER key.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add two text boxes (Text1 and Text2) to Form1.
	
	3. Add the following code to the Text1 KeyPress procedure:
	
	        Private Sub Text1_KeyPress (KeyAscii As Integer)
	           If KeyAscii = 13 Then  ' The ENTER key.
	              SendKeys "{tab}"    ' Set the focus to the next control.
	              KeyAscii = 0        ' Ignore this key.
	           End If
	        End Sub
	
	4. Add the following code to the Text2 KeyPress procedure:
	
	        Private Sub Text2_KeyPress (KeyAscii As Integer)
	           If KeyAscii = 13 Then  ' The ENTER key.
	              SendKeys "{tab}"    ' Set the focus to the next control.
	              KeyAscii = 0        ' Ignore this key.
	           End If
	        End Sub
	
	5. Press the F5 key to run the program. When you press the ENTER key, the focus
	  moves between the two controls.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbControl kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
