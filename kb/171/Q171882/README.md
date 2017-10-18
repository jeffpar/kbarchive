---
layout: page
title: "Q171882: Error 2184: The Service has not been Started"
permalink: kb/171/Q171882/
---

## Q171882: Error 2184: The Service has not been Started

	Article: Q171882
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to stop the Remote Access Connection Manager, you may receive
	one of the following error messages, depending on the manner in which you
	attempted to stop it.
	
	From Services in Control Panel, you may receive the following error message:
	
	  Services
	  Could not stop the Remote Access Connection Manager service on
	  \\<SERVERNAME>.
	  Error 2184: The service has not been started.
	
	From a command prompt running "net stop rasman" (without the quotation marks),
	you may receive the following error message:
	
	  The service has not been started.
	  More help is available by typing NET HELPMSG 2184.
	
	RESOLUTION
	==========
	
	Neither of the above error messages actually indicates a problem; the service
	has stopped correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: steelhead ras
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
