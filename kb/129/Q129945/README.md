---
layout: page
title: "Q129945: PRB: hCtl May Be Invalidated by Visual Basic"
permalink: kb/129/Q129945/
---

## Q129945: PRB: hCtl May Be Invalidated by Visual Basic

	Article: Q129945
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
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
	
	SYMPTOMS
	========
	
	With the release of Visual Basic version 4.0, developers of .DLL and .VBX file
	now need to ensure that they don't cache the hCtl of a Control passed as a
	parameter. Visual Basic can invalidate the hCtl at any time, without warning.
	Any DLL or VBX that caches the hCtl can encounter significant system problems
	such as general protection (GP) faults.
	
	CAUSE
	=====
	
	If a DLL or VBX exposes a procedure that takes a Control (As Control, As
	CommandButton, or AS SSCommandButton) as a parameter, and the DLL or VBX caches
	this parameter in a variable for use later as the hCtl in a call to the Visual
	Basic API, the DLL or VBX may get an error if it later attempts to reference the
	hCtl.
	
	RESOLUTION
	==========
	
	DLLs and VBXs can no longer cache the Control parameter in a variable and use
	this as the hCtl later in a call to the Visual Basic API. The control is
	actually being passed a pointer to an hCtl, and Visual Basic can invalidate that
	pointer at any time.
	
	There are two ways to solve this problem. The preferred method is to modify the
	DLL or VBX to correctly handle hCtl references.
	
	- The DLL can be rewritten to dereference the IDispatch pointer in the DLL
	  immediately after the inbound call to get the real hCtl.
	
	-or-
	
	- Within the program that calls the DLL, the Visual Basic programmer can modify
	  the declaration, so that parameters that pass a Control use the ByVal
	  keyword.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
