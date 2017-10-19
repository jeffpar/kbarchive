---
layout: page
title: "Q140555: Asynch Verb Completion Via WinNT Events"
permalink: /kb/140/Q140555/
---

## Q140555: Asynch Verb Completion Via WinNT Events

	Article: Q140555
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following two new Win32 CPIC API Calls have been added to SNA Server 2.11 to
	enable asynchronous verb completion using Windows NT Events:
	
	- WinCPICSetEvent()
	
	- WinCPICExtractEvent()
	
	This article discusses the way CPIC verbs in general complete asynchronously and
	how two new API calls complete asynchronously.
	
	STATUS
	======
	
	This problem has been corrected and is included in the latest U.S. Service Pack
	for SNA Server for Windows NT, version 2.11. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Currently, CPIC verbs complete asynchronously by posting a message to a window.
	There is one such window for each CPIC application. Each CPIC conversation can
	have one asynchronous verb outstanding at any time. When a verb completes, the
	posting to the window takes as parameters the CPIC conversation ID of the verb
	which has completed, and the return code of the verb.
	
	This new specification addresses the new requirement to allow CPIC verbs running
	on Win32 to complete asynchronously through events, in common with the other SNA
	Server asynchronous interfaces.
	
	The prototypes are:
	
	     /* Set_Conversation_Event */ 
	     VOID WinCPICSetEvent(unsigned char CM_PTR, /*conversation_ID*/ 
	     CM_EVENT_HANDLE CM_PTR, /* event handle */ 
	     CM_RETURN_CODE CM_PTR); /* return_code  */ 
	
	The parameters for this verb are:
	
	- Conversation ID, which is the ID of the conversation for which this event is
	  used.
	
	- Event handle, which is the handle of the event which is to be cleared when an
	  asynchronous verb on the conversation completes. This parameter can replace
	  an already-defined event, or remove an already-defined event (by having NULL
	  as the parameter).
	
	- Error code, which returns the error PROGRAM_PARAMETER_CHECK if any of the
	  parameters are invalid.
	
	Prototypes continued:
	
	     /* Extract_Conversation_Event */ 
	     VOID WinCPICExtractEvent(unsigned char CM_PTR /*conversation_ID*/ 
	     CM_EVENT_HANDLE CM_PTR, /* event handle */ 
	     CM_RETURN_CODE CM_PTR); /* return_code  */ 
	
	The parameters for this verb are:
	
	- Conversation ID, which is the ID of the conversation for which the event
	  handle is being extracted.
	
	- Event handle, which returns the event handle being used by this conversation.
	  If no handle has been registered, it returns NULL.
	
	- Error code, which returns the error PROGRAM_PARAMETER_CHECK if any of the
	  parameters are invalid.
	
	When a verb is issued on a non-blocking conversation, it returns
	CM_OPERATION_INCOMPLETE if it is going to complete asynchronously. If an event
	has been registered with the conversation, then the application can call
	WaitForSingleObject() or WaitForMultipleObjects() to be notified of the
	completion of the verb. Once the verb has completed, the application must then
	call cmwait() to determine the return code for the asynchronous verb.
	
	If no event has been registered, then the asynchronous verb completes as it does
	at present, which is by posting a message to the window which the application
	has registered with the CPIC library.
	
	It is the responsibility of the application to reset the event, as it is with
	other APIs.
	
	An application can discover the event handle being used for a CPIC conversation
	with the call WinCPICExtractEvent().
	
	Internal Changes:
	
	Asynchronous event completion inside the CPIC library is done by a macro
	COMPLETE_ASYNC_VERB. This is changed to first check whether there is an event
	handle associated with the conversation. If there is, it clears this event. If
	there is not, it posts a message to a window as before.
	
	The conversation control block is changed to have a field to contain the event.
	
	Microsoft has updated the following files to add the two new Win32 CPIC API
	calls:
	
	  LIBS\WIN32\WCPIC32.DLL
	  LIBS\WINB32\WCPIC32.LIB
	  LIBS\WIN32\WINCPIC.DLL
	  LIBS\WIN32\WINCPIC.LIB
	  LIBS\WIN32\SNATRC.DLL
	  LIBS\WIN95\SNATRC.DLL
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
