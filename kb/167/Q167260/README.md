---
layout: page
title: "Q167260: XCLN: How to Use RPCPing to Test RPC Communication"
permalink: /kb/167/Q167260/
---

## Q167260: XCLN: How to Use RPCPing to Test RPC Communication

{% raw %}

	Article: Q167260
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The RPC Ping Utility can be used to confirm the RPC connectivity between the
	computer running Microsoft Exchange Server and any of the supported Microsoft
	Exchange Client workstations on the network. This utility can be used to check
	if the Microsoft Exchange Server services are responding to RPC requests from
	the client workstations via the network.
	
	MORE INFORMATION
	================
	
	There are two components in the RPC Ping Utility: a server-side component and a
	client-side component.
	
	The executable file of each component is listed below:
	
	  Server Component: Rpings.exe (for the Microsoft Exchange Windows NT
	  Server)
	
	  Client Component: Rpingc32.exe (for Microsoft Windows NT and Windows95)
	                    Rpingc16.exe (for Microsoft Windows 3.1x clients)
	                    Rpingdos.exe (for Microsoft DOS clients)
	
	Rpings.exe
	----------
	
	Rpings.exe is the server-side RPC ping utility.
	
	Rpings contains two RPC functions Echo and Stats called by the client-side RPC
	ping utilities Rpingc16, Rpingc32 or Rpingdos.
	
	Run Rpings without any options to use all available protocol sequences.
	
	Rpings.exe
	----------
	
	Command Line Syntax:
	
	  RPINGS [-p Protocol Sequence]
	
	  Protocol sequences can be set using these friendly names
	      -p namedpipes
	      -p tcpip
	      -p ipx/spx
	      -p netbios
	      -p vines
	
	  enter '@q' to exit rpings.
	
	where
	
	  Protocol Sequence - Is the supported transport mechanisms of RPC such as:
	
	  namedpipes NCA connection over Named Pipes (ncacn_np)
	
	  tcpip NCA connection over TCP/IP (ncacn_ip_tcp) netbios NCA connection over
	  Netbios on Netbeui (ncacn_nb_nb) ipx/spx NCA connection over SPX (ncacn_spx)
	  vines NCA connection over Banyan Vines (ncacn_vns_spp)
	
	Rpingc32.exe, Rpingc16.exe, and Rpingdos.exe
	--------------------------------------------
	
	Rpingc32 is the 32-bit version of the client-side of the RPC Ping Utility.
	Rpingc16 and Rpingdos.exe are the 16-bit versions of the client side. They will
	connect and bind to the specified destination RPC server and display the status,
	available protocol sequences with end points and quality of the RPC connection.
	
	Both the Rpingc32.exe and Rpingc16.exe utilities are set up to run in the Windows
	environment. Rpingdos.exe utility runs in the MS-DOS environment.
	
	Rpingc32.exe and Rpingc16.exe
	-----------------------------
	
	Options:
	
	  Exchange Server:  The name of the Exchange Server to ping
	  Protocol Sequence:   The following options are available:
	              Any (default)
	              Named Pipes
	              IPX/SPX
	              TCP/IP
	              Netbios
	              Vines
	  End Point:        The following End Points on the Exchange Server are
	  available:
	              Rping (default, all)
	              Store (the Exchange Store)
	              Admin (the Exchange Admin)
	
	  Number of Pings:  Continuous
	           Stop at ___
	
	  Mode:          Ping Only (character echoed by RPINGS)
	            End Point Search (enumerates all endpoints available)
	
	  Run with Security:   verifies that authenticated RPCs work
	
	Rpingdos.exe
	------------
	
	Syntax:
	
	  RPINGDOS [-p Protocol Sequence] -n Network Address [-e End Point] [-c
	  xxx] [-s]
	
	      -p [protocol_sequence] defaults to named pipes
	      -n [network_address] is required
	      -e [endpoint] endpoint to find, defaults to rping
	      -c [xxx] number of pings, defaults to 1.
	      -s run an endpoint search
	
	  Protocol sequences can be set using these friendly names
	      -p namedpipes
	      -p tcpip
	      -p ipx/spx
	      -p netbios
	      -p vines
	
	The RPCPING utility and files can be found on the Exchange Server CD in the
	Support\Rpcping directory.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	
	=============================================================================
	

{% endraw %}
