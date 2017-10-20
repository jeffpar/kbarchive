---
layout: page
title: "Q152695: HOWTO: Catch and Decipher DAO SDK-Based Exceptions"
permalink: /kb/152/Q152695/
---

## Q152695: HOWTO: Catch and Decipher DAO SDK-Based Exceptions

{% raw %}

	Article: Q152695
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2 4.2b 5.0 6.0
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbtshoot kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, included with:
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
	
	SUMMARY
	=======
	
	This article presents sample code for catching and deciphering exceptions that
	can be thrown by the DAO SDK class libraries.
	
	MORE INFORMATION
	================
	
	The following is a sample try/catch loop and helper functions that demonstrate
	how to decipher either a DAO SDK or MFC-based exceptions. The content of these
	exceptions is in part (or fully) dumped by using TRACE().
	
	Sample Code
	-----------
	
	The following code demonstrates a typical try/catch block using C++ Exception
	Handling for catching the DAO SDK CdbException, or one of the MFC exceptions
	that the DAO SDK can also throw.
	
	      CdbDBEngine *pEng = NULL;
	
	      try
	      {
	          // Call DAO SDK code here
	
	          pEng = new CdbDBEngine();
	
	          //... manipulate dbDao objects here ...
	
	      }
	      catch( CdbException e )
	      {
	          AfxDbDaoCatchException( e, pEng );
	      }
	      catch( CException *e )
	      {
	          AfxDbDaoCatchException( e );
	      }
	      catch( ... )
	      {
	          TRACE( "Caught Win32 Exception\n" );
	      }
	
	      if( pEng != NULL )
	          delete pEng;
	
	The implementation of the both over-loaded versions of AfxDbDaoCatchException()
	follows. You can easily expand the MFC implementation to extract more
	information from those MFC Exception classes which have additional data members
	and methods.
	
	  /////////////////////////////////////////////////////////////////// 
	  // 
	  // AfxDbDaoCatchException()
	  // 
	  // Purpose:     Deciphers dbDao (DAO SDK) based exception.
	  // 
	  // Parameters:  e    - Instance of CdbException class.
	  //              pEng - Pointer to DBEngine object (via the CdbDBEngine
	  //                     class).
	  // 
	  // Returns:     n/a
	  // 
	  ////////////////////////////////////////////////////////////////////// 
	
	      void AfxDbDaoCatchException( CdbException &e,
	                                   CdbDBEngine  *pEng )
	      {
	          // Just in case exception handling code throws an exception
	          try
	          {
	              // It's possible that the engine hasn't been instantiated yet
	              if( pEng == NULL )
	              {
	                  TRACE( _T("Caught CdbException attempting "
	                            "to instantiate DBEngine.\n") );
	                  return;
	              }
	
	              // Log results of exception
	              long nMax = pEng->Errors.GetCount();
	
	              TRACE( _T("Caught CdbException, %ld Errors Reported:\n"),
	                     nMax );
	
	              // Traverse through contents of Errors Collection
	              for( long l = 0; l < pEng->Errors.GetCount(); l++ )
	              {
	                  TRACE( _T("\t #%ld -- %s\n"),
	                         pEng->Errors[l].GetNumber(),
	                         pEng->Errors[l].GetDescription() );
	              }
	
	              // Log results of Last OLE Error. This may or may not be
	              // the same as results stored in the Errors collection.
	              // Ignore CdbLastOLEError.GetHelpFile and
	              // CdbLastOLEError.GetHelpContext
	              CdbLastOLEError exError;
	
	              TRACE( _T("\t CdbLastOLEError.Source:       %s\n"),
	                     exError.GetSource()      );
	              TRACE( _T("\t CdbLastOLEError.Description:  %s\n"),
	                     exError.GetDescription() );
	          }
	          catch( CException *e2 )
	          {
	              TRACE( "AfxDbDaoCatchException() "
	                     "caught an exception, but was unable to log it\n" );
	              e2->Delete();
	          }
	          catch(...)
	          {
	              TRACE( "AfxDbDaoCatchException() "
	                     "caught an exception, but was unable to log it\n" );
	          }
	      }
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // AfxDbDaoCatchException()
	  // 
	  // Purpose:     Catchs MFC-based exception.
	  // 
	  //              This code assumes AFXWIN.H and AFXOLE.H have been
	  //              included in STDAFX.H
	  // 
	  // Parameters:  e - Pointer to a class derived from MFC's
	  //                  CException class.
	  // 
	  ////////////////////////////////////////////////////////////////////// 
	     void AfxDbDaoCatchException( CException *e )
	     {
	  // Just in case exception handling code throws an exception
	         try
	         {
	              // Determine name of MFC Exception
	              CString         strName;
	              CRuntimeClass   *pClass;
	
	              pClass = e->GetRuntimeClass();
	
	              ASSERT( pClass != NULL );
	              ASSERT( pClass->m_lpszClassName != NULL );
	
	              TRACE( _T("Caught MFC Exception of Class: %s\n"),
	                     pClass->m_lpszClassName );
	
	              // Log additional information about error (if supported)
	              // Only some derived classes from CException support
	              // GetErrorMessage().
	
	            if( e->IsKindOf(RUNTIME_CLASS(CFileException)
	            || e->IsKindOf(RUNTIME_CLASS(COleException)
	            || e->IsKindOf(RUNTIME_CLASS(COleDispatchException )
	              {
	                  TCHAR   szBuf[256] = _T("");
	                  UINT    nHelpContextId;
	                  BOOL    bRetVal = TRUE;
	
	                  e->GetErrorMessage( szBuf, 256, &nHelpContextId );
	
	                  if( strlen( szBuf ) > 0 )
	                  {
	                      TRACE( _T("\t Error Message = %s\n"), szBuf );
	                  }
	              }
	          }
	          catch( CException *e2 )
	          {
	              TRACE( "AfxDbDaoCatchException() "
	                     "caught an exception, but was unable to log it\n" );
	              e2->Delete();
	          }
	          catch(...)
	          {
	              TRACE( "AfxDbDaoCatchException() "
	                     "caught an exception, but was unable to log it\n" );
	          }
	
	          // Step 3: Delete Exception
	          e->Delete();
	      }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbProgramming kbtshoot kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch
	Version           : 4.0 4.1 4.2 4.2b 5.0 6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
