---
layout: page
title: "Q251181: XADM: &quot;Lodctr Dsactrs.ini&quot; Error with Service Pack Upgrade"
permalink: kb/251/Q251181/
---

## Q251181: XADM: &quot;Lodctr Dsactrs.ini&quot; Error with Service Pack Upgrade

	Article: Q251181
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 12-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Exchange Server service pack upgrade may be unsuccessful and the following error
	message may be displayed:
	
	  The command LODCTR DSACTRS.INI FAILED ERROR CODE <183>
	
	The following error message may also be displayed:
	
	  Processing file <path>\server.ins at or near line 153.
	  An internal component has failed.
	  Id NO. C103798a
	
	CAUSE
	=====
	
	This behavior occurs if the read-only attribute is set on the Perfc009.dat and
	Perfh009.dat files or if the files are locked open by another process (in the
	System32 folder).
	
	During the upgrade process, these files are renamed to Perfc009.bak and
	Perfh009.bak, and are then re-created. If the read-only attribute is set on the
	files or if the files are locked open, this process cannot occur and the error
	message is displayed.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the read-only attribute or find the process that
	is locking the files open (shut down all non-essential services).
	
	Additional query words: fail fails failed
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
