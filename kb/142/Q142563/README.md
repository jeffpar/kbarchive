---
layout: page
title: "Q142563: Large IDE Drive Support Using AMI Disk Extender"
permalink: /kb/142/Q142563/
---

## Q142563: Large IDE Drive Support Using AMI Disk Extender

{% raw %}

	Article: Q142563
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.11,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many computers cannot access more than 528 MB of data on IDE drives, which is by
	design. However, some third-party software programs can allow access of data
	beyond the 528 MB limit such as On Track Disk Manager. Some hardware
	manufacturers have introduced enhancements to the BIOS and the IDE controllers
	so that data can be virtually accessed through Logical Block Addressing (LBA).
	If the hardware manufacturer of your computer does not provide this feature, you
	may want to upgrade your BIOS to the Disk Extender.
	
	For more information, contact American Megatrends, Inc., at (800) 828-9264 or
	(404) 263-9381.
	
	MORE INFORMATION
	================
	
	Most large IDE drives support LBA. One of Disk Extender's preferred requirements
	is that the computer supports LBA for its IDE drives. If your computer does not
	provide this support, Disk Extender uses Block Transfer Mode for the IDE drives
	so that data can be accessed beyond 528 MB. Disk Extender works with any of the
	Microsoft operating systems and supports up to four IDE hard drives on a
	system.
	
	
	The following information lists additional features of the AMI Disk Extender:
	
	- Supports up to two IDE Controllers (primary and secondary).
	
	- Supports up to two IDE drives (master and slave) for each IDE controller, a
	  total of four IDE drives.
	
	- Supports IDE LBA mode drives with capacities greater than 528MB.
	
	- Needs no additional support from the system BIOS.
	
	- Works with any system BIOS.
	
	- Derived from AMI BIOS.
	
	- Requires no configuration; auto detects and configures IDE drives.
	
	The complete reference to the board is called:
	
	- AMIDISK
	  IDE BIOS Extension
	
	  -or-
	
	- AMI Disk Extender
	
	The board can be purchased directly from Washburn Company, Inc. Washburn Company,
	Inc. is the manufacturer of the AMI BIOS and source licenses it to AMI.
	
	
	To order call:
	
	  1-716-385-5200
	
	The address is:
	
	  Washburn Company
	  3800 Monroe
	  Pittsford, NY 14534
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt FAT AMI
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW311
	Version           : :3.1,3.11,3.5,3.51
	
	=============================================================================
	

{% endraw %}
