---
layout: page
title: "Q136111: Windows 95 Customer Advisory for Virus on Disk 2 Problems"
permalink: /kb/136/Q136111/
---

## Q136111: Windows 95 Customer Advisory for Virus on Disk 2 Problems

	Article: Q136111
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbsetup win95
	Last Modified: 31-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the information in the Windows 95 Customer
	Advisory.
	
	SYMPTOMS
	========
	
	When a floppy-based Setup gets to disk 2, it can halt with a message indicating
	a bad disk 2, or may be unable to locate disk 2 even though you have inserted it
	in the drive. You will be required to exit Setup at that time. Since it is early
	in the process there should be no effect on your ability to run your previous
	configuration.
	
	CAUSE
	=====
	
	We have tracked down a handful of disk sets nationwide from customers who have
	reported this problem. In every case, the second disk turned out to have been
	corrupted by a virus on the customer's computer that had infected the second
	disk during Setup. In each case, the virus was on the customer's computer prior
	to the installation of Windows 95 and not caused by the Windows 95 disks. This
	generally happens on disk 2 because this is the disk that stores customer
	registration information, so Setup writes to this disk. The virus, which
	installs itself undetected on a typical floppy disk, is exposed because of the
	unique high-density format used for Windows 95 distribution diskettes.
	
	MORE INFORMATION
	================
	
	How can a customer prevent this:
	
	There are several viruses that can cause this problem. The best way to eliminate
	the problem for good is to run an anti-virus program and scan the computer for
	viruses before upgrading. This is recommended on the disk labels. Because
	viruses can be difficult to get rid of completely, you should reboot your
	computer and check for viruses a second time after you believe the virus has
	been removed. All Windows 95 disks should be write-protected when possible. Disk
	2 can be write-protected when your information has already been recorded from a
	previous Windows 95 Setup. A floppy disk is write-protected when the tab on the
	top of floppy disk is flipped up so that you can see through the hole.
	
	What a customer should do if this happens:
	
	Once the virus has infected disk 2, the disk cannot be used. Please call (800)
	360-7561 or Microsoft Product Support Services for updated disks.
	
	Additional query words: dmf bad disk baddisk
	======================================================================
	Keywords          : kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
