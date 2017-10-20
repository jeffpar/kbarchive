---
layout: page
title: "Q274786: XFOR: Notes Addresses Are Deleted If a Mapping Rule Won't Work"
permalink: /kb/274/Q274786/
---

## Q274786: XFOR: Notes Addresses Are Deleted If a Mapping Rule Won't Work

{% raw %}

	Article: Q274786
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): kbExchange550sp4Fix
	Last Modified: 07-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you modify the Mapnotes.tbl file to send attributes from Exchange Server to
	the Lotus Notes Server field, and that field is not present in the Notes
	database, the addresses in the Notes address book may be deleted if you request
	a full reload. The following error messages may be logged in the connectivity
	logs:
	
	  LME-NOTES-DXA(01b1) 1 64099:Error {Not found} detected when Writing Note and
	  LMD >> dxanotes(764)
	
	  LME-NOTES-DXA(01b1) 2 64073:Error {Not found}: While processing Transaction
	  8943 >> dxanotes(463)
	
	CAUSE
	=====
	
	This problem can occur during directory synchronization (dirsync) from Exchange
	Server to Notes if a new field that did not previously exist in Notes appears in
	the mapping rules; in that case, the Notes entry is not updated at all. Because
	a full reload from Exchange Server to Notes forces the data to replicate to
	Notes, Notes determines that the entries that are not updated or created have
	disappeared from the address book, and deletes those entries.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	WORKAROUND
	==========
	
	To work around this problem, make sure that the mapping rules are correct before
	you change the production .tbl files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q249878 XFOR: Notes Dirsync Does Not Catch All Changes While Using Mapping
	  Rules
	
	  Q250400 XFOR: DXANOTES Writes Mail Server Data to the Personal Document of
	  the Target Address
	
	Additional query words: NAB
	
	======================================================================
	Keywords          : kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
