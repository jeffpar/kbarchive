---
layout: page
title: "Q254506: XADM: Hidden Public Folders Shown in GAL of Other Site"
permalink: /kb/254/Q254506/
---

## Q254506: XADM: Hidden Public Folders Shown in GAL of Other Site

{% raw %}

	Article: Q254506
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 04-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you open the global address list or the Recipients containers of other sites
	in your organization, the public folder mailboxes of the other sites may be
	displayed, even though the "Hide from the Address Book" option is selected for
	the public folders.
	
	You can remove the public folder mailboxes of the other site from the Recipients
	containers and the global address list to lessen the probability of users
	erroneously sending messages to the public folder mailbox, but to ensure that
	these mailboxes are not displayed in other sites you need to select the "Hide
	from the Address Book" option for intersite replication.
	
	MORE INFORMATION
	================
	
	Be aware that if you select the "Hide from the Address Book" option for
	intersite replication, users will not be able to post to these public folders by
	using e-mail messages. To select the "Hide from Address Book" option so that
	other sites cannot see the public folders in their Address Book:
	
	1. Ensure that the properties for each public folder in question have the "Hide
	  from Address Book" option selected:
	
	  a. Select the properties of the public folder.
	
	  b. Click the Advanced tab.
	
	  c. Click to select the "Hide from Address Book" check box.
	
	NOTE: Ensure that child-level public folders have the same setting. To save time,
	propagate changes to those child folders:
	
	  a. Select the top-level folder that you want to hide from the Address Book.
	
	  b. Click the Advanced tab, and then click to select the "Hide from Address
	     Book" check box.
	
	  c. Click the General tab, and then click to select the "Propagate these
	     properties to all subfolders" check box. A subfolder window is displayed;
	     ensure that the "Hide from Address Book" check box is selected.
	
	2. Ensure that the directory service site configuration attributes do not enable
	  the "Hide from Address Book" option that you set in step 1:
	
	  a. Open the properties of the directory service site Configuration container.
	
	  b. Click the Attributes tab.
	
	  c. In the Configure list, click Inter-site Replication.
	
	  d. Scroll down to the "Hide from AB" check box, and then click to select it.
	
	3. Make a change to each of the public folders that you want hidden, to ensure
	  that an update is performed during the next replication cycle. You can do
	  this by placing a remark in the Notes box in each folder. If you have
	  multiple folders that require a replication update, you can make one change
	  to the top-level folders, and then propagate that change to the subfolders.
	
	Additional query words: GAL
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
