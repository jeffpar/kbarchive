---
layout: page
title: "Q143429: FIX: Developer Studio Causes an Alignment Fault"
permalink: /kb/143/Q143429/
---

## Q143429: FIX: Developer Studio Causes an Alignment Fault

	Article: Q143429
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): _IK920 kbVC kbVC400bug kbVC410fix kbGrpDSTools
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When two or more OLE Custom Controls are placed in a dialog inside Microsoft
	Developer Studio and that dialog is tested (by pressing CTRL+T), the Developer
	Studio will cause an alignment fault and will be shut down.
	
	RESOLUTION
	==========
	
	The only current workaround is to avoid testing dialogs containing two or more
	OLE Custom Controls inside the Developer Studio. Instead the dialog can be
	tested by instantiating the associated dialog class and calling the DoModal()
	member function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	Additional query words: kbVC400bug 4.00 4.10
	
	======================================================================
	Keywords          : _IK920 kbVC kbVC400bug kbVC410fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
