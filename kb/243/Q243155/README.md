---
layout: page
title: "Q243155: XADM: Offline Address Book Download Does Not Work"
permalink: /kb/243/Q243155/
---

## Q243155: XADM: Offline Address Book Download Does Not Work

{% raw %}

	Article: Q243155
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to download the offline Address Book by using an Exchange
	Client or Outlook, the download may not work and the following error message may
	be displayed:
	
	  An error occurred while opening the Microsoft Exchange offline address book
	  files on the Microsoft Exchange Server. See your administrator.
	
	After you click OK, the following error message is displayed:
	
	  Unable to download the Offline Address Book. The Microsoft Exchange Address
	  Book could not be accessed.
	
	MORE INFORMATION
	================
	
	Perform the following steps to troubleshoot this problem:
	
	1. Attempt to download the offline Address Book while you are logged on with the
	  Exchange Server service account. If you can successfully download the offline
	  Address Book while you are logged on to a mailbox with the credentials of the
	  Exchange Server service account, the Exchange Server service account may have
	  been given Search permissions on the Organization, Site, or Site
	  Configuration containers.
	
	2. If this problem does not affect Outlook version 8.03 and later, make sure
	  that on the Offline Address Book tab of the DS Site Configuration properties,
	  the "Microsoft Exchange 4.0 and 5.0 compatibility" option is selected. If
	  this option is not selected when the offline Address Book is generated, the
	  error message in the "Symptoms" section of this article is displayed with
	  Exchange Clients 4.0 and 5.0 and Outlook versions earlier than Outlook
	  version 8.03.
	
	3. For testing purposes, create a new Recipients container and place a small
	  number of recipients in this container. Click the Configuration container,
	  double-click DS Site Configuration, and then click the Offline Address Book
	  tab. Remove all of the containers from the list, add the new Recipients
	  container, and then click Generate All. This helps you determine whether or
	  not the issue is Address container specific.
	
	4. In the Exchange Server Administrator program, click the Configuration
	  container, double-click DS Site Configuration, click the Offline Address Book
	  tab, and then select another server in the site as the offline Address Book
	  server. Add any Address containers that you want to the list, and then click
	  Generate All. This step helps you determine whether or not the issue is
	  server specific.
	
	5. If step 4 resolves the problem, there may be a problem with the public
	  information store on the original offline Address Book server. You may
	  resolve the problem with the public information store if you run the Isinteg
	  utility. Microsoft highly recommends that you contact Microsoft Product
	  Support Services before you run any offline utility against an Exchange
	  Server database.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
