---
layout: page
title: "Q191286: XFOR: Notes Connector Crashes When Importing Too-Long Field"
permalink: /kb/191/Q191286/
---

## Q191286: XFOR: Notes Connector Crashes When Importing Too-Long Field

	Article: Q191286
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 06-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Administrators of Microsoft Exchange may encounter an access violation against
	Lsdxants.exe when running the "full upload" directory synchronization option
	between Exchange and Lotus Notes.
	
	CAUSE
	=====
	
	One field in the imported document is larger than the 512-byte size of the
	buffer used to read the data. The buffer then overwrites the stack, and the
	access violation occurs when trying to return from this function.
	
	WORKAROUND
	==========
	
	The stack in the Dr. Watson log contains the faulty field. Reducing the field
	size to less than 512 bytes resolves the issue.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	Additional query words: Linkage Lotus DXA
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
