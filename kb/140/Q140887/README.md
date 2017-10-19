---
layout: page
title: "Q140887: VB Grid Custom Control: Text Limited to 255 Characters"
permalink: /kb/140/Q140887/
---

## Q140887: VB Grid Custom Control: Text Limited to 255 Characters

	Article: Q140887
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Text property for the Grid custom control can hold a string of up to 255
	characters. If you assign a string longer than 255 characters to the grid Text
	property, the string is truncated.
	
	This behavior is by design in Visual Basic. This behavior is similar to a text
	box control with the MultiLine property set to FALSE (0).
	
	Additional query words: 1.00 2.00 3.00 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	
	=============================================================================
	
