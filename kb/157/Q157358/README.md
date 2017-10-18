---
layout: page
title: "Q157358: XCON: Per-Domain-Bilateral-Info and Third Party Systems"
permalink: kb/157/Q157358/
---

## Q157358: XCON: Per-Domain-Bilateral-Info and Third Party Systems

	Article: Q157358
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbusage
	Last Modified: 04-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, Microsoft Exchange Server sends Per-Domain-Bilateral- Info as an
	argument in each message that it submits for delivery via the Microsoft Exchange
	X.400 Connector.
	
	Interoperability between Microsoft Exchange and certain foreign X.400 systems
	(some ISODE-based Message Transfer Agents in particular) might require Microsoft
	Exchange to be configured so that bilateral information is not sent with
	messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Service Pack 3.
	For information on obtaining the Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This ability can be configured via the Windows NT Registry as follows:
	
	1. Start Regedt32.exe.
	
	2. Go to HKEY_LOCAL_MACHINE\SYSTEM\CURRENTCONTROLSET\SERVICES
	  \MSExchangeMTA\Parameters
	
	3. Add a value name (i.e. click on Edit-Add Value with the Parameters folder
	  highlighted) called "Do not generate Bilateral Info" as type REG_DWORD and a
	  hex value of 1. Important: This is case-sensitive and must be typed exactly
	  as it is printed here:
	
	  value 0x1 (0 is the default).
	
	To avoid the loop detection, when a message enters new Microsoft Exchange Site,
	the MTA adds Per Domain Bilateral Information to the P1 Envelope to indicate the
	names of the Sites the message has passed through. During the loop detection, if
	the message reenters a Site, we check this mandatory Bilateral info to generate
	an NDR. Some 3rd party MTAs do not understand the mandatory Bilateral
	information, hence the registry key.
	
	For additional information regarding the Per-domain-bilateral-information
	argument, please refer to the CCITT Blue Book, Rec. x.411, Clause 12.2.1.1.1.2.
	
	Additional query words: BIlateral domain registry
	
	======================================================================
	Keywords          : kb3rdparty kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
