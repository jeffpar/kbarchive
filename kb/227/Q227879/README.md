---
layout: page
title: "Q227879: Formatting Using the Compaq Array Configuration Utility"
permalink: /kb/227/Q227879/
---

## Q227879: Formatting Using the Compaq Array Configuration Utility

{% raw %}

	Article: Q227879
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 10-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how the Compaq Array Configuration utility formats disks.
	
	MORE INFORMATION
	================
	
	The Compaq Array Configuration utility allows for translating disks using 63
	sectors per track.
	
	When you install Windows NT 4.0 or Microsoft Windows NT 3.51 on a Compaq Array,
	you must format the disk with 63 sectors per track to install Windows NT on a
	partition that is larger than 4 gigabytes (GB). The boot and system partitions
	must reside in the first 4 GB of disks that are formatted with 32 sectors per
	track, or in the first 7.8 GB of disks that are formatted with 63 sectors per
	track.
	
	For additional information about disk support in Windows NT, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q224526 Windows NT 4.0 Supports Maximum of 7.8-GB System Partition
	
	When you start your computer using the Compaq SmartStart CD-ROM and you configure
	the disk array, you are prompted to choose which OS you are going to install.
	You are prompted with the following selections:
	
	- WINNT 3.51 Max Boot
	- WINNT 3.51
	- WINNT 4.0
	
	If you choose the WINNT 3.51 or WINNT 4.0 selections, you translate the disk to
	use 32 sectors per track by default. If you choose WINNT 3.51 Max Boot, you
	translate the disk to use 63 sectors per track.
	
	Compaq has confirmed that you can choose WINNT 3.51 Max Boot when you use Windows
	NT 4.0 and you need to use 63 sectors per track. For additional information
	about using the WINNT 3.51 Max Boot selection, please contact Compaq technical
	support or visit the following Compaq Web site:
	
	  http://www.compaq.com
	
	Additional query words: 7.84
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
