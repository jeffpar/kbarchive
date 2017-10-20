---
layout: page
title: "Q153632: INFO: Type of OCX Property in Typelib Should Match Its RetVal"
permalink: /kb/153/Q153632/
---

## Q153632: INFO: Type of OCX Property in Typelib Should Match Its RetVal

{% raw %}

	Article: Q153632
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An ActiveX control can cause an unhandled exception in VB32.exe if the type of
	any of its Properties as specified in its ODL file differs from the actual type
	that the property handler returns.
	
	MORE INFORMATION
	================
	
	For example, this will happen if, in an ActiveX control's type library, a
	property is marked as type String (VT_BSTR), and the Get method for this
	property returns an integer (VT_I4). This is because when Visual Basic calls
	IDispatch::Invoke() to get that property value, the control fills in the Result
	variant parameter of Invoke() with the type VT_I4, but Visual Basic believing it
	is a string (from the Typelib definition), tries to dereference the integer and
	hence the general protection (GP) fault. Visual Basic assumes that the type
	returned by Invoke() will be the same as the type stated in the type library.
	
	This situation can be prevented by fixing the type library of the custom OLE
	control or the property handler for the related property, whichever is wrong.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbActiveX kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
