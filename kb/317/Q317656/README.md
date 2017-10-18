---
layout: page
title: "Q317656: XADM: Memory Issues After You Update Scan Engine"
permalink: kb/317/Q317656/
---

## Q317656: XADM: Memory Issues After You Update Scan Engine

	Article: Q317656
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you update your antivirus software, you may experience one of the
	following issues:
	
	- Microsoft Exchange Server services may stop.
	
	- Your computer may report being out of virtual memory and one of the following
	  event ID messages may be logged in the Application event log:
	
	  Event Type: Information
	  Event Source: DrWatson
	  Event Category: None
	  Event ID: 4097
	  Date: 12/3/2001
	  Time: 10:55:59 AM
	  User: N/A
	  Computer: EXCHANGE01
	  Description:
	  The application realscan.exe generated an application error The error occurred
	  on 10/ 3/2001 @ 16:55:59. 31 The exception generated was c0000005 at address
	  00413c38 (<nosymbols>)
	
	  Event Type: Error
	  Event Source: MSExchangeIS Private
	  Event Category: General
	  Event ID: 7200
	  Date: 12/3/2001
	  Time: 10:45:00 AM
	  User: N/A
	  Computer: EXCHANGE01
	  Description:
	  Background thread FDoQuotaCheck halted due to error code 0xfaf.
	
	  Event Type: Information
	  Event Source: MSExchangeDS
	  Event Category: Internal Processing
	  Event ID: 1166
	  Date: 12/3/2001
	  Time: 10:44:52 AM
	  User: S-1-5-21-509428745-1890147791-1008150880-5537
	  Computer: EXCHANGE01
	  Description:
	  Error 8 has occurred (internal ID 30f0090). Contact Microsoft Technical
	  Support for assistance.
	
	  -or-
	
	  Event Type: Error
	  Event Source: MSExchangeIS Private
	  Event Category: General
	  Event ID: 1220
	  Date: 12/3/2001
	  Time: 10:45:05 AM
	  User: N/A
	  Computer: EXCHANGE01
	  Description:
	  Internal server error: database session was not released by previous request.
	
	CAUSE
	=====
	
	This issue may occur after you update your Trend Micro scan engine to version
	5.500.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Trend Micro Inc. for additional information and
	the latest update of the scan engine.
	
	For information about how to contact Trend Micro Inc., click the appropriate
	article number in the following list to view the article in the Microsoft
	Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	You may also consider reverting the scan engine to version 5.450.
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
