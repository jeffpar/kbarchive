---
layout: page
title: "Q138722: FIX: LoadBarState and SaveBarState Increase .Ini File Size"
permalink: /kb/138/Q138722/
---

## Q138722: FIX: LoadBarState and SaveBarState Increase .Ini File Size

	Article: Q138722
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1
	Operating System(s): 
	Keyword(s): kbcode kbMFC KbUIDesign kbVC kbVC400bug kbVC410bug kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The size of the .ini file associated with an application keeps increasing when
	CFrameWnd::LoadBarState and CFrameWnd::SaveBarState functions are used. The
	docktool sample can be used to reproduce the behavior. Open and close the sample
	application without modifying the toolbars. The .ini file size increases every
	time the application is closed.
	
	CAUSE
	=====
	
	This behavior is due to a bug in one of the helper functions of CControlBar.
	CFrameWnd::LoadBarState calls this function to set the state of a control bar.
	This function adds a trailing NULL element to the internal structure maintaining
	state information, without checking if one is already present.
	CFrameWnd::SaveBarState stores this extra element in the .ini file. The next
	time CFrameWnd::LoadBarState is called, another NULL element is added to the
	state information and the cycle continues.
	
	RESOLUTION
	==========
	
	To prevent the .ini file from growing, remove the extra element from file. This
	can be done after the information has been saved. The "Sample Code to Resolve
	Problem" section in this article shows how to implement this. It reads the
	information stored in the .ini file, strips extra trailing NULL elements, and
	saves the information back to the file. The code uses classes private to MFC,
	and the preprocessor directives ensure that the code is compatible with future
	versions of MFC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in the MFC libraries
	included with Microsoft Visual C++, 32-bit Edition, version 2.2.
	
	MORE INFORMATION
	================
	
	The following code has been placed in the context of the DockTool sample. The
	modified code is between the
	
	  #if _MFC_VER < 0x0320
	  ...
	  #endif
	
	directives. Please note that these directives are essential for the code to be
	compatible with later versions of MFC.
	
	Sample Code to Resolve Problem
	------------------------------
	
	  // mainfrm.cpp : implementation of the CMainFrame class
	  // 
	  #include "stdafx.h"
	  #if _MFC_VER < 0x0320
	  // IMPORTANT : Conditional compilation directives are
	  // necessary to maintain compatibility with future versions of MFC
	  #include <afxpriv.h>
	  #endif
	  ...
	  #if _MFC_VER < 0x0320
	  // IMPORTANT : Conditional compilation directives are
	  // necessary to maintain compatibility with future versions of MFC
	  /////////////////////////////////////////////////////////////////////////// 
	  // 
	  // _AFX_BARINFO - used for docking serialization
	  class _AFX_BARINFO : public CObject
	  {
	  public:
	  // Implementation
	     _AFX_BARINFO();
	  // Attributes
	     UINT m_nBarID;
	     BOOL m_bVisible;
	     BOOL m_bFloating;
	     BOOL m_bHorz;
	     BOOL m_bDockBar;
	     CPoint m_pointPos;
	     CPtrArray m_arrBarID;
	     CControlBar* m_pBar;
	     virtual void Serialize(CArchive& ar);
	     BOOL LoadState(LPCTSTR lpszProfileName, int nIndex);
	     BOOL SaveState(LPCTSTR lpszProfileName, int nIndex);
	  };
	  #endif
	  void CMainFrame::OnClose()
	  {
	     // SaveBarState saves everything but the number of Columns in the
	     // Palette; you need to do that yourself.
	     SaveBarState(_T("General"));
	  #if _MFC_VER < 0x0320
	  // IMPORTANT : Conditional compilation directives are
	  // necessary to maintain compatibility with future versions of MFC
	     CDockState state;
	     state.LoadState(_T("General"));
	        for (int i = 0; i < state.m_arrBarInfo.GetSize(); i++)
	     {
	        _AFX_BARINFO* pInfo = (_AFX_BARINFO*)state.m_arrBarInfo[i];
	        int nSize = pInfo->m_arrBarID.GetSize();
	        while ((nSize!=0) && (pInfo->m_arrBarID[nSize-1]==NULL))
	        {
	           nSize--;
	           pInfo->m_arrBarID.RemoveAt(nSize);
	        }
	        if (nSize)
	           pInfo->m_arrBarID.InsertAt(nSize, (void*)NULL);
	     }
	     state.SaveState(_T("General"));
	  #endif
	
	Additional query words: 2.00 2.10 3.0 3.1 3.00 3.10
	
	======================================================================
	Keywords          : kbcode kbMFC KbUIDesign kbVC kbVC400bug kbVC410bug kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
