---
layout: page
title: "Q183065: XADM: Running Far East 4.0 Client and English Exchange Server"
permalink: /kb/183/Q183065/
---

## Q183065: XADM: Running Far East 4.0 Client and English Exchange Server

	Article: Q183065
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you run the Far East Client (Korean, Chinese Simplified, or Chinese
	Traditional)version 4.0 and the English Exchange Server on the same computer,
	the client will not work correctly after upgrading the Exchange Server computer
	to Service Pack 5.
	
	CAUSE
	=====
	
	The client does not work correctly because there are common files between the
	client and server that get updated to the English SP5 version when the Update
	program is run.
	
	RESOLUTION
	==========
	
	To resolve this problem, try one of the following:
	
	Run the localized Far East client on a separate computer, which is not running
	Exchange Server.
	
	-OR-
	
	Upgrade the client and server to version 5.0 or 5.5.
	
	-OR-
	
	Contact Microsoft PSS to receive a 4.0 SP5 client update that can be installed.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
