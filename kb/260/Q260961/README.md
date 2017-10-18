---
layout: page
title: "Q260961: Cannot Change the Local Port Mapping on TSE with ICA Client"
permalink: kb/260/Q260961/
---

## Q260961: Cannot Change the Local Port Mapping on TSE with ICA Client

	Article: Q260961
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Citrix ICA client to change the port mapping for LPT1 through a
	Terminal Server client using the net use command, you may receive the following
	error message:
	
	  "System Error 85 has occurred".
	
	You are unable to delete the LPT1 mapping through the client.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. In the Terminal Server configuration, click Connections.
	
	2. Double-click ICA to view the client properties.
	
	3. On the Client Settings tab, in the "Disable the following area", click to
	  select the "LPT port mapping" check box.
	
	When LPT port mapping is disabled, clients can modify the mapping for the LPT1
	port.
	
	Additional query words: COM Clipboard
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
