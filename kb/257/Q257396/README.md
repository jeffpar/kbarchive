---
layout: page
title: "Q257396: XFOR: Read Receipts Between Exchange Servers in Different Orgs"
permalink: /kb/257/Q257396/
---

## Q257396: XFOR: Read Receipts Between Exchange Servers in Different Orgs

{% raw %}

	Article: Q257396
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure Exchange Server computers that are in
	different environments to successfully deliver messages that include read
	receipts over the Internet Mail Service.
	
	You can also use the steps in this article to send other Exchange Server-specific
	messages such as meeting requests, tasks, and some forms between organizations.
	
	MORE INFORMATION
	================
	
	Read receipts function between any properly configured Exchange Server computer,
	regardless of the organization that they belong to.
	
	Read receipts are client-specific functions. That is, they are generated and
	handled by clients. Microsoft Outlook 97, Microsoft Outlook 98, Microsoft
	Outlook 2000, and Microsoft Outlook Express support read receipts. You can
	configure Outlook Express to give you the option of sending the read receipt
	before the receipt is actually sent. In Outlook 97, Outlook 98, and Outlook
	2000, read receipts are automatically sent when the message is read.
	
	If the Internet Mail Service is set up to use third-party relay hosts, the read
	receipt functionality works because read receipts are Multipurpose Internet Mail
	Extensions (MIME)-encoded in the message. As long as the third-party Simple Mail
	Transfer Protocol (SMTP) servers or firewalls do not strip the MIME encoding,
	you are able to use third-party smart hosts between Exchange Server computers.
	
	To ensure read receipts are sent between Exchange Server computers, use Microsoft
	Rich Text Formatting (MS-RTF), sometimes called Transport Neutral Encoding
	Format (TNEF), for message delivery. You can configure this formatting on the
	Exchange Server computer or on the Outlook client.
	
	To configure the Exchange Server Internet Mail Service to use MS-RTF when you are
	sending a message to a particular Internet domain, follow these steps:
	
	1. In the Exchange Administrator program, open the properties of the Internet
	  Mail Service.
	
	2. Click the Internet Mail tab, click E-mail Domain, click Add, and then type
	  the domain name.
	
	3. Click Advanced options, and then set the "Send Microsoft Exchange Rich Text
	  Formatting" option to Always.
	
	  NOTE: To set this option for all domains, specify the domains on the main
	  Advanced options button. However, if you follow this method, you may
	  experience issues if you send messages to non-Microsoft clients or servers.
	  It is recommended that you set the "Send Microsoft Exchange Rich Text
	  Formatting" option to User for all domains, and then make specific
	  exceptions.
	
	When the "Send Microsoft Exchange Rich Text Formatting" option is set to User,
	you can configure the Outlook client to use MS-RTF when you are sending messages
	to a particular user. To do this, use any of the following methods:
	
	- If you are using a one-off address (for example, an SMTP address that you
	  typed in the To box of the new message), double-click the verified name, and
	  then click to select the "Always send this recipient in rich text formatting"
	  check box before you send the message.
	
	- If you are using address book entries, verify that the "Always send to this
	  recipient in rich text formatting" option has been selected before you save
	  the entry.
	
	- If you are using custom recipients, in the Exchange Administrator program,
	  click the Advanced tab for that recipient, and then click to select "Allow
	  rich text in messages".
	
	If the read receipt functionality is not working, configure the Internet Mail
	Service to forward messages directly to the Internet Mail Service on the remote
	server. When you use this method, firewalls and routers are bypassed for all
	mail flow. This method is as a test which avoids third-party connections:
	
	1. In the Exchange Administrator program, open the properties of the Internet
	  Mail Service.
	
	2. Click the Connections tab and use either of the following methods:
	
	   - In the Message delivery section, in the "Forward all messages to a host"
	     box, enter a host name or Internet protocol (IP) address of the remote
	     Exchange Server computer that is hosting the Internet Mail Service.
	
	     -or-
	
	   - Click the "Specify by e-mail domain" button, and then add the remote
	     domain that you want to directly forward messages to. In the Forward all
	     messages for this domain to host box, type the IP address of the remote
	     Exchange Server computer that is hosting the Internet Mail Service.
	
	     NOTE: This method works well when there are more than two servers hosting
	     an Internet Mail Service connector, or if you are using DNS for mail
	     delivery.
	
	3. Stop, and then restart the Internet Mail Service for this change to take
	  effect.
	
	4. Make these changes on every Internet Mail Service that participates in this
	  configuration.
	
	Additional query words: rtf receipts imc IMS
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
