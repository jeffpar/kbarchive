---
layout: page
title: "Q234291: XFOR: Canceling Notes/SNADS/PROFS/GW Setup Breaks Connector"
permalink: kb/234/Q234291/
---

## Q234291: XFOR: Canceling Notes/SNADS/PROFS/GW Setup Breaks Connector

	Article: Q234291
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you cancel the Setup program for the Microsoft Exchange Connector for
	GroupWise, Lotus Notes, SNADS, or PROFS before it has completed the
	installation, the only option is to uninstall the connector before reinstalling
	it again.
	
	CAUSE
	=====
	
	The Setup program may fail to overwrite a locked file or encounter other
	problems during Setup. In most cases, the Setup program will already have copied
	all the files over to the Exchconn directory before Setup is cancelled.
	
	WORKAROUND
	==========
	
	Run the Setup program again and uninstall the connector. Then run the Setup
	program to reinstall the connector.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	If the Setup program does encounter a locked file problem, please refer to the
	following article in the Microsoft Knowledge Base:
	
	  Q234293 Setup Problems Encountered while Upgrading/Reinstalling
	  GW/Notes/SNADS/PROFS Connectors
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
