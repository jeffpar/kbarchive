---
layout: page
title: "Q192538: DOC: Cursor Functions Not Included in Winuser.h for Windows CE"
permalink: /kb/192/Q192538/
---

## Q192538: DOC: Cursor Functions Not Included in Winuser.h for Windows CE

{% raw %}

	Article: Q192538
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbdocerr kbVC500 kbVC600 kbOSWinCE200 kbOSWinCE210 kbOSWinCE211
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	- Microsoft Windows CE version 2.0 for the Handheld PC 
	- Microsoft Windows CE version 2.0 for the Palm-size PC 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The cursor functions SetCursorPos, GetCursorPos, ShowCursor, and ClipCursor are
	not included in Winuser.h for the Handheld PC and Palm-size PC Platform SDK
	because mouse cursors are not supported on these platforms. The online
	documentation is not complete in this regard. These functions are available only
	on platforms where mouse cursors are supported; for example, the Embedded
	Toolkit PC-Based Hardware Development Platform. You will get a compile error if
	you use these functions in an application that targets a Windows CE platform
	that doesn't have mouse cursor support.
	
	Do not use the SetCursorPos, GetCursorPos, ShowCursor and ClipCursor functions
	with Windows CE platforms that don't have mouse cursor support.
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbVC500 kbVC600 kbOSWinCE200 kbOSWinCE210 kbOSWinCE211 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch kbWinCE200HPC kbWinCE200PalmsizePC kbWinCETK600VC
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
