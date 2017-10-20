---
layout: page
title: "Q190710: XFOR: How to Use Internet Mail Service to Reroute Messages"
permalink: /kb/190/Q190710/
---

## Q190710: XFOR: How to Use Internet Mail Service to Reroute Messages

{% raw %}

	Article: Q190710
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Administrators of Microsoft Exchange server 5 and higher have the ability to
	reroute internet mail messages with the originating 821 header intact, or
	rewritten to the site associated to the host where the IMS is homed.
	
	MORE INFORMATION
	================
	
	To reroute by rewriting the RFC-821 RCPT TO: header, follow these steps:
	
	1. Open the Properties page on the Internet Mail Service.
	
	2. Click the Routing tab.
	
	3. Click the "Reroute incoming SMTP mail" option.
	
	4. Click Add.
	
	5. After the Add E-mail Domain page opens, type the domain that you are
	  rerouting for into the "E-mail sent to this domain:" box.
	
	6. Select the "Should be rerouted to this domain:" option, and then type the
	  domain you want to route to.
	
	7. Click OK when you finish.
	
	Example: If you want everything destined for "test.com" (user@test.com) to be
	rerouted to "example.com", and you want the headers rewritten to
	user@example.com, follow these steps:
	
	1. On the Routing tab, select <Add...>, and then type "test.com" (without
	  the quotation marks).
	
	2. Select the "Should be routed to this domain"" button, and then type
	  "example.com" (without the quotation marks).
	
	To reroute while maintaining the RFC-821 RCPT TO: header, follow these steps:
	
	1. Open the Properties page on the Internet Mail Service.
	
	2. Select the Connections tab, and then click the <E-mail Domain> button.
	
	3. Select Add.
	
	4. After the "Add E-Mail Domain" page opens, type the domain that you are
	  rerouting for into the E-Mail Domain: box.
	
	5. Select the "Forward all messages for this domain to host:" option. Type the
	  domain (or IP address) you want to route to.
	
	6. Click OK when you finish.
	
	NOTE: Do not add to the Routing page.
	
	Example: If you want everything destined for "test.com" (user@test.com) to be
	rerouted to "example.com" (or the IP address for "example.com") and you want the
	headers to remain user@test.com, follow these steps:
	
	1. On the Connections tab, select the <E-Mail Domain> domain button, and
	  then add a new entry for "test.com."
	
	2. Type the host name or IP address for the mail exchanger at "example.com" in
	  "Forward all messages for this domain to host:".
	
	Additional query words: routing forwarding rcpt to: rfc-821
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
