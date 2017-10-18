---
layout: page
title: "Q233164: XFOR: Event ID 14005 and Event ID 59 During cc:Mail Dirsync"
permalink: kb/233/Q233164/
---

## Q233164: XFOR: Event ID 14005 and Event ID 59 During cc:Mail Dirsync

	Article: Q233164
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to perform directory synchronization (dirsync) between a Lotus
	cc:Mail DB8 post office and an Exchange Server 5.5 computer, Event ID 14005 and
	Event ID 59 may appear in the event log.
	
	RESOLUTION
	==========
	
	Verify that the Exchange Server service account is able to access the cc:Mail
	post office. To do so, log onto the Exchange Server computer as the Exchange
	Server service account and at a command prompt, change to the
	Exchsrvr\Connect\Ccmail\Bin folder, type "ccmc ccdir" (without the quotation
	marks), and then press ENTER.
	
	If result code 1 is returned when you run the "ccmc ccdir" command and an error
	message indicating that the Ie.ri file could not be found is displayed, verify
	that the Ie.ri file is located in the folder specified in the error message. If
	it is not, copy the file from its current location to the folder specified in
	the error message. After you have copied the file, stop and restart the Exchange
	Connector for Lotus cc:Mail, and then run the "ccmc ccdir" command again.
	
	To stop and restart the connector:
	
	1. In Control Panel, double-click Services.
	
	2. Click "Microsoft Exchange Connector for Lotus cc:Mail", click Stop, and then
	  click Yes.
	
	3. Click "Microsoft Exchange Connector for Lotus cc:Mail", and then click Start.
	
	
	If result code 3 is returned when you run the "ccmc ccdir" command, verify that
	the post office name, password, and path specified in the properties of the
	Exchange Connector for Lotus cc:Mail are correct. To do so:
	
	1. Start the Administrator program. To do so, click Start, point to Programs,
	  point to Microsoft Exchange, and then click Microsoft Exchange Administrator.
	
	2. Click the "Exchange Connector for Lotus cc:Mail", and then on the File menu,
	  click Properties.
	
	3. On the Post Office tab, verify that the values in the Name, Password, and
	  Path boxes are correct.
	
	If you made any changes in the properties for the Exchange Connector for Lotus
	cc:Mail, stop and restart the connector, and then run the "ccmc ccdir" command
	again.
	
	MORE INFORMATION
	================
	
	Lotus cc:Mail DB6 post offices require Import.exe version 5.15 and Export.exe
	version 5.14, which do not require an Ie.ri file. However, Lotus cc:Mail DB8
	post offices require Import.exe and Export.exe version 6.0 or later, which
	require an Ie.ri file. The Import.exe, Export.exe, and Ie.ri files are typically
	located in the Winnt\System32 folder.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
