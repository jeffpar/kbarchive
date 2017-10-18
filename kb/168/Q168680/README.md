---
layout: page
title: "Q168680: XFOR: Replaying CCM files from cc:Mail Connector Store"
permalink: kb/168/Q168680/
---

## Q168680: XFOR: Replaying CCM files from cc:Mail Connector Store

	Article: Q168680
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the Microsoft Exchange Connector for Lotus cc:Mail, for
	troubleshooting purposes, you may need to back up and temporary clean up all
	files (including .ccm and .und files) from the Exchsrvr\Ccmcdata\Import, Export,
	and Sumbit directories.
	
	This article describes the process for replaying .ccm files from
	Exchsrvr\Ccmcdata\Sumbit directory, which is the connector store. This will
	prevent a loss of mail due to the .ccm files not being processed by the cc:Mail
	Import.exe executable file.
	
	MORE INFORMATION
	================
	
	To replay CCM files:
	
	1. Stop MSExchangeCCMC.
	
	2. Copy the backup .ccm files to the Exchsrvr\Submit directory.
	
	3. Make sure the Exchsrvr\Import and Exchsrvr\Export directories are empty.
	
	4. Start MSExchangeCCMC
	
	The message will be imported to the cc:Mail postoffice database. Do not copy
	files with the .und extension. These are non-delivery messages that were
	rejected by the cc:Mail import cycle.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	
	=============================================================================
	
