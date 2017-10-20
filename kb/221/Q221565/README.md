---
layout: page
title: "Q221565: XFOR:Messages Blocked from Host to Exchange on OV/VM(PROFS)"
permalink: /kb/221/Q221565/
---

## Q221565: XFOR:Messages Blocked from Host to Exchange on OV/VM(PROFS)

{% raw %}

	Article: Q221565
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
	
	Mail sent from the host to Exchange Server by means of the Sendfile command
	might result in the OV/VM (PROFS) Connector restarting continuously. This will
	result in a mail backlog on the host side.
	
	CAUSE
	=====
	
	There are certain key words in the host (VM) environment that should not be
	used, for example, the keyword SYSTEM. When you use the keyword SYSTEM as part
	of a target Exchange Server mail recipient, the host will strip out the username
	(SYSTEM) before sending it to the OV/VM (PROFS) connector, which causes the
	OV/VM (PROFS) Connector to go into an endless loop.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: OV/VM (PROFS) Connector
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Lsvmhc.dll | 5.5.2573.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	To send a note from the host to Exchange Server, the format is as follows:
	
	  SENDFILE <FILENAME> <FILETYPE> <FILEMODE> <USERID> AT
	  <NODEID>
	
	So in this case, taking the file Profile.exec on the A disk, and sending it to
	the Exchange(system) address, the command line would be:
	
	  SENDFILE PROFILE EXEC A SYSTEM AT EXCHANGE
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
