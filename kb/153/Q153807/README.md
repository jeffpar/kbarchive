---
layout: page
title: "Q153807: PRB: GetRowsEx Re-fetches Last Read Record in Subsequent Calls"
permalink: kb/153/Q153807/
---

## Q153807: PRB: GetRowsEx Re-fetches Last Read Record in Subsequent Calls

	Article: Q153807
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDAOsearch
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, included with:
	   - Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DAO SDK defines a function called GetRowsEx() that is a method of the DAO
	recordset object. Unlike the GetRows() method, the GetRowsEx() method does not
	advance to the next unread record after calling it. Instead, it begins fetching
	with the last record fetched or the current record. For example, if you have 10
	records in a resultset and you are fetching 5 of them at a time using
	GetRowsEx(), you will see that record #5 gets fetched twice, once for each
	GetRowsEx() call. Records 1 through 5 will be fetched in the first call to
	GetRowsEx() and records 5 through 10 will be fetched in the second call to
	GetRowsEx().
	
	RESOLUTION
	==========
	
	Call MoveNext() for the recordset before executing the next call to GetRowsEx().
	The MoveNext() call will make the next unread record the current record.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Modify the DoGetRowsEx() function in GETRDLG.CPP contained in the GETROWS DAO SDK
	sample. Change the code to the following:
	
	   // Perform C++ GetRowsEx against the Employee table
	     void CGetRowsDlg::DoGetRowsEx()
	     {
	         LPEMP           pEmpRows = new EMP[MAX_EMP_REC];
	         CListBox        *pListBox =
	                          (CListBox *)GetDlgItem(IDD_GETROWSLISTEX);
	         CString         strLBRow;
	         TCHAR           szId[16];
	         LONG            lNumRecords;
	         LONG            lCount;
	         TCHAR           pBuf[MAX_EMP_REC * 15];
	
	         //Perform GetRows on Employee table
	         //This GetRows uses a specific C++ structure
	         while (!m_cEmpRecordSet.GetEOF())
	         {
	         try
	             {
	             lNumRecords = m_cEmpRecordSet.GetRowsEx(pEmpRows, sizeof(EMP),
	                   &Bindings[0], sizeof(Bindings) / sizeof(DAORSETBINDING),
	                             pBuf, sizeof(pBuf),
	                             2); // fetch 2 records at a time
	             }
	         catch (CdbException e)
	             {
	          //Differentiate between GetRowsEx Errors and other CdbExceptions
	          // see defines in DAOGETRW.H
	             if( e.m_hr == E_ROWTOOSHORT ||
	                 e.m_hr == E_BADBINDINFO ||
	                 e.m_hr == E_COLUMNUNAVAILABLE )
	                 {
	                 AfxMessageBox(_T("Error in GetRowsEx call."));
	                 }
	             else
	                 {
	                 AfxMessageBox(_T("General CdbException"));
	                 }
	             delete [] pEmpRows;
	             return;
	             }
	
	         //Step through the returned rows
	         for (lCount = 0; lCount < lNumRecords; lCount++)
	             {
	             strLBRow.Empty();
	             wsprintf(szId, _T("%d,  "), pEmpRows[lCount].lEmpId);
	             strLBRow += szId;
	             strLBRow += pEmpRows[lCount].strLastName;
	             strLBRow += _T(", ");
	             strLBRow += (LPCTSTR) pEmpRows[lCount].strFirstName;
	             pListBox->AddString(strLBRow);
	             }
	         }
	         delete [] pEmpRows;
	     }
	
	To fix the code above, add a MoveNext at the end of the 'while' loop.
	
	Additional query words: 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbDAOsearch 
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch
	Version           : winnt:
	
	=============================================================================
	
