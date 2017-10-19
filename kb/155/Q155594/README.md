---
layout: page
title: "Q155594: XADM: Generic Import Format to Add SMTP Secondary Proxy Address"
permalink: /kb/155/Q155594/
---

## Q155594: XADM: Generic Import Format to Add SMTP Secondary Proxy Address

	Article: Q155594
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you an import file format that produces a custom recipient
	with the same characteristics as a custom recipient produced using the Microsoft
	Exchange Administrator program.
	
	MORE INFORMATION
	================
	
	To produce a custom recipient with the Exchange Administrator program, complete
	the SMTP address and First and Last name fields in the "New Custom Recipient"
	dialog box. Using the E-mail Addresses dialog box in the given custom recipients
	dialog box, add a "New E-mail address" type of Internet Address.
	
	To produce a custom recipient with the same characteristics as one produced by
	the procedure above, use the following import file format:
	
	  Obj-Class, First Name, Last name, Display Name, Alias Name, Directory Name,
	  E-mail Address, Secondary-Proxy-Addresses
	
	  Remote,User,1,User1,User1,User1,SMTP:User1@org.com,
	  SMTP:User1@org2.com%SMTP:User1@org3.com%SMTP:User2@org2.com
	
	NOTE: The file must be produced using a tool, for example Excel, that does not
	produce an end-of-line character or line feed.
	
	Additional query words: CSV SMTP Custom Recipient Import Secondary Proxy
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
