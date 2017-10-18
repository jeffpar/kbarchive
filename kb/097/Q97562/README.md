---
layout: page
title: "Q97562: Setup Error Using Stacker versions 2.x, 3.x and Swapped Drives"
permalink: kb/097/Q97562/
---

## Q97562: Setup Error Using Stacker versions 2.x, 3.x and Swapped Drives

	Article: Q97562
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Stac Electronics' Stacker, version 2.x or 3.x, is installed on your computer
	and your CONFIG.SYS file contains the Stacker SSWAP.COM command to swap drives,
	you cannot install MS-DOS 6.0. The MS-DOS installation fails and Setup generates
	the following message:
	
	  The copy of the CONFIG.SYS or the AUTOEXEC.BAT on your compressed drive does
	  not match the corresponding file on your uncompressed drive.
	
	WORKAROUND
	==========
	
	To correct this error, use a text editor to change the CONFIG.SYS file on your
	uncompressed drive. Find the line that installs SSWAP.COM and add the /SYNC
	option. For example, the changed SSWAP.COM line might look like the following:
	
	  device=c:\stacker\sswap.com /sync
	
	The /SYNC option causes SSWAP.COM to synchronize the AUTOEXEC.BAT and CONFIG.SYS
	files on the uncompressed drive with those on the compressed drive.
	
	For additional information about SSWAP.COM, its /SYNC option switch, or Stacker,
	please refer to the Stacker documentation or contact STAC Electronics.
	
	Stacker is manufactured by STAC Electronics, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.00 swap swap.com installation 3rdparty 2.0 3.0
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
