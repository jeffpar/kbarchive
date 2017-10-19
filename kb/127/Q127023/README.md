---
layout: page
title: "Q127023: Raw SMB Requests Across Router Results in Session Termination"
permalink: /kb/127/Q127023/
---

## Q127023: Raw SMB Requests Across Router Results in Session Termination

	Article: Q127023
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Raw SMB requests initiated by network activities (such as backing up a server),
	may result in an abnormal session termination when the SMB request is sent
	across a router. In the case of a network backup, the backup would be aborted
	and the following error would be logged:
	
	  WARNING: "\BACKUP\HRS014C$.DAT" is a corrupt file. This file cannot be
	  verified. The network disk drive has stopped responding. Backup set aborted.
	
	CAUSE
	=====
	
	The abnormal session termination occurs when a packet exceeding the Maximum MTU
	size is sent to the router port.
	
	When a router receives a packet that exceeds the Maximum MTU size on a port, it
	is the routers responsibility to either:
	
	- Notify the sender with an ICMP Destination Unreachable message with the Code
	  field containing "Fragmentation needed and DF set"
	
	  -or-
	
	- Fragment the packet and forward the fragments to the appropriate destination
	  address. This is only possible if the "Data is not Fragmentable" bit is not
	  set in the packet.
	
	The following traces show a Read Block Raw request that results in abnormal
	session termination because the router is not notifying the sender with an ICMP
	Destination Unreachable message.
	
	Abnormal Termination Request From The Clients Side Of The Router
	----------------------------------------------------------------
	
	After the first Read Block Raw, the server never responds with the data, so the
	client's timer pops after 70 seconds and it requests that the connection be
	closed by setting the FIN bit in the IP packet.
	
	  Time  Src    Dst    Protocol Description
	  ========================================
	  0.012 COLA11 HRS014 SMB C NT create & X, File = \BACKUP\HRS014C$.DAT
	  0.004 HRS014 COLA11 SMB R NT create & X, FID = 0x2002
	  0.006 COLA11 HRS014 SMB C transact2 GetFsInfo
	  0.002 HRS014 COLA11 SMB R transact2
	  0.004 COLA11 HRS014 SMB C transact2 GetFileInfo, FID = 0x2002
	  0.003 HRS014 COLA11 SMB R transact2
	  0.003 COLA11 HRS014 SMB C transact2 GetFileInfo, FID = 0x2002
	  0.004 HRS014 COLA11 SMB R transact2
	  0.009 COLA11 HRS014 SMB C NT transact - Query Security Description
	  0.004 HRS014 COLA11 SMB R NT transact
	  0.011 COLA11 HRS014 SMB C read block raw, FID = 0x2002, Read 0x7000 at
	  0x0
	  0.252 COLA11 HRS014 SMB C read block raw, FID = 0x2002, Read 0x7000 at
	  0x0
	  0.003 HRS014 COLA11 TCP .A....
	  71.12 COLA11 HRS014 TCP .A...F
	  0.002 HRS014 COLA11 TCP ...R..
	
	Abnormal Termination Request From The Servers Side Of The Router
	----------------------------------------------------------------
	
	After the first Read Block Raw, the server responds with the data in a packet
	larger than the routers Maximum MTU size for that port. The router never
	responds with an ICMP Destination Unreachable message so the server never
	resends the data with an appropriate packet for that router port. After 70
	seconds the client's timer pops and the client requests that the connection be
	closed by setting the FIN bit in the IP packet.
	
	  Time  Src    Dst    Protocol Description
	  ========================================
	  0.011 COLA11 HRS014 SMB C NT create & X, File = \BACKUP\HRS014C$.DAT
	  0.007 HRS014 COLA11 SMB R NT create & X, FID = 0x80c
	  0.004 COLA11 HRS014 SMB C transact2 GetFsInfo
	  0.003 HRS014 COLA11 SMB R transact2 GetFsInfo
	  0.004 COLA11 HRS014 SMB C transact2 GetFileInfo, FID = 0x80c
	  0.003 HRS014 COLA11 SMB R transact2 GetFileInfo
	  0.005 COLA11 HRS014 SMB C transact2 GetFileInfo, FID = 0x80c
	  0.003 HRS014 COLA11 SMB R transact2 GetFileInfo
	  0.031 COLA11 HRS014 SMB C NT transact - Query Security Description
	  0.003 HRS014 COLA11 SMB R NT transact - Query Security Description
	  0.017 COLA11 HRS014 SMB C read block raw, FID = 0x80c, Read 0x7000 at
	  0x0
	  0.078 HRS014 COLA11 NBT SS: Session Message, Len: 28672
	  0.281 COLA11 HRS014 SMB C read block raw, FID = 0x80c, Read 0x7000 at
	  0x0
	  0.001 HRS014 COLA11 TCP .A....
	  0.142 HRS014 COLA11 NBT SS: Session Message, Len: 28672
	  1.002 HRS014 COLA11 NBT SS: Session Message, Len: 28672
	  2.002 HRS014 COLA11 NBT SS: Session Message, Len: 28672
	  4.006 HRS014 COLA11 NBT SS: Session Message, Len: 28672
	  8.010 HRS014 COLA11 NBT SS: Session Message, Len: 28672
	  58.61 COLA11 HRS014 TCP .A...F
	  0.001 HRS014 COLA11 TCP ...R..
	
	WORKAROUND
	==========
	
	This issue occurs on Token Ring ports in Cisco 7000 series routers with software
	version 9. The Maximum MTU size on a Cisco 7000 series Token Ring port is 4,464
	(well below the Maximum packet size of 17K on a 16 MB Token Ring network). You
	can correct this problem on the router by reducing the Maximum MTU size to 4000
	on the Cisco 7000 series router (software version 9). At a Maximum MTU size of
	4000, the router sends the ICMP Destination Unreachable messages to the sender,
	resolving the problem.
	
	The following workarounds for the router problem impact network performance:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	- Enable detection of "black hole" routers (routers that don't send ICMP
	  Destination Unreachable messages) on the server:
	
	  1. Run Registry Editor (REGEDT32.EXE).
	
	  2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	
	  3. From the Edit menu choose Add Value.
	
	  4. Add the following:
	
	     Value Name:   EnablePMTUBHDetect
	     Data Type:    REG_DWORD
	     Data:         1
	     Radix:        Hex
	
	  5. Quit Registry Editor.
	
	  6. Shutdown and restart Windows NT.
	
	     NOTE: This workaround will reduce network performance because it increase
	     the number of retransmissions performed for a given segment.
	
	- Disable MTU Detection on the server:
	
	  1. Run Registry Editor (REGEDT32.EXE).
	
	  2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	
	  3. From the Edit menu choose Add Value.
	
	  4. Add the following:
	
	     Value Name:   EnablePMTUDiscovery
	     Data Type:    REG_DWORD
	     Data:         0
	     Radix:        Hex
	
	  5. Quit Registry Editor.
	
	  6. Shutdown and restart Windows NT.
	
	     NOTE: This workaround will reduce network performance because the server
	     can no longer attempt to eliminate fragmentation at the router.
	
	- Reduce TcpWindowSize on the clients to 4K (the size of the standard (TCP/IP
	  header [40 bytes] in the Registry:
	
	  1. Run Registry Editor (REGEDT32.EXE).
	
	  2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	
	  3. From the Edit menu choose Add Value.
	
	  4. Add the following:
	
	     Value Name:   TCPWindowSize
	     Data Type:    REG_DWORD
	     Data:         4056
	     Radix:        Decimal
	
	  5. Quit Registry Editor.
	
	  6. Shutdown and restart Windows NT.
	
	     NOTE: This workaround will reduce network performance because it affects
	     all network activity to the client.
	
	- Disable Raw SMBs on the server in the Registry:
	
	  1. Run Registry Editor (REGEDT32.EXE).
	
	  2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters
	
	  3. From the Edit menu choose Add Value.
	
	  4. Add the following:
	
	     Value Name:   EnableRaw
	     Data Type:    REG_DWORD
	     Data:         0
	     Radix:        Hex
	
	  5. Quit Registry Editor.
	
	  6. Shutdown and restart Windows NT.
	
	     NOTE: This workaround will reduce network performance on the local network
	     because the performance increase offered by Raw I\O requests will no
	     longer be available.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt 3.1 backup arcada megabyte
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
