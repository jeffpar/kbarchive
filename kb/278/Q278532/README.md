---
layout: page
title: "Q278532: XADM: How To Remove Corrupted Views That Are Shared"
permalink: /kb/278/Q278532/
---

## Q278532: XADM: How To Remove Corrupted Views That Are Shared

{% raw %}

	Article: Q278532
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to remove corrupted public folder views that multiple
	users share without deleting the view for all users.
	
	MORE INFORMATION
	================
	
	When you create a public folder, you can set custom views. These views exist in
	the information store as associated messages for the public folder. The user who
	creates the shared view is the owner of that view. When a view becomes
	corrupted, you can run Microsoft Outlook with the /cleanviews switch to delete
	this view. If the owner of a shared view runs this switch, it removes that view
	for all users who share that view.
	
	To run the /cleanviews switch and not delete that view for everyone, you must
	first remove permissions from the owner:
	
	1. From the Microsoft Exchange Server Administrator program, right-click the
	  public folder where the view was created, click Properties, and then click
	  Client Permissions.
	
	2. If this user is the only owner of the folder, add another user as the owner.
	
	  NOTE: This step is temporary.
	
	3. After you grant ownership to another user, remove the original owner. Ensure
	  that the user does not have permissions, which includes Group Membership.
	
	4. Verify that the user does not have ownership to any public folders where
	  shared views have been created by that user.
	
	5. Run Outlook with the /cleanviews switch.
	
	  IMPORTANT: It is critical to ensure that the user does not have permissions;
	  if the user has permissions, any views that were created by this user are
	  removed.
	
	6. After you run the /cleanviews switch, add the original user with ownership
	  permissions.
	
	For additional information about how to run command line switches for Outlook,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q197180 OL2000: Additional Command-Line Switches
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
