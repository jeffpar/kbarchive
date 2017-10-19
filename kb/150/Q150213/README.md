---
layout: page
title: "Q150213: FIX: Incorrect Declaration for SelectObject API Function"
permalink: /kb/150/Q150213/
---

## Q150213: FIX: Incorrect Declaration for SelectObject API Function

	Article: Q150213
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp500fix kbGrpDSVB
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Win32Api.txt file contains an incorrect entry for the declaration of the
	32-bit SelectObject function.
	
	RESOLUTION
	==========
	
	The win32api.txt file contains the following incorrect declaration:
	
	     Declare Function SelectObject Lib "user32" Alias "SelectObject" _
	     ByVal hdc  As Long, ByVal hObject As Long) As Long
	
	The correct declaration is:
	
	     Declare Function SelectObject Lib "gdi32" Alias "SelectObject" _
	     (ByVal hdc  As Long, ByVal hObject As Long) As Long
	
	Notice that the library name was incorrect in the original declaration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp500fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
