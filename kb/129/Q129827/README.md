---
layout: page
title: "Q129827: Use ByVal to Pass a Control as an Argument to a DLL or VBX"
permalink: kb/129/Q129827/
---

## Q129827: Use ByVal to Pass a Control as an Argument to a DLL or VBX

	Article: Q129827
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	In previous versions of Visual Basic, when you passed a control to a DLL or
	VBX, your function declaration looked like this:
	
	     Declare Function fDoNothing Lib "MyFun.vbx" (ctlX as Control) As Integer
	
	Now, in Microsoft Visual Basic version 4.0, the keyword ByVal must
	be used when passing the same control, so now your function declaration
	must look like this:
	
	     Declare Function fDoNothing Lib "MyFun.vbx" (ByVal ctlX as Control)_
	        As Integer
	
	The Visual Basic API was changed. Now, functions expecting a control as a
	parameter require a handle to the control, an HCTL. Omitting ByVal within
	the parameter list causes a pointer to the HCTL to be passed instead of the
	HCTL itself. To ensure an HCTL is passed, use the ByVal keyword. This
	behavior is by design.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	
	=============================================================================
	
