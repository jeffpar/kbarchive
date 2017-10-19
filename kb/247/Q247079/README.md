---
layout: page
title: "Q247079: XCLN: Create PFs and Set Default Properties on Subfolders"
permalink: /kb/247/Q247079/
---

## Q247079: XCLN: Create PFs and Set Default Properties on Subfolders

	Article: Q247079
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc5 exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 06-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.0 SP1, 5.0 SP2, 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Exchange Server 5.0 and 5.5 public folders can only be created from the
	client program. The client displays the Public Folders tree that is on the
	server as All Public Folders. When a you create a public folder from a client,
	the client assigns default permissions to the folder, and these permissions are
	inherited only by the sub-folders that are created under that folder. If a
	number of public folders have already been created under the All Public Folders
	hierarchy, there is no way to change permissions on all of these folders at
	once.
	
	CAUSE
	=====
	
	This behavior is by design. However, when a public folder is created under the
	All Public Folders hierarchy and has one or more sub-folders created under it,
	you can use the Microsoft Exchange Server Administrator program to change the
	permissions (and other properties) on the top-level folder and simultaneously
	propagate these changes to all of its sub-folders.
	
	WORKAROUND
	==========
	
	To avoid problems with not being able to propagate permissions to sub-folders,
	the following method is recommended for creating public folders when deploying
	Exchange Server:
	
	1. In the client, create a top-level folder (for example, Toplevel) under the
	  All Public Folders hierarchy.
	
	2. In the client, create one or more sub-folders (for example, Sub1 and Sub2)
	  under this top-level folder.
	
	3. In the Administrator program, click the Toplevel folder. On the File menu,
	  click Properties, and then click Client Permissions.
	
	4. Make any changes to permissions, and so on, to this folder.
	
	5. Click "Propagate these properties to all folders".
	
	6. Click Apply.
	
	7. Ensure that the Permissions check box is selected, and click OK twice to quit
	  the Administrator program.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q202265 XADM: Unable to Create Top Level Folders in Exchange Server
	
	  Q152745 XADM: Cannot Delete Public Folders Using Admin Program
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbExchange500SP1 kbExchange500SP2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
