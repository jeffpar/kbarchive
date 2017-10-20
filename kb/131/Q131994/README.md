---
layout: page
title: "Q131994: HOWTO: How to Use MFC to Step Through Child Windows of the MDICl"
permalink: /kb/131/Q131994/
---

## Q131994: HOWTO: How to Use MFC to Step Through Child Windows of the MDICl

{% raw %}

	Article: Q131994
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbDocView kbMDI kbMFC kbVC kbGrpDSMFCATL
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can iterate through all the MDI child windows in an MDI application without
	specifically activating them in turn. These CMDIChildWnd objects are managed by
	the MDIClient window, which covers the client area of the main frame window in
	an MDI application. Although this window does not have a corresponding MFC
	object, you can attach it to a CWnd object and use the features of the CWnd
	class to access each of the MDI child windows.
	
	MORE INFORMATION
	================
	
	In MFC, each CMDIChildWnd created by the framework is managed as a child window
	of the MDIClient window. This MDIClient window is a child of the mainframe
	window and fills its client area. For MDI applications, the mainframe window is
	encapsulated by the CMDIFrameWnd class. This class has a public embedded HWND
	member (m_hWndMDIClient), which is the handle to the MDIClient window. For MDI
	applications, AppWizard derives the CMainFrame class from CMDIFrameWnd.
	
	The MDIClient maintains an internal list of child windows. In an MFC application,
	these child windows are either a CMDIChildWnd object or an internal window used
	to display the title of an iconized window. Note that this is an internal list
	controlled by Windows; don't make assumptions about the ordering of children in
	the list after an API function is called.
	
	How to Step Through the MDIClient's Child Window List
	-----------------------------------------------------
	
	1. To access the MDIClient window in MFC, attach a CWnd derived class to
	  m_hWndMDIClient as shown in the sample code. Another option is to subclass
	  the MDIClient discussed in the following article in the Microsoft Knowledge
	  Base:
	
	  Q103786 Changing Window Background Color with Foundation Classes
	
	2. Implement the GetNextMDIChildWnd() function as defined below. This custom
	  member of the CMDIFrameWnd-derived object uses another custom member,
	  m_pWndCurrentChild, to store the current child window between calls.
	
	3. Implement the GetCountCMDIChildWnds() function as defined below. Another
	  custom member of the CMDIFrameWnd-derived object, this function calls
	  GetNextMDIChildWnd() to get the count of CMDIChildWnd objects maintained by
	  the MDIClient.
	
	NOTE: You can derive a class from CMDIChildWnd to customize the behavior of the
	MDI child windows in your application. For example, you can add information to
	further differentiate between the CMDIChildWnd derived classes.
	
	
	Sample Code
	-----------
	
	  //**mainfrm.h***************************************************
	  class CMainFrame : public CMDIFrameWnd
	  {
	  ...
	  public:
	     CWnd  m_wndMDIClient;
	     CWnd* m_pWndCurrentChild;
	     CMDIChildWnd* GetNextMDIChildWnd();
	     int GetCountCMDIChildWnds();
	  ...
	  }
	
	  //**mainfrm.cpp**************************************************
	  CMainFrame::CMainFrame():m_pWndCurrentChild(NULL)
	  {
	    //.................
	  }
	
	  CMainFrame::~CMainFrame()
	  {
	    m_wndMDIClient.Detach();
	    //.................
	  }
	
	  int CMainFrame::OnCreate(LPCREATESTRUCT lpCreateStruct)
	  {
	    if (CMDIFrameWnd::OnCreate(lpCreateStruct) == -1)
	      return -1;
	
	      if (m_wndMDIClient.Attach(m_hWndMDIClient) == 0)
	      {
	          TRACE0("Failed to attach MDIClient.\n");
	          return -1;      // fail to create
	      }
	    //.................
	  }
	
	  //----------------------------------------------------------------
	  // This function finds the CMDIChildWnd in the list of windows
	  // maintained by the application's MDIClient window following the
	  // one pointed to by the member variable m_pWndCurrentChild. If no
	  // further CMDIChildWnds are in the list, NULL is returned.
	  //----------------------------------------------------------------
	
	  CMDIChildWnd* CMainFrame::GetNextMDIChildWnd()
	  {
	     if (!m_pWndCurrentChild)
	       {
	        // Get the first child window.
	        m_pWndCurrentChild = m_wndMDIClient.GetWindow(GW_CHILD);
	       }
	     else
	       {
	        // Get the next child window in the list.
	          m_pWndCurrentChild=
	             (CMDIChildWnd*)m_pWndCurrentChild->GetWindow(GW_HWNDNEXT);
	       }
	
	     if (!m_pWndCurrentChild)
	       {
	        // No child windows exist in the MDIClient,
	        // or you are at the end of the list. This check
	        // will terminate any recursion.
	        return NULL;
	       }
	
	    // Check the kind of window
	      if (!m_pWndCurrentChild->GetWindow(GW_OWNER))
	        {
	          if (m_pWndCurrentChild->
	                             IsKindOf(RUNTIME_CLASS(CMDIChildWnd)))
	            {
	                   // CMDIChildWnd or a derived class.
	                   return (CMDIChildWnd*)m_pWndCurrentChild;
	            }
	          else
	            {
	                   // Window is foreign to the MFC framework.
	                   // Check the next window in the list recursively.
	                   return GetNextMDIChildWnd();
	            }
	        }
	      else
	        {
	            // Title window associated with an iconized child window.
	            // Recurse over the window manager's list of windows.
	            return GetNextMDIChildWnd();
	        }
	  }
	
	  //-----------------------------------------------------------------
	  // This function counts the number of CMDIChildWnd objects
	  // currently maintained by the MDIClient.
	  //-----------------------------------------------------------------
	
	  int CMainFrame::GetCountCMDIChildWnds()
	  {
	   int count = 0;
	
	   CMDIChildWnd* pChild = GetNextMDIChildWnd();
	   while (pChild)
	    {
	      count++;
	      pChild = GetNextMDIChildWnd();
	    }
	   return count;
	  }
	
	Additional query words: kbinf 1.00 1.50 1.10 2.00 2.10 2.50 2.51 2.52 3.10 4.00
	
	======================================================================
	Keywords          : kbDocView kbMDI kbMFC kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
