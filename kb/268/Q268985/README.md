---
layout: page
title: "Q268985: XADM:Can't Log on to Exchange Information Store with GWClient"
permalink: /kb/268/Q268985/
---

## Q268985: XADM:Can't Log on to Exchange Information Store with GWClient

	Article: Q268985
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the GWClient utility to open a mailbox, you may receive the
	following error message:
	
	  The attempt to log on to the Microsoft Exchange Server computer has failed.
	  Component: Microsoft Exchange Server Information Store.
	
	CAUSE
	=====
	
	This issue occurs because the private information store you are attempting to
	connect to is configured to look at a different public folder server, and not
	itself. This behavior can occur on Bridgehead servers that do not contain a
	Pub.edb file.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the private information store to use itself as the
	public folder server. To do this, follow these steps:
	
	1. Open the Microsoft Exchange Server Administrator Program and connect to the
	  server that the GWClient is connecting to.
	
	2. Right-click the private information store on the server you are connected to,
	  and click Properties.
	
	3. Click the General tab, in the "Public folder server" box, enter the server
	  you are working on, and then click OK.
	
	
	You can now use the GWClient utility to open the mailbox.
	
	NOTE: If the server does not have a pub.edb file, you must add one.
	
	MORE INFORMATION
	================
	
	Mdbvu32.exe is a MAPI utility designed to view MAPI messages and folders, and
	their properties.
	
	For additional information about Mdbvu32.exe, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q250338 XADM: Mdbvu32 Enhancements for Viewing and Managing Rules Messages
	
	Additional query words: mdbvu ims mts-in mts-out mts imc bh pub
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
