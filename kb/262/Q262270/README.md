---
layout: page
title: "Q262270: Outbound IMS Mail Backing Up Due to Incorrect TCP/IP LAN Setting"
permalink: /kb/262/Q262270/
---

## Q262270: Outbound IMS Mail Backing Up Due to Incorrect TCP/IP LAN Setting

	Article: Q262270
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you forward Internet mail by using the Exchange Server 5.5 Internet Mail
	Service and the Domain Name System (DNS), you may notice e-mail backing up in
	the Internet Mail Service outbound queues.
	
	CAUSE
	=====
	
	The outbound mail queues may be backing up due to a DNS configuration error.
	
	RESOLUTION
	==========
	
	To test whether DNS is set up properly, do one of the following:
	
	- Click "Forward all messages to host" on the Connections tab of the Internet
	  Mail Service. Set this to the IP address of your Internet service provider's
	  (ISP's) mail server. If outbound mail flow is restored when you do this, then
	  the Internet Mail Service is having problems resolving names using DNS.
	
	- Run the IMC DNS Resolver utility that is located on the Exchange Server CD to
	  verify if DNS is the issue.
	
	MORE INFORMATION
	================
	
	
	For additional information about how to properly configure DNS, refer to the
	following white paper from the following Microsoft Web site:
	
	  http://www.microsoft.com/WINDOWS2000/library/howitworks/communications/nameadrmgmt/w2kdns.asp
	
	For additional information about how to properly configure DNS, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q146556 XFOR: Method Used by IMS to Obtain IP Address
	
	  Q135919 DNS Server Search Order Functionality in Windows NT
	
	  Q203204 How to Obtain MX Records with the Nslookup.exe Utility
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbwin2000Ssearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:2000; winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
