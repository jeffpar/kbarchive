---
layout: page
title: "Q155589: XADM: Import Format for Generic SMTP Custom Recipient"
permalink: /kb/155/Q155589/
---

## Q155589: XADM: Import Format for Generic SMTP Custom Recipient

	Article: Q155589
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 08-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Administrator program can automatically generate custom
	recipients based on information provided in an import file.
	
	This article describes the minimum custom recipient attributes required to
	automatically import SMTP custom recipients.
	
	MORE INFORMATION
	================
	
	The following attributes are required to generate SMTP custom recipients:
	
	  Obj-Class, First Name, Last name, Display Name, Alias Name, Directory Name,
	  E-mail addresses
	
	The Header.exe program included in the Microsoft Exchange Resource Kit could be
	used to create an Import file with the above headers. The above headers could
	also be manually added to a file, using a text editor.
	
	Once the import file has been created with the desired headers, the corresponding
	data for each custom recipient should be added to the file. For example:
	
	  Remote,User1,User1,User1,User1,SMTP:User@ORG.COM
	
	Additional query words: custom recipients SMTP
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	
