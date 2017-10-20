---
layout: page
title: "Q254210: Cannot Use Net View &#92;&#92;Localhost Command"
permalink: /kb/254/Q254210/
---

## Q254210: Cannot Use Net View &#92;&#92;Localhost Command

{% raw %}

	Article: Q254210
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kberrmsg w2000smb kbSMB
	Last Modified: 29-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type "net view \\localhost" (without the quotation marks), and then
	press ENTER, you may receive the following error message:
	
	Windows NT 4.0
	--------------
	
	  Error 53
	  "The network path was not found."
	
	Windows 2000
	
	------------
	
	  Error 52
	  "A duplicate name exists on the network."
	
	CAUSE
	=====
	
	This issue can occur because the name localhost is resolved to the loopback IP
	Address 127.0.0.1 and NetBIOS over TCP/IP (NetBT) does not bind to the loopback
	address.
	
	In Windows 2000, the SMB device binds to any IP address (this is why the 'net
	view' command to the loopback address works in Windows 2000 and does not work in
	Windows NT) but, when the new SMB device establishes the connection, it checks
	that it connected to the right computer by checking the end point name. This
	check fails because 'localhost' is not the name of the local computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the name of the computer to see the shares of the
	local computer. You can use the Hostname command to obtain the name of the
	computer.
	
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg w2000smb kbSMB 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
