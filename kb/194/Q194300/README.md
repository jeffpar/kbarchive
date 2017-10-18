---
layout: page
title: "Q194300: FIX: Asserts When Creating a Dialog Box in an MFC Regular DLL"
permalink: kb/194/Q194300/
---

## Q194300: FIX: Asserts When Creating a Dialog Box in an MFC Regular DLL

	Article: Q194300
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbDLL kbDocView kbVC600bug kbVS600sp3fix kbMFC600bug kbGrpDSMFCATL kbArch
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an MFC EXE SDI/MDI application in the context of a command handler calls an
	exported function in MFC regular DLL, which creates a MFC modal dialog box, the
	following asserts may be triggered:
	
	  ASSERT in wincore.cpp line 884
	  ASSERT in wincore.cpp line 883
	
	If the asserts are ignored, the behavior of the application is normal. The EXE
	and regular DLL must be dynamically linked to MFC.
	
	CAUSE
	=====
	
	When a parent is not explicitly specified for a modal dialog box, MFC in the
	PreModal() call determines the parent with a call to CWnd::GetSafeOwner_(). This
	call returns the routing frame (AfxGetThreadState()->m_pRoutingFrame).
	m_pRoutingFrame is assigned in a command handler. [See CPushRoutingFrame in
	CFrameWnd::OnCmdMsg()].
	
	The routing frame is set in the command handler in the EXE, to a frame window of
	the EXE. Because the thread state is the same in the EXE and the DLL,
	AfxGetThreadState()->m_pRoutingFrame returns the EXE frame window. A
	temporary CWnd is created, in the temporary handle map of the DLL, for the
	routing frame in the CDialog::PreModal() call when calling
	CWnd::FromHandle(::GetActiveWindow()). This assert, in CWnd::AssertValid(), is
	caused by the fact that routing frame does not match the temporary CWnd present
	in the temporary handle map of the regular DLL.
	
	This problem affects all modal windows that are created in a command handler in
	the context of a regular DLL, where CWnd::GetSafeOwner_() is called.
	CWnd::GetSafeOwner_() is called during the creation of modal windows. This
	includes MFC message boxes, OLE property sheets, CDatabase::Connect, dialogs
	boxes, property sheets, and OLE busy dialog boxes. Note that this problem does
	not affect modeless windows because CWnd::GetSafeOwner_() is not called in this
	context.
	
	RESOLUTION
	==========
	
	One workaround is to temporarily set AfxGetThreadState()->m_pRoutingFrame to
	NULL for the duration of the DoModal() call. The following code can be used:
	
	  class tempRoutingFrame {
	
	     CFrameWnd* m_pFrame ;
	
	  public:
	
	     tempRoutingFrame(CFrameWnd * pWnd= NULL)
	     {
	        // Save current value
	        m_pFrame = AfxGetThreadState()->m_pRoutingFrame;
	        // Set to value passed in. NULL by default.
	        AfxGetThreadState()->m_pRoutingFrame = pWnd;
	     }
	     ~tempRoutingFrame()
	     {
	        // Restore m_pRoutingFrame to original value.
	        AfxGetThreadState()->m_pRoutingFrame = m_pFrame;
	     }
	
	  };
	
	  extern "C" void __declspec(dllexport) TestFunction();
	
	  void TestFunction()
	  {
	     AFX_MANAGE_STATE(AfxGetStaticModuleState())
	     #ifdef _DEBUG
	     // Workaround for ASSERT in WINCORE.CPP 884 (CWnd::AssertValid)
	     tempRoutingFrame rframe;
	     #endif
	     CMyDialog dlg;
	     dlg.DoModal();
	  }
	
	Another workaround, in the case of dialog boxes and property sheets, is to
	explicitly set the parent of the dialog box as follows:
	
	  void TestFunction()
	  {
	     AFX_MANAGE_STATE(AfxGetStaticModuleState())
	     CMyDialog dlg(AfxGetMainWnd());
	     dlg.DoModal();
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a regular MFC DLL project using the App Wizard.
	
	2. Create a new dialog box resource with one edit control, and OK and CANCEL
	  buttons.
	
	3. Create a class for the dialog box derived from CDialog. Name this class
	  CMyDialog.
	
	4. Add the following function in mydialog.cpp:
	
	  extern "C" void __declspec(dllexport) TestFunction();
	
	  void TestFunction()
	  {
	     AFX_MANAGE_STATE(AfxGetStaticModuleState());
	     CMyDialog dlg;
	     dlg.DoModal();
	  }
	
	5. Build the DLL.
	
	6. Create a default App Wizard application EXE project.
	
	7. Replace the OnAppAbout function with the following:
	
	  extern "C" void __declspec(dllimport) TestFunction();
	
	  void CMyTestApp::OnAppAbout()
	  {
	     TestFunction();
	  }
	
	8. Add the export library created in step 5 to the project created in step 6.
	
	9. Copy the DLL built in step 5 to the debug folder for the application built in
	  step 6.
	
	10. Build and run.
	
	11. On the Help menu, click About.
	
	RESULTS: ASSERTS in wincore.cpp, lines 883 and 884 are triggered.
	
	REFERENCES
	==========
	
	TN058: MFC Module State Implementation
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike Francis, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbDLL kbDocView kbVC600bug kbVS600sp3fix kbMFC600bug kbGrpDSMFCATL kbArchitecture kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
