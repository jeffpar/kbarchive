---
layout: page
title: "Q229792: INFO: Maximum Number of Array Elements in Visual Basic 6.0"
permalink: /kb/229/Q229792/
---

## Q229792: INFO: Maximum Number of Array Elements in Visual Basic 6.0

	Article: Q229792
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The maximum number of elements in an array is limited by the amount of available
	system resources. While you could possibly have an array with the maximum 32-bit
	value of 2147483648, your program would run out of memory on Windows NT because
	Windows NT 4.0 only supports 4GB of memory in a single process.
	
	REFERENCES
	==========
	
	For more information about project, control, and code limitations in Visual
	Basic, please see the following topics in the Visual Basic Programmers Guide in
	the Online Help:
	
	- Project Limitations
	- Control Limitations
	- Code Limitations
	- Data Limitations
	- System Resource Limitations
	
	Additional query words: VBFAQProgramming
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
