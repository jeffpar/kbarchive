---
layout: page
title: "Q166247: XADM: Inproxy.dll Creates Non-RFC Conformant SMTP Addresses"
permalink: kb/166/Q166247/
---

## Q166247: XADM: Inproxy.dll Creates Non-RFC Conformant SMTP Addresses

	Article: Q166247
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Administrator program to create an SMTP
	proxy for a Microsoft Exchange Site using substitution characters separated by a
	'.', if one of the represented fields is null, Inproxy.dll will generate an
	invalid SMTP address. This address works correctly and produces no error
	messages or warnings but it does not conform to the RFC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are researching this problem and will post additional
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
