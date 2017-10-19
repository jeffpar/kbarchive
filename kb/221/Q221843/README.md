---
layout: page
title: "Q221843: XFOR: Notes Client with Blank End Date Crashes Migration Wizard"
permalink: /kb/221/Q221843/
---

## Q221843: XFOR: Notes Client with Blank End Date Crashes Migration Wizard

	Article: Q221843
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 13-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrate calendar information from a Lotus Notes database, the Migration
	Wizard may stop responding if it encounters a calendar appointment with a blank
	end date.
	
	  -or-
	
	The following error message may appear:
	
	  The instruction at "0x0044adf2" referenced memory at "0x005085c0". The memory
	  could not be "read".
	
	CAUSE
	=====
	
	This problem can occur if Lotus Notes 4.5 or earlier is used to convert an
	appointment to a reminder. The conversion process leaves the end date blank.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Migration Wizard
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Mlmignts.dll | 5.5.2578.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
