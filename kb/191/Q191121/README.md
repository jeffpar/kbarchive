---
layout: page
title: "Q191121: DOC: CreateObject Documentation Using Servername Argument"
permalink: kb/191/Q191121/
---

## Q191121: DOC: CreateObject Documentation Using Servername Argument

	Article: Q191121
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbGrpDSVB
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Microsoft Visual Basic CreateObject function to create/return a
	reference to an ActiveX object using the servername argument, the following
	errors may occur:
	
	  Runtime Error '429':
	  ActiveX component can't createobject
	
	  -or-
	
	  Runtime Error '462':
	  The Remote Server Machine does not exist or is unavailable
	
	MORE INFORMATION
	================
	
	The documentation for the CreateObject function does not mention that the server
	referenced in the servername argument must be a Windows NT or Windows 2000
	server.
	
	For example, the following line of code should create and return a Microsoft
	Excel application object from the specified server, if the server is running
	Windows NT or Windows 2000.
	
	     Sub Test()
	        Set xlObj = CreateObject("Excel.Application","\\MyServer")
	        xlObj.Visible = True
	     End
	
	If the servername specified is a Windows 95, Windows 98, or Windows Me machine,
	one of the errors listed above will occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	
	=============================================================================
	
