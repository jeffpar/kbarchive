---
layout: page
title: "Q192940: XFOR: Internet Mail Loses Message Body"
permalink: kb/192/Q192940/
---

## Q192940: XFOR: Internet Mail Loses Message Body

	Article: Q192940
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a message that contains rich text is received from the Internet via the
	Internet Mail Service, two symptoms can occur:
	
	- The Microsoft Exchange information store may use 100 percent of the processor
	  time and not deliver the message.
	
	- The message body may be lost.
	
	
	CAUSE
	=====
	
	When the message is received, the rich text part of the message may be corrupt.
	If the rich text is corrupt, and the information store tries to sync the rich
	text to the message body, the information store may fail and fall into an
	infinite loop, or it may lose the data that it was syncing and not retry the
	operation. If the information store gets into an infinite loop, no more messages
	are delivered. The store must be restarted, and the failing archive removed from
	the Exchsrvr\Imcdata\In directory.
	
	RESOLUTION
	==========
	
	Exchange Server 5.0
	-------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  ------------------------
	  Mdbmsg.dll   5.0.1461.63
	  Store.exe    5.0.1461.63
	
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Gapi32.dll   5.5.2402.0
	  Mdbmsg.dll   5.5.2402.0
	  Store.exe    5.5.2402.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5. This problem was first corrected in Exchange Server 5.5
	Service Pack 2.
	
	
	Additional query words: Loop High CPU Spin spinning looping crash inbound
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
