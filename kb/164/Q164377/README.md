---
layout: page
title: "Q164377: Cannot Connect to Remote Access Server with Dial-Up Networking"
permalink: /kb/164/Q164377/
---

## Q164377: Cannot Connect to Remote Access Server with Dial-Up Networking

	Article: Q164377
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork dun win95 kbDialUp
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Dial-Up Networking in Windows 95 to dial into a remote network, you
	may receive the following error message:
	
	  Cannot negotiate a compatible set of networking protocols
	
	CAUSE
	=====
	
	This problem can occur when Rasapi32.dll is unable to unload the session
	management module (SMM) if it returns an error during the early phase of the
	authentication process.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	This problem seems to occur more often when you are attempting to connect to
	MSN, The Microsoft Network, but can also occur when you are connecting to other
	remote access servers.
	
	
	Additional query words: connectoid ppp chap
	
	======================================================================
	Keywords          : kberrmsg kbnetwork dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
