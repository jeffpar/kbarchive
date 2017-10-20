---
layout: page
title: "Q291853: INFO: Avoid Page Skipping When You Print Multiple Data Reports"
permalink: /kb/291/Q291853/
---

## Q291853: INFO: Avoid Page Skipping When You Print Multiple Data Reports

{% raw %}

	Article: Q291853
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbprint kbReportWriter kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you print multiple data reports sequentially from a Visual Basic program, you
	may notice that pages of the reports are skipped. Because data report printing
	is done asynchronously, you must ensure that no asynchronous operations are
	pending before you print the next data report.
	
	MORE INFORMATION
	================
	
	The AsyncCount property of the DataReport object returns the number of
	asynchronous operations still executing. Use the AsyncCount property of
	DataReport in conjunction with the DoEvents method to complete any pending
	asynchronous operations before you print the next report.
	
	The following code segment demonstrates this:
	
	  Report1.PrintReport
	  While Report1.AsyncCount > 0
	        DoEvents
	  Wend
	  Report2.PrintReport  
	
	REFERENCES
	==========
	
	For more information about the AsyncCount property, see the following MSDN Web
	site:
	
	  http://msdn.microsoft.com/library/devprods/vs6/vbasic/vb98/vbproasynccountproperty.htm
	
	For additional information about the ExportReport method, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q271692 INFO: Avoid Truncation When You Use the DataReport ExportReport
	  Method
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbReportWriter kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
