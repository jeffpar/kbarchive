---
layout: page
title: "Q138140: Untrapped Errors in VB OLE DLL Can Unload the Whole Process"
permalink: kb/138/Q138140/
---

## Q138140: Untrapped Errors in VB OLE DLL Can Unload the Whole Process

	Article: Q138140
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Untrapped errors in any events (like Initialize and Terminate) in an in-process
	OLE DLL server created in Visual Basic will cause it to terminate the whole
	process.
	
	MORE INFORMATION
	================
	
	If you don't have an On Error Goto statement inside an Event procedure in an
	in-process OLE DLL server created in Visual Basic and an error occurs inside the
	event procedure, Visual Basic will call the ExitProcess Windows API to terminate
	the process that loaded the DLL. This will happen regardless of the Error
	trapping setting on the Advanced tab when you click Options on the Tools menu
	and regardless of whether the client is running in the Visual Basic IDE or as a
	separate EXE.
	
	Errors in event handlers of forms or controls created by the OLE DLL also have
	the same problem. For example, if the OLE DLL brings up a modal form and the
	user clicks on the form, an untrapped error in the Form_click event will cause
	the entire process to terminate.
	
	However, this does not apply to errors that occur in property procedures or
	methods of objects in the DLL. If these errors are not trapped in the DLL they
	will be sent on to the client application that called the procedure.
	
	Additional query words: 4.00 inproc inprocess vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	
