---
layout: page
title: "Q166602: XCON: MTA Only Allows 64 TCP/IP or TP4 Connections"
permalink: kb/166/Q166602/
---

## Q166602: XCON: MTA Only Allows 64 TCP/IP or TP4 Connections

	Article: Q166602
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server message transfer agent (MTA) has a limit on the
	number of allowed socket control blocks for TCP and TP4. This limit is currently
	a shared maximum of 64 (0x40). The minimum number that must be allocated to
	either TCP or TP4 is 2, which means that the maximum any one transport stack can
	have allocated is 62 (0x3E). The default is set to 20 (0x14) for each.
	
	When the limit is reached, the following error message is logged in the Windows
	NT event log:
	
	  MSExchangeMTA   Warning   Resource   9156
	  A resource limit has been reached while attempting to open an
	  association. There are no free control blocks available for network type
	  1. The configured count is 40. [BASE IL MAIN BASE 1 282] (10)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The MTA uses one control block for each connection (whether remotely or locally
	initiated). It also uses one to listen for incoming connections.
	
	If slow links (slower than 128Kbps) and/or large messages are involved and
	message backlogging is therefore likely, you can allow 10 control blocks per
	X.400-Link. This enables MTA traffic to be handled more efficiently by virtue of
	multiple connections to each remote link, without suffering from a resource
	shortage.
	
	NOTE: There is no requirement to change the TP4 Thread or TCP/IP Thread values;
	the code will self-adjust based on the count of control blocks.
	
	The following registry values hold the TCP/IP and TP4 control block settings:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\ 
	  Services\MSExchangeMTA\Parameters\TCP/IP Control blocks
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\ 
	  Services\MSExchangeMTA\Parameters\TP4 Control blocks
	
	With the fix implemented, a maximum total of 2,000 control blocks is allowed.
	
	NOTE: If X.25 is also being used as a messaging protocol stack, the total of X.25
	+ TCP/IP control blocks can be no greater than 1,250.
	
	If these values are increased beyond the acceptable ranges, the MTA will fail to
	start. For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q168815 XCON: MTA Doesn't Start, Event IDs 9228 and 4300
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
