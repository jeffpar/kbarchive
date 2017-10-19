---
layout: page
title: "Q162919: XFOR: Err Msg: The Network Name Could Not Be Found"
permalink: /kb/162/Q162919/
---

## Q162919: XFOR: Err Msg: The Network Name Could Not Be Found

	Article: Q162919
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new postoffice in the Microsoft Mail Connector to connect an
	Exchange Server computer to a Microsoft Mail 3.x postoffice on a Novell server,
	you may receive the following error message:
	
	  The network name could not be found
	
	CAUSE
	=====
	
	The postoffice path specified is incorrect.
	
	RESOLUTION
	==========
	
	Verify that postoffice path for connecting to the Novell volume is valid and
	does not use a colon (:) to separate the volume from the server name. If you
	specify a colon (:) instead of a backslash (\) you may receive an error.
	
	  Incorrect: server:volume:maildata
	
	To resolve this, replace the colon with a backslash to specify the proper
	postoffice path.
	
	  Correct: \\server\volume\maildata
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
