---
layout: page
title: "Q194742: XFOR: Internet Mail Service Support for user@&#91;IP Address&#93; Format"
permalink: /kb/194/Q194742/
---

## Q194742: XFOR: Internet Mail Service Support for user@&#91;IP Address&#93; Format

{% raw %}

	Article: Q194742
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 13-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Exchange Server versions 4.0 and 5.0, it is not possible to send messages to
	a user by using the following format:
	
	  user@[IP Address]
	
	However, in accordance with for Request for Comments (RFC) 821 and 821bis, this
	is a valid addressing format.
	
	Microsoft recognizes the need for compliance to this RFC specification. Microsoft
	Exchange Server version 5.5 allows for this addressing method and therefore
	allows messages to be sent by using this format. The feature involves a
	modification to the Exchange Server Internet Mail Service to understand IPv4
	literals. The Internet Mail Service is now capable of accepting mail inbound,
	delivering outbound, and rerouting mail addressed in the format "user@[IP
	Address]," also known as IPv4 literal.
	
	NOTE: The admin does not allow you to create a proxy of the form 'user@[IP
	Address]' (it strips the brackets).
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q193316 XFOR: How to create addresses of form 'user@[IP Address]
	
	
	MORE INFORMATION
	================
	
	Per RFC 821 page 31:
	
	  Hosts are generally known by names, which are translated to addresses in each
	  host. Note that the name elements of domains are the official names -- no use
	  of nicknames or aliases is allowed. Sometimes, a host is not known to the
	  translation function and communication is blocked. To bypass this barrier,
	  two numeric forms are also allowed for host "names". One form is a decimal
	  integer prefixed by a pound sign, "#", which indicates the number is the
	  address of the host. Another form is four small decimal integers separated by
	  dots and enclosed by brackets, for example, "[123.255.37.2]", which indicates
	  a 32-bit ARPA Internet Address in four 8-bit fields.
	
	NOTE: The other message format that is noted in this section of RFC 821 is the
	following
	
	  user@#xxxxxxxxx
	
	where xxxxxxxx is a decimal number that corresponds to the host address of the
	computer. The Internet Mail Service on all versions of Exchange Server including
	Exchange 2000 Server does not support this type of addressing.
	
	
	
	Additional query words: IPv4-literal, RFC821, 821bis
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
