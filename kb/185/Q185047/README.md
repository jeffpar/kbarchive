---
layout: page
title: "Q185047: XADM: Maximum Age Limit for Public Folders"
permalink: kb/185/Q185047/
---

## Q185047: XADM: Maximum Age Limit for Public Folders

	Article: Q185047
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the behavior of Public Folder Age Limits in Microsoft
	Exchange Server.
	
	MORE INFORMATION
	================
	
	In Microsoft Exchange Server version 5.5, the Maximum Age Limit for public
	folders on a server can be set through the Microsoft Exchange Administrator
	program. The maximum age that can be set for a given server is 2,147,483,647
	days. This limit will apply only to the replicas of public folders on this
	server which do not have an age limit explicitly set for the folder. Use the
	following steps to set the age.
	
	1. Start the Exchange Administrator program.
	
	2. In the left pane, click the Public Information Store object under the
	  appropriate server, and then click Properties on the File menu.
	
	3. Click the Age Limits tab, click the "Age limit for all folders on this
	  information store (days)" check box to select it, type a number in the box,
	  and then click OK.
	
	To explicitly set the age limit on a particular public folder, enter the the Age
	Limit under Folders/Public Folders/<public folder name> properties on the
	Limits tab. The maximum age that can be specified for a particular folder is
	24,855 days, and it will affect all replicas of this folder. This setting will
	override the more general Maximum Age Limit settings on any given server's
	public information store.
	
	1. In the Administrator window, click Folders.
	
	2. Click Public Folders and then select the public folder that you want to
	  modify.
	
	3. Click the Limits tab, type a number in the Age Limit box, and then click OK.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
