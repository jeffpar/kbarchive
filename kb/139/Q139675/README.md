---
layout: page
title: "Q139675: TN3270: Limiting Users by Port Value"
permalink: /kb/139/Q139675/
---

## Q139675: TN3270: Limiting Users by Port Value

{% raw %}

	Article: Q139675
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2
	Operating System(s): 
	Keyword(s): kbsna211sp1 kbsna211sp2
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the SNA Server TN3270 server allows a client to connect using any
	port value and IP address. While it is possible to configure the range of IP
	addresses that have access to a pool or LU, TN3270 server always hard codes the
	port value range to (00000, 65535). There is no way to change this using the
	TN3270 Admin program.
	
	WORKAROUND
	==========
	
	To implement checking on a given port range, the TN3270 server configuration
	file (TNSVRCFG.TNC) must be manually edited.
	
	For example:
	
	This sample TN3270 configuration file shows one TN3270 pool configured to allow
	any client Internet protocol address or client port number access to the LUA LUs
	in the pool.
	
	  [SNA Resource 1]
	  Name=TNTEST
	  Sessions=16
	  MaxSessions=16
	  TerminalName1=IBM-3276-3
	  TerminalName2=IBM-3278-3
	  TerminalName3=IBM-3278-3-E
	  TerminalName4=IBM-3279-3
	  TerminalName5=IBM-3279-3-E
	
	  [Group 1]
	  Name=TNTEST
	  Comment=
	  SNAResource1=TNTEST
	  IPConnection1=000.000.000.000,000.000.000.000,00000,65535
	
	To modify the available port numbers change the last two numbers (00000,65535) to
	the desired range.
	
	Example Two:
	
	  [SNA Resource 1]
	  Name=TNTEST
	  Sessions=16
	  MaxSessions=16
	  TerminalName1=IBM-3276-3
	  TerminalName2=IBM-3278-3
	  TerminalName3=IBM-3278-3-E
	  TerminalName4=IBM-3279-3
	  TerminalName5=IBM-3279-3-E
	
	  [Group 1]
	  Name=TNTEST
	  Comment=
	  SNAResource1=TNTEST
	  IPConnection1=000.000.000.000,000.000.000.000,50000,60000
	
	This sets the allowable client port range to 50000-60000. Any client attempting
	to connect with a different local port number will be denied. If this occurs,
	the following TN3270 errors will occur:
	
	On the client machine:
	
	  Warning 512
	  TN3270 Service Error 512
	  Access for IP address <client IP address> port <client port
	  number>
	  is not configured.
	
	On the server machine:
	
	  Warning 603
	  TN3270 session with client at <client IP address> <port <client
	  port
	  number>> using LU <LU name> terminated abnormally because:
	
	  Access for IP address <client IP address> <port <client port
	  number>> is
	  not configured.
	  Explanation: A TN3270 client session was terminated abnormally.
	
	  Action: No action is necessary.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbsna211sp1 kbsna211sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2
	
	=============================================================================
	

{% endraw %}
