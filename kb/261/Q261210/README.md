---
layout: page
title: "Q261210: XFOR: Some Exchange Server Recipients Not Synchronized to Notes"
permalink: /kb/261/Q261210/
---

## Q261210: XFOR: Some Exchange Server Recipients Not Synchronized to Notes

	Article: Q261210
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3kbfaq
	Last Modified: 11-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a scheduled directory synchronization (dirsync) occurs from Exchange Server
	to Lotus Notes, or if you click "Immediate full reload" on the Dirsync Schedule
	tab of the Microsoft Exchange Connector for Lotus Notes properties to force
	dirsync from Exchange Server to Notes, some of the Exchange Server recipients
	may not be replicated to the Notes database.
	
	CAUSE
	=====
	
	This issue can occur because the users that are not replicated to the Notes
	database do not have Notes addresses.
	
	RESOLUTION
	==========
	
	To resolve this issue, enable the Notes address generator and apply Notes
	addresses to the Exchange Server recipients:
	
	1. In the Configuration container, open the Site Addressing properties.
	
	2. Click the Site Addressing tab.
	
	3. Click to select the Notes check box, and then click OK to enable the change.
	
	4. When a dialog box is displayed that requests confirmation that you want to
	  update all recipients, click Yes.
	
	If you do not want certain Exchange Server recipients to be replicated to Notes,
	delete those users' Notes e-mail address from the E-mail Addresses tab of the
	users' mailbox properties.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbfaq
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
