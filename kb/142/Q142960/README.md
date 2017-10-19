---
layout: page
title: "Q142960: FIX: CCheckListBox Fails with Style LBS_MULTICOLUMN"
permalink: /kb/142/Q142960/
---

## Q142960: FIX: CCheckListBox Fails with Style LBS_MULTICOLUMN

	Article: Q142960
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbcode kbListBox kbMFC KbUIDesign kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUp
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the CCheckListBox class and specifying a style of LBS_MULTICOLUMN,
	the user will be unable to check or uncheck items that are not displayed in the
	first column.
	
	CAUSE
	=====
	
	The hit-testing that is done in CCheckListBox::OnLButtonDown does not take into
	consideration which column the user is clicking.
	
	RESOLUTION
	==========
	
	Derive a class from CCheckListBox and override OnLButtonDown to do proper
	hit-testing. It will also be necessary to override OnLButtonDblClk and the
	constructor.
	
	Step-by-Step Example
	--------------------
	
	1. Bring up ClassWizard. Use "Add Class" to add a new class called
	  CMyCheckListBox derived from CListBox. In the .h and .cpp files generated for
	  the new class, change all occurrences of CListBox to CCheckListBox.
	
	2. Add a protected member variable of type int called m_nCheckWidth to the new
	  class.
	
	3. Modify the default constructor for CMyCheckListBox to look like this:
	
	      CMyCheckListBox::CMyCheckListBox()
	      {
	          // the following code initializes the member variable
	          // m_nCheckWidth to be the width of a check box.
	
	      CBitmap bitmap;
	      BOOL bWin4 = (BYTE)GetVersion() >= 4;
	      HINSTANCE hInst = bWin4 ? NULL : LoadLibraryA("CTL3D32.DLL");
	      FARPROC pfnProc = (NULL == hInst) ? NULL : GetProcAddress(hInst,
	                                                     (LPCSTR)21);
	
	      if (bWin4 || pfnProc != NULL)
	         VERIFY(bitmap.LoadBitmap(AFX_IDB_CHECKLISTBOX_95));
	      else
	         VERIFY(bitmap.LoadBitmap(AFX_IDB_CHECKLISTBOX_NT));
	
	      BITMAP bm;
	      bitmap.GetObject(sizeof (BITMAP), &bm);
	      m_nCheckWidth = bm.bmWidth / 3;
	
	      if (hInst)
	         FreeLibrary(hInst);
	      }
	
	4. Use ClassWizard to add a handler for WM_LBUTTONDOWN, and implement it as
	  follows:
	
	      void CMyCheckListBox::OnLButtonDown(UINT nFlags, CPoint point)
	      {
	          CRect itemRect;
	          CRect clientRect;
	
	          GetClientRect(clientRect);
	          for(int nIndex = GetTopIndex(); nIndex < GetCount(); nIndex++)
	          {
	              GetItemRect(nIndex, &itemRect);
	              if (!clientRect.PtInRect(itemRect.TopLeft()))
	                  break;
	              if (itemRect.PtInRect(point) && IsEnabled(nIndex))
	              {
	                  if (m_nStyle != BS_CHECKBOX && m_nStyle != BS_3STATE)
	                  {
	                      if (point.x - itemRect.left < m_nCheckWidth + 2)
	                      {
	                          CWnd* pParent = GetParent();
	                          ASSERT_VALID(pParent);
	                          int nModulo = (m_nStyle == BS_AUTO3STATE) ? 3 : 2;
	                          int nCheck = GetCheck(nIndex);
	                          nCheck = (nCheck == nModulo) ? nCheck - 1 : nCheck;
	                          SetCheck(nIndex, (nCheck + 1) % nModulo);
	                          InvalidateCheck(nIndex);
	                          CListBox::OnLButtonDown(nFlags, point);
	                          // Inform of check
	                          pParent->SendMessage(WM_COMMAND,
	                              MAKEWPARAM(GetDlgCtrlID(), CLBN_CHKCHANGE),
	                              (LPARAM)m_hWnd);
	                          return;
	
	                      }
	                  }
	                  else
	                      return; // Swallow LButtons for disabled items
	              }
	          }
	          // call CListBox::OnLButtonDown
	          // DO NOT call CCheckListBox::OnLButtonDown
	          CListBox::OnLButtonDown(nFlags, point);
	      }
	
	5. Use ClassWizard to add a handler for WM_LBUTTONDDBLCLK and just call
	  CMyCheckListBox::OnLButtonDown:
	
	      void CMyCheckListBox::OnLButtonDblClk(UINT nFlags, CPoint point)
	      {
	          OnLButtonDown(nFlags, point);
	      }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++, 32-bit
	Edition, version 4.2.
	
	Additional query words: kbVC400bug 4.00 4.10 vcfixlist420
	
	======================================================================
	Keywords          : kbcode kbListBox kbMFC KbUIDesign kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
