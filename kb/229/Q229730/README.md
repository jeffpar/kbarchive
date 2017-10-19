---
layout: page
title: "Q229730: Synchronous Remote Scripting Causes Browser to Stop Responding"
permalink: /kb/229/Q229730/
---

## Q229730: Synchronous Remote Scripting Causes Browser to Stop Responding

	Article: Q229730
	Product(s): Internet Information Server
	Version(s): WINDOWS:3.02,4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2; winnt:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Explorer versions 3.02, 4.0, 4.01, 4.01 Service Pack 1 for Windows 95 
	- Microsoft Internet Explorer versions 4.0, 4.01 Service Pack 2 for Windows 98 
	- Microsoft Internet Explorer versions 4.01, 4.01 Service Pack 1 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Web application uses Remote Scripting to communicate with Active Server
	Pages (ASP) and synchronous method calls are used, the Web browser may stop
	responding if FRAMSETs are used and ASP Session Management is enabled.
	
	In one case, where a Web application required a login process, a long list of
	image files was returned to the logged-on user. If a second logon request is
	started before the first one is completed, the browser stops responding. This
	occurs with both Internet Explorer 4.01 SP1 and Netscape Navigator.
	
	CAUSE
	=====
	
	When FRAMESETs are used and ASP Session management is enabled, ASP serializes
	all requests for a given session. When synchronous Remote Scripting method calls
	are used to communicate with ASP, then the whole series of processes are treated
	atomically by ASP, as if they were one long synchronous method call.
	
	Because browser's incorporate an asynchronous user interface, it is possible to
	commence a second synchronous process. If the browser has not completed the
	first request, it cannot handle the second request and begins to reduce its TCP
	WindowSize property until the WindowSize is zero. When the WindowSize is zero,
	the server stops sending data to the client and the browser stops responding.
	
	WORKAROUND
	==========
	
	The following design alternatives keep the asynchronous nature of the browser's
	user interface in sync with the asynchronous method calls supported by Remote
	Scripting. Use one of the following workarounds to resolve this problem:
	
	Run the application on a dual processor server.
	
	-OR-
	
	- Use asynchronous Remote Scripting method calls.
	
	- Do not use FRAMESETs.
	
	- Disable ASP Session management.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbIEsearch kbiis400 kbiis300 kbZNotKeyword2 kbIENT400Search kbIE95Search kbZNotKeyword3 kbIE98Search kbIE302Win95 kbIE400Win95 kbIE401Win95 kbIE401Win95SP1 kbIE400Win98 kbIE401Win98SP2 kbIE401WinNT400 kbIE401WinNT400SP1
	Version           : WINDOWS:3.02,4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2; winnt:3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
