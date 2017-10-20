---
layout: page
title: "Q229565: XADM: Public Folder Affinity and Multiple Domains"
permalink: /kb/229/Q229565/
---

## Q229565: XADM: Public Folder Affinity and Multiple Domains

{% raw %}

	Article: Q229565
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange Server, version 5.0 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a client attempts to connect to a public folder in another site that has
	public folder affinity configured but has no trust set up, the user may receive
	the following error message:
	
	  Unable to display the folder. The contents of this public folder are not
	  currently available. Either the Microsoft Exchange server computer servicing
	  this public folder is down or the public folder has not been replicated to
	  this site. See your administrator.
	
	MORE INFORMATION
	================
	
	This occurs because there is not a trust between the two domains. For public
	folder affinity to work between domains, the following conditions must be true:
	
	- There must be at least a one-way trust.
	
	- The domain with the site that has the folders has to trust the domain with
	  the mailbox that needs access to the folders.
	
	Then public folder affinity in the site where the mailboxes are located must be
	configured. To set up public folder affinity, perform the following steps:
	
	1. Log on as the Service Account to the Site where the mailboxes are located.
	
	2. Go to the Properties of the Information Store Site Configuration, and click
	  on the Public Folder Affinity tab.
	
	3. Select the Site where the trust has been set up, and add it to the Public
	  Folder Affinity list, which is on the right side.
	
	Additional query words: trusted trusting admin
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword8 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange500SP1
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
