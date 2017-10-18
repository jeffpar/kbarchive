---
layout: page
title: "Q263123: BUG: Intermittent Crashes in NdisMWanIndicateReceive on Win2000"
permalink: kb/263/Q263123/
---

## Q263123: BUG: Intermittent Crashes in NdisMWanIndicateReceive on Win2000

	Article: Q263123
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbDDK kbNDIS kbOSWin2000 kbOSWin2000bug kbDSupport kbGrpDSNTDDKkbbuglist
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Driver Development Kit (DDK), on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Intermittent system halts (crashes) may occur when an network driver interface
	specification (NDIS) Wide Area Networking (WAN) driver calls the
	NdisMWanIndicateReceive function.
	
	CAUSE
	=====
	
	NdisMWanIndicateReceive attempts to read the first byte past the end of the
	packet buffer.
	
	RESOLUTION
	==========
	
	Allocate a buffer for the packet that is at least 4 bytes larger than the actual
	packet size. However, the PacketSize argument in the NdisMWanIndicateReceive
	call should be set to the actual size of the packet buffer. For example, if the
	packet buffer needs to be 100 bytes in size, then allocate at least 104 bytes
	for the buffer (but the PacketSize argument should be equal to 100 bytes).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDDK kbNDIS kbOSWin2000 kbOSWin2000bug kbDSupport kbGrpDSNTDDK kbbuglist
	Technology        : kbwin2000Search kbwin2000DDK kbAudDeveloper kbWinDDKSearch
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
