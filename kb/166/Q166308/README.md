---
layout: page
title: "Q166308: XCON: Exchange MTA Logs NT Event ID 51"
permalink: /kb/166/Q166308/
---

## Q166308: XCON: Exchange MTA Logs NT Event ID 51

	Article: Q166308
	Product(s): Microsoft Exchange
	Version(s): WinNT; Exchange 4.0, 5.0. 5.5
	Operating System(s): 
	Keyword(s): kbtshoot kbusage
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT event ID 51 appears in the event log on a computer running
	Microsoft Exchange Server with configured X.400 connectors.
	
	  3/7/97 8:23:42 PM
	  MSExchangeMTA
	  Warning Security  51
	  N/A
	  <Exchange_server_name> An unknown MTA has attempted to bind. The MTA
	  name in bind is <other_mta_host>. The MTA presentation address is
	  /n:0x636166656F6C65, Association index: 2354. [MTA XFER-IN 23 42] (14)
	
	CAUSE
	=====
	
	A remote message transfer agent (MTA) has attempted to establish a messaging
	session with the computer running Exchange Server and there has been a mismatch
	in the specified security information. The security information for the computer
	running Exchange Server is specified on the remote MTA name or Password fields,
	the T, S and P selector in the Outgoing and Incoming OSI address information,
	and the local MTA name or password fields on the Override tab of the Exchange
	connector. Improper entry of any one or a combination of these results in a
	security violation.
	
	The Remote and the Local password fields are case-sensitive and must be an exact
	match with the information submitted by the adjacent MTA when it attempts to
	connect (bind). The T, S and P Selector may be entered in either hexadecimal or
	text; verify that only the required fields are specified and that the required
	fields are specified in the correct format. If multiple X.400 connectors use a
	given transport stack to connect to foreign X.400 MTAs, verify that each of the
	connectors has a unique value specified for the T Selector (TSAP). The T
	Selector specifies the entry point to the transport layer of the protocol and as
	such should be unique.
	
	MORE INFORMATION
	================
	
	Remote MTA name and password fields on the General tab and the Open Sytems
	Interconnect (OSI) information for Outgoing and Incoming OSI address information
	are on the Stack tab of the X.400 connector configuration dialog box. P Selector
	(PSAP) is not supported in 1984 mode. S Selector (SSAP) is not supported in 1988
	X.410 mode. T Selector (TSAP) is the most uniformly used throughout X.400 MTAs.
	
	Additional query words: X400
	======================================================================
	Keywords          : kbtshoot kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT; Exchange 4.0, 5.0. 5.5
	
	=============================================================================
	
