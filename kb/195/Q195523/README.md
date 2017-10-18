---
layout: page
title: "Q195523: XFOR: Notes Shortname Field Might Not Be Synchronized"
permalink: kb/195/Q195523/
---

## Q195523: XFOR: Notes Shortname Field Might Not Be Synchronized

	Article: Q195523
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using multi-values in the Shortname field of a Lotus Notes server
	directory, the synchronization with the Exchange Server directory may result in
	only the last value of that field being present in the Exchange Server Alias
	field.
	
	This problem occurs only in Exchange Server 5.5 Service Pack 1, and in the case
	of mixed Single Byte Character Set (SBCS) / Multiple Byte Character Set (MBSC)
	values.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Exchange Notes Connector
	
	  File Name      Version
	  -------------------------
	  Dxanotes.dll   5.5.2442.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 1.
	
	Additional query words: mapping rule amap.tbl mapnotes.tbl dxamex dxanotes
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
