---
layout: page
title: "Q271189: Deleting All Users from Container Stops User Deletion from MMS"
permalink: /kb/271/Q271189/
---

## Q271189: Deleting All Users from Container Stops User Deletion from MMS

	Article: Q271189
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the discover process on your computer system and update the
	metadirectory, users are not deleted in the metadirectory, even though they have
	been deleted from the connected directory.
	
	CAUSE
	=====
	
	This behavior can occur if all of the users are deleted from the discovered
	container, which can cause the intermediate file, Import, to be blank (empty).
	When the Import file is blank, the list of users previously deleted in the
	connected directory remains in the metadirectory. However, if there is at least
	one user listed in the Import files, your instructions to delete specific users
	can be sent to the metadirectory for processing.
	
	RESOLUTION
	==========
	
	To work around this behavior, use one of the following methods:
	
	- You can delete the users manually from the connected directory.
	
	-or-
	
	- If you are planning to repopulate the container with new users, rerun the
	  Management Agent to discover the container and the new users. This procedure
	  can populate the Import file and delete the old users.
	
	STATUS
	======
	
	This behavior is by design to prevent accidental deletions of the entire
	connector space.
	
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	
