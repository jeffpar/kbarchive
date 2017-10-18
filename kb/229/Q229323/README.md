---
layout: page
title: "Q229323: Err Msg: The Client Could Not Connect to Terminal Server"
permalink: kb/229/Q229323/
---

## Q229323: Err Msg: The Client Could Not Connect to Terminal Server

	Article: Q229323
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to Windows NT Server 4.0, Terminal Server Edition, you
	may receive the following error message:
	
	  The client could not connect to Terminal Server. The server may be too busy.
	  Please try connecting later.
	
	CAUSE
	=====
	
	This issue can occur if the RDP-TCP connection type is disabled.
	
	RESOLUTION
	==========
	
	To resolve this issue, enable the RDP-TCP connection type on the server. To do
	this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Administrative Tools, and then double-click Terminal Server
	  Configuration.
	
	3. Right-click on "RDP-Tcp connection", then go to All Tasks and click Enable
	  Connection.
	
	4. Close the Terminal Server Configuration, and then close Control Panel.
	
	MORE INFORMATION
	================
	
	RDP is the protocol Windows NT Server 4.0, Terminal Server Edition uses to
	connect to client computers.
	A Citrix Metaframe ICA client may connect to Windows NT Server 4.0, Terminal
	Server Edition even with RDP-TCP disabled.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
