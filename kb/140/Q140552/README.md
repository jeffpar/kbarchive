---
layout: page
title: "Q140552: How to Optimize Windows NT to Run Over Slow WAN Links w/TCP/IP"
permalink: /kb/140/Q140552/
---

## Q140552: How to Optimize Windows NT to Run Over Slow WAN Links w/TCP/IP

{% raw %}

	Article: Q140552
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 03-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft TCP/IP-32 for Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some customer situations, it may be necessary to change some Registry values
	when using TCP/IP across a Wide Area Network (WAN) that has slow links.
	
	MORE INFORMATION
	================
	
	Optimizing Windows NT to Run Over Slow WAN Links with TCP/IP
	------------------------------------------------------------
	
	All of the TCP/IP parameters are registry values located under one of two
	different subkeys of:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services:
	
	  Tcpip\Parameters
	
	  -or-
	
	  <Adapter Name>\Parameters\Tcpip
	
	  where <Adapter Name> refers to the subkey for a network adapter to
	  which TCP/IP is bound such as Lance01.
	
	Values under the latter key(s) are specific to each adapter. You must reboot the
	computer for a change in any of these parameters to take effect.
	
	NOTE: The Windows NT 3.5 Resource Kit documentation was not updated properly from
	version 3.1. It lists a number of invalid TCP/IP registry parameters. The
	parameters listed in this Knowledge Base article should be used instead. The
	Windows NT 3.5 TCP/IP stack was completely rewritten, so many of the old
	parameters are no longer valid. The Windows NT 3.51 Resource Kit should include
	the necessary corrections or refer to the whitepaper available at the following
	location:
	
	  File Name: Tcpipimp2.doc
	  Location : ftp://ftp.microsoft.com/bussys/winnt/winnt-docs/papers/
	  Title : "Microsoft Windows NT 3.5/3.51/4.0: TCP/IP Implementation Details
	  TCP/IP Protocol Stack and Services, Version 2.0"
	
	Step-by-Step Procedure
	----------------------
	
	CAUTION: The Windows NT 3.5 TCP/IP implementation is largely self tuning.
	Adjusting registry parameters may adversely affect system performance.
	
	1. Increase TcpMaxConnectRetransmissions
	
	TcpMaxConnectRetransmissions
	Key: Tcpip\Parameters
	Value Type: REG_DWORD - Number
	Valid Range: 0 - 0xFFFFFFFF
	Default: 3
	
	Description: This parameter determines the number of times TCP will retransmit a
	connect request (SYN) before aborting the attempt. The retransmission timeout is
	doubled with each successive retransmission in a given connect attempt. The
	initial timeout value is three seconds.
	
	Notice that the timeout value doubles after each transmission retry. Increasing
	the default value may allow a client to connect over a slow WAN.
	The value should only be changed in very small increments because behavior is
	governed by the value below. Too large a value could ensure that a connection
	attempt will never time out.
	
	TcpMaxDataRetransmissions
	Key: Tcpip\Parameters
	Value Type: REG_DWORD - Number
	Valid Range: 0 - 0xFFFFFFFF
	Default: 5
	
	Description: This parameter controls the number of times TCP will retransmit an
	individual data segment (not connection request segments) before aborting the
	connection. The retransmission timeout is doubled with each successive
	retransmission on a connection. It is reset when responses resume. The base
	timeout value is dynamically determined by the measured round-trip time on the
	connection.
	
	2. Increase TcpWindowSize
	
	TcpWindowSize
	Key: Tcpip\Parameters
	Value Type: REG_DWORD - Number of bytes
	Valid Range: 0 - 0xFFFF
	Default: The smaller of 0xFFFF
	
	OR (The larger of four times the maximum TCP data size on the network
	
	  OR
	  8192 rounded up to an even multiple of the network TCP data size.)
	
	The default is 8760 for Ethernet.
	
	Description: This parameter determines the maximum TCP receive window size
	offered by the system. The receive window specifies the number of bytes a sender
	may transmit without receiving an acknowledgment. In general, larger receive
	windows will improve performance over high delay, high bandwidth networks. For
	greatest efficiency, the receive window should be an even multiple of the TCP
	Maximum Segment Size (MSS).
	
	Reducing the TCP Window size effectively causes an acknowledgment to be sent to
	the sender for data received sooner. This will lower the possibility that the
	sender will time out while waiting for an acknowledgment. However it will also
	increase the amount of network traffic and cause slower throughput.
	
	3. Reduce the ReplicationGovernor value
	
	You can add the ReplicationGovernor parameter to the registry of a backup domain
	controller (BDC) under:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Netlogon\Parameters
	
	  ReplicationGovernor REG_DWORD
	  Range: 0 to 100 percent
	  Default: 100
	
	This defines both the size of the data transferred on each call to the primary
	domain controller (PDC) and the frequency of those calls. For example, setting
	ReplicationGovernor to 50% will use a 64-KB buffer rather than a 128-KB buffer
	and will only have a replication call outstanding on the net a maximum of 50% of
	the time.
	
	Do not set ReplicationGovernor too low, or replication may never complete. A
	value of 0 will cause Netlogon to never replicate. The SAM/LSA database will be
	allowed to get completely out of synchronization.
	
	BDCs can be configured for the variances of WAN types. ReplicationGovernor allows
	the administrator to control the partial synchronization parameters. This
	parameter must be set individually on each BDC.
	
	NOTE: It is also possible to configure different replication rates at different
	times of the day using a script file with the AT command (for example, net stop
	netlogon, regini scriptfile, net start netlogon). The script file contains the
	path to the RegistrationGovernor parameter and the new Registry entries.
	Regini.exe is part of the Windows NT Resource Kit.
	
	This entry should only be changed if replication is being done across a slow WAN.
	Replication across a slow WAN link is network intensive and not recommended.
	
	4. Remove WINS and use lmhosts files instead for name resolution across link.
	  This will cause NetBIOS name resolution to occur on the local machine or the
	  local segment so that a connection to a WINS server across the WAN is not
	  attempted.
	
	5. To reduce print browsing traffic, follow the suggestions in the following
	  article in the Microsoft Knowledge Base:
	
	  Q131902 Printer Browse Thread May Cause Extensive Network Traffic
	
	For additional information about TCP/IP and NBT Configuration Parameters, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120642 TCP/IP and NBT Configuration Parameters for Windows 2000 or Windows
	  NT
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT351search kbWinNTW350 kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS351 kbWinNTS351search kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbWinNTW400 kbWinNT350search kbWinNT400search kbWinNTW350search kbWinNTW351search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
