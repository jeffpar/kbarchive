---
layout: page
title: "Q141802: Dynamic Column Binding with MFC ODBC Database Classes"
permalink: kb/141/Q141802/
---

## Q141802: Dynamic Column Binding with MFC ODBC Database Classes

	Article: Q141802
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbSample kbusage kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB kbGrpDSMDAC kbD
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	This is a 32-bit version of the DYNCOL sample.
	
	SUMMARY
	=======
	
	The DYNC32 sample demonstrates how to dynamically determine the number, types,
	and names of each column in a given table and then bind these columns to
	dynamically allocated objects in your CRecordset derived class.
	
	This sample has been updated to work with the new implementation of CRecordset in
	Visual C++ 4.2 while remaining compatible with 4.0 and 4.1.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Dync32.exe
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	DYNC32.EXE contains subdirectories, so you will want to preserve the directory
	structure. After you download it, place it in an empty directory and extract the
	files it contains by using the -d option:
	
	  DYNC32.EXE -d
	
	MORE INFORMATION
	================
	
	DYNC32 follows the basic procedures outlined in the documentation titled,
	"Dynamically Binding Data Columns," found in Database Encyclopedia of the Books
	OnLine. However, DYNC32 has no permanent members, therefore only one list is
	generated that contains information for all the columns in the table. If you
	have a subset of columns that are always present and are therefore member
	variables of the CRecordset derived class, you will need to follow the
	instructions in the article on generating only a list of the columns not already
	bound. DYNC32 only constructs a single list and implements methods for
	performing DoFieldExchange() and DoDataExchange() for this list of dynamically
	allocated objects.
	
	Generating the List
	-------------------
	
	The first thing DYNC32 must do is determine how many columns are in the database,
	and of what type. To do this, the CRecordset-derived object, CDynCol32Set,
	contains a CColumns object to query this information. In CDynCol32Set, the Open
	member function has been overridden so that the column information can be
	retrieved before the base-class CRecordset::Open function is called to open the
	database. After this information has been accessed, a list of CColumnData
	objects is allocated to hold a description of each column in the table, plus a
	pointer to a storage object allocated for that column (to be used in the record
	field exchange routines).
	
	     BOOL CDyncol32Set::Open(UINT nOpenType, LPCSTR lpszSql, DWORD
	  dwOptions)
	     {
	       // use one CDatabase Object so we only prompt once for database Open
	       // ***** allocated in constructor...
	
	       if (! m_pDatabase->Open(NULL, FALSE, FALSE, "ODBC;"))
	         return  FALSE;
	
	       CTables tables(m_pDatabase);
	
	       // prompt for a table to open
	       CTablesDialog tableName(NULL,m_pDatabase);
	       if (IDCANCEL == tableName.DoModal())
	         return FALSE;
	
	       // Specify the table to look at
	       m_pColumns = new CColumns(m_pDatabase);
	       m_pColumns->m_strTableNameParam = tableName.m_strTableNameSelected;
	
	       // Set the database to be the CDynaSet's database if one hasn't
	       // already been set (this should be the case)
	       if (m_pColumns->m_pDatabase == NULL)
	         m_pColumns->m_pDatabase = m_pDatabase;
	
	       // Open the recordset to get the column info
	       if (!m_pColumns->Open(CRecordset::forwardOnly, NULL,
	     CRecordset::readOnly))
	
	         return FALSE;
	
	       // Initialize the number of fields dynamically allocated to CDynaSet
	       m_nFields = 0;
	
	       // Loop until we've seen all the columns
	       while (!m_pColumns->IsEOF())
	       {
	         // Allocate a new CColumnData object for the current column
	         CColumnData *pData = new CColumnData;
	
	         // Store the colmun information
	         pData->m_nDataType = m_pColumns->m_nDataType;
	         pData->m_strColumnName = "[";
	         pData->m_strColumnName += m_pColumns->m_strColumnName;
	         pData->m_strColumnName +="]";
	
	         // Allocate an object of the appropriate type to store
	         // the column data
	         switch(pData->m_nDataType)
	         {
	           case SQL_BIT:
	             pData->m_pData = (void *)new BOOL;
	             break;
	
	           case SQL_TINYINT:
	             pData->m_pData = (void *)new BYTE;
	             break;
	
	           case SQL_SMALLINT:
	             pData->m_pData = (void *)new int;
	             break;
	
	            ...
	
	           default:
	             ASSERT(FALSE);
	         }
	
	         // Add the column descriptor to the list and
	         // increment the number of columns in the
	      CDynaSet
	
	         m_pList.AddTail(pData);
	         m_nFields++;
	
	         // Get the next column's information
	         m_pColumns->MoveNext();
	       }
	
	       // Free the HSTMT used to get the table info
	       RETCODE nRetCode;
	       AFX_SQL_SYNC(::SQLFreeStmt(m_pColumns->m_hstmt, SQL_CLOSE));
	       // Return the base class if we got this far
	       lpszSql = m_pColumns->m_strTableNameParam;
	
	       // we don't need the columns recordset any more
	       delete m_pColumns;
	       return CRecordset::Open(nOpenType, lpszSql, dwOptions);
	     }
	
	Getting the Column Data into the Recordset
	------------------------------------------
	
	Once the CColumnData list has been generated, DoFieldExchange() must be
	overridden to traverse this list and call the appropriate RFX routine for each
	CColumnData's storage object.
	
	     void CDyncol32Set::DoFieldExchange(CFieldExchange* pFX)
	     {
	       // Set the type of exhange; same as AppWizard generated
	       pFX->SetFieldType(CFieldExchange::outputColumn);
	
	       // Get a pointer to the first CColumnData object in the list
	       POSITION rPos = m_pList.GetHeadPosition();
	       CColumnData *pData = (CColumnData *)m_pList.GetNext(rPos);
	
	       // Loop until we've traversed all the columns
	       while (pData)
	       {
	         // Call the appropriate RFX routine for the column's type
	         switch(pData->m_nDataType)
	         {
	           case SQL_BIT:
	             RFX_Bool(pFX, pData->m_strColumnName, *((BOOL *)(pData-
	                                                              >m_pData)));
	             break;
	
	           case SQL_TINYINT:
	             RFX_Byte(pFX, pData->m_strColumnName, *((BYTE *)(pData-
	                                                              >m_pData)));
	             break;
	
	           case SQL_SMALLINT:
	             RFX_Int(pFX, pData->m_strColumnName, *((int *)(pData-
	                                                            >m_pData)));
	             break;
	
	           ...
	
	           default:
	              ASSERT(FALSE);
	         }
	
	         // Set pData to NULL if that was the last column
	         if (rPos)
	           pData = (CColumnData *)m_pList.GetNext(rPos);
	         else
	           pData = NULL;
	       }
	     }
	
	Getting the Recordset Data into the View
	----------------------------------------
	
	After getting the data into the recordset, the last thing to do is to get this
	information into the CRecordView-derived class to be displayed. In the case of
	DYNC32, it simply uses a list control to do a straight dump of the data onto the
	view. In order to do this, the CColumnData list must again be traversed. In the
	following functions, data is populated to the List Control:
	
	     void CDyncol32View::RefreshData()
	     {
	        VARIANT var;
	        CRect rect;
	        LVITEM lvitem;
	        int iActualItem = 0;
	     
	        POSITION rPos ;
	        CString csTemp;
	        CColumnData *pData = NULL;
	     
	        VariantInit(&var);
	        var.vt = VT_ERROR;
	        var.scode = DISP_E_PARAMNOTFOUND;
	     
	        if (!m_pSet->IsOpen())
	           return;
	     
	     
	        // Get pointer to CDynaSet's CColumnData list.
	        CPtrList *pList = &m_pSet->m_pList;
	     
	        m_lstData.GetWindowRect(&rect);
	     
	        rPos = pList->GetHeadPosition();
	        pData = (CColumnData *)pList->GetNext(rPos);
	        // Navigate through the CCOlumnData to get the field names.
	        // Set the columns header text as field names.
	        for(int nCol= 0; nCol < (int)m_pSet->m_nFields;nCol++)
	        {
	           csTemp = pData->m_strColumnName.AllocSysString();
	     
	           m_lstData.InsertColumn(0, csTemp, LVCFMT_LEFT,rect.Width() * 1/3,
	           0);
	     
	           if (rPos)
	              pData = (CColumnData *)pList->GetNext(rPos);
	           else
	              pData = NULL;
	        }
	     
	        // Navigate through the recordset.
	        for (int iItem = 0; m_pSet->IsEOF()  != TRUE < 20; iItem++) // insert
	                                // the items and subitems into the list view.
	        {
	           // Get the first element.
	           rPos = pList->GetHeadPosition();
	           pData = (CColumnData *)pList->GetNext(rPos);
	           // Navigate through the column list
	           // and put the data to the list control.
	           for (int iSubItem = 0; iSubItem < (int)m_pSet->m_nFields;
	     iSubItem++)
	           {
	     
	              lvitem.mask = LVIF_TEXT | (iSubItem == 0? LVIF_IMAGE : 0);
	              lvitem.iItem = (iSubItem == 0)? iItem : iActualItem;
	              lvitem.iSubItem = iSubItem;
	     
	              csTemp = GetData(pData);
	              // calculate the main and sub-item strings
	              // for the current item.
	              (lvitem.pszText) = csTemp.GetBuffer(csTemp.GetLength());
	     
	              if (iSubItem == 0)
	                 iActualItem = m_lstData.InsertItem(&lvitem); // insert new
	                                                              // item.
	              else
	                 m_lstData.SetItem(&lvitem); // modify existing item
	                                             // (the sub-item text).
	     
	              if (rPos)
	                 pData = (CColumnData *)pList->GetNext(rPos);
	              else
	                 pData = NULL;
	           }
	           m_pSet->MoveNext();
	        }
	     
	     }
	     
	     // Function to convert the data in pData to Cstring.
	     CString CDyncol32View::GetData(CColumnData *pData)
	     {
	        CString csTemp;
	        CString strBuffer;
	        CString *pSet;
	     
	        switch(pData->m_nDataType)
	        {
	           case SQL_BIT:
	              strBuffer = *((BOOL *) (pData->m_pData)) ? _T("TRUE") :
	     _T("FALSE");
	              csTemp = strBuffer;
	              break;
	     
	           case SQL_TINYINT:
	              {
	                 char *pBuffer = strBuffer.GetBuffer(32);
	                 _itoa(*((BYTE *)(pData->m_pData)), pBuffer, 10);
	              }
	              strBuffer.ReleaseBuffer();
	              csTemp= strBuffer;
	     
	              break;
	     
	           case SQL_SMALLINT:
	           case SQL_INTEGER:
	              {
	                 char *pBuffer = strBuffer.GetBuffer(32);
	                 _itoa(*((int *)(pData->m_pData)), pBuffer, 10);
	              }
	              strBuffer.ReleaseBuffer();
	              csTemp = strBuffer;
	              break;
	     
	           case SQL_REAL:
	              {
	                 char *pBuffer = strBuffer.GetBuffer(32);
	                 sprintf(pBuffer, "%#f", *((float *) (pData->m_pData)));
	              }
	              strBuffer.ReleaseBuffer();
	              csTemp = strBuffer;
	              break;
	     
	           case SQL_FLOAT:
	           case SQL_DOUBLE:
	              {
	                 char *pBuffer = strBuffer.GetBuffer(32);
	                 sprintf(pBuffer, "%#f", *((double *) (pData->m_pData)));
	              }
	              strBuffer.ReleaseBuffer();
	              csTemp = strBuffer;
	              break;
	     
	           case SQL_DATE:
	           case SQL_TIME:
	           case SQL_TIMESTAMP:
	              strBuffer = ((CTime *)(pData->m_pData))->Format( "%c" );
	              csTemp = strBuffer;
	              break;
	     
	           case SQL_BINARY:
	           case SQL_VARBINARY:
	              csTemp = "Binary Field";
	              break;
	     
	           case SQL_DECIMAL:   // ODBC default xfer type
	           case SQL_NUMERIC:   // ODBC default xfer type
	           case SQL_CHAR:
	           case SQL_VARCHAR:
	               pSet = (CString *)(pData->m_pData);
	               csTemp = *pSet;
	              break;
	     
	           case SQL_LONGVARCHAR:
	           case SQL_LONGVARBINARY:
	              csTemp = "Longvarchar or Longvarbinary";
	              break;
	     
	           default:
	              ASSERT(FALSE);
	        }
	        return csTemp;
	     }
	
	The most fundamental concepts of the sample are contained within the CColumns and
	CColumnData objects. The first allows DYNC32 to determine the name and data type
	for each column in the table. With this information it is able to allocate a
	linked list of CColumnData objects. Each CColumnData object is a descriptor that
	contains the name, type and a pointer to a data object of the correct type. Once
	this list has been constructed, traversal routines must be put in the
	DoFieldExchange() and DoDataExchange() routines to perform the appropriate
	RFX/DDX function with the allocated data object.
	
	Note that the implementation of CRecordset has changed from between version 4.1
	and 4.2. As a result, you will notice that CColumns::Open() and CTables::Open(),
	the two overrides of CRecordset::Open() that are used to directly call ODBC API
	functions, now include conditional code. This code represents the minimum that
	must be done to update the recordsets to 4.2.
	
	The sample code has changed in the functions CTables::Open and CColumns::Open due
	to changes in implementation of CRecordset between VC++ 4.2 and VC++ 5.0. Now it
	has calls to member functions of CRecordset to allocate and cache the field
	information, before calling MoveFirst.
	
	NOTE: This sample uses Grid32.ocx, which is available only in Visual Basic 4.0 or
	higher.
	
	Additional query words: Dync32 kbvc400 kbvc410 kbvc420 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbcode kbfile kbSample kbusage kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	
	=============================================================================
	
