---
layout: page
title: "Q232618: XADM: Importing Custom Recipient Logs Event ID 236"
permalink: kb/232/Q232618/
---

## Q232618: XADM: Importing Custom Recipient Logs Event ID 236

	Article: Q232618
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to import a custom recipient through the Exchange Administrator
	Program by using Directory Import on the Tools menu, the following stop error
	Event ID 236 may be logged in the application log.
	
	  Event ID:236
	  Source: MSExchangeDSImp
	  Type: Error
	  Category: None
	
	  Unable to process custom recipient <Name of custom recipient> because
	  target address SMTP:(user@<company_name>.com) has already been assigned
	  to Address Book entry /o=DomainName/ou=Site/cn=Recipients/cn=user.
	
	CAUSE
	=====
	
	This problem occurs if you are importing a custom recipient that has an SMTP
	alias that already exists. When the same address already exists for the user you
	are importing, you cannot import the custom recipient.
	
	RESOLUTION
	==========
	
	Edit the .csv file and change the duplicate e-mail address for the specified
	custom recipient. Try the directory import operation again.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q155414 XADM: Bulk Import/Export FAQ ID for additional information on
	  Directory Imports and Exports
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
