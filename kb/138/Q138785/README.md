---
layout: page
title: "Q138785: DOC: CImageList::DeleteObject Generates a C2039 Error"
permalink: /kb/138/Q138785/
---

## Q138785: DOC: CImageList::DeleteObject Generates a C2039 Error

	Article: Q138785
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.1,2.2
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbImgList kbMFC kbVC200bug kbVC210bug kbVC400fix kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using CImageList::DeleteObject() results in compiler error C2039: 'DeleteObject'
	: is not a member of 'CImageList'.
	
	MORE INFORMATION
	================
	
	The documentation for Visual C++ versions 2.1 and 2.2 lists DeleteObject() as a
	member function of class CImageList. This is not the case. The correct function
	to use is DeleteImageList(). This function is documented in Visual C++ version
	4.x, but it is not documented in version 2.1 or 2.2. Below is the documentation
	for the function CImageList::DeleteImageList:
	
	BOOL DeleteImageList( );
	
	Return Value:
	
	  Nonzero if successful; otherwise 0.
	
	Remarks:
	
	  Call this function to delete an image list.
	
	Additional query words: 2.10 2.20 Alpha MIPS Power PC x86 4.00 4.10
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbImgList kbMFC kbVC200bug kbVC210bug kbVC400fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC220 kbVC210
	Version           : winnt:2.1,2.2
	Solution Type     : kbfix
	
	=============================================================================
	
