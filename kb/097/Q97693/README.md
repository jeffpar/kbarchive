---
layout: page
title: "Q97693: INFO: Dynamic Processing of WM_COMMAND Messages"
permalink: /kb/097/Q97693/
---

## Q97693: INFO: Dynamic Processing of WM_COMMAND Messages

{% raw %}

	Article: Q97693
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbArchitecture
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The message-map mechanism provided by the Microsoft Foundation Classes (MFC) can
	process WM_COMMAND messages for a constant ID. However, in some cases, an
	application needs to process WM_COMMAND messages for an ID that is not known
	until run time. This can occur when an application modifies menus or dynamically
	creates controls at run time. To process these messages, your application must
	override the CCmdTarget::OnCmdMsg() function.
	
	MORE INFORMATION
	================
	
	The Microsoft Foundation Classes provide both the ON_COMMAND() and
	ON_UPDATE_COMMAND_UI() message-map macros to process WM_COMMAND messages. The
	ON_COMMAND() macro dispatches a WM_COMMAND message generated when the user
	selects a user interface object (for example, a control or a menu item). The
	ON_UPDATE_COMMAND_UI() macro updates the status of the user interface object
	that generates the WM_COMMAND message. Each of these macros requires a constant
	for the command ID. If the command ID is not known until run time, the message
	must be processed without using a message map.
	
	The sample code below demonstrates overriding the OnCmdMsg() member function to
	dynamically process messages from a dynamically-created button.
	
	The sample code processes messages for a class derived from CDocument. The
	command ID is stored in the m_MyButtonID member variable. The code calls the
	DoMyButton() member function when the user chooses the button, and calls the
	DoUpdateMyButton() member function when the Microsoft Foundation Classes library
	requests the status of the button.
	
	Sample Code
	-----------
	
	     BOOL CMyDocument::OnCmdMsg(UINT nID, int nCode, void * pExtra,
	                                AFX_CMDHANDLERINFO* pHandlerInfo)
	     {
	        // If pHandlerInfo is NULL, then handle the message
	        if (pHandlerInfo == NULL)
	           {
	           // Filter the commands sent to a button the
	           // ID of which is stored in m_MyButtonID.
	
	           if (nID == m_MyButtonID)
	              {
	              if (nCode == CN_COMMAND)
	                 DoMyButton();      // Handles WM_COMMAND messages
	                                    // sent by the button.
	              else if (nCode == CN_UPDATE_COMMAND_UI)
	                 DoUpdateMyButton((CCmdUI*) pExtra);
	                                    // Update buttons UI.
	              return(TRUE);
	              }
	           }
	
	        // Call the base class version of OnCommand
	        // so the message-map can handle the message.
	        return CDocument::OnCmdMsg(nID, nCode, pExtra, pHandlerInfo);
	     }
	
	REFERENCES
	==========
	
	MFC Technical Note 6: Message Maps.
	MFC Technical Note 21: Command and Message Routing.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDocView kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
