---
layout: page
title: "Q136970: PMTU Black Hole Detection Algorithm Change for Windows NT 3.51"
permalink: /kb/136/Q136970/
---

## Q136970: PMTU Black Hole Detection Algorithm Change for Windows NT 3.51

{% raw %}

	Article: Q136970
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Transferring large amounts of data from a Windows NT 3.5 or 3.51 computer to
	another computer using TCP/IP over intermediate devices may fail.
	
	CAUSE
	=====
	
	Some intermediate devices are incapable of handling large packet sizes, and
	don't respond correctly when receiving them.
	
	RESOLUTION
	==========
	
	To correct this problem, install the fix mentioned below.
	
	PMTU Discovery Overview
	-----------------------
	
	Windows NT 3.5 and 3.51 use PMTU discovery as described in RFC1191. When a
	connection is established, the two hosts involved exchange their TCP maximum
	segment size (MSS) values. The smaller of the two MSS values is used for the
	connection. The MSS for a system is usually the MTU (Maximum Transfer Unit) at
	the link layer minus 40 bytes for the IP and TCP headers.
	
	When TCP segments are destined to a non-local network, the Don't Fragment bit is
	set in the IP header. Any router or media along the path may have an MTU that
	differs from that of the two hosts. If a media is encountered with an MTU that
	is too small for the IP datagram being routed, the router will attempt to
	fragment the datagram accordingly. Upon attempting to do so, it will find that
	the Don't Fragment bit in the IP header is set. At this point, the router should
	inform the sending host with an ICMP destination unreachable message that the
	datagram can't be forwarded further without fragmentation.
	
	Most routers will also specify the MTU that is allowed for the next hop by
	putting the value for it in the low-order 16 bits of the ICMP header field that
	is labeled "unused" in the ICMP specification. See RFC1191, section 4, for the
	format of this message. Upon receiving this ICMP error message, TCP adjusts its
	MSS for the connection to the specified MTU minus the TCP and IP header size, so
	that any further packets sent on the connection will be no larger than the
	maximum size that can traverse the path without fragmentation.
	
	Using The Largest Possible MTU For Each Path Optimizes Efficiency
	-----------------------------------------------------------------
	
	PMTU discovery is enabled by default, but can be controlled by adding the
	following value to the registry:
	
	  HKEY_LOCAL_MACHINE
	
	  \SYSTEM\CurrentControlSet\Services\tcpip\parameters
	  \EnablePMTUDiscovery (REG_DWORD, 0=disabled, 1=enabled)
	
	When PMTU discovery is disabled, an MTU of 576 bytes is used for all non-local
	destination IP addresses. (The TCP MSS=536).
	
	PMTU Black Hole Detection in Windows NT 3.5 and 3.51
	----------------------------------------------------
	
	A number of vendors sell routers and other intermediate devices that are not
	compliant. Instead of returning ICMP destination unreachable messages to the
	originating host, they may silently discard IP datagrams that are too large to
	be passed on to the next media in a path. These devices are referred to as
	"Black Hole Routers."
	
	Windows NT 3.5 and 3.51 TCP/IP can be configured to attempt to discover these
	Black Hole Routers, and adapt the PMTU to be small enough to pass through them.
	A registry value can be added to enable PMTU Black Hole detection:
	
	  HKEY_LOCAL_MACHINE \SYSTEM\CurrentControlSet\Services\tcpip\parameters
	  \EnablePMTUBHDetect (REG_DWORD, 0=disabled, 1=enabled)
	
	If this value is not present (default), then PMTU Black Hole detection is not
	enabled.
	
	When PMTUBHDetect is enabled, after a TCP segment is retransmitted 1/2 of
	TCPMaxDataRetransmissions (another registry parameter, default=5) times without
	being acknowledged, the Don't Fragment bit will be cleared on the remainder of
	the retransmission attempts. If the segment is acknowledged as a result, the MSS
	will be decreased, and the Don't Fragment bit will be set in future IP datagrams
	sent on that connection.
	
	STATUS
	======
	
	Microsoft Product Support engineers have encountered a number of routers and
	other intermediate devices that silently drop large frames, even when the Don't
	Fragment bit is not set. Because the existing Windows NT 3.5 and 3.51 TCP/IP
	PMTU Black Hole Detection algorithm does not detect and adapt for these devices,
	customers who encountered problems had no choice but to disable PMTU detection.
	Therefore, Microsoft has made the following change:
	
	  When PMTUBHDetect is enabled, after a TCP segment is retransmitted 1/2 of
	  TCPMaxDataRetransmissions (default=5 still) times without being acknowledged,
	  an MSS of 536 bytes (MTU=576) will be used on the remainder of the
	  retransmission attempts. The Don't Fragment bit will not be set on any of
	  these 536 byte segments. 536 bytes is the smallest MTU normally encountered,
	  and since the Don't Fragment bit is not set, the packet can be further
	  fragmented if necessary.
	
	This change should result in more reliable transfer of large files over wide-area
	networks with a mixture of intermediate devices, such as the Internet. The
	modified TCPIP.SYS file is available from Microsoft Product Support.
	
	
	NOTE: PMTUBHDetect still defaults to 0 (disabled), so in order to take advantage
	of this feature the value must be added to the registry shown above, and set to
	1.
	
	For a complete list of TCP/IP configuration parameters and their possible
	settings, see Knowledge Base article Q120642.
	
	
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51 and Windows NT 4.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
