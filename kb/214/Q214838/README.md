---
layout: page
title: "Q214838: XFOR: Migrated PMLs Contain Empty Entries w/Resulting Event 10"
permalink: kb/214/Q214838/
---

## Q214838: XFOR: Migrated PMLs Contain Empty Entries w/Resulting Event 10

	Article: Q214838
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 08-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Web 3 Lotus cc:Mail source extractor will migrate Personal Mailing lists
	during a migration, however, the resulting distribution lists (DLs) in the
	personal address book (PAB) might not contain any recipients. You will also find
	the following event 1052 in the application log.
	
	  Event Id: 1052
	  Source: MSExchangeMig
	  Description:
	  Unable to add 'Smith' to private Distribution List 'Everyone' for user Smith,
	  John. The address could not be located in the cc:Mail post office.
	
	CAUSE
	=====
	
	This behavior is due to an unexpected format of the cc:Mail post office which
	results in this bug. This may happen if the DL entries are stored in a
	two-string format such as "Lastname, Firstname."
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: cc:Mail Source Extractor
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Mlmig32.dll | 5.5.2543.1 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	NOTE: This bug will only occur in the cc:Mail source extractor originally
	released as part of Web 3. Note that the cc:Mail source extractor is part of the
	Exchange Migration Wizard program. To determine the version of the Exchange
	Migration Wizard, follow these steps:
	
	1. Start the Windows Explorer.
	
	2. Find the Mailmig.exe file located in the Exchsrvr\Bin directory.
	
	3. Select the file, and open up the file Properties page.
	
	4. Select the Version tab. The file version information will be in the format
	  5.5.XXXX.0. The original Web 3 version of the Exchange Migration Wizard will
	  be 5.5.2521.0
	
	5. Make sure that you obtain the version listed above.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
