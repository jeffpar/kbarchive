---
layout: page
title: "Q271590: XFOR: Excalcon Stops Working When Notes Server Upgraded to 5.02c"
permalink: kb/271/Q271590/
---

## Q271590: XFOR: Excalcon Stops Working When Notes Server Upgraded to 5.02c

	Article: Q271590
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Lotus Notes server is upgraded to version 5.03, the Notes Client that is
	located on the Exchange Server 5.5 computer can no longer obtain free and busy
	information. The Notes Client user receives the following error message:
	
	  Your schedule request timed out.
	
	A Network Monitor trace shows that no remote procedure call (RPC) packets are
	being sent from the Notes Client on the Exchange Server computer.
	
	CAUSE
	=====
	
	When you are using the Mail50.ntf file version 5.02c or later, the domain is
	appended to the end of the address. This causes the MailLookupAddress function
	call not to work. The request is ignored; therefore, no RPC requests are sent
	from the Exchange Server computer, and Notes users receive the time-out message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	WORKAROUND
	==========
	
	Return the mail template back to version 5.01a (Mail50.ntf).
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5 SP3. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	The following new command-line parameters are available when you are running the
	Calendar Connector on a Notes server:
	
	  excalcon ... nodomain: The domain is never appended.
	  excalcon ... domain: The domain is always appended.
	  excalcon ... : If neither parameter is present, the domain is appended on 5.x
	  servers and not on 4.x servers.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
