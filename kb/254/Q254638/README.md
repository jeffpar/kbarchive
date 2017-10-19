---
layout: page
title: "Q254638: XADM: How to Add Permissions to Orphaned Public Folders"
permalink: /kb/254/Q254638/
---

## Q254638: XADM: How to Add Permissions to Orphaned Public Folders

	Article: Q254638
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sometimes a public folder is visible in the folder hierarchy in the Exchange
	Server 5.5 Administrator program but you cannot access the properties and you
	cannot see the public folder in any of the clients.
	
	CAUSE
	=====
	
	It is possible that the folder is both orphaned and is not visible in any client
	because the folder may have permissions set on it so that the folder itself only
	has access to the folder. Permissions need to be added to the folder.
	
	
	RESOLUTION
	==========
	
	You can use the Exchange Resource Kit PFAdmin tool to add permissions to the
	public folder. To do so:
	
	1. Log on with the Exchange Server Service Account, and using a profile that has
	  the Exchange Server Service Account as owner, run PFAdmin to change the
	  permissions.
	
	2. At a command prompt, type the following command:
	
	  pfadmin.exe <profile_name> SETACL <foldername>\<foldername>
	  default owner anonymous owner
	
	Now permissions for the folder are set so that all users can view them.
	
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q261093 XADM: Readme Document for the Pfinfo.exe Program
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
