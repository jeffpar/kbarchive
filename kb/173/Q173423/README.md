---
layout: page
title: "Q173423: DOC: IsFieldNull() Does Not Accept NULL"
permalink: /kb/173/Q173423/
---

## Q173423: DOC: IsFieldNull() Does Not Accept NULL

{% raw %}

	Article: Q173423
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2,5.0
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for Visual C++ states the following about the argument for
	CRecordset::IsFieldNull():
	
	  pv A pointer to the field data member whose status you want to check, or NULL
	  to determine if any of the fields are Null.
	
	According to the documentation, you should be able to pass in NULL to determine
	if any of the fields are null.
	
	Beginning with Visual C++ version 4.2, this is not correct. Passing a value of
	NULL will cause an exception to be thrown.
	
	MORE INFORMATION
	================
	
	You can write a function to check whether any fields are null. Here is what the
	function would look like:
	
	     BOOL CYourRecordset::IsAnyFieldNull()
	     {
	        for (DWORD nIndex = 0; nIndex<=m_nFields-1; nIndex++)
	        {
	          if (IsFieldStatusNull(nIndex))
	               return TRUE;
	        }
	        return FALSE;
	     }
	
	Notice that the IsAnyFieldNull() function uses an undocumented function
	IsFieldStatusNull(). This function is in the implementation section of the
	CRecordset class so note that the function may change in future releases of MFC.
	To write code that is not dependent upon undocumented functions, call
	IsFieldNull() for each field member in the recordset instead.
	
	Additional query words: kbDatabase kbMFC kbODBC kbOLDocs kbVC420 kbVC500 kbDSupport kbdse
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:4.2,5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
