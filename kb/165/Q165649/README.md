---
layout: page
title: "Q165649: Pooling Of Local APPC LUs Not Functioning Properly"
permalink: /kb/165/Q165649/
---

## Q165649: Pooling Of Local APPC LUs Not Functioning Properly

	Article: Q165649
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Clients fail to obtain a 5250 session when configured to use the default pool of
	Local APPC LUs if all of the sessions on the last Local APPC LU are in use.
	
	CAUSE
	=====
	
	SNA Server fails to provide a session from the next LU in the default outgoing
	Local APPC LU Pool. SNA Server will provide sessions starting with the last LU
	in the pool. When this LU has reached its session limit, it should start
	providing sessions from the next LU on the list.
	
	RESOLUTION
	==========
	
	A fix was made to the SNA Server service to resolve this problem. Obtain the
	hotfix mentioned below.
	
	The updated files are:
	
	  Wappc32.dll
	  Snaservr.exe
	  Trcservr.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: load balance
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
