---
layout: page
title: "Q148848: FIX: &quot;Item not found in this collection&quot; Message Box"
permalink: kb/148/Q148848/
---

## Q148848: FIX: &quot;Item not found in this collection&quot; Message Box

	Article: Q148848
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbsample kbDAOsearch kbDatabase kbMFC kbVC kbGrpDSVCDBkbbuglist kbfixlist
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to add or update a record by using the MFC DAO Database classes,
	message box may appear with this message:
	
	  Item not found in this collection.
	
	CAUSE
	=====
	
	MFC calls put_Collect() a DAO function in CDaoRecordset::SetFieldValue(). This
	function does not expect square brackets to be included as part of the field
	name. The Visual C++ Wizards place square brackets around the field names of
	your recordset by default in the DoFieldExchange() method of your CDaoRecordset.
	This allows the user to have field names that contain spaces.
	
	Earlier versions of DAO allowed square brackets to be passed with the field name
	used in the put_Collect() call. DAO version 3.000.2504, which is installed by
	some programs such as Microsoft Word 7a, does not allow the square brackets. You
	can check the version of DAO on your computer by looking at the version of
	Dao3032.dll. (Press ALT+ENTER in the Program Manager or look at the properties
	of the DLL.)
	
	RESOLUTION
	==========
	
	In Visual C++ 4.1, MFC DAO has been modified so that it removes brackets from
	field names prior to calling into the DAO DLL. Additionally, the Dao3032.dll
	that ships with Visual C++ 4.1 now tolerates brackets in field names.
	
	To work around the problem in Visual C++ 4.0 applications, intercept MFC and
	strip the square brackets before passing the field name to the put_Collect()
	call. To do this, override CDaoRecordset::SetFieldValue(). See the "Code to
	Strip Square Brackets" section in this article for an example.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 4.1.
	
	MORE INFORMATION
	================
	
	Sample Code to Strip Square Brackets
	------------------------------------
	
	     void CYourRecordSet::SetFieldValue(LPCTSTR lpszName,
	         const COleVariant& varValue)
	     {
	         ASSERT_VALID(this);
	         ASSERT(IsOpen());
	         ASSERT(m_pDAORecordset != NULL);
	
	         LPTSTR lpszModifiedName = NULL;
	
	         if (*lpszName == '[')
	         {
	
	             lpszModifiedName = new TCHAR[_tcslen(lpszName) + 1];
	             StripBrackets(lpszName,lpszModifiedName);
	             lpszName=lpszModifiedName;
	         }
	
	         DAO_CHECK(m_pDAORecordset->put_Collect(
	             COleVariant(lpszName, VT_BSTRT), varValue));
	
	         delete lpszModifiedName;
	     }
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbsample kbDAOsearch kbDatabase kbMFC kbVC kbGrpDSVCDB kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
