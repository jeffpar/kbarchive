---
layout: page
title: "Q239931: System Crashes When Unprivileged User Accesses Privileged IOCTL"
permalink: kb/239/Q239931/
---

## Q239931: System Crashes When Unprivileged User Accesses Privileged IOCTL

	Article: Q239931
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user without the proper security privileges gains access to an
	Input/Output Control (IOCTL) with high security priveleges either by opening the
	device with trailing characters, using a relative open, or by obtaining the
	transport handle from the Windows Sockets Support driver (Afd.sys), the computer
	may stop responding (hang) and you may receive a STOP error message on a blue
	screen similar to the message listed below:
	
	  STOP 0X0000001E: KMODE_EXCEPTION_NOT_HANDLED
	
	CAUSE
	=====
	
	This behavior occurs because any access to an IOCTL needs to be available for
	users without the proper security privileges.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	An IOCTL is a custom class of Input/Output Request Packets (IRP) available to
	User mode. Each Windows Driver Model (WDM) class driver has a set of IOCTLs that
	it uses to communicate with programs. The IOCTLs give the class driver
	information about intended usage by programs. The class driver performs all
	IOCTL parameter validation.
	
	Additional query words: TCP/IP
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
