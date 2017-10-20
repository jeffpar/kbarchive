---
layout: page
title: "Q101149: MS-DOS Upgrade 720K Disk Set Does Not Have SMARTMON.&#42; Files"
permalink: /kb/101/Q101149/
---

## Q101149: MS-DOS Upgrade 720K Disk Set Does Not Have SMARTMON.&#42; Files

{% raw %}

	Article: Q101149
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft MS-DOS 6 and 6.2 Upgrade disk set on 720-kilobyte (K), 3.5- inch
	disks does not include the SMARTDrive Monitor files (SMARTMON.EXE and
	SMARTMON.HLP).
	
	
	If you have access to a computer with a high-density drive, expand SMARTMON.EX_
	and SMARTMON.HL_ from the original MS-DOS Upgrade disk set you received in the
	product box to a 720K low-density disk. For example, type the following at the
	MS-DOS command prompt, pressing ENTER after each line:
	
	  " expand a:\smartmon.ex_ b:\dos\smartmon.exe " (without the quotation marks)
	
	  " expand a:\smartmon.hl_ b:\dos\smartmon.hlp " (without the quotation marks)
	
	Then, copy the expanded files from the 720K disk to drive C. For example, type
	"copy a:\smartmon.* c:\dos" (without the quotation marks) at the MS-DOS command
	prompt and then press ENTER.
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	

{% endraw %}
