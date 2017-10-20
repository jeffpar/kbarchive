---
layout: page
title: "Q251152: XADM: Finding Ambiguous or Duplicate Recipients"
permalink: /kb/251/Q251152/
---

## Q251152: XADM: Finding Ambiguous or Duplicate Recipients

{% raw %}

	Article: Q251152
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send an e-mail message to a known Exchange Server address, you may
	receive a non-delivery report (NDR) similar to the following:
	
	  
	
	  Date: Mon, 17 Jan 2000 16:49:25 -0500
	  From: System Administrator<postmaster@testdomain.Microsoft.com>
	  To: user@testdomain2.microsoft.com
	  Subject: Undeliverable: test
	
	  Your message
	
	 To:      testuser@microsoft.com
	 Subject: test
	 Sent:    Mon, 17 Jan 2000 16:48:45 -0500
	
	  did not reach the following recipient(s):
	
	  testuser@microsoft.com on Mon, 17 Jan 2000 16:49:22 -0500
	   The recipient name is ambiguous.  
	     The MTS-ID of the original message is: c=US;a= 
	  ;p=Microsoft;l=user110001172149D1FCA2JL
	   MSEXCH:IMS:Microsoft:testdomain:SERVER1 0 (000C0595) Ambiguous Recipient
	
	You may also receive the following error message when you try to create a
	recipient by using the Exchange Server Administrator program:
	
	  This e-mail address already exists in this organization Microsoft Exchange
	  Administrator ID no: c10312e7
	
	If the message is SMTP based, an event ID 10000 similar to the following may also
	be logged in the application event log of a server that hosts an Internet Mail
	Service:
	
	  Event ID: 10000
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Addressing
	  Description: A message was not delivered because the following address was not
	  unique:
	  testuser@microsoft.com
	
	CAUSE
	=====
	
	This issue can occur because addresses must be unique across an Exchange Server
	organization, and so an address (for example, testuser@testdomain.microsoft.com)
	can only exist once in the organization. However, if the same address is created
	on two separate servers before replication is established or before replication
	has time to finish, it is possible to have two objects with the same address.
	
	RESOLUTION
	==========
	
	To resolve this issue, export the global address list from the server that is
	producing the error. Make sure that you include mailboxes, distribution lists,
	and custom recipients, as well as hidden objects. Also make sure that "E-mail
	Addresses" and "Secondary-Proxy-Addresses" exist in the header of the export
	file with the other fields to be exported. Import the .csv file that is created
	into Microsoft Excel and search for the location of the conflicting directory
	entries. You can then alter or delete the objects, as appropriate.
	
	MORE INFORMATION
	================
	
	For additional information about how to export the directory, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q155414 XADM: Bulk Import/Export FAQ
	
	If the initial export does not produce the objects that you want, you may need to
	export the e-mail addresses that are associated with Public Folder objects. For
	additional information about how to export the e-mail addresses that are
	associated with Public Folder objects, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q185018 XADM: How To Export Public Folder Directory Data To A CSV File
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
