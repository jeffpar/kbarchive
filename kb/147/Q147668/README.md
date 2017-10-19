---
layout: page
title: "Q147668: PRB: Len and LenB May Differ on Size of User-Defined Types"
permalink: /kb/147/Q147668/
---

## Q147668: PRB: Len and LenB May Differ on Size of User-Defined Types

	Article: Q147668
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400 kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When used with a user-defined type, the LenB function may return a different
	value than the Len function on 32-bit Windows platforms. This behavior occurs
	because the LenB function returns the in-memory size of a type, while the Len
	function returns the amount of size that a UDT would take if stored on disk.
	This occurs because Visual Basic 4.0 32-bit represents strings internally in
	Unicode, but externally (on disk) as ANSI. A string in the two-byte Unicode
	standard will occupy twice as much space as its ANSI equivalent.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The reproduction sample below demonstrates this behavior. Note that the
	fixed-length string is what causes different values for Len and LenB. The
	non-fixed-length string will always return a value of 4, because that is the
	space required to store a pointer to the location where the actual string is
	stored. The array of bytes of size five needs 5 bytes of storage, regardless of
	the contents of the array.
	
	Steps to Reproduce
	------------------
	
	1. Start a new Visual Basic 4.0 32-bit project. Form1 is created by default.
	
	2. Add a single module to the project by selecting Module from the Insert menu.
	
	3. Add this code to the General Declarations section of Module1:
	
	        Type MyUDT
	           x As String * 5      'size of 10 or 5
	           y As String       'size of 4
	           z (1 to 5) As Byte   'size of 5
	        End Type
	
	4. Add this code to the Form_Click event of Form1:
	
	        Private Sub Form_Click()
	           Dim test As MyUDT
	
	           test.x = "hello"
	           test.y = "world"
	           test.z(1) = 64
	           test.z(2) = 65
	           test.z(3) = 66
	           test.z(4) = 67
	
	           Print LenB(test)     'returns 21
	           Print Len(test)      'returns 14
	        End Sub
	
	5. Press the F5 key or select Start from the Run menu to run the application and
	  observe the behavior.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
