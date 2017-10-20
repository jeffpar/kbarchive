---
layout: page
title: "Q71212: BT M5200F Hangs During Setup of MS-DOS Upgrade"
permalink: /kb/071/Q71212/
---

## Q71212: BT M5200F Hangs During Setup of MS-DOS Upgrade

{% raw %}

	Article: Q71212
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The British Telecom (BT) M5200F computer with Zenith BIOS version 2.0F stops
	responding (hangs) during the Microsoft MS-DOS 5 or later Upgrade Setup
	displaying a "memory parity failure" error. This error occurs during the 11%
	installation mark of Setup, which copies the COMMAND.DAT file to the Uninstall
	disk.
	
	NOTE: To confirm that COMMAND.DAT is being copied, check the bottom-right corner
	of the screen.
	
	CAUSE
	=====
	
	This is caused by the Zenith BIOS.
	
	RESOLUTION
	==========
	
	To successfully run Setup on this machine, a Zenith BIOS version 2.1A is
	required. For more information on upgrading your ROM BIOS version, please
	contact Zenith.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 3rdparty 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
