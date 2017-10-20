---
layout: page
title: "Q240718: Previous OS Disabled by Setup and Is Not Listed on Boot Menu"
permalink: /kb/240/Q240718/
---

## Q240718: Previous OS Disabled by Setup and Is Not Listed on Boot Menu

{% raw %}

	Article: Q240718
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During Windows NT 4.0 Setup, there are several times when choices must be made
	about the partition information on the disk, and the location for the Windows NT
	installation. If your computer is dual-booting with an operating system (such as
	Microsoft Windows 98) that has a file system that is not supported, Windows NT
	may generate the following error message:
	
	  Windows NT Workstation Setup
	  ============================
	
	  The partition you have chosen is not recognized by Windows NT.
	
	  Setup cannot install Windows NT onto this partition. However you can return to
	  the previous screen and delete the partition, and then select the resulting
	  unpartitioned space. Setup will automatically create a new partition onto
	  which you can install Windows NT.
	
	Also, if the partition you are installing Windows NT on must first be deleted and
	a new one created, you receive the following message after the partition is
	selected:
	
	  Windows NT Workstation Setup
	  ============================
	
	  To complete Windows NT installation, Setup must temporarily disable the
	  operating system that currently starts when your computer is powered on or
	  restarted. That operating system will not be destroyed, uninstalled, or
	  otherwise altered as a result of being disabled by Setup.
	
	  You can re-enable the operating system that Setup disables by using the Disk
	  Administrator to mark its partition as active. Refer to your System Guide for
	  more information about Disk Administrator.
	
	CAUSE
	=====
	
	This problem occurs when you install Windows NT on a partition where the current
	operating system uses a file format that is not supported by Windows NT and is
	marked as Active in the partition tables.
	
	RESOLUTION
	==========
	
	To work around this problem note that when configuring a computer for
	dual-booting, the primary startable partition should be one that is common to
	both operating systems. In this example the only operating system that is common
	to Windows 98 and Windows NT 4.0 is FAT16. A small FAT16 partition can serve as
	the Primary DOS partition and can serve as the container for the startup files
	for both operating systems.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If the installation in the above example is completed, Windows NT creates a new
	Primary DOS partition. Because of this, there may be more than one Primary DOS
	partition on this computer. It will then be possible to use Disk Administrator
	to set the previous partition as Active and permit the previous operating system
	to boot. However, doing so makes it difficult to start Windows NT on the
	computer.
	
	Additional query words: fat32 fat-32 windisk
	
	======================================================================
	Keywords          : kbsetup kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
