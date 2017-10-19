---
layout: page
title: "Q129944: INFO: Do Not Define Functions in DLLs that Raise an Exception"
permalink: /kb/129/Q129944/
---

## Q129944: INFO: Do Not Define Functions in DLLs that Raise an Exception

	Article: Q129944
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
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
	
	Visual Basic does not provide the capability to return rich error information
	from a DLL.
	
	MkTypLib doesn't support '[retval]' on members of a DLL. This means that you
	can't define 'Functions' in a DLL that also raises an exception. This is a
	restriction in Visual Basic version 4.0.
	
	MORE INFORMATION
	================
	
	Visual Basic version 3.0 allowed DLLs to specify the error string (but not the
	help file or context) via the VBSetErrorMessage call. This call is also
	supported for Visual Basic version 4.0 16-bit DLLs.
	
	Visual Basic version 4.0 supports calling DLL members that return HResults. If an
	error HResult is returned, Visual Basic version 4.0 maps the HResult to an EB
	error if possible and raises an exception with the given EBerr or HResult. If it
	is not possible, Visual Basic uses the HResult as is. The restrictions on this
	solution are:
	
	- mktyplib doesn't support '[retval]' on members of a DLL. This means that
	  users can't define 'Functions' in a DLL that also raises an exception.
	
	- This functionality can only be defined using a TypeLib. It is not possible to
	  define this entry point using a Declare statement. If a programmer were to do
	  it, they would define the return type as being a long, and Visual Basic would
	  not do the appropriate return-type checking to raise an exception for an
	  error.
	
	- No rich error information is provided. The only thing that can be returned is
	  an error number. Visual Basic attempts to map this error number to a known
	  Visual Basic error. If possible, it fills in the description string
	  appropriately. Otherwise, it leaves the error alone, and displays 'OLE
	  Automation Error' as the error string.
	
	NOTE: In the Visual Basic version 3.0 API, 'VBRuntimeError' also allows the DLL
	to specify an error number with Visual Basic version 3.0 providing the error
	string. The difference is that because Visual Basic version 4.0 is built on
	separate components, Visual Basic for Applications in Visual Basic version 4.0
	doesn't know all of the errors that Visual Basic version 3.0 did. That is,
	Visual Basic for Applications doesn't know any of the form-specific errors;
	however, it is not likely that these are used much by DLL writers.
	
	You can provide DLL-like functionality and be able to return exceptions including
	rich-error information by:
	
	- Implementing an OLE object whose members are the exposed functions.
	
	- Tagging the object as an 'AppObject' in the ODL. This tag causes Visual Basic
	  for Applications to promote the object's members to be global functions that
	  look and behave like standard DLL runtime functions.
	
	Because the implementation is an OLE object, exceptions can be returned in the
	same way that exceptions can be returned from any OLE object. The problem with
	this solution is that it costly for the DLL developer because the DLL developer
	has to implement a full-blown OLE Object for this to work.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
