---
layout: page
title: "Q102228: Hardware Troubleshooting: Cold Booting Versus Warm Booting"
permalink: /kb/102/Q102228/
---

## Q102228: Hardware Troubleshooting: Cold Booting Versus Warm Booting

{% raw %}

	Article: Q102228
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	3.00 3.00a 3.10 3.11 | 6.00 6.20 6.21
	WINDOWS              | MS-DOS
	kbhw kbtshoot
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When troubleshooting hardware issues, using the power on/off switch yields the
	most consistent testing procedure. If you suspect a hardware problem,
	particularly an adapter card problem, using the power switch, rather than the
	CTRL+ALT+DEL key combination or the Reset button, is recommended.
	
	MORE INFORMATION
	================
	
	A warm boot, accomplished by pressing the CTRL+ALT+DEL key combination, restarts
	the computer through the INT19h ROM BIOS routine. This warm-boot procedure
	usually does not go through the complete boot process; generally, it skips the
	power-on self test (POST) to save time. In addition, a warm boot frequently
	fails to reset all adapters in the computer's adapter slots.
	
	If you use the Reset button to cold boot the computer, it generally restarts the
	boot process, including the POST. However, this procedure does not necessarily
	discontinue power to the motherboard. If the power is not interrupted, the cold
	boot may fail to reset all adapters in the computer's adapter slots.
	
	To ensure that all adapters are properly reset, you should use the power switch
	to turn the computer off. Leaving the power off for ten seconds ensures that all
	the capacitors on the motherboard have time to discharge and should also give
	the hard disk drive a chance to stop spinning.
	
	NOTE: Using other reboot methods, such as CTRL+ALT+DEL or the Reset button, is
	acceptable when a hardware problem is not suspected.
	
	If you are using a write-behind cache, ensure the contents of the cache have been
	written to the disk before using the power on/off switch. When using
	SMARTDRV.EXE version 4.0 or later, typing "smartdrv /c" (without the quotation
	marks) accomplishes this.
	
	Additional query words: tshoot 3.0 3.00 3.00a 3.10 3.1 3.11 6.00 6.20 6.2 6.21
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
