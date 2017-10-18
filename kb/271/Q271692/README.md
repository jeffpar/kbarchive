---
layout: page
title: "Q271692: INFO: Avoid Truncation When You Use Data Report ExportReport"
permalink: kb/271/Q271692/
---

## Q271692: INFO: Avoid Truncation When You Use Data Report ExportReport

	Article: Q271692
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ExportReport method of the Data Report designer provides a mechanism to
	export the text of a DataReport object to a file. Because this method works
	asynchronously, you need to be sure that there are no asynchronous operations
	still executing before you unload the DataReport.
	
	MORE INFORMATION
	================
	
	When you use the ExportReport method, it is important to check the AsyncCount
	property of the DataReport before you unload the DataReport; otherwise, the
	output file may not contain the all of the text. This property returns the
	number of asynchronous operations that are still executing. When AsyncCount
	returns zero, it is safe to unload the DataReport. The following code fragment
	demonstrates this:
	
	  DataReport1.ExportReport rptKeyHTML, "c:\output.htm", True, False
	  Do
	    DoEvents
	  Loop While DataReport1.AsyncCount > 0 
	  Unload DataReport1
	
	REFERENCES
	==========
	
	For more information, see the following Web sites on the Microsoft Developer
	Network (MSDN):
	
	  ExportReport Method
	  http://msdn.microsoft.com/library/devprods/vs6/vbasic/vb98/vbmthexportreportmethod.htm
	
	  AsyncCount Property
	  http://msdn.microsoft.com/library/devprods/vs6/vbasic/vb98/vbproasynccountproperty.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	
