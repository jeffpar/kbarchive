---
layout: page
title: "Q318519: PRB: Error -2147467259 When VB Client Calls Method on COM Object"
permalink: /kb/318/Q318519/
---

## Q318519: PRB: Error -2147467259 When VB Client Calls Method on COM Object

{% raw %}

	Article: Q318519
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Visual Basic 6.0 client calls a method on a Component Object Model (COM)
	object, the Visual Basic runtime may report the following error message:
	
	  Run-time error '-2147467259 (80004005)': Method '~' of object '~' failed
	
	Namely, the method call returns E_FAIL, but the object either does not implement
	the ISupportErrorInfo interface or does not provide an error object by calling
	the CreateErrorInfo function.
	
	
	MORE INFORMATION
	================
	
	If you use proper error handling code, you can determine the server name that
	contains the object that returns the error. This information is stored in the
	Source property of the Err object. For example, the following code creates an
	event log entry when the error occurs:
	
	  Private Sub TestSub()
	      On Error GoTo errHandler
	      Dim o As TestServer.Class1
	      Set o = New TestServer.Class1
	      o.SomeMethod
	      Exit Sub
	  errHandler:
	      App.LogEvent "Error in TestSub: " & Err.Number & "; Source: " & Err.Source & "; Description: " & Err.Description
	  End Sub
	
	If the above-mentioned error occurs when o.SomeMethod is called, you can identify
	the function name (TestSub), the error number [-2147467259 (80004005)], the
	error source (TestServer), and the description (Method '~' of object '~'
	failed). You can use this information to narrow the cause of the problem.
	
	If you are debugging in the Visual Basic integrated development environment
	(IDE), and if the COM object is running in process, you can obtain a more
	specific error description that includes the object and method names. To
	determine the root cause of the problem, debug the method of the object that
	returns E_FAIL.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
