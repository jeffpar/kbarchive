---
layout: page
title: "Q248019: HOWTO: Prevent Server Busy Dialog Box From Appearing"
permalink: /kb/248/Q248019/
---

## Q248019: HOWTO: Prevent Server Busy Dialog Box From Appearing

{% raw %}

	Article: Q248019
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbCOMt kbDCOM kbMFC kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL kbArchitectur
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you call a method on a COM server from an MFC COM client application and if
	the method takes a long time to process and return back, you won't be able to do
	anything on the client application and the OLE Server Busy dialog box pops up.
	This article explains how you can increase the time-out period of the COM call
	and also shows you how to avoid this dialog box.
	
	MORE INFORMATION
	================
	
	Ensure that the MFC client application is calling AfxOleInit() to initialize
	COM. This is important, because AfxOleInit() also initializes and registers a
	COleMessageFilter data member in the CWinApp. Alternatively, you can create your
	own COleMessageFilter object and register that during the startup.
	
	Use
	
	  AfxOleGetMessageFilter()->SetMessagePendingDelay(nTimeout);
	
	to set the wait period on outgoing COM calls. If the COM call takes longer than
	nTimeout milliseconds, then the MFC Client application displays the OLE Server
	Busy dialog box.
	
	Use,
	
	  AfxOleGetMessageFilter()->EnableNotRespondingDialog(FALSE);
	
	to disable the Not Responding dialog box, which is displayed if a keyboard or
	mouse message is pending during an OLE call and the call has timed out.
	
	Use
	
	  AfxOleGetMessageFilter()->EnableBusyDialog(FALSE);
	
	to disable the busy dialog box from appearing after the COM call times out.
	
	Another way to suppress the server busy dialog box is to use OleInitialize and
	OleUninitialize instead of AfxOleInit in your application.
	
	REFERENCES
	==========
	
	- COleMessageFilter
	
	- COleMessageFilter::SetRetryReply
	
	- COleMessageFilter Class Members
	
	- COM Method Call in WM_PAINT Handler Returns 0x80010005
	
	Additional query words: restrict stops obstructs useless unwanted display IMessageFilter
	
	======================================================================
	Keywords          : kbAutomation kbCOMt kbDCOM kbMFC kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL kbArchitecture kbfaq
	Technology        : kbAudDeveloper kbMFC kbVCNET
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
