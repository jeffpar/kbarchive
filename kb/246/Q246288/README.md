---
layout: page
title: "Q246288: BUG: Error in Declaration of SHFileOperation() from API Text Vie"
permalink: kb/246/Q246288/
---

## Q246288: BUG: Error in Declaration of SHFileOperation() from API Text Vie

	Article: Q246288
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbShellGrp kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 08-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the API Text Viewer to get the declaration for the API
	SHFileOperation() function, the following Declare statement is produced:
	
	  Public Declare Function SHFileOperation Lib "shell32.dll" Alias " SHFileOperationA" (lpFileOp As SHFILEOPSTRUCT) As Long
	
	Note that the Declare statement in the code has an embedded space character
	before SHFileOperationA. If you use this API in your Visual Basic code, you
	receive the following error message when you run your application:
	
	  
	
	  Run-time error '453':
	
	  Can't find DLL entry point  SHFileOperationA in shell32.dll
	
	Note that the extra space is also present in the error message text.
	
	RESOLUTION
	==========
	
	The correct Declare statement is:
	
	  Public Declare Function SHFileOperation Lib "shell32.dll" Alias "SHFileOperationA" (lpFileOp As SHFILEOPSTRUCT) As Long
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbShellGrp kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
