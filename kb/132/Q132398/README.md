---
layout: page
title: "Q132398: HOWTO: Use Bookmarks with the MFC ODBC Database Classes"
permalink: /kb/132/Q132398/
---

## Q132398: HOWTO: Use Bookmarks with the MFC ODBC Database Classes

{% raw %}

	Article: Q132398
	Product(s): Microsoft C Compiler
	Version(s): 1.52,2.1,2.2,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbDatabase kbMFC kbODBC kbVC
	Last Modified: 01-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to use bookmarks (32-bit values that uniquely
	identify a record in a recordset) with the MFC ODBC database classes.
	
	Beginning with version 4.2 of Microsoft Visual C++ the MFC Database classes have
	been updated with a new set of bookmark API's. Please refer to the Visual C++
	online documentation for the CRecordset::SetBookmark and CRecordset::GetBookmark
	functions for more information.
	
	MORE INFORMATION
	================
	
	Some ODBC drivers provide the ability to use bookmarks. ODBC defines a bookmark
	as a 32-bit value that uniquely identifies a record in a recordset. Once this
	bookmark is retrieved for a record, the ODBC cursor can be repositioned to that
	record at some later time by passing the bookmark value to SQLExtendedFetch(),
	an ODBC API.The Microsoft Access version 2.0 ODBC driver is one driver that
	supports bookmarks. For more information about ODBC bookmarks, please see the
	ODBC 2.x Programmer's Reference.
	
	The MFC ODBC database classes do not provide direct support for using bookmarks.
	However, the code listed in this article demonstrates how you can write
	functions for your CRecordset-derived class that do allow you to use bookmarks.
	
	The code was written and tested for the 32-bit MFC ODBC database classes. If you
	are using the 16-bit database classes, the code will be very similar but the
	variables such as m_wRowStatus, m_bUseUpdateSQL, and m_bLongBinaryColumns aren't
	available in 16-bit database classes. Therefore for 16-bit database classes, you
	should remove the code in the MoveToBookmark() function that masks out the data
	truncation warnings when fetching data for a record. You should also define
	m_wRowStatus as a data member of your CRecordset. This variable is already
	defined for CRecordset in the 32-bit classes.
	
	Please keep in mind that when you use the code to move to bookmarks, your
	CRecordset's m_lCurrentRecord data member or GetRecordCount() function may
	return incorrect results. You could add code to save the m_lCurrentRecord along
	with the bookmark value, and then restore that value when you move to a
	bookmark, but this may not be enough. For example, moving to the end of the
	recordset using the MoveLast() function immediately after the recordset is open
	causes the m_lCurrentRecord count to be a negative number, which means that the
	current record number cannot be determined. If you then save this value along
	with the bookmark value, the m_lCurrentRecord value will be reset to the
	undetermined state simply from using the bookmark and restoring the
	m_lCurrentRecord value.
	
	Here is an example of how to use the bookmark code to allow you to retrieve the
	value of a counter (autoincrement) field in Microsoft Access version 2.0, so you
	can save the value for later use within your application. Remember that the
	value for an autoincrement field is created by the ODBC driver when you add a
	record.
	
	The example code moves to a record, gets the bookmark for the record, adds a
	record, calls the MoveLast() funtion to get to the newly added record to
	retrieve the counter field value, and then moves back to the record it came
	from.
	
	NOTE: The code takes advantage of the fact that the Microsoft Access version 2.0
	driver appends new records to the end of a recordset when using a dynaset. Other
	ODBC drivers may not do this.
	
	Code Sample
	-----------
	
	     .
	     .
	     .
	
	     CDatabase db;
	     db.Open("MYDataSourceName",NULL,NULL,"ODBC;",FALSE);
	     CCounterSet rs(&db);
	
	     // Open up dynaset because any records added by a CRecordset using
	     // dynasets are appended to the end of the recordset using
	     // the Microsoft Access 2.0 driver
	     rs.Open(CRecordset::dynaset);
	
	     // move to some record
	     rs.MoveNext();
	
	     BOOKMARK bookmark;
	     rs.GetBookmark(&bookmark);
	
	     // Add record. Counter field of record is given a value by
	     // the ODBC driver
	     rs.AddNew();
	     rs.m_textfield="SomeText";
	     rs.Update();
	
	     // MoveLast to get on record just added
	     rs.MoveLast();
	
	     // retrieve the value of the counter field for the
	     // newly added record here
	
	     // return to the record you were on
	     rs.MoveToBookmark(bookmark);
	     .
	     .
	     .
	
	Bookmark Code
	-------------
	
	  // This code was tested with the MFC ODBC database classes
	  // included with Visual C++ versions 2.1, 2.2 and 4.0, and the Microsoft
	  // Access version 2.0 ODBC driver, which supports bookmarks.
	
	  static const char szRowFetch[] = "State:01S01";
	  static const char szDataTruncated[] = "State:01004";
	
	  void CMyRecordset::OnSetOptions(HSTMT hstmt)
	  {
	     RETCODE nRetCode;
	
	     AFX_SQL_SYNC(::SQLSetStmtOption(hstmt, SQL_USE_BOOKMARKS, SQL_UB_ON));
	
	        if (!Check(nRetCode))
	        {
	           TRACE("Error setting bookmark use\n");
	           ThrowDBException(nRetCode);
	        }
	
	        CRecordset::OnSetOptions(hstmt);
	     }
	
	     void CMyRecordset::GetBookmark(BOOKMARK * lpBookmark)
	     {
	        ASSERT(IsOpen());
	
	        // Can't save bookmark if not on valid record
	        ASSERT(!IsBOF() && !IsEOF() && !IsDeleted());
	
	        RETCODE nRetCode;
	        AFX_SQL_SYNC(::SQLGetStmtOption(m_hstmt, SQL_GET_BOOKMARK,
	                                        (PTR)lpBookmark));
	        if (!Check(nRetCode))
	        {
	           TRACE("GetBookmark error: A forward-only cursor may be"
	                 "causing the error\n");
	           ThrowDBException(nRetCode);
	        }
	     }
	
	     void CMyRecordset::MoveToBookmark(BOOKMARK lBookmark)
	     {
	        ASSERT(IsOpen());
	
	        if (m_nFieldsBound > 0)
	        {
	           // Reset field flags - mark all clean, all non-null
	           memset(m_pbFieldFlags, 0, m_nFields);
	        }
	
	        // Clear any edit mode that was set
	        ReleaseCopyBuffer();
	
	        RETCODE nRetCode;
	        DWORD dwRowsMoved;
	
	        AFX_SQL_ASYNC(this, ::SQLExtendedFetch(m_hstmt,
	                             SQL_FETCH_BOOKMARK, (SDWORD)lBookmark,
	                             &dwRowsMoved, &m_wRowStatus));
	
	        if (nRetCode == SQL_SUCCESS_WITH_INFO)
	        {
	           CDBException e(nRetCode);
	           // Build the error string but don't send nuisance output to
	           // TRACE window
	           e.BuildErrorString(m_pDatabase, m_hstmt, FALSE);
	
	           if (e.m_strStateNativeOrigin.Find(szDataTruncated) >= 0)
	           {
	              // Ignore data truncated warning if binding long binary
	              // columns (may mask non-long binary truncation warnings
	              // or other warnings)
	              if (m_bUseUpdateSQL || !m_bLongBinaryColumns ||
	                  !m_bUpdatable)
	              {
	                 e.Empty();
	                 TRACE0("Error: field data truncated during Open or"
	                   " Requery.\n");
	                 ThrowDBException(AFX_SQL_ERROR_DATA_TRUNCATED);
	              }
	           }
	           else if (e.m_strStateNativeOrigin.Find(szRowFetch) >= 0)
	           {
	              e.Empty();
	              TRACE0("Error: fetching row from server during Open or"
	                     " Requery.\n");
	              ThrowDBException(AFX_SQL_ERROR_ROW_FETCH);
	           }
	        }
	        else
	        {
	           if (!Check(nRetCode))
	           {
	              TRACE0("Error: Move operation failed.\n");
	              ThrowDBException(nRetCode);
	           }
	        }
	
	        Fixups();
	        m_bBOF = FALSE;
	        m_bEOF = FALSE;
	     }
	
	REFERENCES
	==========
	
	For more information, please see the ODBC 2.0 Programmer's Reference in the
	Visual C++ version 2.x Books Online, or the ODBC 2.1 Programmer's Reference in
	the Visual C++ version 4.0 Books Online.
	
	Additional query words: 2.00 1.50 1.51
	
	======================================================================
	Keywords          : kbcode kbProgramming kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.52,2.1,2.2,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
