---
layout: page
title: "Q224788: BUG: MFC Active Document Container Hangs When Invoking About Box"
permalink: /kb/224/Q224788/
---

## Q224788: BUG: MFC Active Document Container Hangs When Invoking About Box

	Article: Q224788
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveDocs kbActiveX kbCOMt kbContainer kbLocalSvr kbMFC kbVC600bug kbBug kbGrp
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Invoking the About box of a DocObject, from an MFC DocObject container, can
	cause a deadlock that will cause both container and server to lock up.
	
	DocObject containers display a merged Help menu that contains About box menu
	items for both the DocObject container and the current in-place active DocObject
	server. When a user attempts to invoke the About box of the DocObject server
	from this merged Help menu, the server's About box will be displayed as
	expected. But if the user moves input focus to another window, and then attempts
	to dismiss the server's About box, the About box will become disabled, and both
	the container and server will be hung.
	
	CAUSE
	=====
	
	This deadlock condition is a result of the MFC DocObject container forwarding
	the WM_COMMAND message for the server's About box via the SendMessage API. The
	MFC DocObject container is the first to receive the WM_COMMAND message to invoke
	the About box. When the container receives the message, it needs to forward the
	message to the server, so the server can invoke its About box.
	
	This is done in an undocumented function called
	COleFrameHook::OnPreTranslateMessage. COleFrameHook::OnPreTranslateMessage is
	called by the container's main frame window when the container is currently
	hosting an in-place active embedding or DocObject.
	
	Because SendMessage is synchronous, the MFC DocObject container stops pumping
	messages and waits for the server to completely process the WM_COMMAND message,
	which is what introduces the deadlock condition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	COleFrameHook::OnPreTranslateMessage should call SendNotifyMessage instead of
	SendMessage, to forward the WM_COMMAND message to the DocObject server.
	SendNotifyMessage will post the WM_COMMAND message to the server's message
	queue, when the server is an .exe file, and send it directly, when the server is
	a .dll file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a generic MFC Active Document Container application with the MFC
	  AppWizard.
	
	2. Build and run the application.
	
	3. Insert a Microsoft Word or Microsoft Excel document into the container by
	  using the Insert New Object menu item on the container's Edit menu.
	
	4. Invoke the Word (or Excel) About box from the container's Help menu.
	
	5. While the About box is displayed, click the container's main window, or click
	  a window in another application.
	
	6. Try to dismiss the About box.
	
	Additional query words: Active Document Container
	
	======================================================================
	Keywords          : kbole kbActiveDocs kbActiveX kbCOMt kbContainer kbLocalSvr kbMFC kbVC600bug kbBug kbGrpDSMFCATL kbISS kbbuglist
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
