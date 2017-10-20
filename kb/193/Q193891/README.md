---
layout: page
title: "Q193891: HTTP Through Firewall and &quot;Bypass Proxy for Local Intranet&quot;"
permalink: /kb/193/Q193891/
---

## Q193891: HTTP Through Firewall and &quot;Bypass Proxy for Local Intranet&quot;

{% raw %}

	Article: Q193891
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	"Bypass proxy server for local (Intranet) addresses" may not work as expected.
	
	When a client process attempts to connect to an Internet address (for example,
	www.microsoft.com) through a proxy server when the above setting is selected,
	the first call to tcp_get_host_by_name uses that Internet server name
	(www.microsoft.com) as the server. Next, RPC sets up the tunneling, the proxy
	server redirects the call to the real server (www.microsoft.com), the response
	packet comes back to the proxy, the proxy redirects it back to the client, and
	the client sends it to the client process. However, the response packet contains
	the actual IP address of the Internet server. The client thinks that there is no
	proxy server and attempts to communicate directly to the Internet IP address
	that is unreachable; therefore, the connection fails.
	
	If the "Bypass proxy server for local (intranet) addresses" setting is not
	selected, the call is always directed to the http proxy; however, if you do not
	select it, you may not be able to communicate or connect to Intranet servers.
	
	CAUSE
	=====
	
	The problem is that, if tcp_get_host_by_name() passes an address instead of a
	server name, it needs to force a name resolution to make sure the host is
	reachable.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0,4.0a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
