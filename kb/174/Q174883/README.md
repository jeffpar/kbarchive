---
layout: page
title: "Q174883: DOC: ExitWindows Function Declaration Incorrect in API Viewer"
permalink: /kb/174/Q174883/
---

## Q174883: DOC: ExitWindows Function Declaration Incorrect in API Viewer

{% raw %}

	Article: Q174883
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocerr kbAPI kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One of the following errors may occur when you use the ExitWindows API function
	declaration from the API Text Viewer.
	
	  Run-time error '453':
	  Specified DLL function not found
	
	  - or -
	
	  Run-time error '453':
	  Can't find DLL entry point ExitWindows in user32
	
	MORE INFORMATION
	================
	
	There is an incomplete declare statement in the API Viewer for the ExitWindows()
	function.
	
	To use this function correctly, add 'Alias "ExitWindowsEx" ' to the function
	declaration so the declare statement is as follows:
	
	     Declare Function ExitWindows Lib "user32" Alias "ExitWindowsEx" (ByVal _
	     dwReserved As Long, ByVal uReturnCode As Long) As Long
	
	You can also change the statement in the file win32api.txt so the next time you
	use the API Text Viewer, the Declare statement will be correct.
	
	REFERENCES
	==========
	
	To learn more about the API Text Viewer, select the "Books on Line" option from
	the Help menu, and in the "Find" text box enter the search criterion "api"
	(without the quotes.) The first item under the "Visual Basic Books OnLine" node
	will be the topic "Accessing the Microsoft Windows API."
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q168796 HOWTO: Programmatically Restart or Log Off a Computer
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbAPI kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
