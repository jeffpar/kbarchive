---
layout: page
title: "Q198607: PRB: Access Violation in VB Run-Time Using AddressOf"
permalink: /kb/198/Q198607/
---

## Q198607: PRB: Access Violation in VB Run-Time Using AddressOf

{% raw %}

	Article: Q198607
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAPI kbThread kbVBp kbVBp600 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running your Visual Basic application, you may encounter an error similar
	to the following:
	
	  The instruction at 0x660bd3b1 referenced memory at 0x0000009c. The memory
	  could not be written.
	
	This error may occur immediately following a declared API function call within a
	Visual Basic callback function.
	
	CAUSE
	=====
	
	When the error occurs, the callback function is called by a thread that was not
	created by Visual Basic.
	
	For instance, certain API calls such as CreateThread() and
	RegisterServiceCtrlHandler() create an additional thread before invoking the
	callback function that was previously setup by using the AddressOf operator.
	Although the same code may have worked in previous versions of Visual Basic,
	calling API's of this nature are currently unsupported in Visual Basic.
	
	MORE INFORMATION
	================
	
	These API functions use a Free threading model, but Visual Basic only supports
	Apartment-model threading.
	
	
	Furthermore, additional care must be taken with regards to what code can be
	executed within the callback function. Any use of the following within the
	callback function may cause undesirable results:
	
	- File I/O.
	
	- Error handling.
	
	- Fixed size arrays.
	
	- Set statements.
	
	- COM method calls that return HRESULTs (such as any Visual Basic ActiveX
	  object).
	
	- Declare calls.
	
	- Global objects such as the Application object.
	
	- Most of the Visual Basic run-time files.
	
	REFERENCES
	==========
	
	For more information on using threads in Visual Basic, please see the following:
	Visual Basic Books Online, "Apartment-Model Threading in Visual Basic"
	
	Pattison, Ted, Programming Distributed Applications with COM and Microsoft Visual
	Basic 6.0. Microsoft Press, 1999, Chapter 7, "Exploring Apartments and
	Multithreading".
	
	McKinney, Bruce, HardCore Visual Basic. Microsoft Press, 1997 Chapter 11,
	"Threads and Synchronization"
	
	Appleman, Daniel, A Thread to Visual Basic article located at the following Web
	URL:
	
	  http://www.desaware.com
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q189133 Make C DLL More Accessible to VB with a Type Library
	
	  Q143258 How to Create Constants and DLL Declarations in a Type Library
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbThread kbVBp kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
