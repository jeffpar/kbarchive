---
layout: page
title: "Q114201: PRB: CString::ReleaseBuffer() Does Not Release Extra Memory"
permalink: /kb/114/Q114201/
---

## Q114201: PRB: CString::ReleaseBuffer() Does Not Release Extra Memory

	Article: Q114201
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC kbVC100bug kbVC150bug kbVC200bug kbVC400bug kbVC500fix kbprb kbG
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When CString::ReleaseBuffer is called and the length of the string is less than
	the allocated buffer length, the extra bytes are not released. This just means
	that your program might end up maintaining more memory than absolutely
	necessary. This will not cause a memory leak. All of the memory will be freed
	when the CString object is destroyed.
	
	CAUSE
	=====
	
	The behavior of CString::ReleaseBuffer described above is by design.
	
	RESOLUTION
	==========
	
	Visual C++ 2.0 and later include CString::FreeExtra to release any unused
	memory.
	
	In earlier versions, one way to make the string's buffer length equal to the
	string's data length is to write a function which will free the extra memory.
	The two functions in the sample code section demonstrate two different methods
	of writing this function; either as a member function of a derived CString class
	or as a separate function which accepts a CString parameter type. Note that if
	the member function approach is taken, then the derived class will need to
	override the constructors provided by the CString class in order to have access
	to them.
	
	MORE INFORMATION
	================
	
	By not freeing the extra bytes of memory in ReleaseBuffer, CString provides a
	simple method of growing without having to allocate more memory while keeping
	memory fragmentation to a minimum. For example, calling ReleaseBuffer(20) when
	the string's allocated buffer length is 200 bytes will leave an extra 180 bytes
	free. This way, the only time that a CString object will need to allocate more
	memory is when the data length exceeds the allocated buffer length.
	
	Sample Code
	-----------
	
	- Member function method
	
	  class CMyString : public CString
	  {
	    public:
	      CMyString(const char* psz = NULL) : CString(psz) {}
	      void FreeExMem();
	  };
	
	  void CMyString::FreeExMem()
	  {
	    ASSERT(m_nDataLength<=m_nAllocLength);
	    if(!IsEmpty())
	    {
	      char *tp = new char[m_nDataLength+1];
	      memcpy(tp,m_pchData,m_nDataLength+1);
	      ASSERT(m_pchData[m_nDataLength]=='\0');
	      delete m_pchData;
	      m_pchData = tp;
	      m_nAllocLength = m_nDataLength;
	    }
	    ASSERT(m_pchData!=NULL);
	  }
	
	- Separate Function Method
	
	  void FreeExMem(CString &s)
	  {
	    if(!s.IsEmpty())
	    {
	      char *p = s.GetBuffer(1);
	      char *tp = new char[s.GetLength()+1];
	      memcpy(tp,p,s.GetLength()+1);
	      s.ReleaseBuffer();
	      s.Empty();
	      s = tp;
	      delete tp;
	    }
	  }
	
	Additional query words: 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC kbVC100bug kbVC150bug kbVC200bug kbVC400bug kbVC500fix kbprb kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbprb
	
	=============================================================================
	
