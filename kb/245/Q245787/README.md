---
layout: page
title: "Q245787: XFOR: SMTP Error Message: 550 Invalid Domain"
permalink: kb/245/Q245787/
---

## Q245787: XFOR: SMTP Error Message: 550 Invalid Domain

	Article: Q245787
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send outbound Simple Mail Transfer Protocol (SMTP) mail, a non-delivery
	report (NDR) similar to the following is displayed:
	
	  550 Invalid Domain.
	
	The following NDR is also logged in the application event log:
	
	  Event ID: 4031
	  Source: MSEXCHANGEIMC
	  Description:
	  The message could not be delivered. The destination server reported: 550
	  Invalid Domain.
	
	CAUSE
	=====
	
	This problem may be caused by a Domain Name System (DNS) record that points to
	the wrong mail host for a certain domain. This incorrect DNS information causes
	Exchange Server to connect to the wrong mail host when you try to send mail to a
	recipient in another domain, which generates the error message in the "Symptoms"
	section of this article.
	
	This problem may also be caused by the incorrect configuration of an "echo
	firewall." The echo firewall is an advanced device that verifies every command
	that is sent to the Exchange Server computer. This type of firewall cannot be a
	Network Address Translation (NAT) or packet-filter device. If you incorrectly
	configure this firewall so that it does not accept mail from a domain that it
	needs to accept mail from, the error message in the "Symptoms" section of this
	article may also be displayed. The mail never resides on the firewall, but
	passes through it.
	
	RESOLUTION
	==========
	
	Use the NSLookup utility to make sure that the MX and A records of the Exchange
	Server domain on the Internet are correct.
	
	If the problem is related to the incorrect configuration of an echo firewall,
	then correct the configuration of the firewall.
	
	MORE INFORMATION
	================
	
	The error message in the "Symptoms" section of this article is closely related
	to the following Exchange Server generated error message:
	
	  550 Relaying is prohibited
	
	The message route of this topology is:
	
	  Sending Exchange Server ----- Internet ------ Firewall ----- Mailhost
	
	The SMTP conversation of this problem may look like the following log:
	
	  
	
	  A connection to 10.1.1.25 was established.
	
	  <<< IO: |220 firewall.expedia.com Generic SMTP handler
	
	  <<< 220 firewall.expedia.com Generic SMTP handler
	
	  >>> EHLO ExchangeSending.microsoft.com
	
	  <<< IO: |500 Command unrecognized
	
	  <<< 500 Command unrecognized
	
	  >>> HELO ExchangeSending.microsoft.com
	
	  <<< IO: |250 firewall.expedia.com talking to
	  mailhost.expedia.com [157.5.1.4])
	
	  <<< 250 firewall.expedia.com talking to mailhost.expedia.com ([157.5.1.4])
	
	  >>> MAIL FROM: <bob@microsoft.com>
	
	  <<< IO: |250 <bob@microsoft.com>: Sender Ok
	
	  <<< 250 <bob@microsoft.com>: Sender Ok
	
	  >>> RCPT TO:<vincent@expedia.com>
	
	  <<< IO: |550 Domain invalid
	
	  <<< 550 Domain invalid
	
	  >>> QUIT
	
	  <<< IO: |221 firewall.microsoft.com closing connection. Goodbye!
	
	Additional query words: 4031 3010 Invalid Raptor Secure Gateway
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
