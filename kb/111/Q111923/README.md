---
layout: page
title: "Q111923: HOWTO: Compare a CString to the Empty String"
permalink: /kb/111/Q111923/
---

## Q111923: HOWTO: Compare a CString to the Empty String

	Article: Q111923
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbMFC kbString kbVC kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The correct way to test a CString to see whether it is empty (or not empty) is
	to use the IsEmpty() member function as shown below:
	
	     CString x = "This is a sample CString";
	     if (x.IsEmpty())
	        AfxMessageBox("The CString is EMPTY");
	     else
	        AfxMessageBox("The CString is not EMPTY");
	
	MORE INFORMATION
	================
	
	The CString member function IsEmpty() tests a CString for the empty condition.
	The function returns nonzero if the string has zero length.
	
	If the CString equality operators (==, !=) are used in an attempt to test whether
	a CString is NULL, a general protection (GP) fault may occur. The following code
	fragment demonstrates this:
	
	     CString x = "This is a sample CString";
	     if (x != NULL)  // GP Fault for (x == NULL) condition, as well
	        AfxMessageBox("The CString is not EMPTY");
	     else
	        AfxMessageBox("The CString is EMPTY");
	
	Because x is a CString object, not a pointer, it is inappropriate to compare x to
	a null pointer.
	
	Testing a CString against the empty string, as shown below, is allowed. Because a
	temporary CString object is constructed, this method is less efficient than
	calling IsEmpty():
	
	     CString x = "This is a sample CString";
	     if (x != "")
	        AfxMessageBox("The CString is not EMPTY");
	     else
	        AfxMessageBox("The CString is EMPTY");
	
	Additional query words: CString inequality 2.50 2.51 2.52 3.00 3.10 gpf NULL gp-fault
	
	======================================================================
	Keywords          : kbMFC kbString kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
