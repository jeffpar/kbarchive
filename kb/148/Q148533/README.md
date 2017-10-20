---
layout: page
title: "Q148533: PRB: No ANSI Notifications from Control Created in OnCreate"
permalink: /kb/148/Q148533/
---

## Q148533: PRB: No ANSI Notifications from Control Created in OnCreate

{% raw %}

	Article: Q148533
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbCtrl kbDlg kbDocView kbMFC KbUIDesign kbUnicode kbVC200 kbVC210 kbVC400 kbVC410 kbWnd
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	No notification messages are received from a common control that is created in
	the OnCreate function (the WM_CREATE handler) of a CFormView or CDialog. Closer
	inspection reveals that notifications are being sent, but they are the UNICODE
	versions of the notifications.
	
	CAUSE
	=====
	
	The common controls send a WM_NOTIFYFORMAT message when they are first created
	to determine if they should send ANSI or UNICODE notifications to the parent
	window.
	
	The default processing of WM_NOTIFYFORMAT for a dialog box returns NFR_UNICODE
	until after the dialog box window has been created. At the point when the
	WM_CREATE message is sent, the dialog box still returns NFR_UNICODE in response
	to a WM_NOTIFYFORMAT message.
	
	A CFormView is really a dialog box, so this is a problem for the CFormView class
	as well as the CDialog class.
	
	RESOLUTION
	==========
	
	Here are two ways to work around this problem:
	
	- Don't create the control in the WM_CREATE handler. If the control is created
	  at a later point, this problem won't occur. For a CDialog- derived class,
	  create the control in the OnInitDialog function. For a CFormView-derived
	  class, create the control in the OnInitialUpdate function.
	
	  -or-
	
	- Handle the WM_NOTIFYFORMAT message in the CDialog- or CFormView-derived class
	  and respond with the NFR_ANSI code. The WM_NOTIFYFORMAT message is not
	  available in ClassWizard, so you'll need to manually enter the ON_MESSAGE
	  macro for the message as follows:
	
	        BEGIN_MESSAGE_MAP(CMyDialog, CDialog)
	            //{{AFX_MSG_MAP(CMyDialog)
	            ... message map entries created by classwizard
	            //}}AFX_MSG_MAP
	            ... other manually created message map entries
	            ON_MESSAGE(WM_NOTIFYFORMAT, OnNotifyFormat) // ADD THIS LINE
	        END_MESSAGE_MAP()
	
	  Add the prototype for this function to the class definition:
	
	        class CMyDialog : public CDialog
	        {
	            ... other class members
	        protected:
	            afx_msg LRESULT OnNotifyFormat(WPARAM wParam,LPARAM lParam);
	        };
	
	  For more information on how to do this, please see the following article in
	  the Microsoft Knowledge Base: ARTICLE-ID: Q99848 TITLE : Use ON_MESSAGE()
	  Macro to Map Less-Common Messages The OnNotifyFormat function should be
	  implemented as follows:
	
	        LRESULT CMyDialog::OnNotifyFormat(WPARAM wParam,LPARAM lParam)
	        {
	          #ifdef _UNICODE
	            return NFR_UNICODE;
	          #else
	            return NFR_ANSI;
	          #endif
	       }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Windows NT. It is not a
	bug in MFC. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: CAnimateCtrl CHeaderCtrl CHotKeyCtrl CImageList CListCtrl CProgressCtrl CRichEditCtrl CSliderCtrl CSpinButtonCtrl CStatusBarCtrl CTabCtrl CToolBarCtrl CToolTipCtrl CTreeCtrl 2.10 2.20 4.00 4.10 3.10 3.20 NF_QUERY NF_REQUERY
	
	======================================================================
	Keywords          : kbCtrl kbDlg kbDocView kbMFC KbUIDesign kbUnicode kbVC200 kbVC210 kbVC400 kbVC410 kbWndwMsg kbGrpDSMFCATL kbDialog 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.1,2.2,4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
