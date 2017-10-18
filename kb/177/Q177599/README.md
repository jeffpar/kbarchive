---
layout: page
title: "Q177599: XFOR: SNADS and PROFS Connectors Do Not Convert Note Objects"
permalink: kb/177/Q177599/
---

## Q177599: XFOR: SNADS and PROFS Connectors Do Not Convert Note Objects

	Article: Q177599
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Outlook Note (New Note) command allows the creation of folder-style notepad
	items. These note objects are stored as Rich Text Format (RTF) and are not
	interpreted by the SNADS and PROFS connectors. When a Microsoft Exchange Server
	user sends a "note" to a SNADS or PROFS user, the whole object is sent
	uninterpreted.
	
	CAUSE
	=====
	
	RTF to EBCDIC conversion is not currently supported.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: convert
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	
	=============================================================================
	
