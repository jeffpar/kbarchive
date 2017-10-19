---
layout: page
title: "Q214836: XFOR: One-Step Migration for Lotus cc:Mail fails with Errors 809"
permalink: /kb/214/Q214836/
---

## Q214836: XFOR: One-Step Migration for Lotus cc:Mail fails with Errors 809

	Article: Q214836
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	While performing a one-step migration with the original Web 3 Lotus cc:Mail
	source extractor, you may find the following errors in the event log.
	
	  Event:8092
	  Source:MSExchangeMig
	  Description:
	  MAPI Section
	  c:\eddie\florence.003\00000001.PRI
	  Line: 129
	  Stream operation failure. Error code: 0x80040108
	
	  Event:8002
	  Source:MSExchangeMig
	  Description: Errors occurred during the Migration Process. A recovery
	  file has been created called D:\TEMP\00000001.PRI.
	
	CAUSE
	=====
	
	The new cc:Mail source extractor now migrates Personal Mailing Lists as well.
	However, this new addition causes a regression bug with Bulletin Board
	migrations, particularly during a one-step migration.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: cc:Mail Source Extractor
	
	+-----------------------+
	| File name   | Version | 
	+-----------------------+
	| Mlmig32.dll | 2543.1  | 
	+-----------------------+
	
	
	WORKAROUND
	==========
	
	There are a few workarounds:
	
	- Select the two-step migration rather than the one-step option.
	
	-or-
	
	- Do not select the migration of both Bulletin Board messages and Personal
	  Mailing Lists during the one-step migration.
	
	-or-
	
	- Obtain the latest fixed version of the migration wizard.
	
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
	
