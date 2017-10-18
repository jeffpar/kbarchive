---
layout: page
title: "Q116017: PRB: ClassWizard Doesn't Support Custom Foreign DDX"
permalink: kb/116/Q116017/
---

## Q116017: PRB: ClassWizard Doesn't Support Custom Foreign DDX

	Article: Q116017
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbwizard kbDatabase kbMFC kbVC150 kbVC200 kbVC400 kbClassWizard kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++ 32-bit Edition, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ClassWizard does not allow custom DDX functions for foreign variables.
	
	Custom DDX functions can be implemented by the user and then used by ClassWizard
	in generating code for member variables. The technique for this is described in
	"MFC TechNote 26."
	
	If, however, you have created a custom DDX function that is intended to be used
	to exchange data between a control and a foreign member variable (see "foreign"
	in the online help), ClassWizard will not recognize that your function is
	intended for foreign variables, nor will it let you select your new property or
	type (defined in the "ExtraDDX?" line in the APPSTUDIO.INI file) in conjunction
	with a foreign variable.
	
	CAUSE
	=====
	
	This is a limitation in all versions listed above of Microsoft Visual C++.
	
	RESOLUTION
	==========
	
	To work around this, manually add your custom DDX_Field* call to your
	CRecordView's DoDataExchange() function.
	
	Additional query words: 1.00 1.50 1.51 1.52 2.00 2.10 4.00 DDX_Proc DDXExtra
	
	======================================================================
	Keywords          : kbwizard kbDatabase kbMFC kbVC150 kbVC200 kbVC400 kbClassWizard kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
