---
layout: page
title: "Q293227: XFOR: Notes R5 Multiple Mail.box Structure May Cause Event Error"
permalink: /kb/293/Q293227/
---

## Q293227: XFOR: Notes R5 Multiple Mail.box Structure May Cause Event Error

{% raw %}

	Article: Q293227
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Exchange 2000 Enterprise Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Use of the Lotus Notes R5 multiple mail.box structure can cause the following
	event errors on the Microsoft Exchange Notes Connector:
	
	  Event ID 8227, Shutting down LME-NOTES service (unable to handle
	  LME-NOTES-MEXNTS termination)
	
	  Event ID 8226, Process LME-NOTES-MEXNTS terminated abnormally
	
	  Event ID 41220, Error: no Notes Session Open
	
	  Event ID 510, Error {Not found}: The application failed to initialize.
	
	CAUSE
	=====
	
	In Notes R5, you can enable multiple mailbox to enhance throughput. When you do
	this, the file Mail.box is no longer used by the router. The server redirects
	all requests for Mail.box to one of the existing mailboxes (Mail1.box through
	Mail10.box). To help distribute the load evenly, the mailboxes are opened in
	sequential order: Mail1.box, then Mail2.box, Mail3.box, and so forth. However,
	the Exchange Notes Connector does not know how to handle this R5 enhancement and
	therefore the router fails.
	
	RESOLUTION
	==========
	
	To resolve this behavior, in the properties of the Exchange Notes Connector, on
	the Routing tab, change the Notes Mail Router from Mail.box to Mail1.box.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000EntServ
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
