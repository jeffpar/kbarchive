---
layout: page
title: "Q114980: FIX: Disabled DDX Radio Button Causes Infinite Loop"
permalink: /kb/114/Q114980/
---

## Q114980: FIX: Disabled DDX Radio Button Causes Infinite Loop

	Article: Q114980
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC100 kbVC150 kbDSupport kbGrpDSMFCATLkbbuglist kbfixlist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When DDX_Radio() is used to perform dialog data exchange (DDX) with a group of
	radio buttons, it loops continuously if the first button in the group has been
	disabled (either programmatically or with a resource editor such as App Studio).
	
	CAUSE
	=====
	
	This behavior is a result of the way DDX_Radio() determines when it has
	traversed every control in a group. The handle of the initial control is stored.
	A loop runs, which gets the handle of each successive control in the group with
	::GetNextDlgGroupItem, and terminates when it sees the handle of the first
	control again. Unfortunately the function ::GetNextDlgGroupItem skips disabled
	controls, which is by design. Therefore the handle to the first control is not
	returned from the function (because it is disabled) and therefore the loop does
	not terminate.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Arrange the group so that the first radio button is not disabled when any of
	  the other controls in the group are enabled.
	
	-or-
	
	- Call EnableWindow() to enable the radio button before DDX_Radio() is called
	  [for example, in DoDataExchange()].
	
	-or-
	
	- Write your own DDX_Radio() replacement, as shown in the sample code in the
	  "MORE INFORMATION" section, below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Foundation Classes,
	versions 2.0 and 2.5. This problem was corrected in MFC version 3.0
	
	MORE INFORMATION
	================
	
	One solution is to write your own DDX_Radio() replacement, which uses
	::GetWindow() to iterate through all the controls on the dialog box until it
	encounters one with style "WS_GROUP" or a handle of "NULL". The following sample
	code is a substitute for DDX_Radio():
	
	Sample Code
	-----------
	
	     //  DDX_MyRadio(), which is a modified DDX_Radio().
	     // 
	     void AFXAPI DDX_MyRadio(CDataExchange* pDX, int nIDC, int& value)
	         // must be first in a group of auto radio buttons
	     {
	        HWND hWndCtrl = pDX->PrepareCtrl(nIDC);
	        ASSERT(::GetWindowLong(hWndCtrl, GWL_STYLE) & WS_GROUP);
	        ASSERT(::SendMessage(hWndCtrl, WM_GETDLGCODE, 0, 0L) &
	     DLGC_RADIOBUTTON);
	        if( pDX->m_bSaveAndValidate )
	           value = -1;     // value if none found
	        // walk all children in group
	        int iButton = 0;
	        do
	        {
	           if( ::SendMessage(hWndCtrl, WM_GETDLGCODE, 0, 0L) &
	     DLGC_RADIOBUTTON
	     )
	           {
	           // control in group is a radio button
	              if( pDX->m_bSaveAndValidate )
	              {
	                 if( ::SendMessage(hWndCtrl, BM_GETCHECK, 0, 0L) != 0 )
	                 {
	                    ASSERT(value == -1);    // only set once
	                    value = iButton;
	                 }
	              }
	              else
	              {
	              // select button
	                 ::SendMessage( hWndCtrl, BM_SETCHECK, (iButton == value), 0L
	     );
	              }
	              iButton++;
	           }
	           else
	           {
	              TRACE( "Warning: skipping non-radio button in group.\n" );
	           }
	           hWndCtrl = ::GetWindow( hWndCtrl, GW_HWNDNEXT );
	        } while(hWndCtrl!=NULL &&
	     !(GetWindowLong(hWndCtrl,GWL_STYLE)&WS_GROUP));
	     }
	
	Remember to replace the following lines in your CDialog::DoDataExchange():
	
	        //{ {AFX_DATA_MAP(CMyDialog)
	        DDX_Radio(pDX, IDC_RADIO1, m_iRadio);
	        //} }AFX_DATA_MAP
	
	with:
	
	        //{ {AFX_DATA_MAP(CMyDialog)
	        DDX_MyRadio(pDX, IDC_RADIO1, m_iRadio);
	        //} }AFX_DATA_MAP
	
	Additional query words: 1.00 1.50 2.00 2.10 2.50 hang kbSweptVC600
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC100 kbVC150 kbDSupport kbGrpDSMFCATL kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
