---
layout: page
title: "Q142641: Internet Server Unavailable Because of Malicious SYN Attacks"
permalink: kb/142/Q142641/
---

## Q142641: Internet Server Unavailable Because of Malicious SYN Attacks

	Article: Q142641
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On your computer running the TCP/IP protocol and connected to the Internet, some
	or all network services are rendered unavailable and error messages such as the
	following appear on the network client screen:
	
	  The connection has been reset by the remote host.
	
	This symptom of all network services being rendered unavailable may also occur on
	a computer running an operating system other than Windows NT, for example, UNIX.
	
	CAUSE
	=====
	
	Your computer has become the target of a malicious attack known as TCP/IP "SYN
	Flooding" or "SYN Attacks."
	
	"Computer hackers" can target an entire machine, or a specific TCP service such
	as web services. The attack is focused on the TCP protocol used by all computers
	on the Internet, and is not specific to the Windows NT operating system.
	
	How SYN Flooding Works
	----------------------
	
	SYN Flooding works as follows: (see also CERT(sm) Advisory CA-96.21 at
	ftp://info.cert.org/pub/cert_advisories
	
	- A TCP connection request (SYN) is sent to the target computer. The source IP
	  address in the packet is "spoofed," or replaced with an address that is not
	  in use on the Internet, or that belongs to another computer. An attacker will
	  send many of these TCP SYNs to tie up as many resources as possible on the
	  target computer.
	
	- Upon receiving the connection request, the target computer allocates
	  resources to handle and track the new connection, then responds with a
	  "SYN-ACK". In this case, the response is sent to the "spoofed" non- existent
	  IP address.
	
	- No response is received to the SYN-ACK. A default-configured Windows NT 3.5x
	  or 4.0 computer will retransmit the SYN-ACK 5 times, doubling the time-out
	  value after each retransmission. The initial time-out value is three seconds,
	  so retries are attempted at 3, 6, 12, 24, and 48 seconds. After the last
	  retransmission, 96 seconds are allowed to pass before the computer gives up
	  on receiving a response, and deallocates the resources that were set aside
	  earlier for the connection. The total elapsed time that resources are in use
	  is 189 seconds.
	
	How to Verify Your Computer is Under a SYN Attack
	-------------------------------------------------
	
	If you suspect that your computer is the target of a SYN attack, you can type the
	following command at a command prompt to view connections in the "SYN_RECEIVED"
	state:
	
	" netstat -n -p tcp " (without the quotation marks)
	
	This command may cause the following text to appear on your screen:
	
	  Active Connections
	
	     Proto  Local Address         Foreign Address       State
	     TCP    127.0.0.1:1030        127.0.0.1:1032        ESTABLISHED
	     TCP    127.0.0.1:1032        127.0.0.1:1030        ESTABLISHED
	     TCP    10.57.8.190:21        10.57.14.154:1256     SYN_RECEIVED
	     TCP    10.57.8.190:21        10.57.14.154:1257     SYN_RECEIVED
	     TCP    10.57.8.190:21        10.57.14.154:1258     SYN_RECEIVED
	     TCP    10.57.8.190:21        10.57.14.154:1259     SYN_RECEIVED
	     TCP    10.57.8.190:21        10.57.14.154:1260     SYN_RECEIVED
	     TCP    10.57.8.190:21        10.57.14.154:1261     SYN_RECEIVED
	     TCP    10.57.8.190:21        10.57.14.154:1262     SYN_RECEIVED
	     TCP    10.57.8.190:21        10.57.14.154:1263     SYN_RECEIVED
	     TCP    10.57.8.190:21        10.57.14.154:1264     SYN_RECEIVED
	     TCP    10.57.8.190:21        10.57.14.154:1265     SYN_RECEIVED
	     TCP    10.57.8.190:21        10.57.14.154:1266     SYN_RECEIVED
	     TCP    10.57.8.190:4801      10.57.14.221:139      TIME_WAIT
	
	If a large number of connections are in the SYN_RECEIVED state, it is possible
	that the system is under attack. A network analyzer can be used to track the
	problem down further, and it may be necessary to contact your Internet Service
	Provider for assistance in attempting to trace the source.
	
	The effect of tying up connection resources varies, depending upon the TCP/IP
	stack and applications listening on the TCP port. For most stacks, there is a
	limit on the number of connections that can be in the half-open (SYN_RECEIVED)
	state. Once the limit is reached for a given TCP port, the target computer
	responds with a reset to all further connection requests until resources are
	freed.
	
	RESOLUTION
	==========
	
	Obtain the following update for Windows NT 3.51 or the latest Service Pack for
	Windows NT 4.0
	
	Microsoft is committed to providing the best possible protection against these
	attacks from within the Windows NT operating system and has made a number of
	changes to its TCP/IP components available to customers in response to this
	threat.
	
	This global key has been designed to protect against attacks and sets the other
	keys mentioned later in the article to known effective values. This key avoids
	having the administrator guess about which values would offer the most
	protection. It is strongly recommended that the following global keys be used:
	
	SynAttackProtect
	Key: Tcpip\Parameters
	Value Type: REG_DWORD
	Valid Range: 0, 1, 2
	0 (no synattack protection)
	1 (reduced retransmission retries and delayed RCE (route cache entry) creation if
	the TcpMaxHalfOpen and TcpMaxHalfOpenRetried settings are satisfied.)
	2 (in addition to 1 a delayed indication to Winsock is made.)
	
	NOTE: When the system finds itself under attack the following options on any
	socket can no longer be enabled : sScalable windows (RFC 1323) and per adapter
	configured TCP parameters (Initial RTT, window size). This is because when
	protection is functioning the route cache entry is not queried before the
	SYN-ACK is sent and the Winsock options are not available at this stage of the
	connection.
	
	Default: 0 (False)
	Recommendation: 2
	Description: Synattack protection involves reducing the amount of retransmissions
	for the SYN-ACKS, which will reduce the time for which resources have to remain
	allocated. The allocation of route cache entry resources is delayed until a
	connection is made. If synattackprotect = 2, then the connect on indication to
	AFD is delayed until the three-way handshake is completed. Also note that the
	actions taken by the protection mechanism only occur if TcpMaxHalfOpen and
	TcpMaxHalfOpenRetried settings are exceeded.
	
	NOTE: The following keys should only be altered if the above global key has
	proven to be ineffective or specific resource limits are being hit.
	
	The changes are listed here:
	
	*******************************************************************
	*  1. Tcpip.sys times out half-open connections faster            *
	*******************************************************************
	
	A new version of Tcpip.sys has been produced that allows control of the number of
	times a response to a TCP connection request (SYN-ACK) will be retransmitted.
	Control is handled through a new registry parameter:
	
	 HKEY_LOCAL_MACHINE
	 \SYSTEM
	  \CurrentControlSet
	   \Services
	    \Tcpip
	     \Parameters
	      \TcpMaxConnectResponseRetransmissions
	          Value Type: REG_DWORD
	          Valid Range: 0-0xFFFFFFFF
	          Default: 2
	
	The default value for this parameter is now 3. The following table shows Windows
	NT 4.0 TCP/IP behavior for various values of this parameter:
	
	Value  Retransmission Times  Elapsed Time  Comments
	3      3, 6, and 12 seconds  45 seconds    Cleanup 24 secs after last retx
	2      3, and 6 seconds      21 seconds    Cleanup 12 secs after last retx
	1      3 seconds             9  seconds    Cleanup 6  secs after last retx
	
	This parameter changes the default time that it takes to clean up a half- open
	TCP connection from 189 seconds to 45 seconds, and provides more granular
	control to the administrator. A site that is under heavy attack might set the
	value as low as "1". A value of "0" is also valid; however if this parameter is
	set to 0, SYN-ACKs will not be retransmitted at all, and will time out in 3
	seconds. With the value this low, legitimate connection attempts from distant
	clients may fail.
	
	*******************************************************************
	*  2. NetBT has a Higher, Configurable Backlog                    *
	*******************************************************************
	
	NetBT (NetBIOS over TCP/IP) uses TCP port 139 and is used by Microsoft Network
	Services such as file and print sharing. Version 3.51 and 4.0 NetBT has a
	"backlog" of connection blocks available that is two plus an incremental number
	depending on the NetBT clients (such as the redirector, server, and any NetBIOS
	applications running). On a typical server, this number will be 7-11. A new
	version of NetBT has been produced that automatically allocates more connection
	blocks as needed, in a configurable manner.
	
	On a connection event, it now checks to see if the number of free blocks is below
	2, and if so, adds an "increment" number of blocks, where "increment" is
	configurable in the registry as shown here:
	
	 HKEY_LOCAL_MACHINE
	 \SYSTEM
	  \CurrentControlSet
	   \Services
	    \NetBt
	     \Parameters
	      \BacklogIncrement
	          Value Type: REG_DWORD
	          Valid Range: 1-0x14  (1-20 decimal)
	          Default: 3
	
	Each connection block consumes 78 bytes of memory. The total number of connection
	blocks that can be allocated by NetBT is also registry configurable:
	
	 HKEY_LOCAL_MACHINE
	 \SYSTEM
	  \CurrentControlSet
	   \Services
	    \NetBt
	     \Parameters
	      \MaxConnBackLog
	          Value Type: REG_DWORD
	          Valid Range: 1-0x9c40 (1-40,000 decimal)
	          Default: 1000
	
	MaxConnBackLog defaults to 1000, but can be set as high as 40,000. Connection
	blocks are "scavenged," or recycled, when the SYN-ACK retransmission timer
	expires and TCP fails the connection attempt.
	
	*******************************************************************
	*  3. Afd.sys has been modified to withstand large numbers of     *
	*     "half-open" connections efficiently                         *
	*******************************************************************
	
	Windows Sockets applications such as ftp servers and web servers have their
	connection attempts handled by Afd.sys. Afd.sys has been modified to support
	large numbers of connections in the "half-open" state without denying access to
	legitimate clients. This is accomplished by allowing the administrator to
	configure a dynamic backlog.
	
	The new version of Afd.sys supports four new registry parameters that can be used
	to control the dynamic backlog behavior.
	
	EnableDynamicBacklog is a global switch to enable or disable dynamic backlog. It
	defaults to 0 (off), and this setting provides no change from the existing
	versions. Setting it to 1 enables the new dynamic backlog feature.
	
	 HKEY_LOCAL_MACHINE
	 \SYSTEM
	  \CurrentControlSet
	   \Services
	    \AFD
	     \Parameters
	      \EnableDynamicBacklog
	          Value Type: REG_DWORD
	          Valid Range: 0,1
	          Default: 0
	          Suggested value for a system under heavy attack: 1
	
	MinimumDynamicBacklog controls the minimum number of free connections allowed on
	a listening endpoint. If the number of free connections drops below this value,
	then a thread is queued to create additional free connections. This value should
	not be made too large, as the dynamic backlog code engages whenever the number
	of free connections falls below this value. Too large a value may lead to a
	performance reduction.
	
	 HKEY_LOCAL_MACHINE
	 \SYSTEM
	  \CurrentControlSet
	   \Services
	    \AFD
	     \Parameters
	      \MinimumDynamicBacklog
	          Value Type: REG_DWORD
	          Valid Range: 0-0xFFFFFFFF
	          Default: 0
	          Suggested value for a system under heavy attack: 20
	
	MaximumDynamicBacklog controls the maximum number of "quasi-free" connections
	allowed on a listening endpoint. "Quasi-free" connections include the number of
	free connections plus those connections in a half- connected (SYN_RECEIVED)
	state. No attempt is made to create additional free connections if doing so
	would exceed this value.
	
	 HKEY_LOCAL_MACHINE
	 \SYSTEM
	  \CurrentControlSet
	   \Services
	    \AFD
	     \Parameters
	      \MaximumDynamicBacklog
	          Value Type: REG_DWORD
	          Valid Range: 0-0xFFFFFFFF
	          Default: 0
	          Suggested value for a system under heavy attack: Memory
	          dependent. This value should not exceed 5000 for each 32 MB of
	          RAM installed in the server, in order to prevent exhaustion of
	          non-paged pool when under attack.
	
	DynamicBacklogGrowthDelta controls the number of free connections to create when
	additional connections are necessary. Be careful with this value, as a large
	value could lead to explosive free connection allocations.
	
	 HKEY_LOCAL_MACHINE
	 \SYSTEM
	  \CurrentControlSet
	   \Services
	    \AFD
	     \Parameters
	      \DynamicBacklogGrowthDelta
	          Value Type: REG_DWORD
	          Valid Range: 0-0xFFFFFFFF
	          Default: 0
	          Suggested value for a system under heavy attack: 10 (0xa)
	
	
	MaximumDynamicBacklog,
	
	
	To take advantage of the changes to Afd.sys, Windows Sockets applications must
	specifically request a backlog greater than the value configured for
	MinimumDynamicBacklog when they issue their listen() call. Microsoft
	applications such as Internet Information Server (which has a default backlog of
	25) are configurable. Application-specific details are available from the
	Microsoft Knowledge Base at http://www.microsoft.com/kb.
	
	The modified drivers for Windows NT and instructions for installing them are
	available from Microsoft support channels or directly from the following
	Internet locations:
	
	For Windows NT 3.51:
	
	  ftp://ftp.microsoft.com/bussys/winnt
	  /winnt-public/fixes/usa/nt351/hotfixes-postsp5/syn-attack
	
	STATUS
	======
	
	Windows NT 4.0
	--------------
	
	This problem has been corrected in the latest Microsoft Windows NT U.S. Service
	Pack for Windows NT 4.0. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Windows NT 3.51
	---------------
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT version 3.51. A fully supported fix is now
	available, but it has not been fully regression tested and should only be
	applied to systems determined to be at risk of attack. Please evaluate your
	system's physical accessibility, network and Internet connectivity, and other
	factors to determine the degree of risk to your system. If your system is
	sufficiently at risk, Microsoft recommends you apply this fix. Otherwise, wait
	for the next Windows NT service pack, which will contain this fix. Please
	contact Microsoft Technical Support for more information.
	
	
	
	Additional query words: CERT hack flood denial of service attack
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinAdvServSearch
	Version           : :2000,3.51,4.0
	
	=============================================================================
	
