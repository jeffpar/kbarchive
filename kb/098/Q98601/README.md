---
layout: page
title: "Q98601: HOWTO: Handle Exceptions That Occur in Exception Processing"
permalink: /kb/098/Q98601/
---

## Q98601: HOWTO: Handle Exceptions That Occur in Exception Processing

{% raw %}

	Article: Q98601
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbExceptHandMFC kbExcep
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Foundation Classes stores a pointer to the current application
	exception in a global variable. If the application causes the exception to be
	thrown while the application is processing another exception, the original
	exception object is deleted. If the application needs to track the original
	exception, then it must store the information in that exception object in a
	separate variable. The application can use this information to throw the
	original exception again to pass the exception to the next exception handling
	block.
	
	MORE INFORMATION
	================
	
	If an application is handling an exception in a CATCH block, and a new exception
	is thrown, the Microsoft Foundation Class (MFC) library deletes the original
	exception. If the CATCH block uses information about the original exception
	after the second exception, or if the CATCH block calls the THROW_LAST macro and
	another exception could occur in the CATCH block, the application should store
	information about the original exception at the beginning of the CATCH block.
	When the application requires information about the original exception, retrieve
	the data from the variables instead of from the exception object. To pass the
	exception to the next exception handling block, call the THROW macro to create a
	new exception instead of using the THROW_LAST macro to use the current
	exception. The following pseudo-code demonstrates this technique:
	
	     TRY
	        {
	        // Start a large TRY block to catch any archive exceptions
	        // that occur while archiving.
	
	        // Start archiving process here.
	
	        TRY
	           {
	           // In this TRY block, perform some action that might
	           // cause a CArchiveException to be thrown.
	
	           if (a recoverable archive error has occurred)
	               AfxThrowArchiveException(CArchiveException::generic);
	           }
	        CATCH(CArchiveException, ArchEx)
	           {
	           // Save information about exception for later.
	           int nCause = ArchEx->m_cause;
	
	           TRY
	              {
	              // To process the CArchiveException, the application
	              // allocates memory and a CMemoryException may occur.
	              }
	           CATCH(CMemoryException, MemEx)
	              {
	              // Process the memory exception.
	              }
	           END_CATCH
	
	           // At this point, the ArchEx object is not valid if the
	           // CMemoryException occurred. Therefore, use the nCause
	           // variable to retrieve information about the exception.
	
	           // Throw the archive exception again. (THROW_LAST does
	           // not produce correct results if CMemoryException occurred.
	           if (need to pass up to next exception block)
	              AfxThrowArchiveException(nCause);
	           }
	        END_CATCH
	
	     CATCH(CArchiveException, ArchEx)
	        {
	        // handle the archive exception
	        }
	     END_CATCH
	
	NOTE: In the versions of MFC included with Visual C++ 32-bit Edition, versions
	2.0 and above, the current exception is stored on a per-thread basis. However,
	the technique described in this article still applies.
	
	Additional query words: nested exceptions
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbExceptHandMFC kbExceptHandling 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
