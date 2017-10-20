---
layout: page
title: "Q113933: Disk Striping And Disk Striping With Parity In Windows NT"
permalink: /kb/113/Q113933/
---

## Q113933: Disk Striping And Disk Striping With Parity In Windows NT

{% raw %}

	Article: Q113933
	Product(s): Microsoft Windows NT
	Version(s): 3.1,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 4.0 
	- Microsoft Windows NT Advanced Server, versions 3.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT and Windows NT Advanced Server disk striping (RAID Level 0) creates a
	disk file system called a stripe set by dividing data into blocks and spreading
	them in a fixed order across all disks in an array. By adding data to all
	partitions in the set at the same rate, disk striping offers the best
	performance of all Windows NT disk management strategies.
	
	Windows NT Server versions allow you to establish fault tolerant disk striping
	with parity (RAID Level 5), which stores parity information along with striped
	data on different disks in the array for redundancy. Disk striping with parity
	is available only with Windows NT Advanced Server, not with Windows NT.
	
	The rest of this article describes disk striping with and without parity in
	Windows NT and Server versions.
	
	MORE INFORMATION
	================
	
	Disk Striping in General--With or Without Parity
	------------------------------------------------
	
	- Stripe sets are user-transparent: when they are created, all partitions are
	  assigned the same drive letter.
	
	- All partitions in a stripe set are the same size. If you select free disk
	  areas of different sizes when you create a stripe set, no stripe will be
	  larger than the smallest free disk area.
	
	- Stripe sets must be created from free disk space; they cannot be used on
	  existing partitions.
	
	- Stripe sets are file system independent and can be formatted with any Windows
	  NT disk file system.
	
	- Disk Administrator assigns the same color to all stripe sets. The status bar
	  in the lower left corner of the Disk Administrator window tells whether a
	  stripe set has parity or not.
	
	- Only the Windows NT Advanced Server installation that created the stripe set
	  will normally recognize it; other operating systems will not. MS-DOS
	  identifies stripe set partitions as Non-DOS. Other installations of Windows
	  NT and Windows NT Advanced Server identify stripe set partitions as being of
	  "Unknown" file system type.
	
	- An installation of Windows NT or Windows NT Advanced Server can restore disk
	  configuration information and thereby recognize a stripe set created by a
	  different installation on the same machine. See page 529 of the "Windows NT
	  Advanced Server System Guide" for more information.
	
	Disk Striping Without Parity
	----------------------------
	
	- Disk striping without parity provides no fault tolerance; if one disk in the
	  stripe is bad or damaged, the entire disk stripe is lost.
	
	- A stripe set can be created on as few as 2 and as many as 32 disks. Only one
	  stripe on a stripe set can be located on each physical disk.
	
	- Disk striping offers the best performance of all Windows NT disk management
	  strategies.
	
	- Disk Administrator assigns the same color to all stripe sets. For a stripe
	  set without parity, the status bar in the lower left corner of the Disk
	  Administrator window says simply "Stripe set #X." parity).
	
	- For information on creating and managing a stripe set, consult the "Windows
	  NT System Guide" or "Windows NT Advanced Server System Guide."
	
	Disk Striping With Parity
	-------------------------
	
	- A stripe set with parity can be created on as few as 3 and as many as 32
	  disks. Only one stripe on a stripe set with parity can be located on each
	  physical disk.
	
	- The amount of disk space used to store parity information is always equal to
	  the size of one of the partitions in the set. For example, if a stripe set
	  with parity is created on five disks, each with a 500 MB partition used for
	  the stripe, 500 MB is used for parity information and 2000 MB is available
	  for data storage.
	
	- Regardless of how many disks are used in a stripe set with parity, data is
	  recoverable only if no more than one disk is lost. If two or more disks are
	  lost, the data is unrecoverable.
	
	- The fault tolerance driver (FTDISK.SYS) makes the loss of one partition in a
	  stripe set with parity invisible--you can read and write to a set with a lost
	  partition as if it were healthy. But the stripe set is no longer fault
	  tolerant: the loss of any remaining partitions will result in an
	  unrecoverable loss of all data in the stripe set.
	
	- The status bar in Disk Administrator indicates stripe set condition. When a
	  partition in the set is selected, Disk Administrator displays information
	  about the set in the lower left corner of the window, as in: "Stripe set with
	  parity #0 [HEALTHY]" Other status indicators include:
	
	  [NEW]: this appears right after the stripe set has been created in Disk
	  Administrator, and before the shutdown of the system and the actual
	  generation of the set.
	
	  [INITIALIZING]: this appears during stripe set generation.
	
	  [RECOVERABLE]: this appears when one of the partitions in the set has been
	  lost but the other partitions are undamaged, or when one partition in the set
	  is not synchronized with the others.
	
	- Disk Administrator assigns the same color to all stripe sets. To tell which
	  have parity, look at the status bar in the lower left corner of the Disk
	  Administrator window. For a stripe set with parity, the description says
	  "Stripe set with parity #X."
	
	- For information on creating and managing a stripe set with parity, consult
	  the "Windows NT Advanced Server System Guide" and the "Windows NT Concepts
	  and Planning Guide."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ400 kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,4.0
	
	=============================================================================
	

{% endraw %}
