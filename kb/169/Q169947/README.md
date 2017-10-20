---
layout: page
title: "Q169947: HOWTO: DDX - DDV for 64-Bit Numbers"
permalink: /kb/169/Q169947/
---

## Q169947: HOWTO: DDX - DDV for 64-Bit Numbers

{% raw %}

	Article: Q169947
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC420 kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
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
	
	DDX - DDV functions in MFC do not directly support the __int64 type. However,
	you can add your own functions to allow 64-bit numbers to be used with Edit
	controls.
	
	MORE INFORMATION
	================
	
	Below is sample code for DDX - DDV routines to handle the __int64 type. This
	code can be easily modified to handle unsigned 64-bit numbers. This code uses
	the TCHAR datatype for text so it works with Unicode or standard character types
	without modification.
	
	Sample Code
	-----------
	
	     // First we have to fix a bug in TCHAR.H.
	     // _ttoi64 is incorrectly defined in TCHAR.H, so we need to undefine it
	     // and redefine it correctly to avoid the compile error when building
	     // and non-Unicode version.
	
	     #ifdef _UNICODE
	       #ifdef  _ttoi64
	         #undef  _ttoi64
	         #define _ttoi64 _wtoi64
	       #endif
	     #else
	       #ifdef  _ttoi64
	         #undef  _ttoi64
	         #define _ttoi64 _atoi64
	       #endif
	     #endif
	
	     //----------------------------------------------------------------------
	     //  Use _ttoi64 and _i64tot to get the data into and out of the
	     //  the member variables. These map to _atoi64 /_wtoi64 and
	     //  _i64toa / _i64tow.
	     // 
	     void DDX_I64Txt( CDataExchange* pDX,
	                      int            nIDC,
	                      __int64&       nValue
	                    )
	     {
	       TCHAR        szBuffer[32];
	       HWND   hWndCtrl = pDX->PrepareEditCtrl(nIDC);
	
	       if (pDX->m_bSaveAndValidate)
	       {                                 // _int64 is 19 characters long
	         *szBuffer = NULL;               // when converted to text.
	         ::GetWindowText( hWndCtrl, szBuffer, 30 );
	         nValue = _ttoi64( szBuffer );
	       }
	       else
	       {
	         _tcscpy( szBuffer, _i64tot( nValue, szBuffer, 10 ) );
	         ::SetWindowText( hWndCtrl, szBuffer );
	       }
	     } // end DDX_I64Txt
	
	                   //--------------------------------------------------------
	  ------------
	     //  Most DDV functions pass nValue by value. We pass a reference
	     //  here so we can set the value to the min or max specified if
	     //  an out-of-range value is passed in.
	     // 
	     void DDV_MinMaxI64( CDataExchange* pDX,
	                         __int64&       nValue,
	                         __int64        nMinVal,
	                         __int64        nMaxVal
	                       )
	     {
	       ASSERT( nMinVal <= nMaxVal);
	       if( !pDX->m_bSaveAndValidate )
	       {
	     TRACE0("Warning: initial dialog data is out of range.\n");
	     return;
	       }
	
	       if( (nValue < nMinVal) || (nValue > nMaxVal) )
	       {
	         TCHAR  szMinStr[32];          // Have to use strings here because
	         TCHAR  szMaxStr[32];          // CString and sprintf formatting
	         TCHAR  szMsgStr[64];          // don't support 64-bit numbers.
	         _i64tot( nMinVal, szMinStr, 10 );
	         _i64tot( nMaxVal, szMaxStr, 10 );
	         _stprintf( szMsgStr, "Enter a value between %s and %s\n",
	                    szMinStr, szMaxStr );
	         AfxMessageBox( szMsgStr, MB_ICONEXCLAMATION );
	                                       // Set the value to something defined
	         (nValue < nMinVal) ? nValue = nMinVal : nValue = nMaxVal;
	
	         pDX->Fail();                  // Restores focus to the
	                                       // offending control and throws
	       }                               // a user exception.
	     } // End DDV_MinMaxI64.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC420 kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
