---
layout: page
title: "Q222839: XFOR: Migration Wizard Crashes While Importing Data from a GW PO"
permalink: /kb/222/Q222839/
---

## Q222839: XFOR: Migration Wizard Crashes While Importing Data from a GW PO

	Article: Q222839
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 11-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Migration Wizard will stop responding (crash) with a Dr. Watson error
	message while importing user information from a GroupWise post office.
	
	CAUSE
	=====
	
	The problem occurs when there is one or more subfolders under a root folder that
	contains spaces in the name. The Migration Wizard improperly parses the name of
	these folders and is unable to put the message belonging to the folder in the
	proper place.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Migration Wizard
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Mlmig32.dll | 5.5.2578.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: nested child
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
