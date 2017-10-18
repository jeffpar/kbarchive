---
layout: page
title: "Q140599: PRB: MFC DAO Functions Accepting COleVariant Strings May Fail"
permalink: kb/140/Q140599/
---

## Q140599: PRB: MFC DAO Functions Accepting COleVariant Strings May Fail

	Article: Q140599
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2 4.2b 5.0
	Operating System(s): 
	Keyword(s): kbProgramming kbDAOsearch kbDatabase kbMFC kbVC
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MFC DAO Classes contain methods that accept COleVariant arguments. For
	example, CDaoRecordset::Seek(), CDaoRecordset::SetFieldValue(), and
	CDaoRecordset::SetBookMark() accept COleVariant arguments. You may find that
	these functions do not perform correctly if you are building a non-UNICODE build
	of your application and you are assigning a string to a COleVariant and passing
	the variant to one of these methods.
	
	For example, look at the following code, which is shown in MFC Technote #53:
	
	     COleVariant varFieldValue;
	     rs.AddNew();
	     varFieldValue = _T("MSFT");
	     rs.SetFieldValue(_T("Customer_ID"), varFieldValue);
	     varFieldValue = _T("Microsoft");
	     rs.SetFieldValue(_T("Customer_Name"), varFieldValue);
	     rs.Update();
	
	This code causes only the first letters of each string to be copied to the
	database with a non-UNICODE build. In this case, the letter M will be copied to
	both fields.
	
	CAUSE
	=====
	
	MFC creates ANSI DAO objects when building non-UNICODE builds and creates
	UNICODE DAO objects when building UNICODE builds. For example, look at the
	following code in AfxDaoInit():
	
	        GUID guidEngine;
	  #ifdef _UNICODE
	        guidEngine = IID_IDAODBEngineW;
	  #else
	        guidEngine = IID_IDAODBEngine;
	  #endif
	
	The ANSI DAO objects require ANSI BSTRs for any strings that they receive. When
	you initialize a COleVariant object using:
	
	     COleVariant varFieldValue(_T("some string"));
	
	-or-
	
	     COleVariant varFieldValue;
	     varFieldValue = _T("MSFT");
	
	The COleVariant will contain a UNICODE BSTR regardless of whether the build is
	UNICODE or non-UNICODE. This is not what DAO expects.
	
	RESOLUTION
	==========
	
	There are two techniques you can use to initialize the COleVariant properly. If
	you are only concerned about setting the BSTR value of the COleVariant at
	construction time, use this code:
	
	      COleVariant varFieldValue(_T("SomeString"), VT_BSTRT);
	
	The VT_BSTRT constant specifies that the BSTR will be a UNICODE BSTR with a
	UNICODE build and it will be a ANSI BSTR in a non-UNICODE build.
	
	If you need to change the value of the variant often, you may want to create a
	helper function:
	
	      void FillVariant(COleVariant & var, LPCTSTR lpszSrc)
	      {
	          var.vt=VT_BSTR;
	          if (lpszSrc==NULL)
	              var.bstrVal=NULL;
	          else
	          {
	      #ifndef _UNICODE
	          int nLen = lstrlen(lpszSrc);
	          var.bstrVal = SysAllocStringByteLen(lpszSrc, nLen);
	      #else
	          var.bstrVal = SysAllocString(lpszSrc);
	      #endif
	          }
	      }
	
	With Visual C++ 4.2 or higher, COleVariant contains a SetString() function that
	can be used instead of the FillVariant() function above.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: Seek SetFieldValue SetCacheStart SetBookMark SetParamValue
	
	======================================================================
	Keywords          : kbProgramming kbDAOsearch kbDatabase kbMFC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.0 4.1 4.2 4.2b 5.0
	Issue type        : kbprb
	
	=============================================================================
	
