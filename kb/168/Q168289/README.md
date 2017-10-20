---
layout: page
title: "Q168289: PRB: Toolbar Buttons Not Updated/Painted Correctly in Windows 95"
permalink: /kb/168/Q168289/
---

## Q168289: PRB: Toolbar Buttons Not Updated/Painted Correctly in Windows 95

{% raw %}

	Article: Q168289
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,4.2b,5.0
	Operating System(s): 
	Keyword(s): kbMFC kbToolbar KbUIDesign kbVC400 kbVC410 kbVC420 kbVC500 kbGrpDSMFCATL kbNoUpdate
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1, 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Buttons on a toolbar that were created using CToolBar may not update or paint
	correctly if the buttons have text associated with them. This happens only on
	Windows 95 machines with Internet Explorer 3.x installed.
	
	CAUSE
	=====
	
	This is due to a bug in the ComCtl32.dll (version 4.70) that is installed with
	Internet Explorer 3.x.
	
	RESOLUTION
	==========
	
	To work around this problem, derive a class from CToolBar and override
	DefWindowProc as follows:
	
	     // MyToolBar.h : headerfile
	     class CMyToolBar : public CToolBar
	     {
	     ...
	     protected:
	        virtual LRESULT DefWindowProc(UINT message, WPARAM wParam,
	           LPARAM lParam);
	     ...
	     };
	
	     // MyToolBar.cpp : implementation file
	     #include "stdafx.h"
	     #include "mytoolbar.h"
	     ...
	     LRESULT CMyToolBar::DefWindowProc(UINT message, WPARAM wParam,
	        LPARAM lParam)
	     {
	        // the toolbar common control does not handle these messages well
	        // if the WS_VISIBLE style is not turned on under Windows 95
	        DWORD style = GetStyle();
	        if (message == TB_DELETEBUTTON || message == TB_INSERTBUTTON)
	        {
	           if (!(style & WS_VISIBLE))
	           {
	              ModifyStyle(0,WS_VISIBLE);
	           }
	        }
	        LRESULT lresult = CToolBar::DefWindowProc(message, wParam, lParam);
	        if (message == TB_DELETEBUTTON || message ==TB_INSERTBUTTON)
	        {
	           if (!(style & WS_VISIBLE))
	           {
	              ModifyStyle(WS_VISIBLE,0);
	           }
	        }
	        return lresult;
	     }
	
	You can derive the CToolBar by using ClassWizard to derive from "generic CWnd"
	and changing all CWnd references to CToolBar.
	
	STATUS
	======
	
	Because Microsoft Visual C++, version 6.0 requires Internet Explorer 4.01,
	Service Pack 1, this problem no longer exists in Visual C++, version 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Add the following code to CMainFrame::OnCreate in a Default Appwizard
	Application:
	
	     BOOL CMainFrame::OnCreate(...)
	     {
	        ...
	        m_wndToolBar.SetButtonText(0,"New");
	        m_wndToolBar.SetButtonText(1,"Open");
	        m_wndToolBar.SetButtonText(2,"Save");
	        m_wndToolBar.SetButtonText(4,"Cut");
	        m_wndToolBar.SetButtonText(5,"Copy");
	        m_wndToolBar.SetButtonText(6,"Paste");
	        m_wndToolBar.SetButtonText(8,"Print");
	        m_wndToolBar.SetButtonText(9,"About");
	
	        CRect temp;
	        m_wndToolBar.GetItemRect(0,&temp);
	        m_wndToolBar.SetSizes( CSize(temp.Width(),temp.Height()),
	           CSize(16,15));
	
	        return 0;
	
	     }
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Sridhar S.
	Madhugiri, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC kbToolbar KbUIDesign kbVC400 kbVC410 kbVC420 kbVC500 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,4.2b,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
