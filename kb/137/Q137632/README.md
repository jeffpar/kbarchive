---
layout: page
title: "Q137632: FIX: OnMessagePending Not Called When a Timer is Active"
permalink: /kb/137/Q137632/
---

## Q137632: FIX: OnMessagePending Not Called When a Timer is Active

{% raw %}

	Article: Q137632
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.1,2.2
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400fix kbWinsock kbGrp
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.52, 1.52b 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An override of CSocket::OnMessagePending is not called for an application that
	has an active timer.
	
	One symptom might be painting problems because the default implementation of
	OnMessagePending is responsible for allowing the processing of WM_PAINT messages
	during blocking CSocket operations.
	
	CAUSE
	=====
	
	The function CSocket::PumpMessages is responsible for the message processing
	during a blocking CSocket operation. It uses its own timer to enable idle-time
	processing to occur periodically.
	
	In this function, the processing of WM_TIMER messages occurs before the
	processing of other messages, except for the socket notification messages
	themselves. When a WM_TIMER message arrives for a different timer, the
	PumpMessages function simply leaves it in the queue. The problem with this is
	that when a WM_TIMER message is found, the processing of other messages does not
	occur.
	
	All messages are being retrieved using PeekMessage(), and because the
	unidentified WM_TIMER message is not removed from the queue, it is the only
	message, other than the socket messages, that are retrieved in subsequent calls
	to PeekMessage.
	
	Because OnMessagePending is only called for non-WM_TIMER messages, and because
	the only message being retrieved by PeekMessage() IS a WM_TIMER message,
	OnMessagePending won't be called for any messages after the first WM_TIMER
	message is received.
	
	RESOLUTION
	==========
	
	For 32-bit MFC (Included with Visual C++ 2.x)
	---------------------------------------------
	
	The resolution entails changing the PumpMessages function so that it always calls
	OnMessagePending. Currently it only calls OnMessagePending when a non- WM_TIMER
	message is received:
	
	1. Override the PumpMessages function in your own CSocket-derived class. Borrow
	  the implementation that already exists. It can be found in this file:
	  \<MSVC Directory>\Mfc\Src\Sockcore.cpp
	
	2. Replace the following code in your own PumpMessages implementation.
	
	  Change this code:
	
	        else if (::PeekMessage(&msg, NULL, 0, 0, PM_NOREMOVE) &&
	                   OnMessagePending())
	        {
	            // allow user-interface updates
	
	  to this code:
	
	        if (::PeekMessage(&msg, NULL, 0, 0, PM_NOREMOVE) &&
	              OnMessagePending())
	        {
	            // allow user-interface updates
	
	3. Include the header file <afxpriv.h> in your CSocket-derived class'
	  implementation file.
	
	4. There is reference to the DELETE_EXCEPTION macro in this function. The
	  DELETE_EXCEPTION macro is used internally by MFC. Delete this line:
	
	     DELETE_EXCEPTION(e);
	
	For 16-bit MFC
	--------------
	
	The default implementation of PumpMessages (in Sockcore.cpp) accesses private MFC
	data structures. Because of this, you cannot easily reimplement this code in
	your application. It might be possible to temporarily remove the timer (set by
	SetTimer) that is causing the problem, but if that is not the case, then the
	simplest workaround would be to rebuild the MFC library with the change shown
	above (changing the 'else if' to 'if').
	
	
	Once the change has been made, you can rebuild the MFC libraries to incorporate
	the change. For details on how to rebuild the MFC libraries, please see the
	Readme.txt file in the Mfc\Src directory and Appendix A of the Class Library
	User's Guide. Microsoft recommends building the static versions so that you do
	not have to rely on the presence of your modified library. Otherwise, you will
	need to rename MFC250(D).DLL so that it does not conflict with other versions of
	the DLL that might be on a user's system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in the version of MFC that
	ships with Microsoft Visual C++, 32-bit Edition, version 4.0.
	
	Additional query words: 4.00 SetTimer OnTimer time-out CancelBlockingCall 2.52 2.52b 2.53 2.10 2.20 3.10 3.20
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400fix kbWinsock kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.1,2.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
