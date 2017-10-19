---
layout: page
title: "Q196174: XADM: How Move Server Wizard Handles Duplicate E-Mail Addresses"
permalink: /kb/196/Q196174/
---

## Q196174: XADM: How Move Server Wizard Handles Duplicate E-Mail Addresses

	Article: Q196174
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server Move Server Wizard has been designed to resolve
	duplicate e-mail addresses.
	
	For example, suppose there is an account called Administrator in Container A on
	the server to be moved. Another account called Administrator is in Container B
	on the destination server. Both Administrator accounts have the same SMTP
	address. Run the Move Server Wizard to merge the servers together into the same
	site. The wizard does not prompt you that there is a duplicate SMTP address.
	
	The wizard will only check and prompt the wizard administrator for duplicate
	users that have the same Distinguished Name (DN) (that is, /o=orginization
	name/ou=site name/cn=container name/cn=user name). Because the users are in
	different containers, the DN is different. Therefore, no prompt occurs.
	
	The ProxyFixup.csv file will be populated with any changes that will be made to
	duplicate e-mail addresses (for example, SMTP). In addition to creating the
	ProxyFixup.csv file for every duplicate e-mail address, the Move Server Wizard
	will also report (or flag) the number of duplicates that are found in the
	pre-report, so that the administrator can resolve these before the move.
	
	If you are merging in from a different organization, the Move Server Wizard will
	create the proxy addresses using the site addressing defined in the new site. It
	will always create a unique proxy.
	
	Additional query words: ccmail x400 msw
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
