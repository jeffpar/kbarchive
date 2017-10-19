---
layout: page
title: "Q191355: FIX: ATL Doesn't Call InitCommonControls in ActiveX Control"
permalink: /kb/191/Q191355/
---

## Q191355: FIX: ATL Doesn't Call InitCommonControls in ActiveX Control

	Article: Q191355
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0,2.1
	Operating System(s): 
	Keyword(s): kbwizard kbActiveX kbATL210 kbATL210bug kbCOMt kbCtrlCreate kbVC500bug kbVC600fix kbATL
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ATL ActiveX control based on one of the common controls may not appear in an
	ActiveX control container.
	
	CAUSE
	=====
	
	The ATL Object Wizard doesn't add a call to InitCommonControls() when you insert
	an ActiveX control based on a common control. The call to InitCommonControls()
	is required if you use any of the common controls in your ATL ActiveX control.
	
	NOTE: If you didn't select "Support MFC" in the ATL Object Wizard when creating
	your project, then you must link with Comctl32.lib in order to call
	InitCommonControls(). Otherwise, an LNK2001 linker error may occur when calling
	InitCommonControls().
	
	Among the common controls, the richedit control is an exception. Instead of
	calling InitCommonControls(), you need to do a LoadLibrary() on Riched32.dll.
	
	RESOLUTION
	==========
	
	This problem has been fixed in Visual C++ 6.0. The ATL Object Wizard adds a call
	to InitCommonControls() for you. For richedit controls, you have to call
	LoadLibrary() and FreeLibrary() on Riched32.dll. If you're using Visual C++ 5.0
	or earlier, just add the call to InitCommonControls() before calling Create()
	for the common control. The Wizard usually calls Create() in OnCreate():
	
	     LRESULT OnCreate(UINT uMsg, WPARAM wParam, LPARAM lParam,
	                      BOOL& bHandled)
	     {
	        RECT rc;
	        GetWindowRect(&rc);
	        rc.right -= rc.left;
	        rc.bottom -= rc.top;
	        rc.top = rc.left = 0;
	        ::InitCommonControls();                // ADD THIS LINE
	        m_ctlSysListView32.Create(m_hWnd, rc);
	        return 0;
	     }
	
	For the richedit control, you'll need to load Riched32.dll and unload it:
	
	     BEGIN_MSG_MAP(CRichEdit6)
	        MESSAGE_HANDLER(WM_DESTROY, OnDestroy) // Add this line.
	        // ...
	     END_MSG_MAP()
	
	     HINSTANCE m_hLibRichEdit;                 // Add this line.
	
	     LRESULT OnCreate(UINT uMsg, WPARAM wParam, LPARAM lParam,
	                      BOOL& bHandled)
	     {
	        RECT rc;
	        GetWindowRect(&rc);
	        rc.right -= rc.left;
	        rc.bottom -= rc.top;
	        rc.top = rc.left = 0;
	        m_hLibRichEdit =
	           LoadLibrary(_T("RICHED32.DLL"));    // Add this line.
	        m_ctlRichEdit.Create(m_hWnd, rc);
	        return 0;
	     }
	
	     // Add this function.
	     LRESULT OnDestroy(UINT, WPARAM, LPARAM, BOOL&)
	     {
	        m_ctlRichEdit.DestroyWindow();
	        FreeLibrary(m_hLibRichEdit);
	        return 0;
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Microsoft Visual C++,
	6.0.
	
	MORE INFORMATION
	================
	
	Containers such as ActiveX Control Test Container in MFC 4.2 already call
	InitCommonControls() so this problem does not occur.
	
	Additional query words: ocx RichEdit SysListView32 SysTreeView32 SysAnimate32 SysTabControl32 rich edit listview treeview animate tab tabcontrol tooltip header hotkey image list progress slider spin buttton
	
	======================================================================
	Keywords          : kbwizard kbActiveX kbATL210 kbATL210bug kbCOMt kbCtrlCreate kbVC500bug kbVC600fix kbATL300 kbATL300fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
