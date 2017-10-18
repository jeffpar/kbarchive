---
layout: page
title: "Q193844: Explanation of DNS Wildcards"
permalink: kb/193/Q193844/
---

## Q193844: Explanation of DNS Wildcards

	Article: Q193844
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Domain Name Service (DNS) can use wildcards to associate multiple possible
	destination names with a single relay point or host.
	
	MORE INFORMATION
	================
	
	Wildcards in DNS records are often used to forward mail to intranets that are
	connected to the Internet by a host that acts as a mail gateway. The Internet
	needs an MX record that will point all mail destined from the Internet to the
	host that is acting as the relay.
	
	The contents of the wildcard resource records conform with normal formats and
	rules for resource records. Importantly, the asterisk (*) label always matches
	at least one whole label and often multiple labels.
	
	Wildcards are not used when the query name is known to exist. The closest match
	will be used.
	
	For example, the record
	
	  *.EXAMPLE.MICROSOFT.COM. IN MX 10 MAIL1.EXAMPLE.MICROSOFT.COM.
	
	would allow mail destined for the domains NEWYORK.EXAMPLE.MICROSOFT.COM and
	MIAMI.FLORIDA.EXAMPLE.MICROSOFT.COM to be able to reach its destination through
	the mail server MAIL1.EXAMPLE.MICROSOFT.COM.
	
	NOTE: The asterisk (*) wildcard symbol must match at least one whole label.
	E-mail destined to johndoe@EXAMPLE.MICROSOFT.COM would not use the above record
	to arrive at its destination. An additional record, such as the following, would
	be necessary:
	
	  EXAMPLE.MICROSOFT.COM. IN MX 10 MAIL1.EXAMPLE.MICROSOFT.COM.
	
	Additional query words: wildcards MX
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
