---
layout: page
title: "Q194869: XFOR: EventID 1004 Migration Wizard Fails to Migrate cc:Mail Use"
permalink: kb/194/Q194869/
---

## Q194869: XFOR: EventID 1004 Migration Wizard Fails to Migrate cc:Mail Use

	Article: Q194869
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to migrate users mailboxes from a Lotus cc:Mail postoffice
	using the Microsoft Exchange Migration Wizard, the following Event ID may be
	received in the Windows NT Application Event Log:
	
	  Event ID: 1004
	  Source: MSExchangeMig
	  CCMail: EXPORT.EXE error exporting user 'lastname, firstname'
	   - Bad Parameters on the command line. Error with call to the MS-DOS
	  version of cc:Mail EXPORT.EXE. See document "Migrating from Lotus
	  cc:Mail" for more information about using EXPORT.EXE.
	  Command Line 'Export /P******** /BATCH /N"lastname, firstname"
	  /Dc:\ccdata\ /DATE/1 /FILES/MACBIN2 /ITEMSIZE /FOLDER /MSGS/ALL
	  /@c:\TEMP\sd1.2'.
	
	CAUSE
	=====
	
	The directory specified in the "Path for Migration Files" option within the
	Microsoft Exchange Server Migration Wizard contains a long directory name.
	
	WORKAROUND
	==========
	
	Select a directory name conforming to the 8.3 naming convention.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
