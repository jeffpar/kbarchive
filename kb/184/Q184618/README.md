---
layout: page
title: "Q184618: Number 2 Automatically Appended to New Virtual Directory Name"
permalink: /kb/184/Q184618/
---

## Q184618: Number 2 Automatically Appended to New Virtual Directory Name

	Article: Q184618
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating a new virtual directory, the directory name is displayed with an
	appended number 2.
	
	If you attempt to rename the file and remove the number 2 from the name, you may
	receive the following error message:
	
	  A virtual directory already exists with that name.
	
	CAUSE
	=====
	
	There is a reference in the metabase to a physical directory with the same name
	as the new virtual directory.
	
	The Microsoft Management Console (MMC) detects the entries in the metabase for
	that same directory name, and automatically appends the number 2 to the name of
	the new virtual directory, to avoid duplicate names.
	
	WORKAROUND
	==========
	
	To work around this problem, modify the properties of the original physical
	directory so that it becomes a virtual directory, which then points to the
	correct path. To do this, perform the following steps:
	
	1. Delete the virtual directory that has the number 2 appended to it.
	
	2. Re-create the physical directory.
	
	3. On the Action menu, click Refresh.
	
	4. View the properties of the directory.
	
	5. Click the Browse button next to the Local Path text box, select the path that
	  you want the new virtual directory to point to, and click OK.
	
	  NOTE: The new path is not displayed in the New Path text box as you would
	  expect.
	
	6. On the Action menu, click Refresh.
	
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: folder root vroot v-root two ghost exclude meta- base akz
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
