---
layout: page
title: "Q167013: XCLN: Exchange and Mail Provider SMTP Templates Different"
permalink: kb/167/Q167013/
---

## Q167013: XCLN: Exchange and Mail Provider SMTP Templates Different

	Article: Q167013
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An SMTP address cannot be modified. This problem occurs because the Microsoft
	Exchange Client was originally using a personal address book (PAB) and
	connecting to a Microsoft Mail for PC Networks 3.x postoffice when the SMTP
	address was created. Now, the Microsoft Exchange Client is connecting to a
	Microsoft Exchange Server computer, but is using the same PAB.
	
	CAUSE
	=====
	
	This problem occurs because there are two SMTP address templates in Microsoft
	Exchange Client. One is used when creating SMTP addresses with the Microsoft
	Mail Provider (that is, using Microsoft Exchange Client with the Microsoft Mail
	service). The second template is used when creating SMTP addresses with the
	Microsoft Exchange Provider (that is, using Microsoft Exchange Client with the
	Microsoft Exchange service). The SMTP addresses created with the Microsoft Mail
	Provider become read-only when the Microsoft Mail Provider is no longer in use.
	
	WORKAROUND
	==========
	
	To work around this problem, re-create the address in the new Microsoft Exchange
	SMTP template form. You can do this by performing the following steps:
	
	1. Open the old SMTP address.
	
	2. Copy the entire SMTP address.
	
	3. Open a new SMTP address.
	
	4. Paste the SMTP address, copied in step 2 above.
	
	5. Delete the old SMTP address.
	
	MORE INFORMATION
	================
	
	If you export and import the PAB, the same template information will be imported
	along with the SMTP address. There is no way to change the template information
	from a Microsoft Mail template to a Microsoft Exchange template other than to
	manually recreate the SMTP address entries when using the Microsoft Exchange
	Service Provider.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
