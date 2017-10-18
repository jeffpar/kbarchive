---
layout: page
title: "Q127159: Attempt to Connect to Telnet Times Out"
permalink: kb/127/Q127159/
---

## Q127159: Attempt to Connect to Telnet Times Out

	Article: Q127159
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Telnet server using the Windows NT version 3.5
	Telnet client utility, the connection attempt times out.
	
	CAUSE
	=====
	
	A non-terminating acknowledgment (ACK) loop of Telnet IAC commands is initiated
	between the Windows NT computer and the Telnet server. This problem may be due
	to these reasons:
	
	- The Telnet server is sending an ACK when it receives a request to enter a
	  mode that it is already in.
	
	- The Windows NT Telnet client utility is not keeping track of previous IAC
	  command sequence(s).
	
	
	WORKAROUND
	==========
	
	Contact the manufacturer of the Telnet server for more information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
