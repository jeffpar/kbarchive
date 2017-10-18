---
layout: page
title: "Q138520: HOWTO: Use an Ampersand (&amp;) to Suppress Sign Extension"
permalink: kb/138/Q138520/
---

## Q138520: HOWTO: Use an Ampersand (&amp;) to Suppress Sign Extension

	Article: Q138520
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400 kbVBp500 kbhowto
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Adding an ampersand (&) character to the end of a Hexadecimal number will
	ensure that it is not sign extended. This can be useful when an unsigned
	constant must be passed to a routine and the magnitude of the constant is
	greater than or equal to 32,768 (&H8000 in Hexadecimal). If the ampersand is
	not placed on the end of the constants, Visual Basic assumes that the numbers
	are sign extended.
	
	MORE INFORMATION
	================
	
	The following example illustrates the effect of an ampersand on a Hexadecimal
	constant:
	
	1. Start a new project in Visual Basic. In the default form (Form1), place the
	  following code in the Click event for the form:
	
	        Private Sub Form_Click()
	           Dim j As Long
	           j = &H8000
	           Debug.Print j
	           j = &H8000&
	           Debug.Print j
	        End Sub
	
	2. Run the code by pressing the F5 key. The Debug window shows the output as
	  -32,768 followed by 32,768 indicating that the ampersand does suppress the
	  sign.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 kbVBp500 kbhowto 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
