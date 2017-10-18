---
layout: page
title: "Q142497: SNA Server Processes Show Huge Virtual Byte Size in PerfMon"
permalink: kb/142/Q142497/
---

## Q142497: SNA Server Processes Show Huge Virtual Byte Size in PerfMon

	Article: Q142497
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When viewing the virtual byte size of any SNA Server service or Win32
	application which uses the SNA Server API's, Windows NT Performance Monitor
	shows the Win32 process' virtual byte size to be larger than 154MB.
	
	SNA Server reserves a 154MB contiguous region in the process' virtual address
	space, though only 64KB of physical memory is initially allocated or committed.
	Additional physical memory is allocated only when needed. Also, this memory is
	shared between all SNA Server processes running on the computer, and only one
	copy is allocated even if there are several SNA applications running.
	
	Since this large virtual memory area is not actually allocated out of available
	physical memory, other processes running on the computer are not be affected,
	nor does it affect the Windows NT page file. The committed memory can be found
	by viewing the "working set" size of each process.
	
	MORE INFORMATION
	================
	
	SNA Server processes running locally on a Windows NT computer communicate with
	each other using a shared memory region. Each SNA Server process (that is,
	SnaBase, SNA Server, link services, and applications which use the SNA API's)
	communicate with other SNA Server processes on the computer by writing to
	buffers in this memory region which is then available for other SNA Server
	processes to access.
	
	When SnaBase is started, it reserves this shared memory region as a Windows NT
	virtual memory mapped file. The size of this file is determined by the size of
	all possible SNA Server internal communication buffers which can potentially be
	allocated (on SNA Server 2.11, this is 154,300,416 bytes). However, out of this
	large potential size, the initial allocation size is less than 64KB (16KB for
	process headers, 32KB for elements and 8KB for headers).
	
	SNA Server logs event 684 and 685 to indicate changes in the buffer pool memory
	allocation. Event 684 is logged when over half of the maximum number of buffer
	pools has been allocated. Event 685 is logged if Windows NT has returned an
	error to our VirtualAlloc call, or if the maximum number of buffer pool
	extensions have been allocated. Full internal tracing on the component logging
	these events indicates the cause of the 685 error. The text for these events are
	included below:
	
	  Event 684
	  A buffer pool audit has been triggered by a pool extension.
	
	  EXPLANATION
	
	  This audit contains information about the size of the buffer pool,
	  how many headers and elements each process is using, etc.
	
	                  Pool      Free     Alloced      Max
	
	  Trusted Hdrs
	  Trusted Elts
	  Non-Trusted Hdrs
	  Non-Trusted Elts
	
	  Comname    Pid    Trusted   Hdrs   Elts
	
	  SnaBase
	  SnaServr
	  SnaDlc1
	  ...
	
	  ACTION
	
	  None, unless there is some other problem. In that case, report
	  this log along with any others.
	
	  Event 685
	
	  An attempt was made to extend a buffer pool, but the related pool
	  had reached its maximum size. The affected component is terminating,
	  and an audit of the buffer pools just before termination is attached
	
	  EXPLANATION
	  This error is almost always due to either an SNA component (including
	  possibly an emulator) losing buffers or a slow emulator (or RUI
	  application) using a session without pacing.
	
	  ACTION
	  Contact your support personnel.
	
	  Excessive logging of this event may indicate that an SNA Server process
	  running on the machine is not releasing buffers properly, which could
	  indicate a potential memory leak.
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0
	
	=============================================================================
	
