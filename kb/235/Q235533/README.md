---
layout: page
title: "Q235533: XIMS: Refreshing MTS-OUT Queue Causes Application Error"
permalink: kb/235/Q235533/
---

## Q235533: XIMS: Refreshing MTS-OUT Queue Causes Application Error

	Article: Q235533
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you repeatedly click Refresh while viewing the status of the MTS-OUT queue in
	the Exchange Server Administrator program, an application error may occur in
	Msexcimc.exe.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Internet Mail Service
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Imcmsg.dll   | 5.5.2637.0 | 
	+---------------------------+
	| Msexcimc.exe | 5.5.2637.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	MORE INFORMATION
	================
	
	To view the status of the MTS-OUT queue in the Administrator program:
	
	1. Start the Administrator program. To do so, click Start, point to Programs,
	  point to Microsoft Exchange, and then click Microsoft Exchange Administrator.
	
	2. In the left pane, click the Connections object under the appropriate site. In
	  the right pane, click the Internet Mail Service, and then on the File menu,
	  click Properties. Note that the Connections object appears under the
	  Configuration object.
	
	3. Click the Queues tab, hold down the SHIFT key, and then in the Queue Name
	  box, select "Outbound messages awaiting delivery".
	
	Additional query words: traffic ims internet mail connector imc
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
