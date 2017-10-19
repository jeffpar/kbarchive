---
layout: page
title: "Q189480: PRB: RichTextBox Control Saves Locale Setting When Created"
permalink: /kb/189/Q189480/
---

## Q189480: PRB: RichTextBox Control Saves Locale Setting When Created

	Article: Q189480
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Text entered into a RichTextBox control at run-time uses a keyboard layout that
	is different than the current setting.
	
	CAUSE
	=====
	
	When the RichTextBox control was initially added to the form, the then- current
	keyboard setting was saved with the text in the text property of the control.
	
	RESOLUTION
	==========
	
	There are several possible workarounds depending on the version of the control
	you are working with.
	
	With version 6.0 of the control there are two workarounds:
	
	1. When adding the control to a form, delete the text in the text property. If
	  the control has no text, the layout setting will not be saved.
	
	2. Select all the text in the RichTextBox control and set the keyboard locale to
	  the language desired.
	
	With Version 5.0 and earlier of the control, use the following code to check the
	keyboard layout of the form and use it as the check value. Then check the
	keyboard layout of the RichTextBox control and change it to the form's value if
	different.
	
	Step-by-Step Example
	--------------------
	
	1. Add the following code to General Declarations section of the form module:
	
	        Option Explicit
	
	        Private Declare Function GetKeyboardLayoutName Lib "user32" Alias _
	        "GetKeyboardLayoutNameA" (ByVal pwszKLID As String) As Long
	
	        Private Declare Function LoadKeyboardLayout Lib "user32" Alias _
	        "LoadKeyboardLayoutA" (ByVal pwszKLID As String, _
	        ByVal flags As Long) As Long
	
	        Dim K1 As String * 10
	        Dim KybdOriginal As Long
	
	2. Add the following code to the form Load event procedure:
	
	        K1 = Space$(10)
	        KybdOriginal = GetKeyboardLayoutName(K1)
	
	3. Add the following code to the GotFocus event procedure of the RichTextBox
	  control:
	
	        Dim K2 As String * 10
	        Dim KybdCode As Long
	
	        K2 = Space$(10)
	        KybdCode = GetKeyboardLayoutName(K2)
	
	        If (K1 <> K2) Then KybdCode = LoadKeyboardLayout(K1, 1)
	
	This should reset the keyboard layout setting for the RichTextBox control to
	match the layout used by the form.
	
	STATUS
	======
	
	This behavior is by design. The RichTextBox control saves the language setting
	when text is saved.
	
	MORE INFORMATION
	================
	
	When a RichTextBox control is added to a form, default text is added to the text
	property. When the form is saved the RTF data format includes the keyboard
	settings as part of the font information.
	
	Version 6.0 of the control does not save the keyboard setting if the text
	property of the control is empty. Previous versions of the control saved the
	setting regardless of the contents of the text property.
	
	The keyboard (Locale) setting can be changed in Control Panel/Regional Settings.
	
	REFERENCES
	==========
	
	Online Help for Microsoft Visual Basic, versions 4.0 and 5.0
	
	Books Online for Microsoft Visual Basic 5.0 and 6.0
	
	Additional query words: kbDSupport RTF richtext richedit kbVBp400 kbVBp500 kbVBp600 kbdss kbCrtl kbVBp
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
