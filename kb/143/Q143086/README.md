---
layout: page
title: "Q143086: FIX: CFile::GetFileName() Always Returns CString w/Zero Length"
permalink: /kb/143/Q143086/
---

## Q143086: FIX: CFile::GetFileName() Always Returns CString w/Zero Length

{% raw %}

	Article: Q143086
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbFileIO kbMFC kbString kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you call CFile::GetFileName(), it will return a CString with the correct file
	name. However, if you call GetLength() on the CString, it will return 0.
	
	CAUSE
	=====
	
	The MFC function CFile::GetFileName() writes directly to the CString's character
	pointer. However, it doesn't set the CString's size before returning from this
	function.
	
	RESOLUTION
	==========
	
	Call CString::ReleaseBuffer() after calling CFile::GetFileName().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  void CTestDoc::Serialize(CArchive& ar)
	  {
	     if (ar.IsStoring())
	     {
	        // TODO: add storing code here
	     }
	     else
	     {
	        CFile* fp = ar.GetFile ();
	        ASSERT (fp);
	        CString fname = fp->GetFileName ();
	        // this line is needed to set the size of CString
	        fname.ReleaseBuffer ();
	        int nLength = fname.GetLength();
	     }
	  }
	
	Additional query words: kbVC400bug 4.00 4.10 GetFileName GetLength CFile CString
	
	======================================================================
	Keywords          : kbFileIO kbMFC kbString kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
