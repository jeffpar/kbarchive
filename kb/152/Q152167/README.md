---
layout: page
title: "Q152167: Dir-Sync w/Many Computers Running Exchange Server, MS Mail POs"
permalink: /kb/152/Q152167/
---

## Q152167: Dir-Sync w/Many Computers Running Exchange Server, MS Mail POs

	Article: Q152167
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbother kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is a "how to" that applies to MS Mail directory synchronization
	(dir-sync) when the dir-sync server is a computer running Microsoft Exchange
	Server and other computers running Microsoft Exchange Server are servicing other
	MS Mail postoffices.
	
	MORE INFORMATION
	================
	
	In this example there are two MS Mail postoffices(PO1 and PO2) and two computers
	running Microsoft Exchange Server (X1 and X2). Each MS Mail postoffice being
	serviced by a single computer running Microsoft Exchange Server over the MS Mail
	Connector service. Configure as follows: PO1 configured as direct to X1 and X1
	configured as direct to PO1. PO2 configured as direct to X2 and X2 configured as
	direct to PO2.
	
	1. Configure the MS Mail Connector to communicate with MS Mail postoffices(X1 to
	  PO1 and X2 to PO2).
	
	2. PO1 to X2(shadow PO) via X1(shadow PO), PO1 to PO2 via X1(shadow PO).
	
	3. PO2 to X1(shadow PO) via X2(shadow PO), PO2 to PO1 via X2(shadow PO).
	
	4. Create a new Custom Recipients container(call it something like MSMail
	  Recipients).
	
	From the Microsoft Exchange Administrator program on the computer running
	Microsoft Exchange Server, which will be the Directory Synchronization Server:
	
	1. Create a Site Connector between X1 and X2.
	
	2. Create a Directory Replication Connector between X1 and X2--allow time for
	  replication, which this may take several minutes.
	
	3. On the File menu, click New Custom Recipient, and click Microsoft Mail
	  Address. Type Network/PostOffice and a user name of $system for every MS Mail
	  postoffice not being serviced directly by the directory synchronization
	  server(all are being serviced via MS Mail Connector on X2 Microsoft Exchange
	  server in this example).
	
	4. Create a Directory Synchronization Server: on the File menu, click New Other,
	  and click Directory Synchronization Server.
	
	5. Create Directory Synchronization requesters: on the File Menu, click New
	  Other, and click Remote Dir-Sync Requestor. The direct defined postoffices
	  will be listed. Select each entry listed (each MS Mail postoffice that will
	  participate in dir-sync). This will need to be done with every MS Mail
	  postoffice requestor.
	
	When creating/defining the requestor for the MS Mail postoffices not serviced by
	the Director Synchronization server, do the following:
	
	From the Microsoft Exchange Administrator Program on the computer running
	Microsoft Exchange Server, which will be the Directory Synchronization Server:
	
	1. On the File menu, click New Other and click Remote Dir-Sync Requestor. Select
	  <non msmail requestor>, click the Dir-Sync Address tab and pick the
	  custom recipient network/postoffice/$system (the custom recipient created in
	  step 4 above (this must be done for every non-serviced MS Mail requestor).
	
	2. Start the Microsoft Exchange Directory Synchronization service and the MS
	  Mail Connector service. Stop and restart the Microsoft Exchange Message
	  Transfer Agent service(on both computers running Microsoft Exchange Servers),
	  as well as any MTA services that were created when defining the MS Mail
	  postoffices that are serviced by the Directory Synchronization server.
	
	Additional query words: Directory Synchronization dirsync dirsynch
	
	======================================================================
	Keywords          : kbother kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
