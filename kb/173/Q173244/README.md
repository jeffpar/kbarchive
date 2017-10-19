---
layout: page
title: "Q173244: FIX: FindIndex Works Incorrectly When nIndex Is Negative"
permalink: /kb/173/Q173244/
---

## Q173244: FIX: FindIndex Works Incorrectly When nIndex Is Negative

	Article: Q173244
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbV
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a value less than 0 is passed to the FindIndex function, the function will
	ASSERT in debug mode and enter an infinite loop in release mode.
	
	CAUSE
	=====
	
	The problem is that an ASSERT statement is used to test for a negative value in
	the FindIndex function instead of an if...then statement that would return NULL
	if the value is negative.
	
	RESOLUTION
	==========
	
	Check the value that is passed to FindIndex to make sure that it is not negative
	before calling the FindIndex function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	The documentation for the FindIndex function in the CList, CStringList,
	CPtrList, and CObList classes states that the return value is NULL if nIndex is
	negative or too large.
	
	In release mode, the program may also generate the following application error:
	
	  
	
	  The instruction at 0x... referenced memory at "0x00000000".
	  
	  The memory could not be "read".
	
	REFERENCES
	==========
	
	See AFXTEMPL.H for CList, LIST_S.cpp for CStringList, LIST_P.cpp for CPtrList,
	and LIST_O.cpp for CObList implementation details. The header file can be found
	in the in the ...\VC\mfc\include directory and the source files can be found in
	the ...\VC\mfc\src directory.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
