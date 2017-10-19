---
layout: page
title: "Q124737: X400: Unable to Send or Receive Mail"
permalink: /kb/124/Q124737/
---

## Q124737: X400: Unable to Send or Receive Mail

	Article: Q124737
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2 of Microsoft Mail Gateway to X.400 may disconnect an existing
	session under heavy use conditions or it may be unable to establish outgoing or
	incoming connections, and it may display one or all of the following errors:
	
	  ERROR 3 (RTS): RTS open refused (Session limit exceeded)
	
	  DEBUG (T4_recv): Connection xx: tp_wait() failed:15
	
	  DEBUG (T4_send): Connection xx: tp_accept() failed:1
	
	CAUSE
	=====
	
	If the gateway is under heavy use, two errors may occur as it counts the number
	of active connections:
	
	1. This count is incorrectly decremented with every occurrence of a connection
	  request on the listening connection. This is incorrect; the listening
	  connection is not an active connection. Eventually, the count will decrement
	  to zero (0), and if a connection is active, it will be closed.
	
	2. Every attempted connection used additional memory in RAM. The previous
	  connection attempt was not being cleared from memory. The lack of memory
	  results in the "tp-wait" errors. The "tp_accept" errors tell the sending MTA
	  that the gateway cannot accept incoming connections at that time.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q119303 X400: Err Msg: ERROR 3 (RTS): RTS Open Refused...
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name      Version
	  ----------------------
	  X400gate.exe   3.2.12
	
	This hotfix has been posted to the following Internet location as X400gy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to X.400
	versions 3.0 and 3.2.
	
	MORE INFORMATION
	================
	
	The updated X400GATE.EXE file includes the following modifications for the
	causes listed above:
	
	1. The count is no longer decremented unless an active connection is released.
	
	2. The TP4 stack is deactivated and reactivated with each connection attempt,
	  freeing up memory.
	
	There is also a workaround for the memory issue: the TP4 stack can be allocated
	more memory by adjusting the [PLUTO] section of the PROTOCOL.INI file, as
	follows:
	
	  [PLUTO]
	
	  memory=8192
	
	The default value is 512 bytes/connection. For more information about the memory
	parameter, see Chapter 2 of the TP4/CLNP "Administrator's Reference."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320
	Version           : MS-DOS:3.0,3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
