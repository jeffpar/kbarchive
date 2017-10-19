---
layout: page
title: "Q156545: XFOR: How to Set Up a 2nd MS-type Proxy Address for MSMail Users"
permalink: /kb/156/Q156545/
---

## Q156545: XFOR: How to Set Up a 2nd MS-type Proxy Address for MSMail Users

	Article: Q156545
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To set up a secondary Microsoft Mail proxy address for Microsoft Mail users to
	send mail to:
	
	1. In the Microsoft Exchange Server Administrator program, bring up the
	  properties of the mailbox you want a to add a new proxy address for.
	
	2. Click the "E-mail Addresses" tab.
	
	3. Click New and click Microsoft Mail Address.
	
	4. Enter the information requested and apply.
	
	  This new proxy address must now be defined as an external postoffice on all
	  Microsoft Mail Postoffices that are indirect via the Microsoft Mail Connector
	  Interchange Connector postoffice.
	
	MORE INFORMATION
	================
	
	Example:
	
	Bob needs a secondary proxy address. So we give Bob a new proxy address with his
	old NET/PO: OLDNET/OLDPO/BOB. Now Bob has two MS-type addresses:
	
	  MS:ORG/SITE/BOB
	  MS:OLDNET/OLDPO/BOB
	
	Now you need to go to the Microsoft Mail server and use the Microsoft Exchange
	Server Administrator program to create a new postoffice definition for
	OLDNET/OLDPO as indirect via ORG/SITE. This will allow Microsoft Mail users to
	mail to this address.
	
	NOTE: Exchange users will receive non-delivery reports (NDRs) when sending mail
	messages to this address. This procedure only allows foreign mail systems to use
	the second proxy address.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
