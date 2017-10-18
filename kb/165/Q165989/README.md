---
layout: page
title: "Q165989: GetPeerName() Returns WSAENOTCONN After Select() Returns Success"
permalink: kb/165/Q165989/
---

## Q165989: GetPeerName() Returns WSAENOTCONN After Select() Returns Success

	Article: Q165989
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbProgramming kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run an application that uses sockets and then perform the following in
	this application, GetPeerName returns WSAENOTCONN.
	
	1. Issue the Connect() call in NonBlocking mode.
	
	2. Since Connect() returns asynchronously, issue the Select() call which should
	  return when the Connect() completes.
	
	3. After the Select() returns, issue the GetPeerName() call which retrieves the
	  name of the peer to which a socket is connected.
	
	CAUSE
	=====
	
	A timing problem allows Select(); to return before Connect();.
	
	
	RESOLUTION
	==========
	
	To work around this problem, put a Sleep(0) after the Select() function call.
	
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
	
	
	Additional query words: prodnt 4.00
	
	======================================================================
	Keywords          : kbProgramming kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
