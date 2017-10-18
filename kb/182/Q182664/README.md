---
layout: page
title: "Q182664: XCON: Notes Connector Sends Incorrect Header"
permalink: kb/182/Q182664/
---

## Q182664: XCON: Notes Connector Sends Incorrect Header

	Article: Q182664
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Exchange Notes Connector sends Web-based Lotus Notes messages to an
	Exchange Server computer, the header is incorrect. The incorrect header is:
	
	   <notes domain> on behalf of <notes user/notes domain>
	
	The Notes Connector should send the header as <notes user>/notes domain.
	
	CAUSE
	=====
	
	There was a parsing error on the Notes Connector.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: Notes Connector parse header
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
