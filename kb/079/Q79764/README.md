---
layout: page
title: "Q79764: Use SetHandleCount to Open More than 15 Files at Once in VB"
permalink: /kb/079/Q79764/
---

## Q79764: Use SetHandleCount to Open More than 15 Files at Once in VB

{% raw %}

	Article: Q79764
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	- Microsoft Visual Basic Standard Edition for Windows, versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual Basic for Windows programs normally may not have more than 15
	files open at once. Visual Basic for Windows displays the error message "Too
	many files" (error code 67) when you attempt to open more than the maximum
	number of files at once. You can increase the maximum number of open files by
	calling the Windows API function SetHandleCount.
	
	MORE INFORMATION
	================
	
	The Windows API function SetHandleCount requests Windows to change the maximum
	number of files a program can open. SetHandleCount returns the actual number of
	handles that the program can use, which may be less than the number requested.
	
	The FILES= statement in the CONFIG.SYS file does not limit the number of files
	available to a Microsoft Windows program.
	
	Do not attempt to increase the number of files with MS-DOS interrupt 21 hex with
	function 67 hex. This interrupt does not record information needed by Windows.
	
	Example
	-------
	
	The following code example demonstrates how to use SetHandleCount:
	
	'*** In the global module: ***
	
	  Declare Function SetHandleCount% Lib "kernel" (ByVal n%)
	
	'*** In the form: ***
	
	  Sub Form_Load ()
	     n% = SetHandleCount(60)  ' Request 60 file handles.
	     MsgBox "Maximum number of open files: " + Format$(n%)
	  End Sub
	
	Additional query words: 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbVB200
	Version           : :1.0,2.0,3.0
	
	=============================================================================
	

{% endraw %}
