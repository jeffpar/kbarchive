---
layout: page
title: "Q176172: XADM: Public Folder Does Not Appear in Instances Tab"
permalink: /kb/176/Q176172/
---

## Q176172: XADM: Public Folder Does Not Appear in Instances Tab

	Article: Q176172
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage exc55
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create a replica of a public folder, the folder may not be
	listed in the Instances tab of the Public Information Store Properties dialog
	box.
	
	MORE INFORMATION
	================
	
	You may experience this behavior if:
	
	- You are connected to a server that is in a different site than the home
	  server of the public folder.
	
	  -and-
	
	- You have the Limit Administrative Access to Home Site check box selected on
	  the General tab of the public folder Properties dialog box.
	
	The Limit Administrative Access to Home Site check box was added in Microsoft
	Exchange Server version 5.5 to control who can create replicas of a public
	folder. If it is selected, only users who have administrative permissions in the
	home site of the public folder and who are connected to the home site can create
	replicas.
	
	Additional query words: replicate
	
	======================================================================
	Keywords          : kbusage exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
