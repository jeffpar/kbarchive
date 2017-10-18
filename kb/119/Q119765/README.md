---
layout: page
title: "Q119765: INFO: Example DDX Routine for Access Memo Fields"
permalink: kb/119/Q119765/
---

## Q119765: INFO: Example DDX Routine for Access Memo Fields

	Article: Q119765
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application, using the ODBC database classes of the Microsoft Foundation
	Classes, can create a CRecordset derived class object which associates a CString
	or a CLongBinary member variable with a memo field within an Access database.
	
	Technote #45, "MFC/Database Support for Long Varchar/Varbinary," available in the
	MFC Tech Notes helpfile in your Visual C++ program group discusses this.
	
	There are some limitations to using a CString object associated with a memo
	field, as opposed to a CLongBinary, though:
	
	1. In the 16-bit versions of the Microsoft Foundation Classes, a CString object
	  can only hold up to 32K of data, while a CLongBinary object can hold much
	  more than 64K if needed.
	
	2. The initial size allocation of the CString buffer is determined by the size
	  of the memo field. Because the memo field isn't a fixed length, the length
	  may be zero for a new record or may be very small in some cases. This can
	  cause problems when using AddNew()/Edit() and Update(). As the user assigns
	  data to the CString, the size of the CString buffer may change and the buffer
	  for the CString will be re-allocated causing an assertion.
	
	3. CStrings terminate with NULL characters and it is possible that memo fields
	  may contain any binary data including NULLs.
	
	There is, however, no explicit DDX routine to read the data from a CLongBinary in
	a recordset and copy it to an edit control, or to read the contents of the edit
	control back into the CLongBinary. (Or a similar control, as 16-bit edit
	controls are limited to 64K.)
	
	This article gives one example of such a DDX routine which reads data from a
	CLongBinary into an edit control and back.
	
	NOTE: A bug exists when using the 16-bit Access ODBC driver which is included
	with Visual C++ 1.52 which does not allow mapping of CLongBinary objects to Memo
	fields. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q130438 BUG: Program Crashes When Memo Field Mapped to ClongBinary
	
	MORE INFORMATION
	================
	
	NOTE: The sample code below must explicitly call SetFieldNull() and
	SetFieldDirty() to set the field as NOT Null and as dirty when reading data from
	the control. Without both of these calls, the field will not be updated in the
	database.
	
	The DDX routine shown, will need to be explicitly called in your CFormView or
	CRecordView derived class's DoDataExchange() member function outside of the
	AFX_DATA_MAP section. For example the following code associates a CRecordset
	member variable CLongBinary m_lbMemo with an edit control with the ID
	IDC_EDIT_MEMO:
	
	     void CSampView::DoDataExchange(CDataExchange* pDX)
	     {
	        CRecordView::DoDataExchange(pDX);
	        //{ {AFX_DATA_MAP(CSampView)
	        DDX_FieldText(pDX, IDC_EDIT_TITLE, m_pSet->m_strTitle, m_pSet);
	        DDX_FieldText(pDX, IDC_EDIT_AREA, m_pSet->m_strArea, m_pSet);
	        //} }AFX_DATA_MAP
	
	        DDX_FieldMemo( pDX, IDC_EDIT_MEMO, m_pSet->m_lbMemo, m_pSet );
	     }
	
	REFERENCES
	==========
	
	MFC Tech Notes (helpfile icon in your Visual C++ program group)
	
	- Tech note #26, "DDX and DDV Routines" has additional information on working
	  with DDX routines.
	
	- Tech note #45, "MFC/Database Support for Long Varchar/Varbinary" has
	  additional information on working with large data, CLongBinary, CByteArray,
	  and CString.
	
	Sample Code
	-----------
	
	     /* Compile options needed:  Default MFC application project options
	     */ 
	
	     void DDX_FieldMemo( CDataExchange * pDX,
	                         int nIDEdit, CLongBinary & lbMemo,
	                         CRecordset * pRecordset )
	     {
	         ASSERT_VALID( pRecordset );
	
	         UINT nLen;
	         HGLOBAL hGlob;
	         LPSTR lpStr;
	         char * pStrWithNull;
	         HWND hWndCtrl = pDX->PrepareEditCtrl(nIDEdit);
	
	         if ( !hWndCtrl )
	         {
	             ASSERT(FALSE);
	             return;
	         }
	
	         if (pDX->m_bSaveAndValidate)
	         {
	             nLen = ::GetWindowTextLength(hWndCtrl);
	
	             if ( nLen )
	             {
	                 hGlob = GlobalAlloc( GPTR | GMEM_SHARE, (DWORD)nLen );
	                 if ( !hGlob )
	                 {
	                     AfxThrowMemoryException();
	                 }
	                 lpStr = (LPSTR)GlobalLock( hGlob );
	                 if ( !lpStr )
	                 {
	                     GlobalFree( hGlob );
	                     AfxThrowMemoryException();
	                 }
	                 // Allocate space for the '\0' string terminator
	                 // Throws exception if needed
	                 pStrWithNull = new char[nLen+1];
	
	                 ::GetWindowText(hWndCtrl, pStrWithNull, nLen+1);
	                 // Cut off the null
	                 #ifndef _WIN32
	                         _fmemcpy( lpStr, pStrWithNull, nLen );
	                 #else
	                     memcpy( lpStr, pStrWithNull, nLen );
	                 #endif
	
	                 delete [] pStrWithNull;
	
	                 GlobalUnlock( hGlob );    // Don't leave it locked.
	             }
	             else // Empty
	             {
	                 nLen = 0;
	                 hGlob = NULL;
	             }
	
	             // Free memory we are replacing
	             GlobalUnlock( lbMemo.m_hData );
	             GlobalFree( lbMemo.m_hData );
	
	             // Put in new data
	             lbMemo.m_dwDataLength = (DWORD) nLen;
	             lbMemo.m_hData = hGlob;
	
	             if (nLen == 0)
	             {
	                 if ( pRecordset->IsFieldNullable(&lbMemo) )
	                     pRecordset->SetFieldNull( &lbMemo, TRUE);
	             }
	             else
	             {
	                 // It is required that we explicitly set it Dirty
	                 // and NOT Null
	                 pRecordset->SetFieldNull( &lbMemo, FALSE );
	                 pRecordset->SetFieldDirty( &lbMemo, TRUE );
	             }
	         }
	         else    // Reading data from recordset into control
	         {
	             nLen = (UINT)lbMemo.m_dwDataLength;
	             if ( nLen )
	             {
	                 lpStr = (LPSTR)GlobalLock( lbMemo.m_hData );
	
	                 // Throws exception if needed
	                 pStrWithNull = new char[nLen+1];
	
	                 #ifndef _WIN32
	                         _fmemcpy( pStrWithNull, lpStr, nLen );
	                 #else
	                     memcpy( pStrWithNull, lpStr, nLen );
	                 #endif
	
	                 pStrWithNull[nLen] = 0;    // Set '\0' at end of string
	
	                 SetWindowText( hWndCtrl, pStrWithNull );
	
	                 delete [] pStrWithNull;
	                 GlobalUnlock( lbMemo.m_hData );
	             }
	             else
	             {
	                 SetWindowText( hWndCtrl, "" );
	             }
	         }
	     }
	
	Additional query words: SQL_LONGVARCHAR SQL_LONGVARBINARY MfcDatabase kbMFC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbVC600
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSODBC 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
