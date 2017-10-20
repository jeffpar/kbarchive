---
layout: page
title: "Q82793: The SYSTEM.INI TrapTimerPorts= Parameter"
permalink: /kb/082/Q82793/
---

## Q82793: The SYSTEM.INI TrapTimerPorts= Parameter

{% raw %}

	Article: Q82793
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows operating system version 3.1's SYSTEM.INI [386Enh]
	parameter TrapTimerPorts=<boolean> indicates whether or not 386 enhanced
	mode Windows should use the 80386 protection mechanism to trap access to the
	system timer ports.
	
	MORE INFORMATION
	================
	
	If TrapTimerPorts is true (the default and the setting for Windows 3.0), Windows
	will trap the timer ports so it can maintain an accurate time of day. If
	TrapTimerPorts is false, some applications that read or write the system timer
	often may run faster, and Windows may not be able to correct the time.
	
	The TrapTimerPorts switch affects only 386 enhanced mode, and applies to both
	Windows and MS-DOS applications. The switch belongs in the [386Enh] section of
	SYSTEM.INI.
	
	The TrapTimerPorts switch was added to Windows 3.1 to better support applications
	(MS-DOS or Windows applications) that frequently read or write the system timer
	ports.
	
	When 80386 protected mode is enabled, there is considerable overhead
	(instructions executed) when an application (MS-DOS or Windows) tries to read or
	write the system timer ports. For some applications that do this very frequently
	(for example, some game programs), the overhead adds up fast and can slow down
	the application considerably.
	
	In Windows 3.1, this switch was added to allow you to specify that the timer
	ports not be trapped for the virtual machine (VM) that currently has the
	keyboard focus (other VMs without the focus will still be trapped). This allows
	some applications to run faster, and should be particularly good for
	applications that mostly read the timer ports.
	
	The down side (and the reason TrapTimerPorts isn't false by default) is that it's
	much more difficult for Windows to maintain an accurate time of day if an
	application is frequently writing to the system timer ports. Windows tries to
	compensate, and usually does okay, but there may be applications that stop
	Windows from being able to recover.
	
	The SYSTEM.INI's SyncTime switch can sometimes compensate for time drift if
	TrapTimerPorts is false.
	
	REFERENCES
	==========
	
	"Microsoft Windows Resource Kit" for version 3.1, page 215.
	
	Additional query words: 3.10 time clock
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
