---
layout: page
title: "Q138072: INFO: Tips to Improve Performance While Using OLE Servers"
permalink: /kb/138/Q138072/
---

## Q138072: INFO: Tips to Improve Performance While Using OLE Servers

	Article: Q138072
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists tips to keep in mind when instantiating an OLE server object,
	when calling a method, or when using a property of the object.
	
	MORE INFORMATION
	================
	
	Tip One
	-------
	
	Here are two ways in which an object could be created using early binding:
	
	- 
	
	     Dim x As New MyClass
	     Call x.MyMethod
	
	  -or-
	
	- 
	
	     Dim x As MyClass
	     Set x = New MyClass
	     Call x.MyMethod
	
	The latter code is faster and more efficient because it creates an instance of
	the object only while executing the Set statement. The former code doesn't
	instantiate the object until the statement that calls a method of the object.
	
	In the former code, each call to a member of an object checks to see if it has
	been instantiated. If not it is instantiated at that point, the call is made. In
	the latter code, no such check is made, so it is faster. It is the
	responsibility of the application developer to ensure that an object variable
	has been properly instantiated before calling any of its members.
	
	Another thing to keep in mind is that the former code guarantees that you always
	have a reference to an object. Therefore, even if you:
	
	     Set x = Nothing
	
	and later check:
	
	     If x Is Nothing Then
	
	x is instantiated at that point. Such a check will always return a value of
	False. Whereas in the latter code, you are always free to set x to Nothing and
	check for it correctly later.
	
	Tip Two
	-------
	
	While calling members of an out-of-process OLE Server such as an OLE EXE server,
	if you need to make repetitive calls to members that return quickly (for
	example, members like the height property of the Form object that don't use many
	instruction cycles), it will be faster to call a single method that bundles all
	these other "lightweight" properties into an array or returns them as parameters
	to this single method. This is because the time taken by the marshalling code
	for a cross-process call to execute is much more than what is needed to perform
	the task that the member does.
	
	Additional query words: optimization speed quick 4.00
	
	======================================================================
	Keywords          : kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbinfo
	
	=============================================================================
	
