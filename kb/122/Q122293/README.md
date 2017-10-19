---
layout: page
title: "Q122293: LMHOSTS Lookup Can Cause Intermittent System Pauses"
permalink: /kb/122/Q122293/
---

## Q122293: LMHOSTS Lookup Can Cause Intermittent System Pauses

	Article: Q122293
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your computer running Windows for Workgroups version 3.11 with TCP/IP-32
	intermittently stops responding (hangs) for about 20 seconds at a time.
	
	This occurs if TCP/IP-32 is installed as a non-default network protocol and the
	Enable LMHOSTS Lookup option in Network Setup is checked.
	
	WORKAROUND
	==========
	
	If you do not need to access network servers over a router, you can work around
	this problem by clearing the Enable LMHOSTS Lookup check box in Network Setup.
	
	RESOLUTION
	==========
	
	Microsoft has released a new version of VNBT.386 corrects this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32. This problem has been
	corrected in an updated TCP/IP-32 version 3.11a. For information on the
	availability of TCP/IP-32 3.11a, see article Q122544 in the Microsoft Knowledge
	Base.
	
	Additional query words: wfw wfwg prodtcp32 1.00 3.11 3.11a tcpip
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311
	
	=============================================================================
	
