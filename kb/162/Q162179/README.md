---
layout: page
title: "Q162179: TCP Fast Retransmit and Recovery Added in WinNT 4.0 SP2"
permalink: kb/162/Q162179/
---

## Q162179: TCP Fast Retransmit and Recovery Added in WinNT 4.0 SP2

	Article: Q162179
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry. Before you edit the registry, make sure you understand how to restore it if a problem occurs. For information about how to do this, view the "Restoring Registry Key" Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	TCP performance on lossy networks has been improved in Windows NT 4.0 Service
	Pack 2. Support was added for the Van Jacobson TCP fast retransmit and recovery
	algorithm.
	
	MORE INFORMATION
	================
	
	For an excellent description of fast retransmit and recovery, see "TCP/IP
	Illustrated, Volume 1," Richard Stevens, page 312, Addison-Wesley, 1994. A
	summary of behavior before and after you apply Service Pack 2 is presented.
	
	(Assume a receive window size that allows six full-sized Ethernet frames to be
	sent without waiting for acknowledgment.)
	
	Before Service Pack 2
	---------------------
	
	  Sender     Receiver
	  -------------------
	  packet1 ->
	  packet2 ->
	             <- ack for data up through packet2
	  packet3 -> (assume this packet is lost)
	  packet4 ->
	             <- ack for data up through packet2
	  packet5 ->
	             <- ack for data up through packet2
	  packet6 ->
	             <- ack for data up through packet2
	  packet7 ->
	             <- ack for data up through packet2
	  packet8 ->
	             <- ack for data up through packet2
	  pause, for retransmission timeout of packet 3 data
	  packet3 ->
	             <- ack for data up through packet8
	
	NOTE: After a packet is dropped, the receiver immediately sends an acknowledgment
	that indicates the receive position in the byte stream each time it receives
	another packet that is past the hole. These additional ACKS for packet2 are a
	hint to the sender that there has been a dropped packet. However, prior to
	Service Pack 2, this indication was not acted on. Instead, the sender continues
	sending, to the end of the send window, then pauses. Eventually, the
	retransmission timer for packet3 expires, and it is resent. An ACK is returned
	for all of the data up through packet8, and the sender starts out again.
	However, it engages congestion control and starts slowly. As a result, the data
	throughput is not ideal.
	
	The new behavior after applying Service Pack 2
	----------------------------------------------
	
	  Sender     Receiver
	  -------------------
	  packet1 ->
	  packet2 ->
	             <- ack for data up through packet2
	  packet3 ->    (assume this packet is lost)
	  packet4 ->
	             <- ack for data up through packet2
	  packet5 ->
	             <- ack for data up through packet2
	  packet3 ->    (new !!)
	  packet6 ->
	             <- ack for data up through packet6
	  packet7 ->
	  packet8 ->
	             <- ack for data up through packet8
	
	The new behavior exhibits the fast retransmit and recovery algorithm. On
	receiving three ACKS for the same sequence number, the sender will quickly
	retransmit the missing segment, without waiting for the retransmission timer to
	expire. It also will engage a lesser degree of congestion control, as described
	in the previously mentioned reference book.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	The following registry parameter can be used to control fast retransmit. To add
	the registry key:
	
	1. Run Regedt32.exe
	
	2. Go to:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/currentcontrolset/services/tcpip/parameters
	
	3. Click Edit, click New, and then click Key.
	
	  Name: TcpMaxDupAcks
	  Value Type: REG_DWORD - Number
	  Valid Range: 1-3
	  Default: 2
	
	This parameter determines the number of duplicate ACKs that must be received for
	the same sequence number of sent data before fast retransmit is triggered to
	resend the segment that has been dropped in transit.
	
	
	Additional query words: semaphore timed out vj twice
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
