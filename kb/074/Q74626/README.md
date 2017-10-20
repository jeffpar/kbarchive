---
layout: page
title: "Q74626: RAM Drive Write Protected on Acer 1100 with /Machine:6"
permalink: /kb/074/Q74626/
---

## Q74626: RAM Drive Write Protected on Acer 1100 with /Machine:6

{% raw %}

	Article: Q74626
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
	
	If you use Microsoft MS-DOS 5.0 or later RAMDRIVE.SYS on an Acer 1100 computer
	and HIMEM.SYS is loaded with the /machine:6 switch, any attempt to access the
	RAM drive displays a message that the drive is write protected. This message
	occurs when you try to copy a file to the RAM drive or when you try to get a
	directory listing of the RAM drive.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the /machine:6 switch from the HIMEM.SYS
	line in your CONFIG.SYS file. After removing the switch, you can access the RAM
	drive normally.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
