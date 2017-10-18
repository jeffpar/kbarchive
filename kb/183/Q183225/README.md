---
layout: page
title: "Q183225: XADM: GPF Occurs on Double-Byte Character Set Server"
permalink: kb/183/Q183225/
---

## Q183225: XADM: GPF Occurs on Double-Byte Character Set Server

	Article: Q183225
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a message labeled with a code page 0 character set (such as US-
	ASCII) to a computer running a double-byte character set (DBCS) version of
	Microsoft Exchange Server, a general protection fault (GPF) may occur on the
	Exchange Server computer.
	
	CAUSE
	=====
	
	When a code page 0 message is sent to a DBCS Exchange Server computer, the
	message may contain incorrectly aligned characters after it is processed by the
	server. This may cause a buffer overflow to occur, which can cause a GPF to
	occur on the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
