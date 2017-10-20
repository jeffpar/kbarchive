---
layout: page
title: "Q96331: Stacker Err Msg: WARNING: Unrecognized Load High..."
permalink: /kb/096/Q96331/
---

## Q96331: Stacker Err Msg: WARNING: Unrecognized Load High...

{% raw %}

	Article: Q96331
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to MS-DOS 6.x, you may receive the following message if you
	are using Stacker:
	
	  WARNING: Unrecognized load high method. Unable to verify driver fit
	
	The driver loads successfully, but you must press a key to continue.
	
	CAUSE
	=====
	
	This message occurs if you use a DEVICEHIGH= command for the Stacker device
	drivers in your CONFIG.SYS file. It does not occur if you use a DEVICE= command.
	
	WORKAROUND
	==========
	
	To work around this problem, ensure the command for SETVER.EXE is located above
	the Stacker device drivers in the CONFIG.SYS file. To do this, SETVER.EXE must
	be located on the uncompressed Stacker partition.
	
	1. Copy SETVER.EXE to the uncompressed drive. For example, if your compressed
	  drive is C and the swap drive is D, copy SETVER.EXE to drive D as follows:
	
	     copy c:\dos\setver.exe d:\ 
	
	2. Put the following SETVER.EXE statement at the top of your CONFIG.SYS file:
	
	     device=c:\setver.exe
	
	3. Restart your computer.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 6.22 6.00 6.20 2.0 2.1 2.x 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
