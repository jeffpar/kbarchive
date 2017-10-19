---
layout: page
title: "Q190275: XFOR: MSExchangeCCMC General Event ID: 65"
permalink: /kb/190/Q190275/
---

## Q190275: XFOR: MSExchangeCCMC General Event ID: 65

	Article: Q190275
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure the Microsoft Exchange Connector for Lotus cc:Mail (CCMC) to
	connect to a cc:Mail postoffice version 8.x, the following error message may
	appear:
	
	  Event ID: 65
	  Source: MSExchangeCCMC
	  Type: Error
	  Category: General
	  Description:
	  Lotus cc:Mail EXPORT to file msg423B.ccm failed to run.
	  R0002 Resource file not found: C:\WINNT\IE.RI.
	
	CAUSE
	=====
	
	This error message may be caused by the fact that the file IE.RI is missing or
	is inaccessible.
	
	WORKAROUND
	==========
	
	To work around this problem, copy IE.RI to the same directory where you have
	copied the Import.exe and Export.exe files. It is preferable to copy those three
	files to the Winnt\System32 directory.
	
	MORE INFORMATION
	================
	
	The file IE.RI is not required for cc:Mail postoffice version 6, which requires
	only Import.exe version 5.15 and Export.exe version 5.14. You must select to use
	Import 6.0/Export 6.0 versions, in the Post Office property page, to connect to
	a cc:Mail postoffice version 8.x. In this case, Export.exe, Import.exe, and
	IE.RI must be in the search path for the system.
	
	For more information, please refer to the following Microsoft Knowledge Base
	article:
	
	  Q174740 XFOR: Error When Migrating Version 6 cc:Mail Post Office
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
