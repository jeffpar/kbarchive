---
layout: page
title: "Q185176: XADM: Setup Fails Creating A New Site With Error c1030b0d"
permalink: kb/185/Q185176/
---

## Q185176: XADM: Setup Fails Creating A New Site With Error c1030b0d

	Article: Q185176
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Exchange Server setup fails to create a new site with an error similar to the
	following:
	
	  An internal error has occurred during replication. ID c1030b0d
	
	CAUSE
	=====
	
	A prior incomplete installation of Exchange Server may cause setup to fail.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following:
	
	1. From the Control Panel Services icon, stop all Exchange Server services,
	  which were installed and started with the partial install of Exchange Server
	  setup.
	
	2. Remove all registry keys that were added and modified during the Exchange
	  Server setup. To do this, follow the instructions in the Microsoft Knowledge
	  base article Q147374, "XADM: Registry Key Modifications Made During Setup."
	
	3. Delete all <Drive>:\Exchsrvr\ directories and sub-directories.
	
	4. Rename or delete Exchange Server Setup.log
	
	5. Run the Exchange Server Setup program from the Exchange Server CD or from a
	  shared drive. If setup comes up in maintenance mode, do a remove all and then
	  run setup again.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
