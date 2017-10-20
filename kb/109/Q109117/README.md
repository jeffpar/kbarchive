---
layout: page
title: "Q109117: MEM May Not Recognize More Than 16 MB RAM on NCR 4000 Series"
permalink: /kb/109/Q109117/
---

## Q109117: MEM May Not Recognize More Than 16 MB RAM on NCR 4000 Series

{% raw %}

	Article: Q109117
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a National Cash Register (NCR) 4000 series (3350 class) Micro
	Channel Architecture computer and you run the MS-DOS MEM command, your system
	may not report extended memory over 16 megabytes.
	
	WORKAROUND
	==========
	
	To work around this problem, you must use the NCR Reference Disk to change your
	system's memory recognition feature from Standard to Max 64 MB. To do this:
	
	1. Insert the NCR Reference Disk in drive A and restart your system.
	
	2. At the main menu, choose Configuration.
	
	3. Choose Change, then choose Internal Options.
	
	4. Choose DOS MEMORY REPORTING and select Max 64 MB.
	
	5. Press the F10 key to save your changes.
	
	6. Press the ESC key until the system reboots.
	
	MORE INFORMATION
	================
	
	The Standard option uses traditional BIOS calls to limit the memory that is
	reported to MS-DOS. Selecting the Max 64 MB option allows recognition of more
	than 16 MB (up to 64 MB).
	
	The products included here are manufactured by NCR, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: 6.22 6.00 6.20 NCR 16MB max memory extended himem.sys microchannel 4000 3350
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
