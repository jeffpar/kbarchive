---
layout: page
title: "Q147735: FIX: ClassWizard Quits If Class Twice Derived from CRecord"
permalink: /kb/147/Q147735/
---

## Q147735: FIX: ClassWizard Quits If Class Twice Derived from CRecord

	Article: Q147735
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVC400bug kbVC410bug kbVC420fix kbGrpDSTools kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under circumstances similar to the following, ClassWizard may cause an access
	violation:
	
	- You derive a class, CMyRecordset1, from CRecordset using ClassWizard.
	
	- You derive another class, CMyRecordset2, from CRecordset using ClassWizard.
	
	- You replace all occurrences of CRecordset in the .cpp and .h files for
	  CMyRecordset2 with CMyRecordset1
	
	The result is that CRecordset2 will be derived from CRecordset1. When ClassWizard
	is invoked to view CMyRecordset2, an access violation may occur. This problem
	has been verified with both CRecordset and CDaoRecordset.
	
	RESOLUTION
	==========
	
	Leave occurrences of CRecordset in the ClassWizard comments. Particularly, don't
	change:
	
	     //{ {AFX_FIELD(CRecordset2, CRecordset)
	
	to:
	
	     //{ {AFX_FIELD(CRecordset2, CRecordset1)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++, 32-bit
	Edition, version 4.2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC400bug kbVC410bug kbVC420fix kbGrpDSTools kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
