---
layout: page
title: "Q80364: Removing Terminate-and-Stay-Resident Programs from Memory"
permalink: /kb/080/Q80364/
---

## Q80364: Removing Terminate-and-Stay-Resident Programs from Memory

{% raw %}

	Article: Q80364
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Terminate-and-stay-resident (TSR) programs cannot be removed from the
	environment unless you:
	
	- Reboot the system.
	
	- Alter the memory arena by finding the memory owned by the TSR and marking it
	  as available.
	
	- Use a third party utility.
	
	MORE INFORMATION
	================
	
	Two MS-DOS based programs, MARK and RELEASE by Turbo Software, are popular tools
	when working with TSR programs. After you run MARK, you can load TSR programs
	into memory and later remove them by running RELEASE. For more information on
	MARK and RELEASE, contact Turbo Software at (719) 260-6641.
	
	Byte magazine also has an in-house tool called KILLPROG. This program uses a hot
	key sequence that checks for a safe time to use MS-DOS. It then checks the
	memory arena structure and puts memory back together the way it was before
	KILLPROG was loaded. KILLPROG also includes a command to take itself out of
	memory when the user chooses to do so.
	
	For more information on KILLPROG contact BYTE magazine at (800) 258-5485 and ask
	for the December single month listing of KILLPROG. It costs $10.95 per copy.
	
	The programs included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these programs' performance
	or reliability.
	
	REFERENCES
	==========
	
	  "Microsoft MS-DOS Programmer's Reference Version 5," Microsoft Press, 1988
	
	  "The MS-DOS Encyclopedia," Microsoft Press, 1991
	
	
	Additional query words: 6.22 3.0 3.00 3.1 3.10 3.22 3.3 3.30 3.3a 3.30a 4.0 4.00 4.0a 4.00a 4.01 4.01a 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
