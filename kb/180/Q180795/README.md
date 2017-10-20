---
layout: page
title: "Q180795: XADM: Intrasite Directory Replication Fails with Error 1720"
permalink: /kb/180/Q180795/
---

## Q180795: XADM: Intrasite Directory Replication Fails with Error 1720

{% raw %}

	Article: Q180795
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One or more servers within the site fail to notify other site servers of replica
	updates, and other site servers fail in their attempt to communicate with the
	affected server or servers.
	
	The problem servers log the following Directory event in the Application Event
	Log during startup:
	
	  1166
	  Error 1720 has occurred (Internal ID 3230203). Contact Microsoft
	  Technical Support for assistance.
	
	Additionally, other site servers may log the following Directory events when
	attempting to communicate with the problem servers:
	
	  1083
	  Replication warning: The directory replication agent (DRA) couldn't
	  synchronize naming context /o=<some-naming-context> with naming context
	  on directory <some-servername-or-DSA-Signature>
	
	  1059
	  Internal error: The directory replication agent (DRA) call returned
	  error 13.
	
	CAUSE
	=====
	
	During directory service startup, the RPC endpoint mapper failed in its attempt
	to register an endpoint on behalf of the directory service for a specific
	protocol. This can occur for the ncacn_ip_tcp protocol when the following
	conditions are true:
	
	- The directory service has had a registry setting applied to force the use of
	  a specific TCP port for directory service communication. (For more
	  information, see Microsoft Knowledge Base article Q155831, "XADM: Setting
	  TCP/IP Ports for Exchange and Outlook Client Connections Through a
	  Firewall").
	
	- That port has already been assigned to some other process by Winsock or RPC
	  by the time the directory service starts.
	
	
	RESOLUTION
	==========
	
	If the network environment requires that the Exchange Services have fixed ports
	assigned to them, carefully plan port assignments to ensure that the ports are
	not already in use. See MORE INFORMATION, below. Also see the following
	Microsoft Knowledge Base articles:
	
	  Q155831 XADM: Setting TCP/IP Ports for Exchange and Outlook Client
	  Connections Through a Firewall
	
	  Q176466 XGEN: TCP Ports and Microsoft Exchange: In-depth Discussion
	
	MORE INFORMATION
	================
	
	The Exchange Services' default behavior is to allow the RPC endpoint mapper to
	dynamically assign a TCP port from the pool of ephemeral (short-lived) ports
	during service initialization. On Windows NT, by default, this pool begins with
	port 1024. The result is that the port assigned to a service can be different
	every time the service starts.
	
	Clients attempting to contact a service first query the RPC endpoint mapper (at
	port 135) to determine at what port the Exchange Service can be contacted (see
	Q176466).
	
	Some network environments (typically involving firewalls) require that the ports
	used by services remain within a fixed range, or in the extreme, also that they
	remain consistent every time the service executes.
	
	
	Port Assignment Options and Strategy
	------------------------------------
	
	NOTE: The UDP protocol also has pools of port numbers. These are separate from
	the TCP pools.
	
	There are two pools of TCP port numbers to draw from for forcing an Exchange
	Service to use a particular TCP port: the Well-known Ports pool (0 - 1023); and
	the Ephemeral pool (1024 and above). Either is satisfactory, and a firewall's
	configuration may dictate which pool to use. When using either pool, adhere to
	the following:
	
	- Assign ports not already in use in the environment.
	
	- Document those choices (the \winnt\system32\drivers\etc\services file is a
	  logical place for such documentation).
	
	Well-known (TCP) Ports (0 - 1023):
	
	By convention and for interoperability of standard network services, this pool of
	addresses was set aside per RFC 1060, and many of these ports are reserved for
	use by specific services, such as echo, ftp, smtp, ldap, pop3, finger, nntp,
	snmp, and so on. There are 1024 ports in this pool (not all of them assigned
	yet), and typically only a small fraction of these services is actually
	implemented within a particular computing environment. It is acceptable to use
	ports that are not currently (nor ever will be) hosting the service that the
	port was originally reserved for, or using unassigned ports.
	
	Ephemeral (TCP) Ports:
	
	DO NOT pick the first ports within this range (1024 [ASCII 150] 65535). Winsock
	and RPC assign these ports starting at the lowest in the range. By the time the
	Exchange Services starts up, some of the first ports may have been already
	assigned (hence the SYMPTOMS above). Unfortunately there is no comprehensive
	diagnostic that can report which ports have been assigned by either Winsock or
	RPC. Running "NETSTAT -a" lists all connections and listening ports, but this
	may not reveal all assigned ports. Experimentation may be required. If in doubt,
	consider assigning from the Well-known ports pool, or selecting port numbers
	above 1023 (for instance, the 1200 range).
	
	
	Other Core Exchange Services:
	
	Neither the Exchange System Attendant nor the Exchange Information Store service
	logs an event if an RPC endpoint creation fails during service initialization.
	The operating behavior and performance of these services without the
	ncacn_ip_tcp protocol enabled is unpredictable and could vary widely from
	environment to environment. The MTA logs:
	
	  9321 - Interface
	  An RPC communications error occurred. An attempt to listen over RPC has
	  failed. NT Error: 1720. [ncacn_ip_tcp BASE IL MAIN BASE 1 504] (14)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
