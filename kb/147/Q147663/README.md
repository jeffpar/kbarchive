---
layout: page
title: "Q147663: INFO: Multiple vbCancel Constants Defined with VB 4.0"
permalink: kb/147/Q147663/
---

## Q147663: INFO: Multiple vbCancel Constants Defined with VB 4.0

	Article: Q147663
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Both the Visual Basic and the Visual Basic For Applications type libraries
	define a constant called vbCancel. The value for this constant is different in
	each type library.
	
	MORE INFORMATION
	================
	
	The value for the vbCancel constant defined in the "Visual Basic For
	Applications" type library is 2. The value defined in the "Visual Basic objects
	and procedures" type library is 0. The value that will be returned if vbCancel
	is used in code without a type library prefix is 2, because the VBA type library
	appears first in the list of references displayed in the References dialog.
	
	This can be an issue when the vbCancel constant is expected to return 0. For
	example, the Drag method can take a parameter named Action. To cancel a drag
	operation, the documentation instructs setting the Action parameter to vbCancel,
	where vbCancel is 0. Unfortunately, because the VBA type library exists before
	the Visual Basic type library, a value of 2 will be used instead of a value of
	0. A value of 2 in the context of the Drag method indicates that the drag
	operation on the specified object is complete. If the string VB.vbCancel is
	used, the correct value of 0 will be substituted and the code will work
	properly.
	
	Steps To Reproduce
	------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Press the F5 key or select Start from the Run menu to start the default
	  application.
	
	3. Press CTRL+BREAK, or select Break from the Run menu to pause the application.
	
	4. In the debug window, enter these lines of code and observe the results:
	
	        Print VBA.vbCancel
	        Print VB.vbCancel
	
	  The first line of code returns 2. The second returns 0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
