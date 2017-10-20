---
layout: page
title: "Q136622: RPC Applications Hang: Computer Name Greater Than 15 Characters"
permalink: /kb/136/Q136622/
---

## Q136622: RPC Applications Hang: Computer Name Greater Than 15 Characters

{% raw %}

	Article: Q136622
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Remote Procedure Call (RPC) supports NetBIOS over TCP/IP (NBT), NetBEUI, and IPX
	protocols. If an RPC client attempts to access a server with a computer name
	greater than 15 characters, WinSock32 crashes causing RPC applications to stop
	responding (hang).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in Windows NT Workstation or Server version 4.0.
	
	
	Additional query words: prodnt NBT Sockets
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
