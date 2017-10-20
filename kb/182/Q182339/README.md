---
layout: page
title: "Q182339: XFOR: Verifying the Configuration of an Internet Mail Service"
permalink: /kb/182/Q182339/
---

## Q182339: XFOR: Verifying the Configuration of an Internet Mail Service

{% raw %}

	Article: Q182339
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,4.0a,4.5,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 18-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to verify that an Internet Mail Connector (IMC) or
	Internet Mail Service is configured properly. If you are unable to send or
	receive Simple Mail Transfer Protocol (SMTP) messages after installing an IMC or
	Internet Mail Service, these troubleshooting steps may resolve the problem.
	
	MORE INFORMATION
	================
	
	If you are unable to send or receive messages using SMTP, use the following
	steps to troubleshoot the problem. After performing each step, check to see if
	the issue has been resolved.
	
	1. If you currently obtain an Internet protocol (IP) address for the Microsoft
	  Exchange Server computer dynamically, contact your Internet service provider
	  (ISP) and request a static IP address instead. The ISP should also create a
	  mail exchanger (MX) record and an address (A) record for the Microsoft
	  Exchange Server computer on their Domain Name System (DNS) server.
	
	  NOTE: The Nslookup.exe program can be used to verify that the appropriate MX
	  and A records exist on the DNS server.
	
	
	2. Contact your ISP and do the following:
	
	   - Request the IP address of their SendMail server.
	
	   - Request the IP address of their DNS server.
	
	   - Specify your site's domain name. This is the address that your ISP uses to
	     publish your Web site on the Internet and the address that people use to
	     send SMTP messages to you.
	
	On the Connections tab in the properties for the Internet Mail Service, specify
	the IP address of the ISP's SendMail server instead of the fully qualified
	domain name (FQDN). To do so, follow these steps:
	
	  a. In the Microsoft Exchange Administrator program, select the appropriate
	     Internet Mail Service, and then click Properties on the File menu.
	
	  b. Click the Connections tab.
	
	  c. In the Message Delivery area, verify that Forward All Messages To Host is
	     selected, type the ISP's IP address in the Forward All Messages To Host
	     box, and then click OK.
	
	3. If your network contains post office protocol version 3 (POP3) e-mail clients
	  that connect to the Microsoft Exchange Server computer, verify that the
	  "Reroute incoming SMTP mail (required for POP3 support)" option is selected
	  on the Routing tab in the properties for the Internet Mail Service.
	
	4. On the Address Space tab in the properties for the Internet Mail Service,
	  verify that an SMTP entry exists for the address * (asterisk). The entry
	  should look similar to the following:
	
	     Type   Address   Cost
	     ---------------------
	     SMTP   *         1
	
	5. In the properties for the SMTP entry that you verified existed in step 4,
	  verify that the Routing Address tab is blank. To do so, follow these steps:
	
	  a. In the Microsoft Exchange Administrator program, select the appropriate
	     Internet Mail Service, and then click Properties on the File menu.
	
	  b. Click the Address Space tab, click the SMTP entry, and then click Edit.
	
	  c. Click the Routing Address tab, verify that the Type and Address boxes are
	     blank, click OK, and then click OK again.
	
	6. Verify that the Transport Control Protocol/Internet Protocol (TCP/IP)
	  protocol is configured properly on the Microsoft Exchange Server computer. To
	  do so, follow these steps:
	
	  a. In Control Panel, double-click Network.
	
	  b. Click the Protocols tab, click the TCP/IP protocol, and then click
	     Properties.
	
	  c. Click the DNS tab, and then verify that the correct host name is specified
	     in the Host Name box.
	
	  d. Verify that your site's domain name is specified in the Domain box.
	
	  e. In the DNS Service Search Order area, add the IP address of each of your
	     ISP's DNS servers. You requested this information from your ISP in step 2.
	
	  f. Click OK, and then stop and restart the IMC or Internet Mail Service.
	
	Additional query words: sbsfaqtop ims sbs smallbiz
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : winnt:4.0,4.0a,4.5,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
