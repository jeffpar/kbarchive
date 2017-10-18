---
layout: page
title: "Q99960: Fault Tolerance Allows FDISKPM to Delete Mirror Partition"
permalink: kb/099/Q99960/
---

## Q99960: Fault Tolerance Allows FDISKPM to Delete Mirror Partition

	Article: Q99960
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	
	FTSETUP shows other mirrors as being orphaned. FTAdmin shows all drives being
	cracked with critical errors.
	
	CAUSE
	=====
	
	FDISKPM does not label partitions as being mirrors, prevent you from deleting
	mirror partitions, or warn you if you select a mirror partition for deletion.
	
	RESOLUTION
	==========
	
	When you use fault tolerance, document carefully which partitions fault
	tolerance chooses to be mirrors: mirror one partition at a time and make note of
	which physical drive is becoming the mirror. To do this you may have to remove
	the machine's case and watch the disk activity indicator.
	
	Once a mirror is established, use FDISKPM to determine which logical drive now
	has the mirror partition so that you can correlate physical devices and FDISK
	drive numbers. Here is how to determine which drive has a mirror:
	
	1. In FDISKPM select a drive which has a partition but no logical drives
	  assigned.
	
	2. Note the partition size.
	
	3. From the Options menu, select Create Logical Drive.
	
	4. When the "Create Logical" dialog box appears, note the maximum size available
	  to the new drive. If this space is significantly less than the partition size
	  you just recorded, then the difference has been used by the mirror and should
	  be very close, if not identical, to the mirror partition size.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
