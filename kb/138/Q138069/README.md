---
layout: page
title: "Q138069: How to Address the Master Object Called Global"
permalink: /kb/138/Q138069/
---

## Q138069: How to Address the Master Object Called Global

	Article: Q138069
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
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
	
	The standard Visual Basic Objects like the App object, the Printer Object, the
	Clipboard Object, the Screen Object, and the Forms Collection Object are all
	implemented as methods of the master object called Global. There is very seldom
	a need to use the object Global.
	
	MORE INFORMATION
	================
	
	Because the name of this master object conflicts with the Visual Basic Global
	keyword, you must enclose it in square brackets when you use it. This object
	also appears in the Object Browser under the Visual Basic Library. Here's an
	Example:
	
	     Dim x As [Global].Forms
	     Debug.print x.Count
	
	NOTE: The object Global is special in that it is a VTable only object; in other
	words, you can't do the following:
	
	     Dim x As Object
	     Set x = [Global]
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	
	=============================================================================
	
