---
layout: page
title: "Q267833: Cannot Set NTFS Permissions on Clustered File Share Resource"
permalink: kb/267/Q267833/
---

## Q267833: Cannot Set NTFS Permissions on Clustered File Share Resource

	Article: Q267833
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,7.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to modify the NTFS permissions on a file that you have copied
	to a network share that is located on a cluster server as a File Share resource,
	the following error messages may be displayed:
	
	  Object Picker cannot open because it cannot determine whether
	  <Network Name Resource> is joined to a domain.
	
	  Unable to display the user selection dialog.
	  Access is denied.
	
	CAUSE
	=====
	
	This behavior can occur if all of the following conditions exist:
	
	- SQL 7.0 is installed on the cluster server and was configured as a Cluster
	  resource in an active/passive configuration by using the SQL Failover Wizard.
	
	- The file share you are connecting to is hosted by a cluster server as a File
	  Share resource.
	
	- The file share source is located on the same hard disk as SQL 7.0 on the
	  cluster server, and is located in the same resource group as SQL 7.0.
	
	- You are attempting to modify NTFS permissions on a file that is located on
	  the cluster server by using a user account that does not have administrator
	  privileges on the cluster server.
	
	RESOLUTION
	==========
	
	To prevent this behavior from occurring, create the File Share resource in a
	different cluster resource group, and on a different hard disk than the hard
	disk on which SQL 7.0 is installed.
	
	
	MORE INFORMATION
	================
	
	For additional information about file shares on a cluster server, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q256926 Implementing Home Folders on a Server Cluster
	
	  Q224967 How to Create File Shares on a Cluster
	
	  Q254219 Security Considerations When Implementing Clustered File Shares
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : winnt:4.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	
