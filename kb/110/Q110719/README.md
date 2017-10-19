---
layout: page
title: "Q110719: PRB: CTime DDX Routine for CRecordView Date Fields"
permalink: /kb/110/Q110719/
---

## Q110719: PRB: CTime DDX Routine for CRecordView Date Fields

	Article: Q110719
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0,1.5,1.51,1.52
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Class, version 1.0, used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Create a Microsoft Foundation Classes (MFC) Open Database Connectivity (ODBC)
	application associated with an ODBC data source which contains a date or time
	field. The generated application's CRecordSet derived class will contain a CTime
	member variable associated with the date/time field through an RFX_Date() call
	in the class's DoFieldExchange() member function.
	
	Edit the dialog box template associated with the CRecordView derived class of the
	application and create a new edit control on the dialog template.
	
	With focus on the edit control, start ClassWizard and then press CTRL+W, choose
	the Member Variables tab, and click "Add Variable," or by just holding the CTRL
	key down and double-clicking the edit control. This will bring you to the Add
	Member Variable dialog box. In this dialog box the Member Variable Name combo
	box will not contain any of the CRecordSet derived class's CTime member
	variables associated with the date/time fields of the data source, and therefore
	no date/time field can be associated with the edit control.
	
	A potential source of errors can be attempting to force a CTime object into an
	edit control using a previously existing DDX_FieldText() function call within
	the CRecordView derived class's DoDataExchange(). For example, calling
	CTime::Format() inside of the call to DDX_FieldText() so that its returned
	CString is passed to DDX_FieldText() can result in one of the following errors:
	
	  Maximum number of characters is 38. Please enter no more than 38 characters.
	
	  Please enter no more than 7 characters.
	
	  General Protection Fault.
	
	  Debug Assertion Failed! File: dbcore.cpp Line: 2325
	
	If a CString returned from CTime::Format() is passed to DDX_FieldText(), make
	sure that a non local member CString variable is set to the return value of
	CTime::Format(). Otherwise the CString returned will be considered temporary and
	will be destroyed when the DoDataExchange() function returns, possibly causing
	the functions accessing it to corrupt memory.
	
	CAUSE
	=====
	
	There is a pre-defined Record Field Exchange (RFX) routine, RFX_DATE(), that can
	read a date from an ODBC data source into a CTime object. However, there is no
	predefined dialog data exchange (DDX) routine for CTime objects. The overloaded
	DDX_FieldText() function does not support CTime objects. This is because a CTime
	object represents both a date and a time of day and there is no simple
	conversion that represents both of these in an edit control.
	
	RESOLUTION
	==========
	
	DDX_FieldText() DDX routines can be written for any data type. These functions
	are overloaded, and new editions of the function can be created to provide the
	same functionality for any data type. This is necessary for an application to
	support the use of date fields.
	
	To support date fields, implement a user-defined DDX routine for CTime objects. A
	call to this function can be included in the CRecordView::DoDataExchange()
	method of your record view class. A sample implementation of such a function is
	included at the end of this article.
	
	More information on DDX routines can be found in the Microsoft Foundation Classes
	Technical Note #26, "DDX and DDV Routines," and in the online documentation for
	the CDataExchange class.
	
	NOTE: DDX_FieldText is for use with CRecordView class derived objects, but the
	following routine can easily be modified for use with CFormView and CDialog
	derived classes.
	
	DISCLAIMER: This sample code is NOT for international aware applications. It is
	meant as an example only, and will only validate dates of the mm/dd/yy format.
	
	Sample Code
	-----------
	
	     /* Compile options needed:  Default AppWizard Foundation Classes
	     options.
	
	     */ 
	
	     /////////////////////////////////////////////////////////////////////// 
	     // Example RecordView Data Exchange
	
	     #include <ctype.h>
	
	     void DDX_FieldText( CDataExchange *pDX, UINT nID, CTime& datevar,
	                   CRecordset *pSet );
	
	     void CMyRecordView::DoDataExchange(CDataExchange* pDX)
	     {
	         CRecordView::DoDataExchange(pDX);
	         //{ {AFX_DATA_MAP(CTranView)
	
	         // ... ( class wizard / app wizard generated code )
	
	         //} }AFX_DATA_MAP
	
	         // Date DDX
	         DDX_FieldText(pDX, IDC_EDIT_TRAN_DATE, m_pSet->m_Database_Date,
	                       m_pSet
	     );
	     }
	
	     /////////////////////////////////////////////////////////////////////// 
	     // Example Date DDX_FieldText function
	
	     void DDX_FieldText( CDataExchange *pDX, UINT nID, CTime& datevar,
	                   CRecordset *pSet )
	     {
	
	         if ( pDX->m_bSaveAndValidate ){CString strDate; pDX->PrepareEditCtrl( nID ); pDX->m_pDlgWnd->GetDlgItem( nID )->GetWindowText( strDate ); int nMonth, nDay, nYear; int nLen = strDate.GetLength();
	
	             // Parse the date string for mm/dd/yy format.
	             BOOL status = FALSE;
	             while ( !status )
	             {
	                 int i = 0;
	                 int nMarker = 0;
	
	                 // Note that sscanf() could be used to read
	                 // these formated strings.
	
	                 // Find first slash.
	                 while( i < nLen && strDate[i++] != '/' );
	                 if ( i == nLen )
	                     break;
	
	                 // Month
	                 nMonth = atoi( strDate.Left( i ) );
	                 if ( nMonth < 1 || nMonth > 12 )
	                     break;
	
	                 // Find next slash.
	                 nMarker = i++;
	                 while( i < nLen && strDate[i++] != '/' );
	                 if ( i == nLen )
	                     break;
	
	                 // Day
	                 nDay = atoi( strDate.Mid( nMarker, i - nMarker ) );
	                 if ( nDay < 1 || nDay > 31 )
	                     break;
	
	                 // Year
	                 if ( nLen - i < 2 || ! isdigit( (int) strDate[i] )
	                      || ! isdigit( (int) strDate[i+1] ) )
	                      break;
	                 nYear = atoi( strDate.Right( nLen - i ) );
	                 nYear += ( nYear < 37 ? 2000 : 1900 );
	                 // Valid years for CTime object
	                 if ( nYear < 1970 || nYear > 2036 )
	                     break;
	
	                 CTime tTemp( nYear, nMonth, nDay, 0, 0, 0 ); datevar = tTemp; status = TRUE;
	             }
	
	             if ( !status ){AfxMessageBox( "Incorrect date field format", MB_OK | MB_ICONEXCLAMATION ); pDX->Fail(); } } else { // NOTE: no internationalization: mm/dd/yy format only.
	
	             CString strDate = datevar.Format( "%m/%d/%y" );
	             pDX->m_pDlgWnd->GetDlgItem( nID )->SetWindowText( strDate ); }
	     }
	
	
	REFERENCES
	==========
	
	Microsoft Foundation Classes Technical Note #26: "DDX and DDV Routines"
	
	Microsoft Foundation Classes Technical Note #43: "RFX Routines"
	
	Documentation for CDataExchange class and Documentation for the
	CRecordView::DoDataExchange() function can be found by querying in the Microsoft
	Visual C++ "Books Online" documentation.
	
	Additional query words: database recordview recordset
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : WINDOWS:1.0,1.5,1.51,1.52
	Issue type        : kbprb
	
	=============================================================================
	
