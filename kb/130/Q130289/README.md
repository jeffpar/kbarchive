---
layout: page
title: "Q130289: TN3270 Errors with Telnet Daemon Installed"
permalink: /kb/130/Q130289/
---

## Q130289: TN3270 Errors with Telnet Daemon Installed

{% raw %}

	Article: Q130289
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11SP1,2.11SP2,3.0,3.0SP1,3.0SP2,3.0SP3,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbnetwork kbsetup kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have installed both a telnet daemon and the SNA Server TN3270 service on
	a computer running SNA Server , the following error message may appear:
	
	  Could not start the TN3270 service on \\servername
	  Error 2140: An internal windows NT error occurred
	
	The following events are recorded in the system log:
	
	  Event 102:   TN3270 Service initialization completed by initialization
	
	  error.
	
	  Explanation: TN3270 Service initialization failed.
	
	  Event 205:   Windows Sockets API call BIND for port 23 failed with
	
	  return code WSAEADDRINUSE.
	
	  Explanation: Port 23 is in use by another Windows NT process.
	
	If the TN3270 Server Service is started before your Telnet daemon, you encounter
	the same problem with a different error message:
	
	  Could not start "Telnet Daemon name" server service on \\servername
	  error 1067: the process terminated unexpectedly.
	
	The following events are recorded in the system log:
	
	  Event 6553:  Telnet daemon name
	  Description: Failed to initialize the "telnet" tcp service
	
	  Event 6553:  Telnet Daemon name
	  Description: Could not create service: telnet; error code 10048
	
	CAUSE
	=====
	
	By default, both services attempt to initialize port 23 as the default port for
	their services.
	
	RESOLUTION
	==========
	
	If you are running both the TN3270 Server service and a Telnet Daemon service,
	create a separate entry for both services in the following file:
	
	  %systemroot%\system32\drivers\etc\services
	
	The service name should be TN3270. You must specify unique port numbers for both
	the Telnet and TN3270 Service entries.
	
	For example, after you edit the SERVICES file it might read:
	
	  # Copyright (c) 1993-1994 Microsoft Corp.
	  #
	  # This file contains port numbers for well-known services as defined by
	  # RFC 1060 (Assigned Numbers).
	  #
	  # Format:
	  #
	  # <service name>  <port number>/<protocol>  [aliases...]   [#<comment>]
	  #
	
	  echo                7/tcp
	  echo                7/udp
	  discard             9/tcp    sink null
	  discard             9/udp    sink null
	  systat             11/tcp
	  systat             11/tcp    users
	  daytime            13/tcp
	  daytime            13/udp
	  netstat            15/tcp
	  qotd               17/tcp    quote
	  qotd               17/udp    quote
	  chargen            19/tcp    ttytst source
	  chargen            19/udp    ttytst source
	  ftp-data           20/tcp
	  ftp                21/tcp
	  telnet             23/tcp
	  tn3270             24/tcp
	  smtp               25/tcp    mail
	  time               37/tcp    timserver
	  time               37/udp    timserver
	  rlp                39/udp    resource      # resource location
	  name               42/tcp    nameserver
	  name               42/udp    nameserver
	  whois              43/tcp    nicname       # usually to sri-nic
	  domain             53/tcp    nameserver    # name-domain server
	  domain             53/udp    nameserver
	  nameserver         53/tcp    domain        # name-domain server
	
	NOTE: The new entry begins with tn3270.
	
	Additional query words: prodnt event viewer prodsna
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbnetwork kbsetup kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.1,2.11,2.11SP1,2.11SP2,3.0,3.0SP1,3.0SP2,3.0SP3,4.0
	
	=============================================================================
	

{% endraw %}
