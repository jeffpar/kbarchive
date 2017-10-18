---
layout: page
title: "Q251054: XADM: High Dsmain.exe CPU Usage When Populating Address Book Vie"
permalink: kb/251/Q251054/
---

## Q251054: XADM: High Dsmain.exe CPU Usage When Populating Address Book Vie

	Article: Q251054
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 26-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create an Address Book view with multilevel containers or if it is
	grouped on an single attribute that has thousands of different sort criteria,
	the directory service (or Dsamain.exe) CPU usage on many if not all the servers
	in your site may be extremely high. When the Dsamain process attempts to build
	the new Address Book view based upon your defined criteria and in turn,
	replicates these changes across your Exchange Server organization, high
	Dsamain.exe CPU symptoms may also be experienced at those sites. Because of the
	high CPU usage, you may experience slow connections, slow client logon times, or
	there may be slow connections to your Exchange Server computers when you are
	using the Exchange Server Administrator program. The global address list may not
	be visible in the Administrator program or from the Microsoft Outlook or
	Microsoft Exchange client.
	
	CAUSE
	=====
	
	This behavior can occur because the View Consistency Checker (VCC) process,
	which is responsible for populating the Address Book view, runs every five
	minutes.
	
	MORE INFORMATION
	================
	
	- If you want the Address Book view that is being replicated, take no action
	  and allow the replication to finish.
	
	- If you do not want the Address Book view that is being replicated:
	
	  1. Follow the steps outlined in the following Microsoft Knowledge Base
	     article:
	
	  Q255673 XADM: Unwanted Replication of Address Book Views
	
	  2. Make sure that only one administrator makes changes to the Address Book
	     view. Anyone in the organization who has Modify permissions to a
	     site-naming context can make changes to the Address Book view. If you make
	     sure that only one administrator can make changes to the Address Book
	     view, you ensure that the changes that you make are not deleted by more
	     current changes that are replicating throughout your organization.
	
	
	  3. In the Exchange Server Administrator program, set the first grouping of
	     the Address Book view that you want to remove to a custom attribute that
	     is not being used. Do this at every level in the Address Book view to make
	     the Address Book view appear to the VCC as if it has no containers, so
	     that the VCC stops populating the Address Book view throughout the
	     organization.
	
	  4. Immediately make multiple modifications to the Administrative Note on the
	     General tab of the Address Book view to increase the Object-Version number
	     on the Address Book view. Click Apply each time that you make a change.
	
	  5. Allow the Address Book view changes to replicate throughout every site in
	     the organization. This takes some time, depending on the size of the
	     organization, the speed of the links, and the replication schedule times.
	     Replication must be working correctly throughout the entire organization
	     for the view to be completely deleted.
	
	For additional information about making changes to and deleting Address Book
	views, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q180141 XADM: Recurring Address Book Views in Exchange Server
	
	  Q255673 XADM: Unwanted Replication of Address Book Views
	
	For additional information about the behavior described in this article, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q248398 XADM: Restricting Permission to Address Book Views
	
	  Q267425 XADM: Hiding Address Book Views from Exchange Server Administrator
	  and Clients During Address Book View Storms
	
	Additional query words: Scheduling Search Control abv mapi hierarchy dsa recalculation
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
