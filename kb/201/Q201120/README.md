---
layout: page
title: "Q201120: XFOR: Missing Postoffice in the MSMI Connection Tab"
permalink: kb/201/Q201120/
---

## Q201120: XFOR: Missing Postoffice in the MSMI Connection Tab

	Article: Q201120
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): exc4 exc5
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One or more postoffices suddenly disappear from a once fully-functional
	Microsoft Mail Connector (MSMC) configuration. When any administrator attempts
	to recreate the missing postoffice, an error message states that this postoffice
	already exists and can not be recreated.
	
	You may also notice the following error messages in the Windows NT Event Viewer:
	
	  Event ID: 2558
	  Source: MSExchangeMSMI
	  Category: Session Error
	  Type: Error
	  Description: The thread in the MSMail connector that delivers to MSMail has
	  failed waiting on the MSExchange queue.
	
	  Event ID:2590
	  Source: MSExchangeMSMI
	  Category: Session error
	  Type: Error
	  Description: The MSMail connector interchange wait on Exchange queue failed
	  0x5
	
	  Event ID: 2550
	  Source: MSExchangeMSMI
	  Category: Session Error
	  Type: Error
	  Description: The thread in MSMail connector that delivers to Exchange has
	  failed creating MSExchange MTA object. Check that the MSExchange MTA is
	  running. When the MSExchange MTA is restarted, the MSMail connector will
	  automatically establish a session with it.
	
	CAUSE
	=====
	
	When the Microsoft Mail Connector starts, it reads files from the connector
	postoffice, <Exchangeservername>\Maildat$, to build what is displayed in
	the MSMC. These files are Network.glb and all of the .xtn files. If these files
	are corrupted, the MSMC displays incorrect information.
	
	Specifically, if the Network.glb file is corrupted, if a valid postoffice is
	changed to indirect by the MSMAIL record, this valid postoffice will not be
	displayed in the Microsoft Mail Connector. Additionally, because the record
	still resides in the Network.glb file, it cannot be recreated.
	
	RESOLUTION
	==========
	
	The best resolution to this problem is to obtain a copy of the Network.glb file
	from backup tape. If no changes have been made to the Exchange routing to
	Microsoft Mail, this file can be restored by itself. Otherwise, please contact
	Microsoft Product Support Services
	
	MORE INFORMATION
	================
	
	The Exchange Connector postoffice (shadow postoffice) has a special record in
	the Network.glb file. There is an Microsoft Mail network name defined in every
	Exchange Connector postoffice. However, this Microsoft Mail network name is not
	viewable in the Microsoft Mail Connector. This is one of the differences between
	a shadow postoffice and the standard postoffice.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
