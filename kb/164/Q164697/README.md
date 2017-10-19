---
layout: page
title: "Q164697: XCON: EDK Gateway Gets Directory Name Instead of E-mail Address"
permalink: /kb/164/Q164697/
---

## Q164697: XCON: EDK Gateway Gets Directory Name Instead of E-mail Address

	Article: Q164697
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A gateway developed for Microsoft Exchange Server 4.0 may extract a message from
	a computer running Microsoft Exchange Server that contains a directory name (DN)
	instead of an e-mail address. This problem occurs if the computer running
	Microsoft Exchange Server receives a message from another computer running
	Microsoft Exchange Server that is connected over a 1988 X.400 link.
	
	CAUSE
	=====
	
	In the X.400 P1 header information fields, there is information about the
	recipients and originator of an e-mail message. These fields contain the X.400
	addresses, and may contain the directory names of the recipients and originator.
	According to the X.400 Blue Book specification, a directory name is a valid
	optional field.
	
	When a message arrives at the gateway's MTS-OUT folder and the originator or
	reciepient address is a directory name in the form of "EX:/O=Org/OU=Site...,"
	the gateway developer should use the IABContainer::ResolveNames and
	IAdrBook::PrepareRecips methods to resolve the directory name to an address that
	is meaningful to the gateway. To perform this, the gateway must have access to
	an address book.
	
	This may not be possible in certain cases. For example, it is not possible when
	sending over the following route:
	
	  Exchange Server 1 -> 1988 X.400 link -> Exchange Server 2 -> Gateway
	
	The gateway has an address space for X.400 defined. If there is no replication
	between the two Microsoft Exchange Server sites and organizations, there is no
	way for the gateway to query an address book. It may not be possible to resolve
	the recipient or originator address to a meaningful e-mail address, and message
	delivery will fail.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. This problem was corrected in the latest Microsoft
	Exchange Server 4.0 and 5.0 U.S. Service Packs. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
