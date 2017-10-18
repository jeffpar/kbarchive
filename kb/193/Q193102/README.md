---
layout: page
title: "Q193102: FIX: Assert in Appui1.cpp Line 215 in MFC SDI/MDI Application"
permalink: kb/193/Q193102/
---

## Q193102: FIX: Assert in Appui1.cpp Line 215 in MFC SDI/MDI Application

	Article: Q193102
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbVC kbVC600 kbVS600sp2 kbVS600sp2bug kbVS600sp2fix kbVS600SP1fix kbMFC
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
	
	When you try to display a modal window without explicitly specifying a parent in
	a command handler of an MFC SDI/MDI application, where the frame window is
	destroyed in the command handler before displaying the modal window, you might
	get an assertion in CCmdTarget::GetRoutingFrame_() (Appui1.cpp line: 215) with
	debug builds.
	
	In the release builds of the application, modal windows may behave similar to
	modeless windows. This will also be the case if you update an MFC application
	from Visual C== 5.0 to Visual C++ 6.0 (both versions of Visual C++ use the MFC
	DLL named MFC42.dll).
	
	CAUSE
	=====
	
	Modal windows now use the routing frame data member (m_pRoutingFrame) of the
	thread state to decide on the owner in GetSafeOwner(). The problem is that the
	CFrameWnd set as the thread state's current routing frame is deleted, but the
	thread state is not updated to reflect that fact.
	
	RESOLUTION
	==========
	
	Set the thread state's current routing frame to NULL in the destructor of your
	CFrameWnd derived class that is being destroyed:
	
	  CMyFrameWnd::~CMyFrameWnd()
	     {
	
	        if( AfxGetThreadState()->m_pRoutingFrame == this )
	        {
	           AfxGetThreadState()->m_pRoutingFrame = NULL;
	        }
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in the Visual Studio 6.0
	Service Pack 1.
	
	To obtain this service pack, please see:
	
	  http://msdn.microsoft.com/vstudio/sp/default.asp
	
	For more information on the Visual Studio 6.0 Service Pack 1, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q193009 INFO: Visual Studio 6.0 Service Pack 1 Readme
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The MFC frame windows affected by this problem can be of type CFrameWnd,
	CMDIFrameWnd, CMDIChildWnd, and COleIPFrameWnd.
	
	The MFC modal windows affected are:
	
	- Dialog
	
	- CPropertySheet
	
	- Ole Property Sheet [invoked through [ASCII 150]
	  OleObject::DoVerb(OLEIVERB_PROPERTIES)]
	
	- COleBusyDialog
	
	- Message Box [invoked through AfxMessageBox()]
	
	- MAPI modal window [when calling MAPISendMail()]
	
	- SQL Driver Connection dialog box [when calling SQLDriverConnect()]
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use AppWizard to generate an MFC exe that is an MDI-based application.
	
	2. Use ClassWizard to override OnCloseDocument of the CDocument class generated
	  by AppWizard.
	
	3. Edit the OnCloseDocument member function as shown here:
	
	        void CMyDoc::OnCloseDocument()
	        {
	           CDocument::OnCloseDocument();
	           AfxMessageBox("The Document is Closed");
	        }
	
	4. Build and run the application.
	
	5. On the File menu, click Close.
	
	RESULTS: The following error appears:
	
	  "Debug Assertion Failed! File: Appui1.cpp line: 215".
	
	To correct this problem in the case mentioned above, add the following code in
	the destructor for CChildFrame:
	
	  CChildFrame::~CChildFrame()
	     {
	
	        if( AfxGetThreadState()->m_pRoutingFrame == this )
	        {
	           AfxGetThreadState()->m_pRoutingFrame = NULL;
	        }
	     }
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Bret
	Bentzinger, Microsoft
	
	
	Additional query words: connect MfcDocView
	
	======================================================================
	Keywords          : kbDocView kbMFC kbVC kbVC600 kbVS600sp2 kbVS600sp2bug kbVS600sp2fix kbVS600SP1fix kbMFC600bug kbVC600SP1Fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
