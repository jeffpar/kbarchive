---
layout: page
title: "Q244209: How to Perform Network Tracing in a Switched Environment"
permalink: /kb/244/Q244209/
---

## Q244209: How to Perform Network Tracing in a Switched Environment

	Article: Q244209
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is a common practice in high-traffic network environments to replace
	traditional Ethernet network hubs with intelligent switches. While this can
	improve computer and network performance, it makes tracing network traffic
	between computers difficult. An Ethernet switch works by directing packets to a
	specific MAC Address associated with the port. Because of this, when you try to
	use a network analyzer (such as Microsoft Network Monitor) in this environment,
	only packets with the analyzer computer's MAC address or broadcasts appear in
	the trace. This article describes two common methods for working around this
	behavior.
	
	MORE INFORMATION
	================
	
	To work around this behavior, it is necessary to arrange or configure the
	network so that the analyzer computer can receive all the necessary network
	traffic. There are two common methods for achieving this without re-engineering
	the entire network:
	
	Method 1
	--------
	
	This method is not available on all switches. Some switches allow for a port to
	be "attached" to the internal communications channels in the device. This port
	will now receive all traffic passing through the switch. Note that some
	manufacturers refer to this configuration as a Mirror Port.
	
	Method 2
	--------
	
	You can use a non-switched hub in conjunction with the switch. The hub will
	require a "crossover" or "uplink" port (or a suitably wired cable), which will
	be used to connect back to the switch.
	
	The target computer and analyzer computer are both connected to the hub, which is
	connected back to the switch. Now, the analyzer will receive all traffic for the
	target, as well as its own.
	
	NOTE: In making this change, it is also necessary to check data rates (10/100 or
	Gigabit networking) to ensure that all devices are compatible and will
	communicate successfully.
	
	Method 3
	--------
	
	Install Network Monitor on both endpoint systems. Start capturing simultaneously
	on both systems, immediately perform the test required, and then stop the
	capturing.
	
	Tracing in this manner shows the packets from the sending machine. You can then
	compare this trace to the trace of the receiving machines in order to discover
	if packets are received, not received or possibly duplicated at the endpoint.
	Duplication of packets has been seen in switched environments.
	
	
	Additional query words: netmon
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
