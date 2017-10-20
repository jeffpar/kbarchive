---
layout: page
title: "Q255888: XFOR: Migration from MS Mail to Exchange Server Does Not Work"
permalink: /kb/255/Q255888/
---

## Q255888: XFOR: Migration from MS Mail to Exchange Server Does Not Work

{% raw %}

	Article: Q255888
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2,3.2a,3.5; winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to migrate more than one user from a Microsoft Mail (MS Mail)
	postoffice to an Exchange Server 5.0 or 5.5 computer, the e-mail messages may
	not be migrated and the following event ID 7044 error message may be logged in
	the Application event log:
	
	  Event ID: 7044
	  Source: MSExchangeMig
	  Type: Error
	  Category: None
	  Description: Internal failure communicating with MAPI Spooler. Account %1.
	  Return code 80004005.
	
	The user accounts and mailboxes are created in Exchange Server, but the e-mail
	itself is not migrated. If you migrate one user at a time, migration works.
	
	CAUSE
	=====
	
	This issue can occur if you are logged on as a user that has Service Account
	Administrator permissions in Exchange Server.
	
	RESOLUTION
	==========
	
	To resolve this issue, log on as a user that has the Permissions Administrator
	role selected in Exchange Server at the organization, site, and configuration
	levels to perform a migration of more than one user at a time.
	
	If a user with these permissions does not exist, either use an existing Microsoft
	Windows NT account or create a new Windows NT account and add the correct
	permissions:
	
	1. In the Exchange Server Administrator program, click the Organization object,
	  and then click the Permissions tab.
	
	2. Click Add, and then add the user to the Windows NT accounts with permissions.
	
	3. Click the user, and then click Permissions Admin in the Roles list.
	
	4. Perform the preceding steps for the Site and Configuration objects.
	
	If you log on as a user that has the Permissions Administrator role selected at
	the organization, site, and configuration levels, you can migrate multiple users
	from MS Mail to Exchange Server at one time.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5; winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
