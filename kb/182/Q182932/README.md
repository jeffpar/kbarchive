---
layout: page
title: "Q182932: XFOR: Directory Replication Fails over Internet Mail Service"
permalink: kb/182/Q182932/
---

## Q182932: XFOR: Directory Replication Fails over Internet Mail Service

	Article: Q182932
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to perform directory replication between two Microsoft Exchange
	Server computers that are connected by an Internet Mail Service, directory
	replication may fail. The directory replication messages are received by the
	Internet Mail Service, but directory replication does not occur.
	
	CAUSE
	=====
	
	This problem can occur when the directory replication messages received by the
	Internet Mail Service have an address type of MSXCHNGE instead of EX. When this
	happens, the Internet Mail Service may be unable to convert the address to a
	Simple Mail Transfer Protocol (SMTP) address. The address is also not recognized
	as an Exchange address. Therefore, the Internet Mail Service is unable to
	deliver the message.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: message transfer agent information store is
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
