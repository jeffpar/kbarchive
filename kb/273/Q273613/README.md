---
layout: page
title: "Q273613: XFOR: RTF Info. Lost from Notes to CR over Internet Mail Service"
permalink: kb/273/Q273613/
---

## Q273613: XFOR: RTF Info. Lost from Notes to CR over Internet Mail Service

	Article: Q273613
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Rich Text Format (RTF) is lost when e-mail messages come from a Lotus Notes
	client through the Microsoft Exchange Connector for Lotus Notes under the
	following conditions:
	
	- E-mail messages are sent from Notes to an Internet custom recipient over
	  Internet Mail Service.
	
	- On the Internet Mail Service Properties page, when you click the Internet
	  Mail, and then click Advanced Options, the "Send Microsoft Exchange rich text
	  formatting" option is set to "User."
	
	- On the Advanced tab of a given custom recipient's properties, the "Allow rich
	  text in messages" check box is selected.
	
	CAUSE
	=====
	
	The connector is receiving the RTF handling information from the wrong source.
	
	
	RESOLUTION
	==========
	
	The Exchange Notes Connector has been corrected to release the memory allocated
	by the critical section.
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	If users do not need to be able to control the RTF handling of their e-mail
	messages, you can set the User setting on the Internet Mail Service to Always.
	If users do need to control the RTF handling of e-mail messages, there is no
	workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 4.
	
	Additional query words: notes imc rtf IMS lsmexif dll
	
	======================================================================
	Keywords          : exc55 kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
