---
layout: page
title: "Q182421: APPC UserID &amp; Password in CPIC Side Info Converted to Capitals"
permalink: kb/182/Q182421/
---

## Q182421: APPC UserID &amp; Password in CPIC Side Info Converted to Capitals

	Article: Q182421
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The APPC userID and password stored in CPIC side information is converted to all
	capitals, which may lead to validation failures.
	
	CAUSE
	=====
	
	The validate name routine converts strings to uppercase after the User ID and
	Password values are saved in SNA Server Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0. This problem was corrected in the latest SNA Server
	version 4.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	
	=============================================================================
	
