---
layout: page
title: "Q138692: HOWTO: Configure a Time-Out on a CSocket Operation"
permalink: /kb/138/Q138692/
---

## Q138692: HOWTO: Configure a Time-Out on a CSocket Operation

	Article: Q138692
	Product(s): Microsoft C Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbcode kbnetwork kbAPI kbMFC kbSDKPlatform kbTimer kbVC151 kbVC200 kbVC400 kbWinsock kb
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Foundation Classes (MFC), version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CSocket operations, such as Receive, Send, and Connect, are blocking operations
	in the sense that a call to these functions will not return until it has
	successfully completed or an error on the socket has occurred.
	
	Under some circumstances, the operation might never complete successfully and
	your program will loop forever while waiting for this completion. It might be a
	good idea to programmatically limit the amount of time allowed for the operation
	to complete. This article discusses one way to do it.
	
	MORE INFORMATION
	================
	
	One approach would be to set a timer that fires when the operation has taken too
	long. The key to this approach is in how the timer is handled. Although the
	operation is "blocking," you still have the ability to handle messages that
	arrive. If you set a timer by using SetTimer, then you can look for the WM_TIMER
	message, and abort the operation when it arrives. The primary functions involved
	in this process are:
	
	  The Windows API call:
	
	  ::SetTimer
	
	  The MFC functions:
	
	  CSocket::OnMessagePending
	  CSocket::CancelBlockingCall
	
	For simplicity, this functionality can be encapsulated in your CSocket- derived
	class.
	
	WARNING: Before reading further, note that there is a bug in some versions of MFC
	that will cause problems if you attempt to use a timer and override
	OnMessagePending. This problem is documented in the following Microsoft
	Knowledge Base article:
	
	  Q137632 BUG: OnMessagePending Not Called When a Timer Is Active
	
	This article applies only to versions 1.52, 1.52b, 2.1, and 2.2 of Visual C++. If
	you are using one of these versions of Visual C++, then you will also need to
	implement the workaround that is supplied.
	
	The sample code for a class that provides this time-out capability is included at
	the end of this article. The functions implemented by the class are described in
	the following sections of this article.
	
	BOOL SetTimeOut(UINT uTimeOut)
	------------------------------
	
	This would be called immediately before calling the CSocket function (for
	example, Receive, Send, and Accept). The uTimeOut parameter is specified in
	milliseconds. The following implementation simply sets up the timer. This
	function returns FALSE if the attempt to set the timer failed. See the Windows
	API documentation on the SetTimer function for further details.
	
	BOOL KillTimeOut()
	------------------
	
	This function needs to be called after the completion of the operation that was
	blocking. It removes the timer that was set up with SetTimeOut. It returns FALSE
	if the call to KillTimer failed. See the Windows API documentation on the
	KillTimer function for further details.
	
	BOOL OnMessagePending()
	-----------------------
	
	This is a virtual callback that is called by the CSocket class when it is waiting
	for an operation to complete. It gives you the opportunity to do something with
	incoming messages. This implementation checks for the WM_TIMER message for the
	timer set with the SetTimeOut call. And if it arrives then it invokes the
	CancelBlockingCall function. See the MFC documentation on the OnMessagePending
	and CancelBlockingCall functions for details. Please note that by calling
	CancelBlockingCall, you will cause the operation to fail and GetLastError will
	return WSAEINTR (indicating an interrupted operation).
	
	Here is an example use of this class:
	
	     ...
	     CTimeOutSocket sockServer;
	     CAcceptedSocket sockAccept;
	
	     sockServer.Create(777);
	     sockServer.Listen();
	
	     // Note the following sequence:
	     //  SetTimeOut
	     //  <operation which might block>
	     //  KillTimeOut
	
	     if(!sockServer.SetTimeOut(10000))
	     {
	       ASSERT(FALSE);
	       // Error Handling...for some reason, we could not setup
	       // the timer.
	     }
	
	     if(!sockServer.Accept(sockAccept))
	     {
	       int nError = GetLastError();
	       if(nError==WSAEINTR)
	         AfxMessageBox("No Connections Arrived For 10 Seconds");
	        else
	          ; // Do other error processing.
	     }
	
	     if(!sockServer.KillTimeOut())
	     {
	       ASSERT(FALSE);
	       // Error Handling...for some reason the timer could not
	       // be destroyed...perhaps a memory overwrite has changed
	       // m_nTimerID?
	       // 
	     }
	     ...
	
	Sample Code
	-----------
	
	     // 
	     // HEADER FILE
	     // 
	     class CTimeOutSocket : public CSocket
	     {
	     public:
	       BOOL SetTimeOut(UINT uTimeOut);
	       BOOL KillTimeOut();
	     protected:
	       virtual BOOL OnMessagePending();
	     private:
	       int m_nTimerID;
	     };
	     // 
	     // END OF FILE
	     // 
	
	     // 
	     // IMPLEMENTATION FILE
	     // 
	     BOOL CTimeOutSocket::OnMessagePending()
	     {
	       MSG msg;
	       if(::PeekMessage(&msg, NULL, WM_TIMER, WM_TIMER, PM_NOREMOVE))
	       {
	         if (msg.wParam == (UINT) m_nTimerID)
	         {
	           // Remove the message and call CancelBlockingCall.
	           ::PeekMessage(&msg, NULL, WM_TIMER, WM_TIMER, PM_REMOVE);
	           CancelBlockingCall();
	           return FALSE;  // No need for idle time processing.
	         };
	       };
	
	       return CSocket::OnMessagePending();
	     }
	
	     BOOL CTimeOutSocket::SetTimeOut(UINT uTimeOut)
	     {
	       m_nTimerID = SetTimer(NULL,0,uTimeOut,NULL);
	       return m_nTimerID;
	     }
	
	     BOOL CTimeOutSocket::KillTimeOut()
	     {
	       return KillTimer(NULL,m_nTimerID);
	     }
	
	REFERENCES
	==========
	
	For more information on the SetTimer and KillTimer functions, please see the
	Windows API Help file.
	
	For more information on the CSocket class and its member functions, please see:
	
	  In Visual C++ 2.x - The MFC Help file.
	  In Visual C++ 1.5x - The Mfcext.hlp help file, which can be found on the
	  compact disc in the \Msvc15\Help directory.
	
	Additional query words: timing
	
	======================================================================
	Keywords          : kbcode kbnetwork kbAPI kbMFC kbSDKPlatform kbTimer kbVC151 kbVC200 kbVC400 kbWinsock kbCodeSam kbGrpDSNet 
	Technology        : kbAudDeveloper _IKkbbogus kbMFC
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	
