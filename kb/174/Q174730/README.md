---
layout: page
title: "Q174730: XFOR: Lotus Notes Invitations Result in NDR"
permalink: /kb/174/Q174730/
---

## Q174730: XFOR: Lotus Notes Invitations Result in NDR

	Article: Q174730
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a meeting invitation to a Microsoft Exchange client from a Lotus
	Notes client, the message may result in the following non-delivery report
	(NDR):
	
	  No route found to domain <LOTUSDOMAIN> from server
	  <SERVERNAME/LOTUSDOMAIN>. Check Server, Connection and Domain documents
	  in Name and Address book.
	
	CAUSE
	=====
	
	This NDR is generated because the Lotus Notes Server cannot correctly route
	meeting requests to the domain where the Exchange user resides. By default, the
	configuration document for a foreign domain in Lotus Notes does not contain a
	path to a calendar server.
	
	WORKAROUND
	==========
	
	The domain document in Lotus Notes can be adjusted to allow meeting requests to
	be sent from Lotus Notes to Outlook or Exchange Clients. However, this will not
	add the meeting requests to the Outlook Calendar. The adjustment will only allow
	the message to be sent. Currently there is no direct support for schedule and
	appointment requests between Microsoft Exchange Server and Lotus Notes.
	
	To adjust the domain document in Lotus Notes, open the Lotus Notes Administrator
	program and perform the following steps:
	
	1. Open the Name and Address Book.
	
	2. Go to the Server\Domain and open the domain document for the Exchange Server
	  computer (Exchange by default).
	
	3. Click Edit Domain.
	
	4. Under the Calendar section, copy the Gateway server name into the Calendar
	  server name.
	
	5. For Calendar system, type in the name of the domain message database
	  (Exchange.box by default).
	
	6. Save the document and restart Lotus Notes Server.
	
	Lotus Notes users will now be able to send meeting requests to Exchange client
	users without receiving an NDR. However, the Exchange client users will need to
	manually enter the invitation into their calendar.
	
	Additional query words: linkage notes meeting invite schedule plus sched+
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	
	=============================================================================
	
