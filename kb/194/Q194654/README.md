---
layout: page
title: "Q194654: PRB: DBGrid Control Not Fully Functional in VC++"
permalink: kb/194/Q194654/
---

## Q194654: PRB: DBGrid Control Not Fully Functional in VC++

	Article: Q194654
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbDatabase kbVC400 kbVC500 kbVC600
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Certain DBGrid methods and properties that function properly when used in
	Microsoft Visual Basic do not work properly when the DBGrid control is inserted
	into a Microsoft Visual C++ project.
	
	CAUSE
	=====
	
	The DBGrid control is designed to work specifically in Microsoft Visual Basic.
	The DBGrid control utilizes functionality only exposed by Visual Basic's OLE
	control container.
	
	RESOLUTION
	==========
	
	The DBGrid control is only fully functional when used inside Microsoft Visual
	Basic. Instead of using the DBGrid control, you can use the Microsoft DataGrid
	Control 6.0 or the Microsoft FlexGrid control--these controls are not dependent
	on Visual Basic for their functionality.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	======================================================================
	Keywords          : kbCtrl kbDatabase kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC32bitSearch kbVCPE500 kbVCPE600 kbVCEE500 kbVCEE600 kbVCLE600
	Version           : WINNT:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
