---
layout: page
title: "Q134452: Setup Does Not Detect Standard IDE Drive On IBM 9353"
permalink: /kb/134/Q134452/
---

## Q134452: Setup Does Not Detect Standard IDE Drive On IBM 9353

{% raw %}

	Article: Q134452
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Windows 95 on an IBM 9353 computer with a standard IDE hard
	disk and controller, the following message may appear:
	
	  Windows has detected that your computer is not configured
	  for its fastest possible performance. Would you like to see
	  more information about this problem?
	
	When you click Yes, the following message appears:
	
	  Compatibility mode paging reduces overall system performance.
	  Drive C: using MS-DOS compatibility mode.
	
	CAUSE
	=====
	
	Windows 95 does not detect standard IDE hard disks on MCA computers.
	
	RESOLUTION
	==========
	
	If you can confirm that the computer has a standard IDE hard disk, manually add
	the ESDI/IDE driver to get 32-bit protected-mode functionality. To do so, follow
	these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Add New Hardware icon, and then click Next.
	
	3. Click No, and then click Next.
	
	4. Click Hard Disk Controllers, and then click Next.
	
	5. In the Models box, click Standard IDE/ESDI Controller, and then click Next.
	
	6. Accept the default resource settings for the device. Click Next.
	
	  NOTE: If the computer is configured for non-standard resources, these settings
	  may not work correctly and will have to be set manually.
	
	7. Click Finish.
	
	8. When you are prompted to restart your computer, do so.
	
	MORE INFORMATION
	================
	
	The Windows 95 hardware detection routines are designed to be extremely careful,
	so as not to cause a fatal system crash. If Windows 95 detects that you are
	installing on an older MCA computer, the detection module will make certain
	assumptions about the computer's hardware.
	
	One of those assumptions is that IBM MCA computers come with proprietary IBM ESDI
	hard disks. The detection routine does not attempt to detect an IDE hard disk on
	these computers. Therefore, the IDE controller is not enumerated in the BIOS,
	and drive C uses MS-DOS compatibility mode. This behavior is by design on MCA
	computers.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
