---
layout: page
title: "Q131867: RAS Auto Answer Fails with GVC FM144v Modem"
permalink: kb/131/Q131867/
---

## Q131867: RAS Auto Answer Fails with GVC FM144v Modem

	Article: Q131867
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	When you use the Remote Access Service (RAS) Admin with the GVC FM144v modem
	(also known as the F-1114 V/R6), RAS fails to set the modem to auto- answer mode
	properly. This results in the GVC modem not responding to an incoming call, or
	not handshaking even if it does pick up the call.
	
	CAUSE
	=====
	
	The MODEM.INF file specifies the following initialization string:
	
	     [GVC FM14400]
	     COMMAND_INIT=AT&F&C1&D2Q0V1E1S0=0S2=128 S7=55 S95=44<cr>
	
	The S95=44 command causes this problem. This command enables a set of result
	messages for the event sequence when establishing an error- controlled
	connection. It does not affect the way the modem negotiates a connection; it
	only enables the message options.
	
	NOTE: The "R6" in F-1114 V/R6 is a revision number for this modem. This revision
	does not support the S95 register.
	
	RESOLUTION
	==========
	
	Remove the S95=44 text from the [GVC FM14400] section of the MODEM.INF file
	(located in the %SYSTEMROOT%\SYSTEM32\RAS directory).
	
	Additional query words: prodnt carrier pick up off hook administrator
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
