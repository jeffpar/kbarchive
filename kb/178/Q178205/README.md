---
layout: page
title: "Q178205: Connecting to a Server is Slow over RAS Using LMHOSTS File"
permalink: /kb/178/Q178205/
---

## Q178205: Connecting to a Server is Slow over RAS Using LMHOSTS File

{% raw %}

	Article: Q178205
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you dial into a remote site, the initial attempt to connect to a server
	share point can take up to 90 seconds to complete.
	
	CAUSE
	=====
	
	If the name of the server being connected to is resolved by using the local
	LMHOSTS file, when attempting to connect, Windows NT must wait for the
	connection attempt over the local LAN to timeout before the connection over RAS
	is accepted. If you use the normal default TCP/IP values for
	TcpMaxConnectRetransmissions, it will take 90 seconds to time out.
	
	This problem is not experienced if WINS or broadcast name resolution is used to
	locate the computer being connected to.
	
	RESOLUTION
	==========
	
	You can work around this problem by lowering the value of
	TcpMaxConnectRetransmissions. Setting this to a value of 1 reduces the delay to
	18 seconds. However, lowering this value may cause problems when establishing a
	connection to a server over a slow link.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/netbt-fix/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: 4.00
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
