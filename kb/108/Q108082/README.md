---
layout: page
title: "Q108082: Windows NT Cannot Regenerate Stripe Set with Parity"
permalink: kb/108/Q108082/
---

## Q108082: Windows NT Cannot Regenerate Stripe Set with Parity

	Article: Q108082
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you remove a drive from a stripe set with parity, deleting a stripe partition
	on another computer, when you reinsert the drive back into the stripe set with
	parity, the stripe set with parity is not allowed to regenerate.
	
	CAUSE
	=====
	
	Windows NT places a unique identifier on all drives it uses. When it sees the
	identifier previously used in the stripe set with parity, it does not detect the
	modifications made to the drive and is misled about the state of the
	configuration. Windows NT is not changing this identifier when partitions are
	deleted.
	
	In normal production environments, this situation should not be encountered. A
	failed drive is usually replaced with a different one. Even if a drive is
	repaired, it is usually low-level formatted in the process unless a specific
	request is made to save the data if possible. The low- level format should
	remove the identifier Windows NT placed on the drive.
	
	The most likely situation where this issue may be seen is in a pre- production
	testing environment prior to Windows NT implementation. For example, the tester,
	wanting to simulate a drive failure, pulls a good drive out of the system while
	it is running. Not having an additional drive available to replace it with, the
	tester takes the drive to a different machine and removes the partitions
	thinking that this will simulate a new drive.
	
	Another possibility for causing this would be if a hardware hot-swapable drive
	array was not configured in a way to present the array of drives to the
	operating system as one drive. In this situation, Windows NT would have to
	detect and automatically process a drive that was hot-swapped. This feature is
	not available as a part of Windows NT Fault Tolerance. For this kind of Fault
	Tolerance to be used, it has to be implemented at the hardware level.
	
	
	RESOLUTION
	==========
	
	To work around this problem, do the following:
	
	If this kind of testing is going to be done, either use a different drive for
	replacement or delete the information kept in sector zero of the drive. A
	different disk, even if previously used under Windows NT, will contain a
	different identifier. This difference will be correctly detected by Windows NT
	Fault Tolerance and regeneration of the stripe with parity set will be possible.
	A low-level format should remove sector zero information, or a disk editor
	program could be used.
	
	If a drive is repaired and a request is made to save the data, make a tape backup
	of the recovered data on the drive. Use the above techniques to remove the
	Windows NT identifier before you attempt to reuse the drive in the Windows NT
	computer.
	
	Warnings
	--------
	
	Although techniques such as pulling a drive out of a system while it is running
	may be used in testing, they do result in a degree of risk. Microsoft does not
	recommend the use of these techniques and will not be responsible for any
	negative consequences of doing so.
	
	Mention of the identifier in sector zero as an implementation detail of Windows
	NT Fault Tolerance is only for the purpose of clarifying why partition removal
	is an inadequate procedure. Microsoft does not support the non-Microsoft use of
	this information. This implementation detail may be modified or removed at any
	time if Microsoft deems it to be appropriate to do so. Microsoft specifically
	rejects any claim to product support arising out of the access or use of this
	implementation detail by a non- Microsoft process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Use Disk Administrator to set up a stripe with parity set.
	
	2. While Windows NT is running, disconnect one drive of the stripe set with
	  parity to simulate a drive failure.
	
	3. Shut down the computer with stripe set with parity.
	
	4. Take the disconnected drive to another computer and remove all partitions on
	  it in an attempt to simulate a new drive.
	
	5. Place the disconnected drive back in the stripe set with parity computer.
	
	6. Boot Windows NT, log on, then start Disk Administrator.
	
	7. Select the stripe with parity set, press the CTRL key and select the
	  previously disconnected drive.
	
	8. Select Fault Tolerance.
	
	The Regenerate option is unavailable (grayed out).
	
	
	Additional query words: prodnt recovery raid
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
