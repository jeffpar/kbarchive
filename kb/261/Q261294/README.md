---
layout: page
title: "Q261294: XADM: Using Search Permissions to Suppress Container Views"
permalink: /kb/261/Q261294/
---

## Q261294: XADM: Using Search Permissions to Suppress Container Views

{% raw %}

	Article: Q261294
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In certain situations, an Exchange Server site is built with Recipients
	containers which follow an organizational structure. After you add a mailbox to
	one of these containers you cannot move it to another container within the
	directory when the person changes locations within the organization.
	
	For example, during the initial setup of your Exchange Server directory you
	defined four Recipients containers: Sales, Marketing, Operations, and
	Administration, and created mailboxes in each container based on the group each
	individual works in. When User A in Operations moves to the Administration
	group, you cannot move User A's mailbox to the Administration container.
	
	MORE INFORMATION
	================
	
	Although there is no way to change the location where the objects are stored in
	the Exchange Server directory without re-creating the account, you can use
	Address Book Views to change the view that the users see to reflect the current
	organizational structure. To do this, follow these steps:
	
	1. Populate the field by which the Global Address List is sorted (such as the
	  Department field) for all mailboxes in the site.
	
	2. In the Exchange Server Administrator program, on the File menu, point to New
	  Other, and then click Address Book View.
	
	3. Type the "<display name>" (without the quotation marks) and the
	  "<directory name>" (without the quotation marks) for the view you want
	  to create.
	
	  NOTE: Type a descriptive directory name (for example, "Departments" (without
	  the quotation marks)) to make it easier to sort the directory.
	
	4. Click the Group By tab and click the field by which you want to organize the
	  view.
	
	5. Click the Permissions tab, and then under Search, grant permissions for the
	  group that will use this view.
	
	6. Click the Domain Users group if you want all users on your Exchange Server
	  messaging system to see the updated view.
	
	7. Click Apply, and then click OK.
	
	You have created containers in the Address List in Outlook that match your
	current organizational structure, but users can still view the original
	containers. You can hide the original containers so that the only containers
	viewable through Outlook are the Global Address List and the new Address Book
	Views. To hide the original containers, follow these steps:
	
	1. In the Directory Service Site Configuration object, click Properties, and
	  then configure an anonymous account.
	
	  For additional information, click the article number below to view the article
	  in the Microsoft Knowledge Base:
	
	  Q182902 How To Set Up Container Level Search Control
	
	2. To locate the Directory Service Site Configuration object, follow these
	  steps:
	
	  a. Click to expand the Site object, and then click to expand the
	     Configuration object.
	
	  b. Click the "Directory Service Site Configuration" object.
	
	3. In the Administrator program, click Options on the Tools menu.
	
	4. On the Permissions tab, click to select "Display rights for roles on
	  permissions page".
	
	5. In the Administrator program, click the Site object, and then click
	  Properties on the File menu.
	
	6. Click the Permissions tab.
	
	7. Grant Search permissions for a Windows NT account that is not assigned to a
	  user. Do not remove any permissions from this service account.
	
	8. Follow the same process on the configuration container.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
