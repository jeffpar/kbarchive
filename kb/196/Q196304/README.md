---
layout: page
title: "Q196304: XFOR: SNADS Connector Displays Error Due to Incoming SMTP Messag"
permalink: /kb/196/Q196304/
---

## Q196304: XFOR: SNADS Connector Displays Error Due to Incoming SMTP Messag

{% raw %}

	Article: Q196304
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNADS Connector may experience a crash in its LME-SNADS-MEXDIA process,
	resulting in a stopped process or a Dr. Watson error message. The message flow
	outbound to the host will be stopped at this point in time.
	
	CAUSE
	=====
	
	The SNADS connector received an SMTP message with an unexpected character in the
	Sender name for its P2 header. For example,
	
	  postmaster%g%s@commpany.com.
	
	This results in the stopping of the LME-SNADS-MEXDIA process on the connector.
	
	RESOLUTION
	==========
	
	The next release of the SNADS connector, included in the latest service pack,
	correctly parses the Sender name field in the P2 header, and no longer stops the
	LME-SNADS-MEXDIA process.
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	WORKAROUND
	==========
	
	To work around this problem, remove the offending message from the SNADS queue -
	Outbound from Exchange Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	This problem was first corrected in Exchange Server 5.5 Service Pack 3.
	
	Additional query words: crash, Dr. Watson, snads, lme-snads-mexdia
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
