---
layout: page
title: "Q249884: XFOR: Connector for Lotus Notes Dirsync Truncates Last Name"
permalink: kb/249/Q249884/
---

## Q249884: XFOR: Connector for Lotus Notes Dirsync Truncates Last Name

	Article: Q249884
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Connector for Lotus Notes directory synchronization (dirsync)
	process from Exchange Server to Lotus Notes may truncate the last character in
	the Last Name field for an Exchange Server recipient. This occurs for Exchange
	Server recipients in the Notes directory if the rule that maps the last name
	uses the NAMEL function.
	
	CAUSE
	=====
	
	This issue can occur as a result of a logical bug in the NAMEL function.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue, use other mapping functions instead of the NAMEL
	function to generate the Last Name field. For additional information about
	mapping rules and functions, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q180517 XFOR: Customizing Directory Synchronization Between Exchange and
	  Notes
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	
	Additional query words: notesmc nmc
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
