---
layout: page
title: "Q192911: XFOR: Dirsync Between Notes and OV/VM over Exchange Fails"
permalink: /kb/192/Q192911/
---

## Q192911: XFOR: Dirsync Between Notes and OV/VM over Exchange Fails

{% raw %}

	Article: Q192911
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use LinkAge Directory Exchange version 3.2 to perform directory
	synchronization between OV/VM and Lotus Notes over an Exchange Server 5.5
	backbone, directory synchronization does not work.
	
	In the following example, OV/MVS entries are not dirsynced to Lotus Notes and
	vice versa:
	
	  OV/MVS-----SNADS LDE------->Exchange 5.5----Exchange 5.5 Notes
	  Connector ------>Notes
	
	
	This problem only occurs if you use LinkAge Directory Exchange (LDE) and an
	Exchange 5.5 connector to perform directory synchronization together.
	
	CAUSE
	=====
	
	When custom recipients are dirsynced via LDE connectors to Exchange, the
	recipients are not exported by any 5.5 connector, because their raw property
	"imported from" field is listed as a type that the connector misunderstands it
	received it from.
	
	
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
	  Lsdxamex.exe   5.5.2163.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	Additional query words: notes dirsync ov/vm linkage
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
