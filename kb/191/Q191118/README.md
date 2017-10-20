---
layout: page
title: "Q191118: HOWTO: Create Context-Sensitive HTML Help in an MFC Application"
permalink: /kb/191/Q191118/
---

## Q191118: HOWTO: Create Context-Sensitive HTML Help in an MFC Application

{% raw %}

	Article: Q191118
	Product(s): Microsoft C Compiler
	Version(s): 1.1,1.3,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbVC500 kbVC600 kbHTMLHelp110 kbHTMLHelp130
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft HTML Help, versions 1.3, 1.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create context-sensitive HTML Help in an MFC
	application.
	
	This is actually the second step of a two-part process. Step one describes how to
	prepare a compiled help file for context-sensitive help. For additional
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q189453 HOWTO: Prepare HTML Help Files for Context-Sensitive Help
	
	This article assumes that the MFC Visual C++ application has been set up to use
	HTML Help. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q186907 HOWTO: Set Up Visual C++ to Use the HTML Help API
	
	This article assumes that the project was created using the MFC AppWizard (exe).
	You must select the context-sensitive help option in step 4 for SDI and MDI
	tracks in the MFC AppWizard (exe).
	
	MORE INFORMATION
	================
	
	Perform the following steps in your MFC Visual C++ Application:
	
	1. Add an array of ID pairs to your application to map control IDs to help
	  context IDs. The last pair should be 0's. For example:
	
	        static const DWORD aMenuHelpIDs[] =
	        {
	           ID_FILE_NEW,  IDH_FILE_NEW ,
	           ID_FILE_OPEN, IDH_FILE_OPEN ,
	           ID_FILE_SAVE, IDH_FILE_SAVE ,
	           ID_EDIT_CUT,  IDH_EDIT_CUT,
	           ID_EDIT_COPY, IDH_EDIT_COPY,
	           ID_EDIT_PASTE, IDH_EDIT_PASTE,
	           ID_FILE_PRINT, IDH_FILE_PRINT,
	           ID_APP_ABOUT,  IDH_APP_ABOUT,
	           ID_FILE_PRINT_PREVIEW, IDH_FILE_PRINT_PREVIEW,
	           0,    0
	        };
	
	  In the previous example, each control ID is followed by its corresponding help
	  ID.
	
	2. Underneath the array of ID pairs, declare a variable that will determine the
	  total number of ID pairs. For example:
	
	        // Subtract 1 from the total number of ID pairs to account
	        // for the NULL pair at the end of the array.
	        DWORD numHelpIDs = (sizeof(aMenuHelpIDs)/sizeof(DWORD))/2 - 1
	
	3. Override the CWinApp::Winhelp method to call the HTML Help API instead of
	  WinHelp. For example:
	
	        void CTestApp::WinHelp( DWORD dwData, UINT nCmd )
	        {
	        DWORD i;
	        switch (nCmd)
	        {
	        case HELP_CONTEXT:
	
	           // If it is a help context command, search for the
	           // control ID in the array.
	           for (i= 0; i < numHelpIDs*2; i+=2)
	           {
	             if (aMenuHelpIDs[i] == LOWORD (dwData) )
	             {
	               i++;  // pass the help context id to HTMLHelp
	               HtmlHelp(m_pMainWnd->m_hWnd,"sample.chm",
	                  HH_HELP_CONTEXT,aMenuHelpIDs[i]);
	               return;
	             }
	           }
	
	           // If the control ID cannot be found,
	           // display the default topic.
	           if (i == numHelpIDs*2)
	           HtmlHelp(m_pMainWnd->m_hWnd,"sample.chm",HH_DISPLAY_TOPIC,0);
	           break;
	           }
	        }
	
	  NOTE: In the previous example, Sample.chm must be in the same folder as the
	  MFC application project file because no path is specified.
	
	4. Include a prototype for the WinHelp function as follows:
	
	        virtual void WinHelp( DWORD dwData, UINT nCmd = HELP_CONTEXT );
	
	5. Include a file containing the context-sensitive help ID definitions. The
	  numeric values of these IDs must match the values defined in the [MAP]
	  section of the HTML Help project file. The following is an example of how the
	  context help IDs are defined:
	
	        #define IDH_FILE_NEW   1
	        #define IDH_FILE_OPEN  2
	        #define IDH_FILE_SAVE  3
	        #define IDH_EDIT_CUT   4
	        #define IDH_EDIT_COPY  5
	        #define IDH_EDIT_PASTE 6
	        #define IDH_FILE_PRINT 7
	        #define IDH_APP_ABOUT  8
	        #define IDH_FILE_PRINT_PREVIEW 9
	
	6. Rebuild the project.
	
	F1 help may come up twice, if there is an entry for ID_HELP in the accelerator
	table (as explained in Q139696 BUG: WinHelp Called Twice).
	
	For the "What's this" help, the MFC framework sends a WM_HELPHITTEST message (see
	TN028 for more details) to each window, starting with the window under the mouse
	cursor and moving up the hirearchy. If none of the windows handle this message,
	the CFrameWnd handler for this message returns the general topic-value, which is
	passed on to CWinApp::WinHelp in dwData.
	
	To get "What's this" help to work the way F1 help works (which is how it works in
	Dialogs according to DS_CONTEXTHELP), it is necessary to provide a
	WM_HELPHITTEST handler. A generic one that returns the ID of the child window
	under the cursor could be written as follows (gleaned from
	CControlBar::OnHelpHitTest):
	
	  LRESULT CMyView::OnHelpHitTest(WPARAM, LPARAM lParam)
	  {
	  ASSERT_VALID(this);
	
	  // Find the child window ID under mouse cursor
	  int nID = OnToolHitTest((DWORD)lParam, NULL);
	  if (nID != -1)
	  return HID_BASE_CONTROL+nID;
	
	  nID = GetDlgCtrlID();
	  return nID != 0 ? HID_BASE_CONTROL+nID : 0;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbVC500 kbVC600 kbHTMLHelp110 kbHTMLHelp130 
	Technology        : kbVCsearch kbHTMLHelpSearch kbAudDeveloper kbHTMLHelp110 kbHTMLHelp130 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :1.1,1.3,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
