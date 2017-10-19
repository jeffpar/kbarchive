---
layout: page
title: "Q249029: XFOR: Using a Verisign Certificate with Exchange Server SSL"
permalink: /kb/249/Q249029/
---

## Q249029: XFOR: Using a Verisign Certificate with Exchange Server SSL

	Article: Q249029
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you set up Exchange Server to use Secure Sockets Layer (SSL) for Internet
	protocols such as Network News Transfer Protocol (NNTP), Simple Mail Transfer
	Protocol (SMTP), Post Office Protocol version 3 (POP3), and Internet Message
	Access Protocol (IMAP), you may want to use a certificate that you obtained from
	another source, such as Verisign.
	
	You only need to have one certificate for each fully qualified domain name
	(FQDN). If you obtained a certificate from Verisign, perhaps for use with
	Microsoft Internet Information Server (IIS), you can also use the certificate
	for Exchange Server if it is running on the same computer.
	
	You need to know the password for the original certificate request to install the
	certificate.
	
	MORE INFORMATION
	================
	
	After you install the certificate on IIS, you can install the certificate in the
	same way for the Exchange Server protocols by using the Key Manager utility. For
	additional information about how to create a request and install a certificate,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q171084 How to Install a Certificate
	
	If the original key file was misplaced, you can create a backup:
	
	1. Start Key Manager, click Key, click Export Key, and then click Backup File.
	
	2. Save the key to a file.
	
	3. For each Exchange Server protocol, click Key, click Import Key, and then
	  click Backup File.
	
	4. Type the password for the original certificate.
	
	For additional information about enabling SSL for Exchange Server, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q175439 XFOR: Enabling SSL For Exchange Server
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
