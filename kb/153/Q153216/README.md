---
layout: page
title: "Q153216: BUG: GetRowsEx() Incorrectly Handles Null Field Values"
permalink: /kb/153/Q153216/
---

## Q153216: BUG: GetRowsEx() Incorrectly Handles Null Field Values

{% raw %}

	Article: Q153216
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10 4.20
	Operating System(s): 
	Keyword(s): kbDAOsearch
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DAO SDK defines a function called GetRowsEx that is a method of the DAO
	recordset object. This function fails to handle null field values correctly for
	variable-length fields. If a null value exists in a field that is fetched with
	GetRowsEx(), the buffer doesn't get updated. For example, you may find that the
	buffer contains the same value from the previous GetRowsEx() call if you
	specified dbBindSTRING in the DAORSETBINDING struct. Or, if you specified
	dbBindLPSTRING in the DAORSETBINDING struct, you may find that the pointer
	points to incorrect data.
	
	CAUSE
	=====
	
	This a bug with the GetRowsEx() function.
	
	RESOLUTION
	==========
	
	Clear the buffer before calling the GetRowsEx() method. If a null value is
	encountered, the buffer will remain unchanged for the field. Check the buffer
	for whether the value has been modified after the GetRowsEx call. If it hasn't
	changed, the value is null. See the code below for an example of how to handle
	null values.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates how to change the DoGetRowsEx() function
	in the GETROWS DAO SDK sample so that it handles null values. This function is
	very similar to the old one except the fetching size has been changed to two
	records at a time, and the buffer where GetRowsEx() stores the data is cleared
	before each call. Also, a check is performed to see if the data is null and, if
	it is, the function places the text "null" in the output string.
	
	Sample Code
	-----------
	
	  #define FETCH_SIZE 2
	  #define MAX_FIRST_NAME_LENGTH 20
	  // Perform C++ GetRowsEx against the Employee table
	  void CGetRowsDlg::DoGetRowsEx()
	  {
	      LPEMP           pEmpRows = new EMP[FETCH_SIZE];
	      CListBox        *pListBox = (CListBox*)GetDlgItem(IDD_GETROWSLISTEX);
	      CString         strLBRow;
	      TCHAR           szId[16];
	      LONG            lNumRecords;
	      LONG            lCount;
	      TCHAR           pBuf[MAX_EMP_REC * 15]; // allow avg of 15 chars/name
	
	      while (!m_cEmpRecordSet.GetEOF())
	      {
	
	          //Clear values in buffer for variable-length fields
	          for (long lCnt = 0; lCnt < FETCH_SIZE; lCnt++)
	          {
	            _strnset(pEmpRows[lCnt].strFirstName,'\0',
	                MAX_FIRST_NAME_LENGTH);
	            pEmpRows[lCnt].strLastName=NULL;
	          }
	
	         try
	          {
	          lNumRecords = m_cEmpRecordSet.GetRowsEx(pEmpRows, sizeof(EMP),
	                          &Bindings[0], sizeof(Bindings) / 
	                          sizeof(DAORSETBINDING),
	                          pBuf, sizeof(pBuf),
	                          FETCH_SIZE);
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
	          if (pEmpRows[lCount].strLastName!=NULL)
	              strLBRow += pEmpRows[lCount].strLastName;
	          else
	              strLBRow += "null";
	
	          strLBRow += _T(", ");
	          if (pEmpRows[lCount].strFirstName[0]=='\0')
	              strLBRow += "null";
	          else
	              strLBRow += (LPCTSTR) pEmpRows[lCount].strFirstName;
	          pListBox->AddString(strLBRow);
	          }
	
	        if (!m_cEmpRecordSet.GetEOF())
	           m_cEmpRecordSet.MoveNext(); // Need to move to next unread
	                                       // record before fetching the next
	                                       // set of records.
	      }
	
	      delete [] pEmpRows;
	  }
	
	Additional query words: kbVC400bug 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbDAOsearch 
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch
	Version           : 4.00 4.10 4.20
	
	=============================================================================
	

{% endraw %}
