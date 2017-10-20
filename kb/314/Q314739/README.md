---
layout: page
title: "Q314739: XADM: Recipients Exmerged to New IS in New Org or Site Get NDRs"
permalink: /kb/314/Q314739/
---

## Q314739: XADM: Recipients Exmerged to New IS in New Org or Site Get NDRs

{% raw %}

	Article: Q314739
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use the Exmerge.exe utility in Exchange Server 5.5 to move recipients
	to a new information store, where the organization or site name is different,
	these recipients may receive non-delivery reports (NDRs) when they reply to some
	messages that they received before the move to the new information store.
	
	CAUSE
	=====
	
	This behavior can occur because the recipients' distinguished name (DN) is no
	longer the same.
	
	RESOLUTION
	==========
	
	To resolve this behavior, start Microsoft Excel, and then follow these steps:
	
	1. Create a .csv file whose columns have the following headers:
	
	   - Obj-Class
	   - Directory Name
	   - Alias Name
	   - E-mail Addresses
	
	2. Perform a directory export of all the affected users into the .csv file.
	
	3. In the .csv file, without deleting the header, delete the contents of the
	  E-mail Addresses column.
	
	4. Apply the following formula to the E-mail Addresses column:
	
	  ="X500:/o=<OldOrgNameHere>/ou=<OldSiteNameHere>/cn=Recipients/cn="<cell
	  of user alias>
	
	  This formula makes it easier for you to create an X500 proxy address for each
	  user.
	
	5. Import the .csv file back into Exchange Server.
	
	6. Modify the affected recipients' addresses by using the .csv file.
	
	Note that the formula for the E-mail Addresses column is based on recipients in
	the Recipients container. If you have other custom containers, adjust the
	formula accordingly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
