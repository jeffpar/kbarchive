---
layout: page
title: "Q115178: Drive Access Problems with Dual-Capacity Bernoulli Drive"
permalink: /kb/115/Q115178/
---

## Q115178: Drive Access Problems with Dual-Capacity Bernoulli Drive

	Article: Q115178
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a Bernoulli drive that has two drives in one box and the first
	drive is uncompressed and the second drive has been automatically mounted by the
	DoubleSpace or DriveSpace automount code, the following problems occur:
	
	- The compressed drive is mapped over the uncompressed drive.
	
	- The uncompressed drive is mapped to a host drive.
	
	As a result, the drive letter that was the second drive is inaccessible and
	returns the following error when accessed:
	
	  Not ready reading drive J:
	  Abort, Retry, Fail.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.2 and 6.22. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	NOTE: This problem is very rare.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Insert a uncompressed Bernoulli in the first drive bay.
	
	2. Insert a compressed Bernoulli in the second drive bay.
	
	3. Type "drvspace /li" (without the quotation marks). (The system is configured
	  incorrectly after DoubleSpace/DriveSpace automatically mounts the second
	  drive.)
	
	
	Additional query words: 6.20 auto mount
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
