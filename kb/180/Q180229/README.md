---
layout: page
title: "Q180229: Calling CONVERT Before RECEIVE_ALLOCATE May Lead to Event 60"
permalink: /kb/180/Q180229/
---

## Q180229: Calling CONVERT Before RECEIVE_ALLOCATE May Lead to Event 60

{% raw %}

	Article: Q180229
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If WinAPPCStartup() is not included at the beginning of a Windows-based
	invokable transaction program, and if the TP first calls the CONVERT API, the
	TP's call to RECEIVE_ALLOCATE may subsequently stop (hang) and not complete.
	
	CAUSE
	=====
	
	By first calling the CONVERT API prior to calling RECEIVE_ALLOCATE, the SNA
	client APPC interface was being confused, causing it to fail to properly match
	the incoming attach request to the application's RECEIVE_ALLOCATE call. If a
	Windows-based transaction program does not begin with WinAPPCStartup(), SNA
	Server automatically calls WinAPPCStartup() when the application calls the first
	APPC function. However, if this call is preceded by a Common Service Verb
	function (such as CONVERT), this can confuse the APPC interface.
	
	WORKAROUND
	==========
	
	The application can work around this problem by explicitly calling
	WinAPPCStartup prior to calling any Common Service Verb functions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: APPC invokable TP WinAPPCStartup
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
