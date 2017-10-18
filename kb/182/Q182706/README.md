---
layout: page
title: "Q182706: Application Exception in Snaexp.exe After Deleting LUA Pool"
permalink: kb/182/Q182706/
---

## Q182706: Application Exception in Snaexp.exe After Deleting LUA Pool

	Article: Q182706
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Manager generates an application exception error after the user deletes an
	LUA pool and then stops the TN3270 service. This behavior can be reproduced
	using the steps below.
	
	1. Start SNA Manager with a mainframe connection containing a range of
	  configured LUA LUs.
	
	2. Create an LUA pool and assign the LUs to it.
	
	3. Start the server, activate the connection, and start the TN3270 service.
	
	4. Connect a TN3270 client session.
	
	5. Delete the TN3270 or LUA pool.
	
	6. Delete the LUA LUs from the connection. DO NOT SAVE the configuration yet.
	
	7. Stop the TN3270 service.
	
	The following exception messages will appear:
	
	  SnaExp.exe - Application Error
	  The instruction at "0x67709190" referenced memory at "0x00000002". The memory
	  could not be "read".
	
	  Click "OK"
	
	  SnaExp.exe - Application Error
	  The instruction at "0x762b12b6" referenced memory at "0x00000008". The memory
	  could not be "read".
	
	CAUSE
	=====
	
	SNA Manager does not release the pointer to the LU from the user object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 3.0 SP3. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
