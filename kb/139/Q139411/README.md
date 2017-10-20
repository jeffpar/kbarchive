---
layout: page
title: "Q139411: Maximum WINS Owners Under Windows NT 3.5 and 3.51"
permalink: /kb/139/Q139411/
---

## Q139411: Maximum WINS Owners Under Windows NT 3.5 and 3.51

{% raw %}

	Article: Q139411
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WINS under Windows NT 3.5 supported ownership of 25 replicated databases. Under
	Windows NT 3.51 this value was increased to 100.
	
	MORE INFORMATION
	================
	
	Windows NT Server 3.5 originally supported only 25 owners from replicated
	partners. Windows NT Service Pack 2 increased that value so that 100 Owners
	could be maintained.
	
	If you have a WINS environment with a mix of Windows NT 3.5 servers (upgrade to
	Service Pack 2) and Windows NT 3.51 servers, and if the Windows NT 3.5 servers
	receive more than 25 replicated databases from Windows NT 3.51 servers acting as
	a replicating partner, they show only 25 total owners. Applying Windows NT 3.5
	Service Pack 3 allows up to 100 owners to replicate over from a Windows NT 3.51
	Server.
	
	Windows NT 3.51 will maintain up to 100 total owners from Windows NT 3.5 running
	Service Pack 2 and 3.51 Servers acting as replicating partners.
	
	In Windows NT 4.0 with SP3 and later, the limit of WINS partners has been
	increased to 2^32.
	
	Additional query words: prodnt sp2 sp3
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
