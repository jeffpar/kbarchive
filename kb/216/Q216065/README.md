---
layout: page
title: "Q216065: XFOR: PROFS: LME-PROFS-DIAMEX Fails to Process the Incoming Mess"
permalink: kb/216/Q216065/
---

## Q216065: XFOR: PROFS: LME-PROFS-DIAMEX Fails to Process the Incoming Mess

	Article: Q216065
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 13-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Exchange Connector (PROFS) processes an incoming Mail message,
	the following error message may be found in the Microsoft Exchange Connector
	Administrator's log viewer:
	
	  1998/10/15 08:46:27- LME-PROFS-DIAMEX(017b) 1 31000:Resource error:
	  Corrupted RTF Object [{Invalid syntax}]
	  >> mexe(14607)
	  1998/10/15 08:46:27- LME-PROFS-DIAMEX(017b) 1 56119:{Invalid syntax}:
	  Could not write file 'q\OBJECTS\26d6b61c.tmp' to Exchange message body
	  >> dia2mex(4171)
	
	CAUSE
	=====
	
	The problem occurs when the size of the RTF stream in lpRTFBody (which contains
	the original message body from the host and the RTF specific header and
	keywords) is a multiple of 4K, for example, 4096, 8192, and so forth. This
	problem was consistently reproduced by using different font settings, as long as
	the size is 4096 or 8192. The return code when the call fails is actually
	ERROR_INVALID_PARAMETER.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	Component: MAPI
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Mapi32.dll | 5.5.2540.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
