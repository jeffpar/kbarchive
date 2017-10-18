---
layout: page
title: "Q148325: LocalLU Not Registered on Windows Client If Queued = Operator"
permalink: kb/148/Q148325/
---

## Q148325: LocalLU Not Registered on Windows Client If Queued = Operator

	Article: Q148325
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the SNA Server Windows 3.x client software in SNA Server 2.11 or
	Service Pack 1 and an operator-started transaction program (TP), the LocalLU
	parameter does not work if you specify "queued=operator" for the Windows 3.x
	client and start the transaction program.
	
	CAUSE
	=====
	
	The SNA Server Windows client software is not setting the LocalLU parameter
	correctly when an operator started TP is invoked.
	
	If multiple client computers are running the same operator started TP, this
	problem causes SNA Server to route an incoming conversation startup request (an
	SNA FMH-5 Attach RU) to a randomly selected client computer, instead of being
	routed to the specific client which has the LocalLU configured.
	
	This problem does not occur with Windows NT, Windows 95 or Windows client
	computers with "queued=yes" specified. For more information about the LocalLU
	parameter, see Chapter 2 of the SNA Server APPC or CPIC Programmer's Guide.
	
	RESOLUTION
	==========
	
	To work around this problem, configure the transaction program to allow SNA
	Server to automatically start it. To do this, set Queued to yes (for example:
	queued=yes). In addition, make sure that the LocalLU parameter is properly
	registered on a Windows client computer. Do the following:
	
	1. Run the graphical WSHOWMEM utility, which is installed with the SNA Server
	  Windows 3.x client software.
	
	2. Double-click the "Service Sum" window and maximize the display. This displays
	  the state of the internal SNA Server client service table entries (used by
	  the SNA Server client software).
	
	3. In the "comname" column, locate the row which lists the TP name you can
	  invoke. On the second column of this row, make sure that the "In-Use" flag is
	  set to 1 (indicating that the TP that can be invoked is registered). For
	  example:
	
	  index in/ss prctyp type comname/boxname    pipename  date   time
	    0    0/0    0      0          /                           00:00:00
	    .     .     .      .          .              .        .     .
	    7    1/4    9     26  cpicrecv/steved3   com2127   08/03  16:18:50
	
	  In this example, CPICRECV is the invokable transaction program name. The
	  "type" field may be 26 (or 0x1a) for a manually started invokable TP, 5 for
	  an auto-started invokable TP, or 6 for a non-queued auto- started invokable
	  TP. See Chapter 2 of the APPC or CPIC Programmer's Guide for more information
	  about invokable TP Service Types.
	
	4. Double-click the invokable TP name. Details of this specific service table
	  entry appears. The last row of the display shows the Local LU name configured
	  for this invokable TP. For example:
	
	  shr.svc[7].srv.szLUName  = 'RECVLU  '
	
	  In this example, the Local LU name associated with this invokable TP is
	  RECVLU.
	
	To correct this problem, obtain the updated SNA Server Windows 3.x client
	software mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.11 and SNA Server
	2.11 service pack 1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
