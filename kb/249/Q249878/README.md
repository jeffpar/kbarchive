---
layout: page
title: "Q249878: XFOR: Notes Dirsync Doesn't Catch All Changes Using Mapping Rule"
permalink: /kb/249/Q249878/
---

## Q249878: XFOR: Notes Dirsync Doesn't Catch All Changes Using Mapping Rule

{% raw %}

	Article: Q249878
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you modify the Mapnotes.tbl file to send custom attributes in Exchange
	Server to the Lotus Notes "children" field, the data may not be replicated over
	if the user already exists in Notes. You must first delete the Exchange Server
	user from the Notes Address Book and perform a full reload from Exchange Server
	to Notes to successfully force the data to replicate over to Notes.
	
	CAUSE
	=====
	
	During directory synchronization (dirsync) from Exchange Server to Notes, if a
	new field appears in the mapping rules that were previously non-existent in
	Notes, the Notes entry is not updated at all. This requires a full reload from
	Exchange Server to Notes to successfully force the data to replicate over to
	Notes.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
