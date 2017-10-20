---
layout: page
title: "Q216862: PRB:Access Violation on Chat Server During Callback Registration"
permalink: /kb/216/Q216862/
---

## Q216862: PRB:Access Violation on Chat Server During Callback Registration

{% raw %}

	Article: Q216862
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbExchange550 kbMsg kbVC kbGrpDSMsg kbDSupport
	Last Modified: 18-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the callback registration for an Extension Filter to Microsoft Exchange
	Chat Server, calls to the AddServerEvents and AddChannelEvents methods of the
	IChatRegistrar object may result in an access violation.
	
	NOTE: The access violation is caught by the Chat Server. To detect an access
	violation, the Extension Filter must install its own exception handler.
	
	CAUSE
	=====
	
	During callback registration, the Chat Server modifies the string parameters
	that are passed to the methods of the IChatRegistrar object. If the string
	parameters are hard-coded in the Extension Filter, the buffer that is passed to
	the Chat Server is marked read-only. When the Chat Server attempts to modify
	this buffer, it generates an access violation.
	
	RESOLUTION
	==========
	
	To avoid this problem, copy the registration string to a temporary buffer, and
	pass the buffer to the IChatRegistrar object. The following code sample
	registers the OnNewUser and OnCloseUser events properly:
	
	  STDMETHODIMP CMyExtension::Init(IChatServer *pServer, 
	                                  IChatRegistrar* pRegistrar, 
	                                  long *Result)
	  {
	     long     nResult;
	     wchar_t  sServerEvent[512] = { 0 };
	     
	     wcscpy(sServerEvent, L"OnNewUser,OnCloseUser");
	
	     __try
	     {
	        pRegistrar->AddServerEvent(sServerEvent, &nResult);
	        if(nResult != 0)
	           OutputDebugString("AddServerEvent failed!\n");
	     }
	     __except(TRUE)
	     {
	        OutputDebugString("Aiiiieeee\n");
	     }
	
	     *pResult = nResult;
	     return S_OK;
	  }
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code to register the OnNewUser and OnCloseUser events causes
	an access violation:
	
	  STDMETHODIMP CMyExtension::Init(IChatServer *pServer, 
	                                  IChatRegistrar* pRegistrar, 
	                                  long *Result)
	  {
	     long     nResult;
	
	     __try
	     {
	        pRegistrar->AddServerEvent(L"OnNewUser,OnCloseUser", &nResult);
	        if(nResult != 0)
	           OutputDebugString("AddServerEvent failed!\n");
	     }
	     __except(TRUE)
	     {
	        OutputDebugString("Aiiiieeee\n");
	     }
	
	     *Result = nResult;
	     return S_OK;
	  }
	
	REFERENCES
	==========
	
	- Microsoft Exchange Chat Server Extensibility Software Development Kit (SDK).
	
	- Microsoft Exchange Chat Server Online Documentation.
	
	Additional query words: Chat Server
	
	======================================================================
	Keywords          : kbExchange550 kbMsg kbVC kbGrpDSMsg kbDSupport 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
