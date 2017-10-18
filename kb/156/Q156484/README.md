---
layout: page
title: "Q156484: Process Launched with CreateProcess() May Terminate Prematurely"
permalink: kb/156/Q156484/
---

## Q156484: Process Launched with CreateProcess() May Terminate Prematurely

	Article: Q156484
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.0,4.0
	Operating System(s): 
	Keyword(s): kbenv kbinterop
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Cmd.exe, Perl.exe, or other console-mode applications may fail to initialize
	properly and terminate prematurely when launched by a service using the
	CreateProcess() or CreateProcessAsUser() APIs. The calling process has no way of
	knowing that the launched console-mode application has terminated prematurely.
	
	In some instances, calling GetExitCode() against the failed process indicates the
	following exit code:
	
	  128L ERROR_WAIT_NO_CHILDREN - There are no child processes to wait for.
	
	In multithreaded applications, the premature termination causes desktop heap
	leaks. Over time the desktop heap is exhausted, which results in User32.dll or
	Kernal32.dll initialization errors.
	
	MORE INFORMATION
	================
	
	- Internet Information Server (IIS) may exhibit this problem intermittently
	  when processing CGI or Perl scripts. In this case the browser returns the
	  following error when executing CGI scripts:
	
	  CGI Error
	
	  The specified CGI application misbehaved by not returning a complete set of
	  HTTP headers. The headers it did return are:.
	
	- Remote Command Service (RCMD) may also exhibit this problem. RCMD clients
	  experience connect and disconnect messages when they attempt to access a
	  server running RCMD service. This may be used as a test application to see if
	  another service is running into this problem.
	
	- Other third-party services (such as Patrol from BMC Software) are also known
	  to fail because of this problem.
	
	RESOLUTION
	==========
	
	To resolve this problem, please see the following articles in the Microsoft
	Knowledge Base for more information:
	
	  ARTICLE-ID: Q142676
	  TITLE : Overcoming User32.dll Initialization Failure Errors
	
	  ARTICLE-ID: Q175687
	  TITLE : Win32k.sys Causes STOP 0x0000001e and 0x0000000a On SMP
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis300
	Version           : winnt:3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
