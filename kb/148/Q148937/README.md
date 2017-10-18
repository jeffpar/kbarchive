---
layout: page
title: "Q148937: XADM: Setting Age Limits on Public Folders"
permalink: kb/148/Q148937/
---

## Q148937: XADM: Setting Age Limits on Public Folders

	Article: Q148937
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are three types of age limits on Microsoft Exchange public folders and
	replicas:
	
	- Age limits for all replicas of a public folder.
	
	- Age limits for a specific Microsoft Exchange Public Folder Server that apply
	  to all replicas on that specific computer running Microsoft Exchange Server.
	
	- Age limits for a specific replica on a specific computer running Microsoft
	  Exchange Server.
	
	This article tells you how to set these limits.
	
	MORE INFORMATION
	================
	
	Age Limit for All Replicas of a Public Folder
	---------------------------------------------
	
	This age limit will apply to all replicas no matter which computer running
	Microsoft Exchange Server they are located on.
	
	To set the age limit:
	
	1. From the left pane in the Microsoft Exchange Administrator program, expand
	  the public folder tree, and click the public folder.
	
	2. On the File menu, click Properties, and type the number of days in the "Age
	  limit for all replicas."
	
	Age Limit for a Specific Microsoft Exchange Public Folder Server
	----------------------------------------------------------------
	
	This age limit applies to all replicas on this specific computer running
	Microsoft Exchange Server.
	
	To set this age limit:
	
	1. From the left pane in the Microsoft Exchange Administrator program, drill
	  down to <site>\configuration\servers\<servername>, and double-
	  click the Public Information Store object in the right pane.
	
	2. Click the Age Limits tab.
	
	
	3. Specify the age limit in the "Age limit for all folders on this information
	  store" field.
	
	Age Limit for a Specific Replica
	--------------------------------
	
	This age limit applies to a specific replica on a specific computer running
	Microsoft Exchange Server.
	
	To set this age limit:
	
	1. From the left pane in the Microsoft Exchange Administrator program, drill
	  down to <sitename>\configuration\servers\<servername>,
	  double-click the Public Information Store object in the right pane.
	
	
	2. Click the Age Limits tab.
	
	3. There is a list box of all replicas located on this computer running
	  Microsoft Exchange Server. Select a replica in the list box and click the
	  Modify button to set the age limit.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	
