---
layout: page
title: "Q153150: XFOR: Err Msg: IMC The Following Recipient Couldn't Be Reached"
permalink: kb/153/Q153150/
---

## Q153150: XFOR: Err Msg: IMC The Following Recipient Couldn't Be Reached

	Article: Q153150
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send messages through the Internet Mail Connector (IMC), the following
	error message may appear:
	
	  The following recipient could not be reached . . .
	
	This is followed by the e-mail address of the individual you were trying to
	reach.
	
	CAUSE
	=====
	
	If the Domain Name Service (DNS) administrator has used "wildcards" in the MX
	entry for a domain, the above error message appears.
	
	RESOLUTION
	==========
	
	Contact your DNS administrator (or your Internet service provider [ISP] if it is
	providing DNS).
	
	MORE INFORMATION
	================
	
	In many instances, your ISP is also providing the Domain Name Service (DNS)
	resolution. This eliminates the need for smaller users to maintain their own DNS
	server. However, the problem described here may also occur if your DNS server is
	in-house.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
