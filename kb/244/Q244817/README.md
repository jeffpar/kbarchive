---
layout: page
title: "Q244817: BUG: IOleControlSite::TransformCoords() Returns S_OK"
permalink: /kb/244/Q244817/
---

## Q244817: BUG: IOleControlSite::TransformCoords() Returns S_OK

	Article: Q244817
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbContainer kbCtrl kbInprocSvr kbVC600bug kbATL300bug kbGrpDSMFCATL
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a client calls IOleControlSite::TransformCoords() on an ATL control container
	that is hosting ActiveX controls, the method returns S_OK but the returned
	values passed to TransformCoords() will be incorrect.
	
	CAUSE
	=====
	
	IOleControlSite::TransformCoords() in ATL has no useful implementation but
	returns S_OK instead of E_NOTIMPL.
	
	RESOLUTION
	==========
	
	This can be worked around by copying the ATLHOST.h to something like
	FIXATLHOST.h in your \ATL\INCLUDE directory and making the change in
	FIXATLHOST.h to the TransformCoords() function. The function should be changed
	such that E_NOTIMPL is returned and not S_OK. Then, in Stdafx.h, comment out
	Atlhost.h and use Fixatlhost.h instead:
	
	   
	  //#include <atlhost.h>
	  #include <fixatlhost.h>
	
	NOTE: This technique will only work in Debug or ReleaseMinDependency builds. It
	will not work in ReleaseMinSize builds as ATL.dll would be used, not the code in
	FixAtlHost.h.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the AppWizard to create an new ATL DLL project. Name the project anything
	  you like.
	
	2. Select the Insert menu and under it, select the New ATL Object menu item.
	
	3. Select the Controls item under Category and select Composite Control under
	  Objects. Click Next
	
	4. Fill in the Short name with whatever you like and click OK.
	
	5. In the resource editor, right-click the dialog box that was just generated
	  and select Insert ActiveX control from the menu.
	
	6. Find the Microsoft Status Bar 6.0 in the list box and click OK.
	
	7. Right-click the status bar and select Properties from the menu. Click on the
	  Panels tab, enter some text in the Text field. Notice the Width is 54.00
	  (dialog units)
	
	8. Right-click the status bar and select Events. On the left side of the dialog
	  box, click the WM_INITDIALOG message. Then click the Add and Edit button.
	
	9. In the WM_INITDIALOG message handler, add following code:
	
	      CComPtr<IStatusBar> pBar;
	      CComPtr<IPanels> pPanels;
	      CComPtr<IPanel> pPanel;
	      float fLeft = 0.0, fWidth = 0.0;
	
	      HRESULT hr = GetDlgControl(IDC_STATUSBAR, IID_IStatusBar, (void **) &pBar);
	      pBar->get_Panels(&pPanels);
	
	      CComVariant v(1);
	      pPanels->get_Item(&v, &pPanel);
	
	  //*************************************************
	      pPanel->get_Left(&fLeft);   //Doesn't work
	      pPanel->get_Width(&fWidth); //Doesn't work
	  //*************************************************
	
	10. Build and test this in any container.
	
	Notice the incorrect values come back from get_Left(), get_Width() when they are
	called.
	
	REFERENCES
	==========
	
	For more information lookup IOleControlSite::TransformCoords in Microsoft
	Developer's Network (MSDN).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbContainer kbCtrl kbInprocSvr kbVC600bug kbATL300bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
