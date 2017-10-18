---
layout: page
title: "Q243045: XIMS: Internet Mail Service Reroutes Message Even Though the"
permalink: kb/243/Q243045/
---

## Q243045: XIMS: Internet Mail Service Reroutes Message Even Though the

	Article: Q243045
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you configure the Microsoft Internet Mail Service for selective IP routing
	by clicking to select the "Host and clients with these IP addresses" check box
	under Routing Restrictions on the Routing tab of the Internet Mail Service
	Properties page, and add host IP addresses and their subnet mask, the host or
	client members of this range can route mail, which is the expected behavior.
	However, if you then configure the Internet Mail service for no routing by
	clicking to select the "Do not reroute incoming SMTP mail" check box on the
	Routing tab of the Internet Mail Service Properties page, mail continues to be
	routed if it is submitted by the same set of host or client members set during
	the first configuration.
	
	CAUSE
	=====
	
	When you switch back to the "Do not reroute incoming SMTP mail" option, the
	values of the routing flags and routing restriction IP addresses are not removed
	from the registry, which causes the behavior described in the "Symptoms"
	section.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. In the Exchange Server Administrator program, open the Internet Mail Service
	  Properties page.
	
	2. Click the Routing tab, and enable rerouting by clicking to select the
	  "Reroute incoming SMTP mail" check box.
	
	3. Click the Routing Restrictions button, and remove all the IP addresses.
	
	4. Click OK, and disable routing again by clicking to select the "Do not reroute
	  SMTP mail" check box.
	
	5. Restart the Internet Mail Service.
	
	After the address is removed from Routing Restrictions, relaying is prohibited if
	you test by using Telnet as mentioned in the "More Information" section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	Version 5.5 Service Pack 3.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Install Exchange Server 5.5 SP3 with the Internet Mail Service.
	
	2. On the Routing tab of Internet Mail Service Properties page, click to select
	  the "Reroute incoming SMTP mail" option.
	
	3. On the Routing Restrictions tab, click to select the "Hosts and clients with
	  these IP addresses" check box. Click Add, and type the IP address of a test
	  client and subnet mask.
	
	4. Apply the changes, and restart the Internet Mail Service.
	
	5. Telnet to the Internet Mail Service from a test client whose IP you used for
	  a restriction in step 3. In the Telnet window, type:
	
	  MAIL FROM:test@test.com
	  RCPT TO:anyuser@bogusaddress.com
	
	It should reply with:
	
	  250 OK
	  quit
	
	6. Telnet to the Internet Mail Service from another IP address, and attempt to
	  use the same SMTP commands as in step 5. You should get a "relaying
	  prohibited" error.
	
	7. Return to the Internet Mail Service Properties page, click to select the "Do
	  not reroute incoming SMTP mail" check box, and then cycle the Internet Mail
	  Service.
	
	8. Attempt to use the commands in step 5 again.
	
	Relaying is successful even though the "Do not reroute incoming SMTP mail" check
	box is selected.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Component         : Admin IMS
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
