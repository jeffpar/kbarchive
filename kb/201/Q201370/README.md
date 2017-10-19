---
layout: page
title: "Q201370: XFOR: Notes Advanced Rich Text Not Supported by App Connector"
permalink: /kb/201/Q201370/
---

## Q201370: XFOR: Notes Advanced Rich Text Not Supported by App Connector

	Article: Q201370
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 29-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Server and MAPI do not support several rich text items handled by Lotus
	Notes. This results in unexpected behavior when synchronizing messages between
	Exchange Server public folders and Lotus Notes discussion databases using the
	Microsoft Notes Application Connector.
	
	MORE INFORMATION
	================
	
	Rich text items handled by Lotus Notes which may cause problems include:
	
	- Page breaks
	
	- Buttons
	
	- Hotspot popup text
	
	- Table gridlines
	
	- Keyword radio buttons
	
	- Keyword check boxes
	
	- Margins
	
	- Line spacing
	
	- Certain tab and justification settings
	
	These items are not included in the message structure when converted to Exchange
	Server.
	
	Additional query words: MESA CXA
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
