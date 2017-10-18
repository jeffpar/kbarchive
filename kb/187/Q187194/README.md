---
layout: page
title: "Q187194: Published Application Session Does Not Offer Logoff"
permalink: kb/187/Q187194/
---

## Q187194: Published Application Session Does Not Offer Logoff

	Article: Q187194
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	In this environment the administrator will want to:
	
	- Modify the Connection Configuration advanced properties for the connection
	  being used, so disconnected sessions will timeout and shut down. If the
	  administrator has groups of users who use the single application feature, and
	  others who do not, then:
	
	  Add one or more network interface cards (NICs) to the Terminal Server, and
	  define a unique connection in Connection Configuration for each NIC. At that
	  point, you can direct single application users to one connection (where
	  disconnected sessions time out quickly and are shutdown), and other normal
	  desktop users can use a different connection where the timeout is longer or
	  non-existent.
	
	  If the administrator wants more granular control, then
	
	- Set the disconnect timer for individual users under
	
	  UserManager\username\Config
	
	SYMPTOMS
	========
	
	When you connect to a Terminal Server with a published application session, or
	when you connect to a Terminal Server with a session limited to a specified
	application, you cannot log off because there is no task bar and therefore, no
	Start option is available. You can only disconnect by closing the client windows
	by exiting the published application.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
