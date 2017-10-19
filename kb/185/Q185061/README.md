---
layout: page
title: "Q185061: XFOR: Err Msg: Internet Mail Service Already Installed"
permalink: /kb/185/Q185061/
---

## Q185061: XFOR: Err Msg: Internet Mail Service Already Installed

	Article: Q185061
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Exchange Server Internet Mail Service Wizard after performing a
	Remove All and a re-install of Exchange Server and recovering the database files
	Priv.edb or Dir.edb, you may receive the following error:
	
	  Service Already Installed
	
	WORKAROUND
	==========
	
	To work around this problem, delete the Internet Mail Service from
	Organization\Site\Configuration Container\Connections Container\Internet Mail
	Service, and then run the Internet Mail Service Wizard.
	
	MORE INFORMATION
	================
	
	If the Internet Mail Service was previously installed and configured, the
	directory or information store database may have information for that connector,
	and may have restored the information to the Exchange Server computer.
	
	The Internet Mail Service connector will be present in the Connections Container.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
