---
layout: page
title: "Q148985: XFOR: Frequently Asked Questions for IMC"
permalink: /kb/148/Q148985/
---

## Q148985: XFOR: Frequently Asked Questions for IMC

	Article: Q148985
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains some of the frequently asked questions for the Microsoft
	Exchange Internet Mail Connector.
	
	Q. I want to have a different SMTP address. For inside my organization, I want to
	use "user@host", and for outside my organization, I want to use
	"user@company.com". How can I set this up?
	
	A. You can change this in the Configuration object, Site Addressing object, Site
	Addressing tab. Note that the Exchange recipient has to have an additional
	SMTP-style address created in their e-mail addresses tab. If every Exchange
	recipient wants two different SMTP addresses, use DIRECTORY IMPORT, with the
	attribute Secondary -Proxy-Addresses.
	
	Q. When I send mail to the Internet, sometimes the recipient has garbage at the
	end of the file, and it says it is the Winmail.dat file at the beginning. How
	can I get rid of this?
	
	A. The Winmail.dat file is created and used by Exchange and MS Mail to hold RTF,
	attachments, and positioning information of text in the message. If the
	recipient's mail host does not know what to do with the Winmail.dat file, you
	can prevent it from being sent out the Internet Mail Connector (IMC) in three
	different ways:
	
	1. Configure the IMC using the Internet Mail tab, Interoperability Button, and
	  set "Send Microsoft Exchange rich text formatting" to Never. This will
	  disable it for all IMC Messages.
	
	2. If the recipient is a custom recipient in Exchange, make sure he does not
	  have "Allow rich text in messages" checked on the Advanced tab.
	
	3. If the recipient is in a personal address book (PAB), ensure that the "Always
	  send to this recipient in Microsoft Exchange rich-text format" option is not
	  checked. This option is on the SMTP-General tab.
	
	Q. Can I use DHCP to configure the IMC host?
	
	A. This is not recommended. The IP address of the IMC host needs to be entered in
	a DNS or host table in order for other SMTP hosts to send mail to the IMC. If
	the IP address changes periodically, these records will have to be changed also.
	It is best to have a static IP address for the IMC. If DHCP must be used, you
	should set up a permanent lease for the IMC host.
	
	Q. How do I get the IMC to dial-up my Internet provider using async and retrieve
	mail?
	
	A. The IMC itself cannot dial up and send or receive mail. The IMC expects to
	have the ability to connect to other SMTP hosts already available. However,
	there is a way to accomplish the same thing using the AT command in Microsoft
	Windows NT Server. The administrator will make arrangements with the Internet
	Provider to hold mail delivery until certain predefined times.
	
	At these predefined times, the IMC service can be started with the AT command.
	Because the IMC can accept multiple simultaneous connections, it can send and
	receive mail from the Internet Provider at the same time.
	
	Q. I want to use the IMC and Exchange to handle mail between my <your favorite
	SMTP> mail users and <other next favorite SMTP> mail users. How do I do
	this?
	
	A. Exchange and the IMC must know in the Directory for whom it is delivering
	mail. For this to work, all users on each SMTP system MUST be added as custom
	recipients into Exchange.
	
	Q. I keep getting an error when I send mail that says: "No route to intended
	recipient." What does this mean?
	
	A. It means that the Address Space for the IMC is not set up correctly. If you
	want all SMTP mail to go to this IMC, use a type of "SMTP", address of "*" and
	cost of 1.
	
	Q. The IMC is using DNS and I have a Hosts File In the Event of the DNS Being
	Down. When the DNS server is down all the mail stays in the queue. The Hosts
	File is never used.
	
	A. This is by design. The IMC does not use the Hosts File if the DNS is down;
	this will protect against outdated addresses in the Hosts File being used to
	deliver the mail to a wrong adress. To fix the problem configure the IMC to send
	to a specific host address until the DNS is up, then change it back to DNS.
	
	
	Additional query words: IMC FAQ SMTP exfaqcon
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
