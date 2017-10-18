---
layout: page
title: "Q182902: XADM: How To Set Up Container Level Search Control"
permalink: kb/182/Q182902/
---

## Q182902: XADM: How To Set Up Container Level Search Control

	Article: Q182902
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the procedure for setting up Container Level Search
	Control using Address Book Views. This allows you to create virtual Exchange
	Server organizations within a single Exchange Server organization or site. This
	is useful if you have multiple companies or departments within one Exchange
	Server organization and you want to prevent these companies or departments from
	viewing the mailboxes of other companies or departments in the global address
	list.
	
	MORE INFORMATION
	================
	
	To set up Container Level Search Control using Address Book Views, perform the
	following steps:
	
	1. Set up an anonymous account in the properties of the DS Site Configuration
	  object in the Exchange Administrator program. This can be any Windows NT
	  account.
	
	2. Open User Manager for Domains and create Global Groups for each department or
	  company (depending on how you wish to separate the organization). Add the
	  respective Windows NT User Accounts to each Global Group. These will be
	  needed for step 4.
	
	3. On the File menu, click New Other, and then click Address Book View to set up
	  an Address Book view. You can use any name for the Display and Directory
	  names. Click the Group By tab in the properties for the new Address Book
	  View, and choose either Company or Department for the "Group items by" field
	  (this depends on how you wish to separate the organization).
	
	4. Click to expand the newly created Address Book View object so that you can
	  see the separate companies or departments listed below it. Open the
	  properties of each of these, click the Permissions tab, and then add the
	  respective Global Group created in step 2 to the Windows NT accounts with
	  permissions with a role of Search.
	
	5. In the Exchange Administrator program, click Tools, and then click Options.
	  Click the Permissions tab. Ensure that the "Show Permissions Page for all
	  objects" and "Display Rights for Roles on Permissions page" check boxes are
	  checked.
	
	6. Open the properties of the Organization object, and click the Properties tab.
	  Add the Search right to the Exchange Service Account.
	
	  NOTE: Before changing the rights of the Exchange Service Account, make sure
	  that at least one other Windows NT account or group has at least the
	  Permissions Admin Role on the Organization object.
	
	After you perform these steps, you should be able to log on to an Exchange Server
	mailbox. Open the Address Book and choose "Show Names from the:" Global Address
	List. You should only see mailboxes and/or custom recipients from the Address
	Book View that your mailbox is associated with.
	
	This will not work for any mailbox whose associated Windows NT account has
	permissions on objects that give them inherited rights to the Address Book
	Views. These mailboxes will still be able to view the complete global address
	list.
	
	NOTES:
	
	- You must complete the fields on the Mailbox properties before the mailbox
	  will show up in the Address Book View. For example, if you are sorting by
	  Company name, each mailbox should contain information in the Company field on
	  the General tab of the Mailbox properties.
	- It is useful to have another account that has Service Account Administrator
	  Rights rather than just Permissions Administrator Rights. For more
	  information on creating Address Book Views, please see "Understanding Address
	  Book Views" in the Microsoft Exchange Server 5.5 Books Online.
	- Setting container level search control affects how recipient lists are
	  displayed. Previous recipient lists including the global address list may no
	  longer be visible to users. For additional information, click the article
	  number below to view the article in the Microsoft Knowledge Base:
	
	  Q196187 XADM: Cannot view Recipients in the Global Address List
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
