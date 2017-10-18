---
layout: page
title: "Q154947: XADM: How to Move a Public Folder to Another Site"
permalink: kb/154/Q154947/
---

## Q154947: XADM: How to Move a Public Folder to Another Site

	Article: Q154947
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to move a Microsoft Exchange Public Folder from one
	Microsoft Exchange Site, in which the public folder was created, to another
	Site.
	
	MORE INFORMATION
	================
	
	Public folders can be moved between Microsoft Exchange Servers in the same Site
	by creating a replica on another Server in the Site and then removing the
	original replica from the Server where the public folder was created.
	
	However, this method cannot be used to move public folder between Sites. You can
	replicate a public folder to a Server in another Site, but when you try to
	remove the last replica of the public folder in the original Site, the following
	error message will be displayed:
	
	  You cannot remove all replicas of the folder from this site.
	  Microsoft Exchange Administrator
	  ID no:c1035e6a
	
	To move a public folder from one Site (SiteA) to another (SiteB), follow these
	steps:
	
	1. From a Microsoft Exchange client logged in to a mailbox in SiteA, copy the
	  public folder to a .PST file.
	
	2. Delete the public folder in SiteA.
	
	3. From another Microsoft Exchange client logged in to a mailbox that has a
	  Microsoft Exchange Public Folder Server in SiteB, copy the public folder from
	  the .PST file to the Public Folder Store.
	
	The public folder should now be re-created on a Public Folder Server in SiteB.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
