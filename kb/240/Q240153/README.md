---
layout: page
title: "Q240153: XADM: Error 3355443752 Starting Information Store after Restore"
permalink: /kb/240/Q240153/
---

## Q240153: XADM: Error 3355443752 Starting Information Store after Restore

	Article: Q240153
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you restore the information store on a recovery server (scratch server)
	running the Legato NetWorker BusinesSuite Module for Microsoft Exchange Server
	1.1.003 or earlier on a large database (approximately 20 to 30 gigabytes), the
	service may not start and a service-specific error 3355443752 error message may
	be displayed.
	
	The application event log may contain the following entries:
	
	  Event ID: 5000
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	  Description:
	  Unable to initialize the Microsoft Exchange Information Store service. Error
	  0xc8000228.
	
	  Event ID: 1080
	  Source: MSExchangeIS
	  Type: Error
	  Category: Recovery
	  Description:
	  Unable to recover the database because error 0xc8000228 occurred after a
	  restore operation. The patch file is not generated from this backup.
	
	  Event ID: 0
	  Source: ESE97
	  Type: Error
	  Category: Logging/Recovery
	  Description:
	  MSExchangeIS (()) -552
	
	RESOLUTION
	==========
	
	Legato recommends that you apply the latest version of the Nsrxchrc.exe file for
	the Exchange Agent on the recovery server to finish the restore operation.
	
	To reach Legato Systems, Inc., either:
	
	- Go to the following Web site:
	
	  Legato Systems, Inc. (http://www.Legato.com)
	
	  - or -
	
	- Call the support group at your authorized Legato reseller, or call Legato
	  Technical Support in California at 650-812-6100.
	
	To download the Networker update refer to the following Legato Systems, Inc., Web
	site:
	
	  ftp://ftp.legato.com/pub/NetWorker/Exchange/1.1/1.1-005/
	
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: Failure Startup SSE Mailbox Thirdparty won't
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
