---
layout: page
title: "Q116491: PRB: ClassWizard Links Only Types with DDX Support"
permalink: /kb/116/Q116491/
---

## Q116491: PRB: ClassWizard Links Only Types with DDX Support

	Article: Q116491
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,1.52,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbClassWizard kbGrpDSTools
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	By default, ClassWizard allows linking the edit controls of combo boxes only to
	member variables that are of type CString.
	
	MORE INFORMATION
	================
	
	By design, ClassWizard allows links only to types for which dynamic data
	exchange (DDX) routines have been provided. Microsoft Foundation Classes (MFC)
	provides a DDX_FieldCBString() function to manage data transfer between the edit
	control of a combo box and a CString member variable, but not between combo
	boxes and other types (for example, there is no DDX_FieldCBInt). This is not a
	problem with ClassWizard; it is simply a matter of providing support for those
	DDX routines that are available.
	
	If a particular routine that you would find useful does not already exist, you
	can create a custom routine. "MFC Technical Note #26" provides instructions on
	how to create custom DDX/DDV routines. Once a custom routine is provided,
	ClassWizard recognizes the type and allows the mapping to be made. This
	additional functionality may be useful when linking the edit controls of combo
	boxes to non-CString fields, such as those found in a database.
	
	Additional query words: kbinf
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbClassWizard kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : :1.5,1.51,1.52,2.0,2.1,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
