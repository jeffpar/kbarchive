---
layout: page
title: "Q134848: Reserving Multiple Drive Letters Causes Multiple Drives in UI"
permalink: /kb/134/Q134848/
---

## Q134848: Reserving Multiple Drive Letters Causes Multiple Drives in UI

	Article: Q134848
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you reserve a range of drive letters for removable drives, inserting a drive
	causes all the reserved drive letters to appear as if drives have been inserted.
	
	CAUSE
	=====
	
	When you reserve drive letters, they become visible to the system. If you insert
	a drive with one partition, you can view the partition on the first reserved
	drive letter. Other reserved drive letters result in "Not Ready" error messages
	if you try to view them. If the removable drive contains multiple partitions,
	the partitions become available on sequential reserved drive letters.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To reserve drive letters for removable drives, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the System icon.
	
	3. On the Device Manager tab, double-click the branch containing the removable
	  drive, and then double-click the removable drive.
	
	4. On the Settings tab, select the drive letter range you want to reserve by
	  clicking the starting drive letter in the Start box and the ending drive
	  letter in the End box.
	
	5. Click OK, and then click OK again.
	
	6. When you are prompted to restart your computer, do so.
	
	To remove the reserved drive letters, repeat the steps above.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
