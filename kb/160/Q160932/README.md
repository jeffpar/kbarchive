---
layout: page
title: "Q160932: XADM: Error 0002 The Exchange Directory Will Not Start"
permalink: /kb/160/Q160932/
---

## Q160932: XADM: Error 0002 The Exchange Directory Will Not Start

	Article: Q160932
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start a Microsoft Exchange service, you may receive the
	following Windows NT error message:
	
	  Could not start the Microsoft Exchange Directory Service on \\<<server
	  name>>. Error 0002: The system cannot find the file specified.
	
	CAUSE
	=====
	
	This error occurs because the executable associated with the service is missing
	or corrupt. The following is a list of major Microsoft Exchange services and
	their associated executables:
	
	- Microsoft Exchange Information Storestore.exe
	
	- Microsoft Exchange Directory Servicedsamain.exe
	
	- Microsoft Exchange System Attendantmad.exe
	
	- Microsoft Exchange Message TransferAgentemsmta.exe
	
	- Microsoft Exchange Internet Mail Connectormsexcimc.exe
	
	- Microsoft Exchange Interchangemt.exe
	
	RESOLUTION
	==========
	
	Obtain the file from backup, the Microsoft Exchange Server computer, or service
	pack CDs, and copy it over to the hard drive.
	
	NOTE: Error 0002 is a "File not found" Windows NT error message. It is not a
	Microsoft Exchange specific error and it can be generated for any service
	missing a required executable.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
