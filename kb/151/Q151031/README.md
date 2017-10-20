---
layout: page
title: "Q151031: FIX: SetMinHeight Does Not Work Correctly with CStatusBar"
permalink: /kb/151/Q151031/
---

## Q151031: FIX: SetMinHeight Does Not Work Correctly with CStatusBar

{% raw %}

	Article: Q151031
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbui kbMFC kbStatBar KbUIDesign kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the SetMinHeight function to change the height of a CStatusBar object has
	no effect.
	
	CAUSE
	=====
	
	The CStatusBar class maintains the height of the status window control in a
	member variable named m_nMinHeight. The m_nMinHeight variable is not updated
	correctly when the SetMinHeight function is used to change the height of the
	status bar.
	
	RESOLUTION
	==========
	
	You can work around this problem by setting m_nMinHeight to the correct value in
	response to SetMinHeight. This is accomplished by deriving a class from
	CStatusBar and handling the SB_SETMINHEIGHT message. In this handler, call
	Default(), and then set m_nMinHeight to the new height.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	The sample code below illustrates how to work around the problem. Use the
	CMyStatusBar class instead of CStatusBar if you want to change the height of the
	status bar using SetMinHeight function. Be sure to call RecalcLayout on the
	parent of the status bar to see this change in height immediately.
	
	NOTE: The workaround uses the undocumented m_nMinHeight member variable of
	CStatusBar. Hence the code in the workaround may not be compatible with future
	versions of MFC.
	
	Sample Code
	-----------
	
	     // MyStatusBar.h : header file
	     // 
	
	     //////////////////////////////////////////////////////////////////// 
	     // CMyStatusBar window
	
	     #ifndef __MYSTATUSBAR_H__
	     #define __MYSTATUSBAR_H__
	
	     class CMyStatusBar : public CStatusBar
	     {
	     // Construction
	     public:
	          CMyStatusBar() {}
	
	     // Implementation
	     public:
	          virtual ~CMyStatusBar() {}
	
	          // Generated message map functions
	     protected:
	          //{{AFX_MSG(CMyStatusBar)
	          //NOTE-the ClassWizard will add and remove member functions here.
	          //}}AFX_MSG
	
	     #if _MFC_VER == 0x0400 || _MFC_VER == 0x0410 || _MFC_VER == 0x420 ||\ 
	     _MFC_VER == 0x421
	
	           afx_msg LRESULT OnSetMinHeight(WPARAM wParam, LPARAM);
	     #endif
	
	          DECLARE_MESSAGE_MAP()
	     };
	
	     #endif //__MYSTATUSBAR_H__
	
	     //////////////////////////////////////////////////////////////////// 
	
	     // MyStatusBar.cpp : implementation file
	     // 
	
	     #include "stdafx.h"
	     #include "MyStatusBar.h"
	
	     #ifdef _DEBUG
	     #define new DEBUG_NEW
	     #undef THIS_FILE
	     static char THIS_FILE[] = __FILE__;
	     #endif
	
	     //////////////////////////////////////////////////////////////////// 
	     // CMyStatusBar
	
	     BEGIN_MESSAGE_MAP(CMyStatusBar, CStatusBar)
	          //{{AFX_MSG_MAP(CMyStatusBar)
	          //NOTE-the ClassWizard will add and remove mapping macros here.
	          //}}AFX_MSG_MAP
	
	     #if _MFC_VER == 0x0400 || _MFC_VER == 0x0410 || _MFC_VER == 0x420 ||\ 
	     _MFC_VER == 0x421
	
	          ON_MESSAGE(SB_SETMINHEIGHT, OnSetMinHeight)
	     #endif
	
	     END_MESSAGE_MAP()
	
	     ///////////////////////////////////////////////////////////////////// 
	     // CMyStatusBar message handlers
	
	     #if _MFC_VER == 0x0400 || _MFC_VER == 0x0410 || _MFC_VER == 0x420 ||\ 
	     _MFC_VER == 0x421
	
	     LRESULT CMyStatusBar::OnSetMinHeight(WPARAM wParam, LPARAM)
	     {
	          LRESULT lResult = Default();
	          m_nMinHeight = wParam;
	          return lResult;
	     }
	     #endif
	
	REFERENCES
	==========
	
	For more information, please see: Visual C++ Books Online, and the Win32 SDK
	documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui kbMFC kbStatBar KbUIDesign kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
