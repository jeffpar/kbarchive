---
layout: page
title: "Q93915: INFO: MFC Application Idle Processing and Power Consumption"
permalink: /kb/093/Q93915/
---

## Q93915: INFO: MFC Application Idle Processing and Power Consumption

	Article: Q93915
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC100 kbVC150 kbGrpDSMFCATL kbArchitecture
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Foundation Classes (MFC) provide a virtual member function
	CWinApp::OnIdle() to support background or idle-time processing when an
	application is not receiving messages. Because the OnIdle() function uses the
	::PeekMessage() function in Microsoft Windows, it is important to realize how
	using the OnIdle function affects other applications in the Microsoft Windows
	environment and affects power consumption on battery powered machines that run
	Windows.
	
	MORE INFORMATION
	================
	
	The CWinApp class is designed to support a "power-friendly" application while
	allowing the application to perform background processing when it is idle (not
	receiving any messages). A power-friendly application uses the PeekMessage() and
	Yield() functions to perform temporary background tasks. A power-friendly
	PeekMessage() loop exits when background processing is complete because, while
	an application is in a PeekMessage() loop, Windows cannot go idle.
	
	The default CWinApp::OnIdle() function deletes temporary objects and returns the
	value FALSE to indicate that processing is complete and that the application can
	"sleep." The FALSE return value causes the application to exit the
	"PeekMessage() and OnIdle()" loop in the CWinApp::Run() function. As processing
	continues, Run() calls GetMessage() that either retrieves a message from the
	application's message queue, or, in this case, yields control until a message
	becomes available. When all applications in the system yield control, a battery
	powered computer can conserve its power.
	
	Execution continues in the "PeekMessage() and OnIdle()" loop only as long as no
	messages are present in the application's message queue and OnIdle() returns
	TRUE. This allows the system to remain active as long as the application has
	OnIdle() processing to perform. On each iteration of the loop, the Run()
	function increments the lCount parameter before passing it to OnIdle(). OnIdle()
	can use the value of lCount to determine when to return FALSE. Doing so allows
	the application to defer idle-time processing until after the application
	receives additional user input.
	
	When execution returns from PumpMessage(), the value of lCount is reset to zero.
	On page 637 of the Microsoft C/C++ version 7.0 "Class Libraries Reference"
	manual, the documentation for the CWinApp::OnIdle() member function incorrectly
	states that lCount is incremented each time GetMessage() finds the message queue
	to be empty. The statement in the documentation should read as follows:
	
	  lCount
	
	  A counter incremented each time PeekMessage finds the message queue empty.
	  This count is reset to 0 each time a new message is processed. lCount can be
	  used to determine relatively how long the application has been idling without
	  processing a message.
	
	If an application overrides the CWinApp::OnIdle() function, three conditions must
	be met:
	
	- Explicitly call the base class OnIdle() member function or temporary objects
	  are not deleted.
	
	- If an application performs lengthy processing at OnIdle() time, break the
	  processing into small pieces. Doing so enables the PeekMessage() to continue
	  to yield control to other applications and prevents system performance
	  degradation.
	
	- If battery consumption is important, the OnIdle() function must return FALSE
	  at some point, even if idle-time processing remains. The next time the
	  application empties its message queue, OnIdle() can resume background
	  processing where it left off. Use the value of the lCount parameter to
	  determine if the user is interacting with the computer.
	
	Additional query words: 7.00 1.00 1.50 2.50 backproc DeleteTempMap noupdate
	
	======================================================================
	Keywords          : kbMFC kbVC100 kbVC150 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
