---
layout: page
title: "Q280118: XFOR: Non-Delivery Report with &quot;501 Sender Domain Must Exist&quot; Me"
permalink: /kb/280/Q280118/
---

## Q280118: XFOR: Non-Delivery Report with &quot;501 Sender Domain Must Exist&quot; Me

{% raw %}

	Article: Q280118
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some Microsoft Exchange e-mail messages generate a non-delivery report (NDR)
	with the message "501 sender domain must exist." This behavior occurs because
	the sender domain is not registered on the Internet. Check with your Internet
	service provider (ISP) or Domain Name System (DNS) administrator to verify that
	the sender's domain has MX records on the Internet.
	
	MORE INFORMATION
	================
	
	Some other (non-Exchange Server) mail systems check the sender's e-mail domain
	to prevent junk e-mail (spam). This is called performing a reverse lookup.
	
	When these mail systems receive an SMTP connection, they attempt name resolution
	based on the address in the From field. If the address in the From field cannot
	be resolved by DNS, the receiving mail system responds with "501 Sender domain
	must exist," and closes the connection, causing the NDR.
	
	As a test, try to telnet the destination server over port 25. You receive the
	following results
	
	  mail from:test@DomainTest.com
	  501 test@DomainTest.com... Sender domain must exist
	
	and the connection generates the NDR.
	
	Then, try opening a telnet session over port 25 from a domain that is known to
	work. The following results are returned:
	
	  mail from:test@Microsoft.com
	  250 test@Microsoft.com... Sender ok
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
