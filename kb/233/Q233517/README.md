---
layout: page
title: "Q233517: Domain Logon Attempt Does Not Work with M-Node Clients"
permalink: kb/233/Q233517/
---

## Q233517: Domain Logon Attempt Does Not Work with M-Node Clients

	Article: Q233517
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your Windows NT-based computer is configured as a Windows Internet Name
	Service (WINS) m-node client and you attempt to log on using a domain account,
	you may receive an error message indicating that no domain controllers can be
	located.
	
	If this is your first logon attempt, the logon attempt is unsuccessful.
	Otherwise, you are logged on using cached credentials.
	
	CAUSE
	=====
	
	This behavior occurs when you have a WINS proxy agent on your computer's local
	subnet, but all of your domain controllers are on remote subnets.
	
	If an m-node client resolves a NetBIOS group name using broadcast in Windows NT
	4.0 Service Pack 5 or earlier, the client assumes that the related computers can
	also be reached using broadcast. If there is a WINS proxy agent on the local
	subnet, the WINS proxy agent may respond to name query broadcasts and resolve
	them to computers on remote subnets.
	
	For additional information about WINS proxy agent functionality, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q121004 WINS Proxy Agent Functionality
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the appropriate method:
	
	- Configure the clients as h-node or p-node.
	
	- Install a domain controller on the local subnet.
	
	- Enable routing of broadcast SAM LOGON requests.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	The following information assumes that the client computer is a member of the
	domain named DOMAIN.
	
	Before you can log on, the client must resolve the DOMAIN[1C] NetBIOS group name
	to locate a domain controller to act as a logon server. An m-node client
	computer uses two methods to resolve the group name. It first attempts to
	resolve the name by broadcast. If broadcasting does not resolve the name, it
	attempts to resolve the name by directly querying its WINS server.
	
	If a WINS proxy agent exists on the local subnet, it is likely that the WINS
	proxy agent will respond to the initial broadcast name query for DOMAIN[1C]
	before the workstation attempts to query its WINS server. In this situation, the
	client notes that the name is resolved using broadcast, and assumes that the
	related computers can also be reached using broadcast. It never uses any IP
	addresses returned in the name query response from the WINS proxy agent.
	
	When the client moves on to send SAM LOGON requests, it sends the requests only
	as broadcasts, and does not send them directly to any domain controller. If
	there are no domain controllers on the local subnet, the client does not locate
	a logon server and logon attempts are unsuccessful.
	
	Network Monitor Capture of the Behavior
	---------------------------------------
	
	In frames 1 and 2 in the example below, the client attempts to resolve DOMAIN[1C]
	using broadcast, with the WINS proxy agent responding.
	
	In frames 3-5, the client attempts to contact a logon server by using broadcast.
	Note that there is no attempt to contact the logon server directly, using the
	address returned in frame 2 by the WINS proxy agent.
	
	After a timeout occurs, the user is logged on with cached credentials and the
	client registers the logged-on user's name (first using broadcast in frames 6-9,
	and then using the WINS server in frames 10 and 11).
	
	Frame Time   Source  Destination   Protocol  Description
	
	 1   0.000  Client  *BCAST        NBT       NS: Query req. for DOMAIN<1C>
	 2   0.000  Proxy   Client        NBT       NS: Query resp. for DOMAIN<1C>, Success
	 3   0.001  Client  *BCAST        NETLOGON  SAM LOGON request from client
	 4   5.002  Client  *BCAST        NETLOGON  SAM LOGON request from client
	 5   5.008  Client  *BCAST        NETLOGON  SAM LOGON request from client
	 6  14.975  Client  *BCAST        NBT       NS: Registration req. for USER<03>
	 7   0.749  Client  *BCAST        NBT       NS: Registration req. for USER<03>
	 8   0.751  Client  *BCAST        NBT       NS: Registration req. for USER<03>
	 9   0.752  Client  *BCAST        NBT       NS: Registration req. for USER<03>
	 10  0.000  Client  WINS          NBT       NS: Registration req. for USER<03>
	 11  0.009  WINS    Client        NBT       NS: Registration resp. for USER<03>, Success
	
	When the hotfix is applied, the client sends a directed SAM LOGON request
	immediately after the first broadcast SAM LOGON request in frame 3, and the
	logon attempt is successful.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
