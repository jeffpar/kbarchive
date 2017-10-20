---
layout: page
title: "Q162622: HOWTO: Pass a NULL String to a Windows API from Visual Basic"
permalink: /kb/162/Q162622/
---

## Q162622: HOWTO: Pass a NULL String to a Windows API from Visual Basic

{% raw %}

	Article: Q162622
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to pass NULL as a parameter to any Windows API
	function that requires a pointer to a string from a Visual Basic 4.0 or higher
	application.
	
	MORE INFORMATION
	================
	
	Many Windows APIs have pointers to strings (for example, LPSTR or LPCSTR) in
	their parameter lists. The documentation often indicates that special processing
	occurs if a NULL is passed (instead of a pointer to a string). With earlier
	versions of Visual Basic, you could accomplish this by using 0& for the
	parameter. However, Visual Basic versions 4.0 and higher include a special
	constant, vbNullString, that you can use when you need to pass NULL to a Windows
	API.
	
	For example, here's the declaration for the Win32 function FindWindow that
	accepts two pointers to strings:
	
	        HWND FindWindow(
	            LPCTSTR lpClassName,   // pointer to class name
	            LPCTSTR lpWindowName   // pointer to window name
	            );
	
	If NULL is passed as the second parameter, FindWindow locates any window of the
	specified class name. In a C or C++ program, the call might look like this:
	
	        hRet = FindWindow("MyWindowClass", NULL);
	
	If you make the same call from Visual Basic, it looks like this:
	
	        hRet = FindWindow("MyWindowClass", vbNullString)
	
	Note that using vbNullString is equivalent to passing NULL as the parameter. This
	is not the same as passing an empty string ("").
	
	REFERENCES
	==========
	
	Visual Basic Help file, versions 4.0, 5.0; Topic: "Declare Statement"
	
	Additional query words: kbdsi kbDSupport kbVBp kbVBp400 kbVBp500 kbVBp600 kbAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
