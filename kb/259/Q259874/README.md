---
layout: page
title: "Q259874: Error Message: The System Can Not Log You On (6A6)"
permalink: kb/259/Q259874/
---

## Q259874: Error Message: The System Can Not Log You On (6A6)

	Article: Q259874
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to the console on a computer that is running Windows
	NT Server 4.0, Terminal Server Edition, you may receive the following error
	message:
	
	  The system can not log you on (6a6) please contact your system administrator
	
	CAUSE
	=====
	
	One of the programs that runs as a service is not starting properly because of
	an invalid Remote Procedure Call (RPC) binding.
	
	
	RESOLUTION
	==========
	
	Set the startup method for the service to Manual and then restart the server.
	Typically, the most recently installed service is the problem. To change the
	startup method for the service, use either of the following methods.
	
	Method 1
	--------
	
	Use Server Manager on another Windows NT-based server to gain access to the
	server that is experiencing the problem:
	
	1. Start Server Manager on another Windows NT-based server.
	
	2. Click the server that is experiencing the problem.
	
	3. On the Computer menu, click Services.
	
	4. Set the problem service's startup type to Manual.
	
	5. Restart the server that is experiencing the problem.
	
	Method 2
	--------
	
	If the first method is not possible, you can install a parallel copy of Windows
	NT and then set the service startup to Manual by editing the registry from the
	parallel copy. For additional information about how to do this, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q165748 How to Disable a Service or Device that Prevents Windows NT from
	  Booting
	
	Additional query words: wts
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
