---
layout: page
title: "Q260316: XADM: Unable to Expand Public Folder Hierarchy"
permalink: /kb/260/Q260316/
---

## Q260316: XADM: Unable to Expand Public Folder Hierarchy

{% raw %}

	Article: Q260316
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 14-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open the Public Folders or System Folders containers in the
	Microsoft Exchange Server Administrator program, the following error message may
	be displayed:
	
	  The attempt to log on to the Microsoft Exchange Server computer has failed.
	
	  Microsoft Exchange Server Information Store
	  ID no: 8004011d-0512-00000000
	
	In Microsoft Outlook, when users attempt to expand the public folder hierarchy,
	the users may receive the following error message:
	
	  Unable to expand the folder. The set of folders could not be opened. The
	  attempt to log on to the Microsoft Exchange Server computer has failed.
	
	CAUSE
	=====
	
	This issue can occur if the Exchange Server computer that you are connected to
	in the Administrator program points to another server as the public folder
	server, and the Public Information Store object has been removed from the
	Administrator program of that other server.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. In the Private Information Store properties of the server that is receiving
	  the error message, click the General tab, and then click to select the
	  "Public folder server" check box. This check box is most likely clear.
	
	2. Click another server in the list, and then apply this change.
	
	3. After you make the change, quit and then restart the Administrator program.
	
	
	Additional query words: IS
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
