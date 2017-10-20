---
layout: page
title: "Q148821: Possible Data Loss with LBA and INT13 Extensions"
permalink: /kb/148/Q148821/
---

## Q148821: Possible Data Loss with LBA and INT13 Extensions

{% raw %}

	Article: Q148821
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbfile diskmem win95 kbgraphxlinkcritical kbDiskMemory
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you perform one of the following actions, the contents of some Enhanced
	IDE (EIDE) hard disks may not seem to be correct:
	
	- Choosing "Restart the computer in MS-DOS mode" from the Shut Down menu.
	
	- Starting an MS-DOS-based program that is configured to run in MS-DOS mode.
	
	Specifically, if there are multiple partitions on a large EIDE hard disk, the
	extended partitions (usually drive letters D and higher) seem to contain the
	contents of the primary partition (usually drive C), or to be corrupted. Or, new
	drives may appear that contain the contents of drives in the extended
	partition.
	
	WARNING: In this situation, attempts to use disk-repair utilities such as
	ScanDisk to repair the apparent corruption will cause data corruption on the
	primary partition of the affected drive.
	
	Any action that attempts to write data to the extended partitions when this
	symptom is observed may also result in data corruption.
	
	Running the CHKDSK command when this symptom is observed may result in a
	"Probable non-DOS disk" message.
	
	CAUSE
	=====
	
	This situation is known to occur only when all of the following conditions
	exist:
	
	- The hard disk is a large (>504 MB) Enhanced IDE hard disk.
	
	- The hard disk is accessed using Logical Block Addressing (LBA).
	
	- The hard disk has been partitioned into multiple partitions with the Windows
	  95 version of FDISK, or another partitioning utility that creates MS-DOS
	  extended partition types 0x0E and 0x0F.
	
	- The system BIOS supports INT13 extensions to access hard disk devices.
	
	
	- You have exited to MS-DOS mode from Windows 95 without rebooting the
	  computer.
	
	Under these circumstances, certain data structures maintained by the operating
	system for accessing these logical drives become corrupted in the transition
	from protected mode to real mode.
	
	This does not occur when you boot the computer to a command prompt or from a
	floppy disk.
	
	RESOLUTION
	==========
	
	This issue is resolved by the following updated file for Windows 95:
	
	  DISKTSD.VXD version 4.00.952 (dated 3/22/96) and later
	
	Installation
	------------
	
	To install the updated file, use the following steps:
	
	1. Download the Dsktsupd.exe file from one of the online services listed below
	  to an empty folder.
	
	2. In My Computer or Windows Explorer, double-click the Dsktsupd.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	4. After the installation process is finished, shut down and then restart your
	  computer.
	
	Instructions for Downloading
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Dsktsupd.exe now
	  (http://download.microsoft.com/download/win95upg/update/2/w95/EN-US/Dsktsupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	For additional information about INT13H extensions, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q122052 Logical Block Addressing (LBA) Defined
	
	For additional information about the use of large hard disks with MS-DOS and
	Windows 95, please see the following article in the Microsoft Knowledge Base:
	
	  Q126855 Windows 95 Support for Large IDE Hard Disks
	
	Workaround
	----------
	
	To work around this issue, in the event you do not have the updated DSKTSUPD.EXE
	file, use either of the following methods:
	
	Method 1
	--------
	
	Avoid exiting to MS-DOS mode from within Windows 95. To run programs that require
	MS-DOS mode, boot to a command prompt instead of Windows.
	
	Method 2
	--------
	
	Repartition the hard disk using one of the following methods.
	
	WARNING: Repartitioning the hard disk will delete all data in the current
	partitions (logical disks). Make sure to back up your data before repartitioning
	the hard disk.
	
	- Repartition the hard disk into a single primary partition.
	
	- Repartition the hard disk by starting FDISK with the following command line:
	
	  FDISK /X
	
	  This disables support for the LBA extended partition types 0x0E and 0x0F, and
	  uses the older partition types 0x05 and 0x06 instead.
	
	- Repartition the hard disk with an older version of FDISK (prior to Windows
	  95) that does not support the LBA extended partition types.
	
	- Repartition the hard disk using a third-party tool that does not use the LBA
	  extended partition types.
	
	Additional query words: XINT13 INT13h INT exit dos mirror
	
	======================================================================
	Keywords          : kbfile diskmem win95 kbgraphxlinkcritical kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
