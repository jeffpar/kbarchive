---
layout: page
title: "Q238198: RAS Callback to a Hunt Group Does Not Work"
permalink: kb/238/Q238198/
---

## Q238198: RAS Callback to a Hunt Group Does Not Work

	Article: Q238198
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Callback feature on a Windows NT Remote Access Services (RAS)
	server to perform a callback to a hunt group number, the callback authentication
	does not succeed and the connection may be terminated with the following error
	message:
	
	  Event ID: 20077
	  Description: The PPP negotiation is not converging.
	
	CAUSE
	=====
	
	The RAS server uses only one port for a callback (when the Callback Security
	feature is enabled), and that callback must occur on the same client port that
	performed the dial-out connection.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	A hunt group is a group of phone lines in which you are connected to the first
	number available when you dial, or you receive a busy signal. If you receive a
	busy signal, you try one of the other hunt groups.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
