---
layout: page
title: "Q316298: HOW TO: Choose a Volume Type for Your Windows NT Environment"
permalink: /kb/316/Q316298/
---

## Q316298: HOW TO: Choose a Volume Type for Your Windows NT Environment

{% raw %}

	Article: Q316298
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 09-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Overview of Windows NT 4.0 Volume Types
	
	   - Stripe Set
	- Volume Set
	- Stripe Set with Parity
	- Mirror Set
	
	- How to Choose a Volume Type for Your Windows NT 4.0 Environment
	
	   - How to Choose a Volume Type When You Require Fault Tolerance
	- How to Choose a Volume Type When You Do Not Require Fault Tolerance
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to choose between a stripe set, a volume
	set, a stripe set with parity, and a mirror set. This article includes a brief
	overview of each of these different volume types, and then it describes the
	criteria to help you decide which volume type to use in your Windows NT 4.0
	environment.
	
	NOTE: Windows NT 4.0 Workstation natively supports only stripe sets (RAID 0) and
	volume sets at the software level. Only Windows NT 4.0 Server natively supports
	all of these disk configurations.
	
	Overview of Windows NT 4.0 Volume Types
	---------------------------------------
	
	This section describes the four different volume types that you can use in a
	Windows NT 4.0 environment.
	
	Stripe Set:
	
	A stripe set (which is commonly known as RAID 0) consists of equal-sized areas of
	free space on at least 2 disks to as many as 32 disks that are combined in a
	single volume. When data is written to a stripe set, it is written evenly across
	all of the disks, one row at a time, in 64-kilobyte (KB) units. When you use a
	stripe set, you can store a larger amount of data than when you use a single
	disk. If the computer's disks are accessed simultaneously, a stripe set
	increases the speed of read actions and write actions to the disks because
	concurrent input/output (I/O) commands can be issued and processed on all disks
	simultaneously. A stripe set does not provide any fault tolerance because there
	is no data redundancy. The system and the boot partitions cannot be part of a
	stripe set.
	
	Volume Set:
	
	A volume set consists of at least 2 areas and as many as 32 areas of unformatted
	free space on one or more disks that are combined into a single volume. These
	free spaces form one large logical volume set, which is treated as a single
	partition. The areas of free space do not have to be identical in size. When you
	use a volume set, data is written to one area at a time until no space remains
	on it, and then data is written to the next member of the volume set, and so on.
	When you use a volume set, you can store a larger amount of data than if you use
	a single disk volume. The volume set is extensible, which means that Windows can
	easily add data to the volume set. You do not increase speed performance if you
	use a volume set instead of a single disk volume. A volume set does not provide
	any fault tolerance because there is no data redundancy. The system and boot
	partitions cannot be part of a volume set.
	
	Stripe Set with Parity:
	
	A stripe set with parity (which is commonly known as RAID 5) consists of
	equal-sized areas of free space on at least 3 disks and as many as 32 disks that
	are combined into a single, fault-tolerant volume. Like a stripe set and a
	volume set, a stripe set with parity provides a means to store a larger amount
	of data than a single disk can hold. Windows can read data from a stripe set
	with parity faster than from a mirror set. However, a stripe set with parity
	requires more system memory than a mirror set because of the parity
	calculations. Fault tolerance is achieved in a stripe set with parity because
	Windows NT writes parity information across each disk in the set. If a single
	disk in the set fails, data is not lost because data from the failed disk can be
	regenerated from the data and the parity information on each of the remaining
	disks in the set. (However, if a disk fails, the read performance slows
	considerably because data must be recovered by using parity information.) The
	system partition and the boot partitions cannot be part of a stripe set with
	parity.
	
	Mirror Set:
	
	A mirror set (which is commonly known as RAID 1) is a set of two equal-sized
	partitions that are exact duplicates of each other. These two partitions are
	located on two separate disks. The term "disk mirroring" refers to mirror set
	use. When data is written to a mirror set, it is written to both partitions. A
	mirror set provides good read performance and good write performance; however,
	the mirror set does not read and write data as fast as a stripe set with parity.
	Of all the Windows NT 4.0 volume types, a mirror set provides the highest level
	of fault tolerance because data is duplicated in its entirety on to a separate
	disk. (It is also the most expensive volume type because disk space use is only
	50 percent.) Any partition, including the boot or system partition, can be
	mirrored.
	
	How to Choose a Volume Type for Your Windows NT 4.0 Environment
	---------------------------------------------------------------
	
	There are many factors that may influence your choice of volume type. The most
	important factor is fault tolerance, which is the ability of a computer or an
	operating system to respond to a catastrophic event, such as a power outage or a
	hardware failure, so that no data is lost and any work in progress is not
	corrupted. To decide the type of volume to use in your Windows NT 4.0
	environment, you must decide if you require fault tolerance. If you require
	fault tolerance, follow the procedure that is described in the "How to Choose a
	Volume Type When You Require Fault Tolerance" section of this article. If you do
	not require fault tolerance, use the procedure that is described in the "How to
	Choose a Volume Type When You Do Not Require Fault Tolerance" section of this
	article.
	
	How to Choose a Volume Type When You Require Fault Tolerance:
	
	To choose a volume type when you require fault tolerance:
	
	1. Decide if you want to use either a stripe set with parity or a mirror set
	  (both volumes provide fault tolerance).
	
	  The following table compares and contrasts these two volume types:
	
	  
	  +------------------------------------------------------------------------------------------------------------------------------------------+
	  | Stripe Set with Parity                                        | Mirror Set                                                               | 
	  +------------------------------------------------------------------------------------------------------------------------------------------+
	  | Supports FAT and NTFS                                         | Supports FAT and NTFS                                                    | 
	  +------------------------------------------------------------------------------------------------------------------------------------------+
	  | Cannot stripe the system or boot partition                    | Can mirror the system or boot partition                                  | 
	  +------------------------------------------------------------------------------------------------------------------------------------------+
	  | Requires a minimum of 3 hard disks                            | Requires 2 hard disks                                                    | 
	  +------------------------------------------------------------------------------------------------------------------------------------------+
	  | Has lower cost per megabyte (MB)                              | Has  higher cost per megabyte (MB)
	  (50 percent disk utilization)      | 
	  +------------------------------------------------------------------------------------------------------------------------------------------+
	  | Has moderate write performance
	  Has excellent read performance | Has good read and write performance                                      | 
	  +------------------------------------------------------------------------------------------------------------------------------------------+
	  | Requires more system memory for parity
	  calculations           | Uses less system memory                                                  | 
	  +------------------------------------------------------------------------------------------------------------------------------------------+
	  | Supports up to 32 hard disks                                  | Supports exactly 2 hard disks                                            | 
	  +------------------------------------------------------------------------------------------------------------------------------------------+
	  | Is currently the most popular approach to
	fault tolerance    | Provides a higher level of fault tolerance
	  than a stripe set with parity | 
	  +------------------------------------------------------------------------------------------------------------------------------------------+
	
	2. Determine your priorities. Is fault tolerance your highest priority
	  (regardless of the cost)? Do you require only a modest amount of fault
	  tolerance (for a more modest cost)? Is I/O performance (or speed) your
	  highest priority?
	
	  If fault tolerance is your highest priority, it is recommended that you use a
	  mirror set for your Windows NT 4.0 environment. If either cost or speed is
	  your highest priority, it is recommended that you use a stripe set with
	  parity for your Windows NT 4.0 environment.
	
	How to Choose a Volume Type When You Do Not Require Fault Tolerance:
	
	To choose a volume type when you do not require fault tolerance:
	
	1. Decide if you want to use either a stripe set or a volume set (both sets do
	  not provide any fault tolerance).
	
	  The following table compares the characteristics of these two volume types.
	
	  NOTE: The following acronyms are used in this table:
	
	   - IDE: Integrated development environment
	   - SCSI: Small computer system interface
	   - ESDI: Enhanced small device interface
	
	  
	  +-------------------------------------------------------------------------------------------------------------------------------------+
	  | Condition                                                                                                 | Stripe Set | Volume Set | 
	  +-------------------------------------------------------------------------------------------------------------------------------------+
	  | Can it be created on one physical drive?                                                                  | No         | Yes        | 
	  +-------------------------------------------------------------------------------------------------------------------------------------+
	  | Can it contain the system or boot partition?                                                              | No         | No         | 
	  +-------------------------------------------------------------------------------------------------------------------------------------+
	  | What is the maximum number of areas (partitions)
	  that can be combined?                                    | 32         | 32         | 
	  +-------------------------------------------------------------------------------------------------------------------------------------+
	  | Must the areas combined be of the same size?                                                              | Yes        | No         | 
	  +-------------------------------------------------------------------------------------------------------------------------------------+
	  | Can it combine areas on different types of drives,
	  such as SCSI, ESDI, and IDE?                           | Yes        | Yes        | 
	  +-------------------------------------------------------------------------------------------------------------------------------------+
	  | Is the area on one physical drive filled before the volume type 
	starts to fill the next physical drive? | No         | Yes        | 
	  +-------------------------------------------------------------------------------------------------------------------------------------+
	  | Can it improve I/O performance?                                                                           | Yes        | No         | 
	  +-------------------------------------------------------------------------------------------------------------------------------------+
	  | Is the volume type easily extended?                                                                       | No         | Yes        | 
	  +-------------------------------------------------------------------------------------------------------------------------------------+
	
	2. Determine your priorities.
	
	  Is I/O performance (speed) your highest priority? Or is extensibility your
	  highest priority? The costs associated with a stripe set and a volume set are
	  similar.
	
	  If performance speed is your highest priority, it is recommended that you use
	  a stripe set for your Windows NT 4.0 environment.
	
	  If extensibility is your highest priority, it is recommended that you use a
	  volume set for your Windows NT 4.0 environment.
	
	REFERENCES
	==========
	
	For more information about the Windows NT 4.0 volume types, see Modules 6 and 7
	of Microsoft Official Curriculum, Course Number 922.
	
	For additional information about how to configure a stripe set with parity, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q316304 How to Configure a Stripe Set with Parity on a Windows NT Server 4.0
	  Computer
	
	For additional information about how to configure a mirror set, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q316311 How to Configure a Mirror Set on a Windows NT Server 4.0 Computer
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
