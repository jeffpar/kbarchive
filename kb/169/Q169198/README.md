---
layout: page
title: "Q169198: XADM: Tips for Managing Public Folders"
permalink: kb/169/Q169198/
---

## Q169198: XADM: Tips for Managing Public Folders

	Article: Q169198
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some tips for controlling public folders in a Microsoft
	Exchange organization.
	
	MORE INFORMATION
	================
	
	1. Design a public folder scheme for your organization. Decide how public
	  folders will be used in your organization to organize data and how to
	  facilitate easy access to the data in the public folders. For example, you
	  may have public folders organized by geographical locations (North America,
	  Europe, and so on), or by business units (Finance, Marketing, Development),
	  or any other manner that works in your organization.
	
	2. Once the fundamental public folder design is in place, create the top level
	  public folders.
	
	3. Control which users can create top level public folders. This allows the
	  Microsoft Exchange administrator to control the basic structure of how
	  information in the public folders is organized. The administrator can control
	  which users can create top level public folders by using the Exchange
	  Administrator program.
	
	  Under the Site object, select Configuration and then get properties of the
	  Information Store Site Configuration object. Go to the Top Level Folder
	  Creation page.
	
	4. The Exchange administrator can also control how the public folder hierarchy
	  is displayed to individual users by setting the Client Permissions on the
	  individual folders. Each public folder has a property called Folder Visible.
	  If this permission is not granted to a user, then that user cannot view that
	  public folder in the public folder hierarchy. For example, if all public
	  folders under a folder called Finance should not be accessible to any users
	  other than upper level managers, the default permissions on that public
	  folder can be set with the Folder Visible permission revoked. The individual
	  users or Distribution Lists of users who need access to the folders can then
	  be granted rights to be able to view the Finance folder.
	
	5. Create replicas of public folders on different servers depending on how many
	  users will need to access the public folders and the types of network links.
	  For example, if a public folder is accessed by all users in your
	  organization, it may be useful to add replicas of this folder to other
	  servers and other sites. If the network links are sufficient, adding public
	  folder affinity may also be an alternative to replicating folders.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
