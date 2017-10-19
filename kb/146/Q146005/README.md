---
layout: page
title: "Q146005: Optimizing Windows NT for Performance"
permalink: /kb/146/Q146005/
---

## Q146005: Optimizing Windows NT for Performance

	Article: Q146005
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When starting troubleshooting performance problems or when trying to optimize
	Windows NT, while working with Windows NT Performance Monitor it isn't always
	easy to choose from the large number of performance monitor objects and
	counters.
	
	This article helps you pick the right counters and objects.
	
	Below you'll find performance checkpoints for the following possible
	bottlenecks:
	
	- Suspected bottleneck: memory
	
	- Suspected bottleneck: processor
	
	- Suspected bottleneck: physical disk
	
	- Suspected bottleneck: network
	
	- Suspected bottleneck: network components
	
	MORE INFORMATION
	================
	
	
	Suspected Bottleneck: Memory
	----------------------------
	
	Check:
	
	Object: Memory
	Counter: Pages /sec
	
	Object: Logical Disk (location of the PAGEFILE.SYS)
	Counter: Avg. Disk sec/Transfer
	
	If the product of these two counters (equals percentage of the disk access time
	used by paging) > 10 % on a sustained basis, the system needs more memory.
	
	Check:
	
	Object: Memory
	Counter: Pages /sec
	
	If counter value is consistently > 5 , suspect memory.
	
	Check:
	
	Object: Server
	Counter: Pool Nonpaged Failures
	
	The number of times allocations from nonpaged pool have failed. Indicates that
	the computer's physical memory is too small.
	
	Check:
	
	Object: Server
	Counter: Pool Paged Failures
	
	Pool Paged Failures indicate that either physical memory or a paging file is near
	capacity.
	
	Check:
	
	Object: Server
	Counter: Pool Nonpaged Peak
	
	The maximum number of bytes of nonpaged pool the server has had in use at any one
	point. Indicates how much physical memory the computer should have.
	
	Suspected Bottleneck: Processor
	-------------------------------
	
	Check:
	
	Object: Processor
	Counter: %Processor Time
	
	If this value is consistently high (> 80%) and disk and network counter values
	are low, suspect the processor.
	
	Object: System
	Counter: %Processor Time (for multi processor systems)
	
	If this value is consistently high (> 80%) and disk and network counter values
	are low, suspect the processor.
	
	Object: System
	Counter: Processor Queue Length
	
	A sustained processor queue length > 2 , generally indicates a processor
	bottleneck.
	
	Object: Processor
	Counter: Interrupts/sec
	
	A dramatic increase in this counter value without a corresponding increase in
	system activity indicates a hardware problem.
	
	Object: Processes (_Total)
	Counter: %Processor Time
	
	If more than a couple of processes are contending for the majority of the
	processor time, then a faster processor or an additional processor should be
	considered.
	
	Suspected Bottleneck: Physical Disk
	-----------------------------------
	
	Check:
	
	Object: Physical Disk
	Counter: %Disk Time
	
	If this value is consistently high and disk queue length is greater than 2,
	suspect the disk.
	
	Object: Physical Disk
	Counter: Average Disk sec/Transfer
	
	A high value (values greater than 0.3 seconds) may mean that the disk controller
	is continually retrying the disk because of failures.
	
	Object: Physical Disk
	Counter: Disk Queue Length
	Counter: Average Disk sec/Transfer
	
	The Average Queue Time is the average amount of time for a disk transfer (either
	reads or writes) to complete. Use the following formula to find the average disk
	queue time:
	
	  Avg. Queue Time = Disk Queue Length x Avg. Disk sec/Transfer
	
	This information is a relative performance measurement and should be compared
	with other hard disk drivers in your system. Compute the figures for all logical
	disks in your system. The number of disk commands waiting in the queue is
	normally the factor that slows disk performance by increasing the average disk
	queue time.
	
	Object: Physical Disk
	Counter: Disk Bytes/sec
	
	A Disk Bytes/sec count lower than 20K may indicate that an application is
	accessing a disk inefficiently.
	
	Suspected Bottleneck: Network Components
	----------------------------------------
	
	Check:
	
	Object: Redirector
	Counter: Current commands
	
	If this number is greater than one per network adapter, the redirector may be a
	bottleneck in the system for one or more of the following reasons:
	
	- the server with which the redirector is communicating is slower than the
	redirector.
	- the network may be experiencing capacity problems.
	- the redirector is busier than the adapter can keep up with.
	
	If network capacity problems are identified, it may be necessary to subnet the
	network in an attempt to partition network traffic.
	
	Check:
	
	Object: Redirector
	Counter: Network Errors/sec
	
	If any network errors are logged, check the Event Log for more details.
	
	Check:
	
	Object: Redirector
	Counter: Reads Denieds/sec
	Counter: Writes Denieds/sec
	
	These values indicate if the remote servers are having problems with memory
	allocation.
	
	Check:
	
	Object: Server
	Counter: Work Item Shortage
	
	An increase in Work Item Shortage should cause a change in the registry value(s)
	InitialWorkItems and/or MaximumWorkItems (depending on when the outage
	occurred).
	
	Check:
	
	Object: Server
	Counter: Raw Reads Rejected/sec
	Counter: Raw Writes Rejected/sec
	
	Rejections indicates the exhaustion of RAW work items used when busy doing large
	file transfers. The increase of the registry value RawWorkItems can possibly
	solve this bottleneck.
	
	Suspected Bottleneck: Network
	-----------------------------
	
	Check:
	
	Object: Server
	Counter: Bytes Total/sec
	
	If the sum of Bytes Total/sec for all servers is roughly equal to the maximum
	transfer rates of your network, you may need to segment the network.
	
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:3.5,3.51,4.0
	
	=============================================================================
	
