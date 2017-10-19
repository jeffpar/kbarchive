---
layout: page
title: "Q182314: XADM: DBCS Becomes &quot;?&quot; When You Click &quot;Save Window Contents&quot;"
permalink: /kb/182/Q182314/
---

## Q182314: XADM: DBCS Becomes &quot;?&quot; When You Click &quot;Save Window Contents&quot;

	Article: Q182314
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the Exchange Server Administrator program, when you click "Save Windows
	Contexts" on the File menu, Double Byte Charactor Set (DBCS) characters are not
	handled properly. All DBCS characters in the Administrator window become
	question marks.
	
	CAUSE
	=====
	
	This is because the Exchange Server Administrator program (Admin.exe) converts
	all UNICODE to Windows ANSI string. Windows ANSI string does not contain the
	DBCS table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: garbage JPN
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
