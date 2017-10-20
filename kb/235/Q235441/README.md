---
layout: page
title: "Q235441: XFOR: Dirsync with Verimation Memo 6.3 Fails Doesn't Work"
permalink: /kb/235/Q235441/
---

## Q235441: XFOR: Dirsync with Verimation Memo 6.3 Fails Doesn't Work

{% raw %}

	Article: Q235441
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbpolicy exc55 EXC55SP3Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to run directory synchronization (dirsync) between Exchange Server
	and SNADS Verimation MEMO 6.3, dirsync stops responding. The Job Control
	Language (JCL) job that is run on the host system abends.
	
	One-way only dirsync, from Exchange Server to MEMO, does not work. The Exchange
	Server Recipient container is updated with MEMO recipient updates but MEMO does
	not contain the Exchange Server recipient addresses.
	
	CAUSE
	=====
	
	The JCL on the current Exchange Server Enterprise 5.5 CD host includes old PARMS
	(parameters) that are not supported in MEMO 6.3.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	+----------------------+
	| File name | Version  | 
	+----------------------+
	| Memo.dxa  | 5.5.2642 | 
	+----------------------+
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	JCL files to create the Directory Exchange Agents on the MEMO host system are
	included on the Microsoft Exchange Server Enterprise 5.5 CD. They are to be
	copied over to the host system to be compiled. See the "Microsoft Exchange
	Server Connector for SNADS Directory Synchronization Component" document located
	in the <ExchangeRoot>\Connect\Exchconn\Doc\Snads.rft file on the connector
	server for complete details.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbpolicy exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
