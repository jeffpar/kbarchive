---
layout: page
title: "Q240788: XIMS: Outbound Limitation Works Improperly Post 5.5 SP2"
permalink: kb/240/Q240788/
---

## Q240788: XIMS: Outbound Limitation Works Improperly Post 5.5 SP2

	Article: Q240788
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 EXC55SP3Fix
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you apply one of the Internet Mail Service post-Exchange Server 5.5.
	Service Pack 2 (SP2) hotfixes from 2607 to 2650 on an Exchange Server 5.5 SP2
	computer, the outbound limitation, which is configured for a specific domain
	does not work correctly.
	
	CAUSE
	=====
	
	The problem is introduced by the resolution of a previous problem, which is
	actually a new feature. For additional information about this new feature,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q231303 XFOR: New Feature for Setting Size Limit for Internet Mail Service
	
	In the feature, a new registry key, OutboundSizeLimit is created, which uses
	numbers in bytes, so other configurations are changed to use numbers in bytes,
	too. But the configurations of maximum message size that are specified for each
	individual domain still use numbers in kilobytes, so the comparison returns an
	incorrect result.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Internet Mail Service
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Msexcimc.exe | 5.5.2650.21 | 
	+----------------------------+
	| Imcmsg.dll   | 5.5.2650.21 | 
	+----------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 2. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. On the Internet Mail tab of the Internet Mail Service Properties page, click
	  on the E-Mail Domain button next to Specify by E-Mail Domain.
	
	2. Add a domain. Specify a value in the Maximum Size field. The value that is
	  entered is divided by 1024 when it is used. For example, if 2,000 KB is
	  entered, only messages that are less than 2 KB can be sent out.
	
	This regression is introduced after SP2.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
