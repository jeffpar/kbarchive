---
layout: page
title: "Q256509: RAS Client Authentication Causes &quot;Error 5: Access Is Denied&quot;"
permalink: kb/256/Q256509/
---

## Q256509: RAS Client Authentication Causes &quot;Error 5: Access Is Denied&quot;

	Article: Q256509
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Windows NT 4.0 Remote Access Services (RAS) client may not succeed
	in being authenticated on a RAS server, and may return the following error
	message:
	
	  Error 5: Access is Denied
	
	This behavior can occur in the following circumstances:
	
	- The client is running Windows NT 4.0 Service Pack 6 or later.
	
	- You enter a blank space in the Domain box when you log on.
	
	- The server that is authenticating the client does not make use of domain
	  names for authentication.
	
	RESOLUTION
	==========
	
	To resolve this issue, place the mouse pointer in the Domain box, and then press
	BACKSPACE all the way to the left to ensure that the box is cleared of blank
	spaces.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This behavior occurs starting with Service Pack 6 and is by design for security
	reasons. The Windows NT 4.0 RAS client passes authentication credentials
	differently in this circumstance starting with Service Pack 6. Before Service
	Pack 6, if a blank space is left in the Domain box, the domain name is ignored
	and only the user name is passed. With Service Pack 6 and later, the domain name
	is passed, even if a blank space exists in that box.
	
	Some authentication methods do not use a domain name for authentication. This is
	typical in scenarios in which RAS users are validated by using a product such as
	Secure ID. When using such a security product, a user is typically not required
	to type a domain name but is validated by means of a user name and a number (or
	secure ID). In this scenario, a blank space in the Domain box may not be
	noticed. The credentials are passed with the blank space as the domain name, a
	backslash, and then a user name: <domainname>\<username>.
	Authentication methods that do not make use of domain names in this way may not
	succeed in this circumstance.
	
	The following sample information is from a sample Ppp.log file. This example
	shows how credentials are passed in Service Pack 6 and later when the Domain box
	contains a blank space. In this example, the user name is "Alfred":
	
	Authenticating phase started
	<PPP packet sent at 03/06/2000 11:51:07:100
	<Protocol = PAP, Type = Protocol specific, Length = 0x1b, Id = 0x0, Port =1
	<C0 23 01 00 00 19 09 20 5C 73 70 6F 6E 61 6B 65 |.#..... \alfred|
	<0A 31 31 33 33 35 35 35 37 37 37                |.111111111111     |
	
	Packet received or line went down in bucket # 1
	RasGetInfo returned 0 hPort=1, RI_ConnState=2 RI_LastError=0
	Received packet
	Bytes received in the packet = 46
	Posting listen on address e90624
	RasPortReceive returned 600
	PPP packet received at 03/06/2000 11:51:08:923
	Protocol = PAP, Type = Protocol specific, Length = 0x22, Id = 0x0, Port=1
	C0 23 03 00 00 20 1B 50 61 73 73 77 6F 72 64 20 |.#... .Password |
	76 61 6C 69 64 61 74 69 6F 6E 20 66 61 69 6C 75 |validation failu|
	72 65                                           |re              |
	
	The following sample information demonstrates the behavior prior to Service Pack
	6 when the Domain box contains a blank space. The user name is "Alfred":
	
	Authenticating phase started
	PPP packet sent at 03/07/2000 14:54:08:366
	Protocol = PAP, Type = Protocol specific, Length = 0x19, Id = 0x6, Port = 2
	<C0 23 01 06 00 17 07 73 70 6F 6E 61 6B 65 0A 31 |.#.....alfred.1|
	<31 33 33 35 35 35 37 37 37                      |111111111       |
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: rras logon sp6 sp6a access pap chap
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTS400sp6 kbWinNTS400search kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : winnt:4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
