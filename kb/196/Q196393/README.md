---
layout: page
title: "Q196393: XADM: Move Server Wizard Error &quot;Server Contains Public Folders&quot;"
permalink: kb/196/Q196393/
---

## Q196393: XADM: Move Server Wizard Error &quot;Server Contains Public Folders&quot;

	Article: Q196393
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Exchange Server 5.5 Move Server Wizard, the following error may
	occur:
	
	  WARNING: The server '<server name>' contains public folders. These
	  public folders and their contents will be removed from this server as
	  part of the move process.
	
	  To ensure these folders remain available in the '<site name>' site
	  after
	  this server moves, verify that they are homed on a different server in
	  the '<site name>' site before continuing.
	
	CAUSE
	=====
	
	If there are any Public Folders homed on the server being moved this error will
	occur.
	
	WORKAROUND
	==========
	
	To work around this problem, verify that there is a replica of each Public
	Folder on another server in the site and that the data has been replicated. Or
	verify that the data has been backed up to a PST or News Group server. See
	Public Folder in the Help file in the Move Server Wizard for more information on
	saving Public Folder information.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbprb
	
	=============================================================================
	
