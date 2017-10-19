---
layout: page
title: "Q243848: Windows NT Server 4.0 Terminal Server Restarts Unexpectedly"
permalink: /kb/243/Q243848/
---

## Q243848: Windows NT Server 4.0 Terminal Server Restarts Unexpectedly

	Article: Q243848
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using your Windows NT Server 4.0, Terminal Server Edition-based
	server, it may restart for no apparent reason. Also, you may see the following
	event in the System log:
	
	  Event ID: 6008
	  Source: Event Log
	  Description: The last system shutdown was unexpected.
	
	CAUSE
	=====
	
	This issue can occur if a user with administrative privileges modifies the
	computer policy to permit shutdown from authentication. When this feature is
	enabled, any client that is connected to the Terminal Server has the capability
	of restarting the Terminal Server.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  System Policy Editor.
	
	2. Click File, and then click Open Registry.
	
	3. Click Windows NT System, click Logon, and then click the "Enable shutdown
	  from Authentication" command on the Logon menu to remove the check mark.
	
	NOTE: Changing the System policy back to default values removes this option from
	all client sessions, but an administrator still has the option to shut down the
	Terminal Server from the Authentication dialog box.
	
	MORE INFORMATION
	================
	
	The event message listed earlier in this article is the only indication of this
	issue.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
