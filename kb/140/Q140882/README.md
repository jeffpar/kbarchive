---
layout: page
title: "Q140882: HOWTO: Disable the ENTER Key BEEP in a VB Text Box"
permalink: kb/140/Q140882/
---

## Q140882: HOWTO: Disable the ENTER Key BEEP in a VB Text Box

	Article: Q140882
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400 kbVBp500 kbVBp600 kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic for Applications versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a Microsoft Visual Basic for Windows text box, the ENTER key causes a warning
	beep to sound only if the MultiLine property is set to False (the default) and
	the Warning Beep option is selected in the Sound dialog box of the Windows
	Control panel.
	
	To disable the beep, in the KeyPress event procedure for the text box, set the
	value of KeyAscii (which is a parameter passed to KeyPress) equal to zero (0)
	when the user presses the ENTER key.
	
	MORE INFORMATION
	================
	
	Specifically, use an IF statement to trap the ENTER key and the set KeyAscii to
	zero (0). Setting the value to zero before the event procedure ends prevents
	Windows from detecting that the ENTER key was pressed and prevents the warning
	beep. This behavior is by design and is due to the fact that a non-multiline
	text box is a Windows default class of edit box.
	
	Example
	-------
	
	The following code will prevent the beep:
	
	     ' (Set Multiline property to False).
	
	     Private Sub Text1_KeyPress (KeyAscii as Integer)
	        If KeyAscii=13 Then
	           KeyAscii=0
	        End If
	     End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp400 kbVBp500 kbVBp600 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbVB500Search kbVBA600Search kbVBA500 kbVBA600 kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
