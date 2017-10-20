---
layout: page
title: "Q97104: Installing MS-DOS Upgrade on a Quantum Hardcard (Plus Dev.)"
permalink: /kb/097/Q97104/
---

## Q97104: Installing MS-DOS Upgrade on a Quantum Hardcard (Plus Dev.)

{% raw %}

	Article: Q97104
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install MS-DOS Upgrade on a system with Quantum Corporation's Hardcard
	Plus, the installation seems to complete normally, but the hard card may be
	inaccessible after you restart the computer.
	
	CAUSE
	=====
	
	MS-DOS cannot see the Hardcard Plus drive unless ATPLUS.COM is loaded. If you
	run Fdisk and you do not have ATPLUS installed, you receive the following error
	message:
	
	  Cannot access drive 2
	
	If you continue, Fdisk allows you to switch to drive 2 and put a partition on it,
	but this partition cannot be recognized after you restart the computer.
	
	WORKAROUND
	==========
	
	To work around this problem, use version 3.0 or later of the ATPLUS.COM utility.
	
	MORE INFORMATION
	================
	
	ATPLUS.COM can be downloaded from Quantum's bulletin board service (BBS). To
	install the new version of ATPLUS.COM, do the following:
	
	1. Create a bootable MS-DOS 6.0 or 6.2 floppy disk with one of the following
	  commands:
	
	  " sys c: a:" (without the quotation marks)
	
	  -or-
	
	  " format a: /s" (without the quotation marks)
	
	2. Copy ATPLUS.COM to the floppy disk.
	
	3. With the floppy disk in drive A, restart your computer.
	
	4. Run ATPLUS.COM by typing "atplus" (without the quotation marks) at the MS-DOS
	  command prompt and then pressing ENTER. This causes ATPLUS to patch the
	  operating system files on the floppy disk.
	
	5. Use the SYS command to transfer the patched operating system files from the A
	  drive to your C drive. For example:
	
	  " sys a: c:" (without the quotation marks)
	
	6. Restart your computer.
	
	Hardcard Plus is manufactured by Quantum Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 6.22 6.00 6.20 "Cannot read boot sector"
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
