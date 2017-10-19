---
layout: page
title: "Q262112: XCON: How Exchange Server Routes One-Off Messages Internally"
permalink: /kb/262/Q262112/
---

## Q262112: XCON: How Exchange Server Routes One-Off Messages Internally

	Article: Q262112
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the one-off address routing process in the Microsoft
	Exchange Server environment.
	
	MORE INFORMATION
	================
	
	A one-off address is an e-mail address that does not directly resolve as a valid
	address in the global address list. Although the address is not resolved by the
	global address list or personal address book, it is underlined as if it were
	resolved.
	
	NOTE: Although most e-mail protocols, such as cc:Mail or MS Mail, require you to
	use brackets ([]) with one-off addresses to denote the type of address and the
	routing, Simple Mail Transport Protocol (SMTP) does not require information
	about the type of address in the mail address.
	
	When a one-off address is routed through Exchange Server, the directory
	associates the address as a domain defined attribute (DDA) in the <local>
	X.400 Site-Proxy-Space. DDA is an X.400 attribute that allows other systems to
	map their address directly to an X.400 O/R address. For example, an e-mail
	message sent to user@microsoft.com is defined as "C=us;a=
	;p=Org;o=Site;dda=SMTP:user@microsoft.com", and then routed by DDA.
	
	If a DDA route is not available, the message transfer agent (MTA) route uses the
	X.400 address. In some instances, an X.400 connector with an address space of
	"C=*" may cause messages with an SMTP one-off address to attempt routing through
	an X.400 connector, and not an SMTP connector. Typically, the message loops when
	re-routed back to the originating site.
	
	Exchange Server routes all one-off addresses by the process described above.
	Custom recipient messages, although similar to one-off messages, are routed
	through a different process.
	
	For additional information about custom recipient message routing, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q262116 How Exchange Server 5.5 Routes Custom Recipient Messages Internally
	
	Additional query words: routing
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
