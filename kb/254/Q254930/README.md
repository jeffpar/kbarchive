---
layout: page
title: "Q254930: TCP Session with Server Never Closes"
permalink: kb/254/Q254930/
---

## Q254930: TCP Session with Server Never Closes

	Article: Q254930
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix kbbpqfe1a
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A TCP session with a server may seem never to close, even though the client has
	requested to close the session. For example, a connection is established between
	two Windows NT-based computers. The server application quits, and the server
	sends a FIN request (which the network loses). The server state is now
	FIN_WAIT_1 or LAST_ACK and the client state is ESTABLISHED. The server will
	remain in the FIN_WAIT or last_ack state until a reboot is issued to restore
	incoming sessions.
	
	RESOLUTION
	==========
	
	Windows NT Server and Workstation
	---------------------------------
	
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
	
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Time    Size     File name   Platform
	  -------------------------------------------------
	  02/16/2000  08:01p  171,728  Tcpip.sys   Intel
	  02/16/2000  08:00p  305,840  Tcpip.sys   Alpha
	
	
	
	Windows NT Server, Terminal Server Edition
	------------------------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT Server 4.0, Terminal Server Edition, service pack that
	contains this fix.
	
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
	
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Time    Size     File name   Platform
	  -------------------------------------------------
	  09/26/2000  04:48p  174,544  Tcpip.sys   Intel
	  09/26/2000  04:33p  311,024  Tcpip.sys   Alpha
	
	
	
	STATUS
	======
	
	Windows NT Server and Workstation
	---------------------------------
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Windows NT Server, Terminal Server Edition
	------------------------------------------
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	When the client initiates the close of a session, it sends a FIN packet to the
	server. If the FIN packet is lost and never reaches the server, the client
	should retransmit the FIN packet when it does not receive an ACK response for
	the FIN packet. If the client does not retransmit the FIN packet, the server
	session does not close and orphans the session.
	
	The server will remain in the FIN_WAIT or last_ack state until a reboot is issued
	to restore incoming sessions.
	
	Example of a servers netstat -an:
	
	  TCP nj031fpsb01:nbsession NC031LLAB03.wcc.microsoft.com:1094 LAST_ACK
	  TCP nj031fpsb01:nbsession NC031LLAB03.wcc.microsoft.com:1096 LAST_ACK
	  TCP nj031fpsb01:nbsession NC031LLAB03.wcc.microsoft.com:1097 LAST_ACK
	
	Refer to the Microsoft Developer Network (MSDN) for more information about FIN
	WAIT states and TCP state diagrams.
	
	Additional query words: FIN_WAIT last_ack Filenet win2000hotnet netlogon 5719
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix kbbpqfe1a 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
