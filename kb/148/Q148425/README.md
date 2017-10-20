---
layout: page
title: "Q148425: Duplexed Mirror Generation Fails with Insufficient Space"
permalink: /kb/148/Q148425/
---

## Q148425: Duplexed Mirror Generation Fails with Insufficient Space

{% raw %}

	Article: Q148425
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use duplexed SCSI controllers and a software mirror of either the
	operating system partition or a data partition, you may receive the message
	"Insufficient space on drive X" where X is the target drive or partition. This
	can happen when using identical controllers and drives.
	
	CAUSE
	=====
	
	When two SCSI controllers are used, the drive geometry is calculated differently
	for controllers that have BIOS enabled and the identical controller with BIOS
	disabled.
	
	With a controller that has BIOS enabled, the operating system can query the
	controller BIOS for drive geometry. The BIOS returns a generic drive geometry
	translation. This translation will have a cylinder count of less than 1,024 to
	work with MS-DOS. The number of heads is normally increased to arrive at a
	correct overall size.
	
	Because the second controller does not have BIOS enabled, all it can provide the
	operating system is the size of a block (sector size) and the total number of
	blocks on the device. Windows NT then uses a default translation of 32 tracks
	per cylinder, 64 heads and adjusts the number of cylinders to arrive at a
	correct approximate size. Because of the different translations, cylinder
	boundaries will be in different places on the drives. This often results in a
	drive's free space being 1 or 2 MB different on the two identical drives.
	
	Internally, Windows NT uses a LARGE_INTEGER (64-bit) number for the number of
	cylinders and is not constrained by MS-DOS or partition table limitations.
	
	RESOLUTION
	==========
	
	To work around this problem, perform one of the following:
	
	- If the SCSI controller supports it, set the translation mode on the primary
	  controller to 32 sectors per track and 64 heads.
	
	- Disable the BIOS on the primary controller, and enable it on the secondary
	  controller. Because creating a mirror does not mirror the master boot record,
	  it may also be necessary to set the active partition byte on the new boot
	  drive with MS-DOS Fdisk.exe or with a sector editor. An alternative is to
	  boot the computer from a Windows NT boot floppy disk. Information on how to
	  create this disk can be found in the Windows NT Resource Kit and the Concepts
	  and Planning Guide.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT SUR version 4.0. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
