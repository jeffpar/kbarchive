---
layout: page
title: "Q244042: XADM: Propagating Permissions to All Public Folder Subfolders"
permalink: kb/244/Q244042/
---

## Q244042: XADM: Propagating Permissions to All Public Folder Subfolders

	Article: Q244042
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need to change permissions for a hierarchy of public folders in unison,
	for example, if a new group of users needs to be able to modify and delete
	entries in the public folders that are included in a hierarchy.
	
	MORE INFORMATION
	================
	
	You cannot change permissions using the Microsoft Exchange Client or Microsoft
	Outlook without modifying each folder manually. However, if you use the
	Microsoft Exchange Server Administrator program, you can change permissions for
	a hierarchy of public folders in unison by performing the following steps:
	
	1. Start the Exchange Server Administrator program, and then find the top-level
	  folder of the hierarchy that needs a uniform change in permissions.
	
	2. To open the properties of the top-level folder, click to select it, and then
	  on the File menu, click Properties.
	
	3. To change the top-level folder permissions, click the General tab, and then
	  click Client Permissions.
	
	4. After you modify the permissions as necessary, click the General tab of the
	  top-level folder, click to select the "Propagate these properties to all
	  subfolders" check box, and then click Apply.
	
	WARNING: When you click to select the "Propagate these properties to all
	subfolders" check box, and then click Apply, any existing permissions in the
	subfolders are lost.
	The "Propagate these properties to all subfolders" check box may not appear on
	the General tab of a public folder. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q174763 XADM: Propagate These Properties to All Subfolders Option Does Not
	  Appear
	
	Additional query words: sub-folders
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
