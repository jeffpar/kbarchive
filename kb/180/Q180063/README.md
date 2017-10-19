---
layout: page
title: "Q180063: Err Msg: The WINS Server Whose IP Address You Have Specified..."
permalink: /kb/180/Q180063/
---

## Q180063: Err Msg: The WINS Server Whose IP Address You Have Specified...

	Article: Q180063
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add a Windows Internet Name Service (WINS) Server to WINS
	Manager, you may receive the following error message:
	
	  The WINS Server whose IP address you have specified below cannot be
	  validated.
	
	If you type the NetBIOS name of that WINS Server and then click OK, you may
	receive the following error message:
	
	  Access is denied.
	
	
	CAUSE
	=====
	
	This issue can occur if the account you are using does not have administrative
	permissions on the remote WINS Server.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	Method 1
	--------
	
	Have the Administrator of the remote WINS Server add you to its local
	adminstrators group
	
	Method 2
	--------
	
	Make a connection to the IPC$ share on the remote WINS Server using an account
	that has administrative permissions on the remote WINS Server.
	
	
	NOTE: If your WINS Servers need to communicate across a router, an Lmhosts file
	may be necessary. For additional information, see the following article in the
	Microsoft Knowledge base:
	
	  ARTICLE-ID: Q150800
	  TITLE : Domain Browsing with TCP/IP and LMHOSTS Files
	
	Additional query words: replication
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
