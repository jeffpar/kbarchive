---
layout: page
title: "Q175903: ARI Bit Mismatch"
permalink: kb/175/Q175903/
---

## Q175903: ARI Bit Mismatch

	Article: Q175903
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11,95; winnt:3.0,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you see in a network trace an error "ARI bits mismatch", you will also see
	retransmissions of frames issued by higher level protocols like TCP/IP. In this
	case, network bandwidth is wasted on retransmissions.
	
	The above error will only be seen on a Token Ring network.
	
	CAUSE
	=====
	
	The problem described above is caused by your hardware. The following are
	probable causes of your problem:
	
	- Insufficient receive buffers on your Token Ring network adapter card.
	
	- Slow data transfer rates to the PC bus.
	
	- Available memory in your system (RAM).
	
	Usually the first item listed is the problem, but the second and third should be
	considered also.
	
	MORE INFORMATION
	================
	
	The Address Recognized Indicator (ARI) bits mismatch error indicates frames that
	have the ARI bit set, but the Frame Copied Indicator (FCI) bit is not set.
	
	The ARI bit is set by a ring station when it detects a frame addressed to it, but
	has insufficient buffer to copy the frame because of congestion in the ring
	station's Frame Copy pipeline.
	
	The following 3 items make up the Frame Copy pipeline:
	
	- On-Board receive buffers on the network adapter. The more on-board receive
	  buffers an adapter has, the more frames can be buffered and congestion errors
	  are less likely to occur. Check your Token Ring adapter's specifications and
	  determine the amount of on-board memory available for frame buffering.
	
	- Data bus transfer rate.
	
	  How quickly data can be moved from the network adapter to host memory depends
	  on the bus interface of your adapter. To keep up with incoming frame traffic,
	  your network adapter should always fit your personal computer's bus
	  architecture.
	
	  Using a 16-bit or 32-bit bus and adapter is highly recommended for devices
	  that must handle a large number of incoming frames. Another factor in moving
	  data between card and the host memory is how the data is copied into memory.
	  The two basic methods are DMA and shared memory. In general, shared memory is
	  preferred.
	
	- Host receive buffers (RAM).
	
	  The amount of buffer available in a host affect how quickly data is moved off
	  the adapter. Insufficient buffer in the host can cause a backlog in the
	  adapter's on-board buffer.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Increase the onboard receive buffers of your Token Ring network adapter card.
	
	2. Use a different network adapter card (with more onboard memory that fits your
	  bus architecture).
	
	3. Increase the physical memory of your host.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWin95search kbWinNT310Search kbWinNTW310Search kbZNotKeyword kbLanManSearch kbWFWSearch kbZNotKeyword3 kbNetworkClientSearch kbWFW311 kbLanMan220c kbNetworkClient300DOS
	Version           : WINDOWS:3.11,95; winnt:3.0,3.5,3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
