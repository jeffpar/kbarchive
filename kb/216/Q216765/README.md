---
layout: page
title: "Q216765: TCP/IP Experiences STOP 0x7F Under Heavy Load"
permalink: kb/216/Q216765/
---

## Q216765: TCP/IP Experiences STOP 0x7F Under Heavy Load

	Article: Q216765
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under high load, a server may experience the following STOP error message:
	
	  0x7F (UNEXPECTED_KERNEL_MODE_TRAP): 0x0000007f (0x00000008, 0x00000000,
	  0x00000000, 0x00000000)
	
	The first parameter, 0x08, indicates that this is a double-fault.
	
	CAUSE
	=====
	
	For deferred processing, TCP/IP is calling a function recursively. Under high
	load, this recursion can cause a stack overflow.
	
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem immediately, download the fix as described below. For a
	complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File Name     Platform
	  -------------------------------------------------------------
	  02/04/99  09:52p               124,080 Tcpip.sys     (x86)
	  02/04/99  09:54p               217,328 Tcpip.sys     (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.51.
	
	Additional query words: 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
