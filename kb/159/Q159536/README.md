---
layout: page
title: "Q159536: PCI Device Using Prefetchable Memory Generates Code 15"
permalink: /kb/159/Q159536/
---

## Q159536: PCI Device Using Prefetchable Memory Generates Code 15

	Article: Q159536
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a PCI device installed behind a PCI-to-PCI bridge, it may be
	listed in Device Manager with an exclamation point in a yellow circle. The
	status for the device on the General tab may report Code 15, indicating a
	resource conflict.
	
	CAUSE
	=====
	
	The computer's BIOS may not support the memory addressing needed to use the
	device in its current slot. For some PCI slots, BIOS support for Prefetchable
	Memory Addressing is required.
	
	RESOLUTION
	==========
	
	Contact the computer's manufacturer to obtain a BIOS update that supports
	Prefetchable Memory Addressing for devices on the PCI-to-PCI bridge.
	
	You may also be able to resolve the problem by moving the peripheral device to a
	slot that is not behind a PCI-to-PCI bridge.
	
	
	MORE INFORMATION
	================
	
	Prefetching addresses the problem of increasing memory latency relative to the
	CPU core speed. Beyond data caching, data prefetching is an effective way to
	address the memory access bottleneck associated with high- performance
	processors. This is particularly true for programs whose working sets cannot be
	easily fit into the on-chip data cache (the L1 cache).
	
	The prefetching cache uses a technique for hiding memory latency by exploiting
	the overlap of processor computations with data accesses. A prefetching cache
	generates prefetch requests to bring data into the cache before it is actually
	needed, allowing overlap with pre-miss computations.
	
	The prefetchable memory is speculative. However, devices that are designed to
	take advantage of prefetching can increase performance by reducing misses. A
	device that supports prefetchable memory marks data with a bit as either
	suitable or unsafe for prefetching. A BIOS not written to take advantage of this
	feature may experience problems with the configuration of the device.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
