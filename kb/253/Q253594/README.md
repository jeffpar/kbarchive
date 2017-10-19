---
layout: page
title: "Q253594: MA Updates Not Written to the Transaction Stack"
permalink: /kb/253/Q253594/
---

## Q253594: MA Updates Not Written to the Transaction Stack

	Article: Q253594
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the transaction stack by using the VIATranRpt tool, transactions
	entries may be missing for a specific Management Agent (MA). By default, every
	time an MA adds, modifies, or deletes a record, it is recorded in the
	transaction stack. You can display this information in text format by dumping
	the transaction stack.
	
	CAUSE
	=====
	
	Although this behavior (recording transactions) is the default behavior, you can
	disable this functionality. If this functionality is disabled when the MA is
	run, the information is not written to the transaction stack and appears to be
	missing.
	
	RESOLUTION
	==========
	
	To resolve this issue, enable this functionality on the problem MA:
	
	1. Log on to compass with an Administrator account.
	
	2. In the Action panel, click Bookmarks, and then click Management Agents.
	
	3. Click the problem MA.
	
	4. In the Action panel, click Configure MA.
	
	5. Click the Metadirectory Relationships tab.
	
	6. On the Configuration tab, click to select the "Write entries to the
	  transactions stack during synchronization" check box.
	
	7. Click OK.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
