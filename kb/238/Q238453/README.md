---
layout: page
title: "Q238453: Data in Route Pointer Field Can Bypass Source Routing Disable"
permalink: /kb/238/Q238453/
---

## Q238453: Data in Route Pointer Field Can Bypass Source Routing Disable

	Article: Q238453
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 5 to your computer, you then attempt
	to disable TCP/IP source routing following the instructions in the Microsoft
	Knowledge Base article:
	
	  Q217336 TCP/IP Source Routing Feature Cannot Be Disabled
	
	However, even if you disable source routing using the registry change referenced
	in the article above, it is possible to bypass this feature by including
	specific, incorrect information within the route pointer field in the data
	packet.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Size      File name   Platform
	  -------------------------------------------------------------
	  09/17/99   04:04p   150,832   Tcpip.sys   x86
	  09/17/99   04:03p   274,096   Tcpip.sys   Alpha
	
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: The patch listed above also includes added functionality and increased
	control over source routing so you can disable TCP/IP source routing on
	single-homed computers and on multihomed (more than one network interface)
	computers that are not used as routers.
	
	If you use a multihomed Windows NT-based computer to perform routing and you need
	to disable source routing, you should apply the patch to ensure proper operation
	of the anti-source routing features. If you have computers running Windows NT
	that are not configured as routers but are situated in vulnerable locations (for
	example, single-homed computers outside of a firewall or multihomed computers
	joining two subnets), you can install the patch to disable source routing in
	these cases as well.
	
	Windows 95, Windows 98, and Windows 98 SE
	-----------------------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time    Version    Size    File name  Platform
	  -----------------------------------------------------------------
	  09/23/99  03:47p  4.10.1659  75,885  Vip.386    Windows 95 (all)
	  09/23/99  02:57p  4.10.2000  75,777  Vip.386    Windows 98 Retail
	  09/23/99  02:39p  4.10.2224  80,409  Vip.386    Windows 98 Second
	                                                  Edition
	
	NOTE: Computers with any version of Windows 95 installed must have the Microsoft
	Dial Up Networking 1.3 Performance and Security Update installed before
	installing this update. You can find Windows 95 download information at:
	
	  http://www.microsoft.com/windows95/downloads
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	Under normal conditions, the sender of a TCP/IP data packet exercises no control
	over how a packet arrives at its destination. The sender simply sends the packet
	and relies on intermediate routers to dynamically select the best route, as
	determined by network traffic, router availability, and other factors. It is
	entirely possible that every packet going between two endpoints may take a
	different route.
	
	You can use source routing to specify the route that a packet must take to a
	destination. If the selected route is not available for any reason, the packet
	cannot be delivered. If the recipient replied to the packets, the response
	follows the same route.
	
	The route pointer is one of the fields in a TCP/IP data packet. It keeps track of
	the hops in the route list that the packet has already visited. A malicious user
	can bypass the anti-source routing controls in Windows NT 4.0 by manipulating
	this information and providing incorrect information to the router.
	
	Source routing is a legitimate activity in some cases. For example, you can use
	source routing to discover the TCP/IP addresses of routers within a network.
	However, a malicious user can use source routing to learn more about a network
	that he or she is targeting for attack. A data packet contains information about
	where the packet has traveled and which computers the packet has transited. A
	malicious user could send data into a network to collect information about the
	network's topology. If a user can perform source routing, he or she can probe
	the network more effectively by forcing packets into specific parts of the
	network.
	
	The original operating system functionality allows administrators to prevent
	source routing attacks through Windows NT-based computers that are used as
	routers. If you disable source routing, a multihomed computer that acts as a
	router does not forward any packets that request source routing. The additional
	functionality extends this protection to non-routing computers, whether they are
	single-homed or multihomed. Source routing attacks can be mounted against these
	computers as well, and you can use the new functionality to defeat such
	attacks.
	
	For related information on this problem, please visit the following Microsoft Web
	site:
	
	  http://www.microsoft.com/security/bulletins/ms99-038.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	For additional information about TCP/IP source routing, please refer to the
	following Request for Comments (RFC) documents:
	
	- 1256: ICMP Router Discovery Messages
	
	- 1812: Requirements for IP Version 4 Routers
	
	- 1322: A Unified Approach to Inter-Domain Routing
	
	- 1940: Source Demand Routing: Packet Format and Forwarding Specification
	
	For additional information about obtaining RFCs, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q185262 How to Obtain Request for Comments Documents from the Internet
	
	For additional information about Windows 95 hotfixes, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	For additional information about Windows 98 and Windows 98 Second Edition
	hotfixes, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q206071 General Information on Windows 98 and SE Hotfixes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
