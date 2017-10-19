---
layout: page
title: "Q175165: XADM: Changes to Internet Mail Service Wizard Cannot Be Saved"
permalink: /kb/175/Q175165/
---

## Q175165: XADM: Changes to Internet Mail Service Wizard Cannot Be Saved

	Article: Q175165
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Administrator program may allow the Internet Mail Wizard
	to run, but you may not be allowed to save changes to the Microsoft Exchange
	Directory. The Internet Mail Wizard will give you the option of waiting until
	replication completes, but after it is finished, the only option within the
	Internet Mail Wizard is Cancel. This deletes the Internet Mail Service that you
	are trying to create.
	
	CAUSE
	=====
	
	After you add a Microsoft Exchange Server computer to an existing Microsoft
	Exchange site and start the directory replication process to update the
	directory on the new Exchange Server computer, the process may take a long time
	and you will not be allowed to make certain directory modifications in the
	Microsoft Exchange Administrator program.
	
	RESOLUTION
	==========
	
	You need to wait until directory replication is complete before running the
	Internet Mail Wizard. This may take some time, depending on the amount of
	information that needs to be replicated.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	
	=============================================================================
	
