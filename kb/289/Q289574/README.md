---
layout: page
title: "Q289574: XADM: Cannot Access Contents of a Public Folder"
permalink: /kb/289/Q289574/
---

## Q289574: XADM: Cannot Access Contents of a Public Folder

	Article: Q289574
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access the contents of a public folder in Microsoft Outlook,
	you receive the following error message:
	
	  The folder could not be opened. The contents of this public folder are
	  currently unavailable. Either the Microsoft Exchange Server Computer
	  servicing this public folder is down or the public folder has not been
	  replicated to this site. See your administrator.
	
	CAUSE
	=====
	
	This behavior occurs because the Everyone group no longer has the Access this
	computer from the Network permission on the Exchange server that contains a
	replica of the public folder that you are trying to access.
	
	RESOLUTION
	==========
	
	To resolve this behavior, reassign the Access this computer from the Network
	permission to the Everyone group on the Exchange server:
	
	1. Start User Manager for Domains on the Exchange server.
	
	2. If this is a member server, click User, and then click Domain, type the name
	  of the Exchange server (in this format: \\<Server_Name>), and then
	  click OK.
	
	3. Click Policies, and then click User Rights.
	
	4. Under Right, click "Access this computer from the network".
	
	5. Click Add.
	
	6. Click Everyone, click Add, and then click OK.
	
	7. Click OK to apply the changes.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
