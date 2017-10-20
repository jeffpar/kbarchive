---
layout: page
title: "Q105256: DoubleSpace Mounts Bernoulli Disk as Non-Removable"
permalink: /kb/105/Q105256/
---

## Q105256: DoubleSpace Mounts Bernoulli Disk as Non-Removable

{% raw %}

	Article: Q105256
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If you are using Bernoulli IOMega OAD version 1.21 device drivers with MS-DOS
	6.2, DoubleSpace creates a permanently mounted drive when you compress existing
	data on a Bernoulli drive. When you restart your computer, DoubleSpace attempts
	to mount the newly created compressed disk, even if the Bernoulli drive is
	empty.
	
	RESOLUTION
	==========
	
	To work around this problem, unmount the DoubleSpace-compressed Bernoulli disk
	and then reboot your computer. After rebooting your computer, the disk should
	mount automatically when you access it.
	
	Additional query words: 6.20 double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
