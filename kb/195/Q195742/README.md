---
layout: page
title: "Q195742: XCON: Conversion Error When Receiving General-Text Message"
permalink: /kb/195/Q195742/
---

## Q195742: XCON: Conversion Error When Receiving General-Text Message

{% raw %}

	Article: Q195742
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
	
	When Exchange Server receives an X.400 message coded with General-Text and
	containing no body text but only an attachment, the message transfer agent (MTA)
	may generate a non-delivery-report (NDR) back to the originator, and log the
	following conversion error in the Event Log:
	
	  Event: 210
	  Description: An internal MTA error occurred. Content conversion for
	  message C=FR;A=ATLAS;P=myPRMD;L=BB92FC5311D26E5B5246B7B8 failed.
	  Conversion error: 4096, Object at fault: 06000100, Original content
	  type: 56010A01, New content type: 2A864886F7140501. PDU dump reference
	  8420 [MTA XFER-IN 13 112] (14)
	
	This occurs when the first body-part contains only CR LF.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Message Transfer Agent (MTA)
	
	  File Name      Version
	  -------------------------
	  Dbserver.sch   5.5.2500.0
	  Dcprods.cat    5.5.2500.0
	  Ems_rid.dll    5.5.2500.0
	  Emsmta.exe     5.5.2500.0
	  Info4log.cfg   5.5.2500.0
	  Infoblog.cfg   5.5.2500.0
	  Infodlog.cfg   5.5.2500.0
	  Infollog.cfg   5.5.2500.0
	  Infotlog.cfg   5.5.2500.0
	  Mtacheck.exe   5.5.2500.0
	  Mtamsg.dll     5.5.2500.0
	  P2.xv2         5.5.2500.0
	  X400om.dll     5.5.2500.0
	  X400omv1.dll   5.5.2500.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: NDR
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
