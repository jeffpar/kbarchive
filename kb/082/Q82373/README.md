---
layout: page
title: "Q82373: Permanent Swap Files and the Disk Partition Table"
permalink: /kb/082/Q82373/
---

## Q82373: Permanent Swap Files and the Disk Partition Table

{% raw %}

	Article: Q82373
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When creating a swap file, you may receive an error message similar to the
	following:
	
	  The partitioning scheme used on your hard disk prevents the creation of a
	  permanent swap file.
	
	This error message can display whether you use the Virtual Memory dialog box
	during a custom Windows Setup, or the 386 Enhanced option in Control Panel to
	create swap files.
	
	CAUSE
	=====
	
	This message can result from one of the following:
	
	- A partition manager
	
	- A virus
	
	- Uninitialized fields in the partition table
	
	MORE INFORMATION
	================
	
	Windows is very careful about what hard disks it uses when it creates permanent
	swap files. Windows would cause serious disk errors and data loss if it
	incorrectly modified a disk that is formatted with special software. To prevent
	damaged disks and lost data, Windows makes absolutely sure that it understands
	the exact format of the disk.
	
	One of the checks performed by Control Panel (and Setup, because Setup uses
	Control Panel to create a swap file when a custom setup is performed) is to look
	for disk partitioning software, such as Disk Manager or SuperStor. This is done
	by examining the partition table on the disk.
	
	If partitioning software is found, Control Panel displays an error message. This
	message does not imply that the partitioning software is incompatible with
	Windows; it simply means that a permanent swap file cannot be created on that
	disk.
	
	The following conditions can cause Control Panel to mistakenly detect
	partitioning software:
	
	- Another operating system is installed on the computer and happens to use the
	  same partition type number (there are only 255 partition type numbers
	  available); that partition is detected as one using partitioning software.
	  There is no way to work around this problem if this is the cause.
	
	
	- The machine is infected with a virus. Some viruses create their own "foreign"
	  disk partitions and set themselves up as the boot operating system (for
	  example, the Michelangelo virus). If no other explanation for the disk
	  partition error can be found, the disk should be scanned for viruses. When
	  the virus is removed, Windows should be able to create the permanent swap
	  file.
	
	- The disk drive may have been partitioned in the past with partitioning
	  software, and was later repartitioned using MS-DOS version 4.01 or 5.0 FDISK.
	  MS-DOS and FDISK support only four partitions on a disk, while some partition
	  software supports more than four. Therefore, FDISK does not reset partitions
	  in the extra entries. As a result, Windows interprets these invalid entries
	  as an incompatible disk partition.
	
	- Ontrack Software Disk Manager-N utility partitions and formats part of a hard
	  drive as a Novell file server. When a machine configured with Disk Manager-N
	  is started, the Novell utility attached to the master boot record (MBR) loads
	  and gives you the option of starting the system on the MS-DOS partition or to
	  the Novell file server partition. If your hard disk has been partitioned with
	  Disk Manager-N, you cannot create a permanent swap file under Microsoft
	  Windows 3.1.
	
	  The following text was taken from the Disk Manager README file:
	
	  DISK MANAGER - N
	
	  DISK MANAGER - N is a disk installation utility tailored specifically for the
	  NOVELL local area network. This utility replaces the COMPSURF utility from
	  NOVELL. DISK MANAGER - N installs disks running under NETWARE 86, ADVANCED
	  NETWARE 86, and ADVANCED NETWARE 286.
	
	
	KBCategory: kbnetwork kbdisplay kb3rdparty kbsetup kberrmsg
	KBSubcategory: win31
	
	Additional query words: 3.10 scheme swapfile 3.11 Michael Angelo win31tlc techlib
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
