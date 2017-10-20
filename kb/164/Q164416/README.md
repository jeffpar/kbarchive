---
layout: page
title: "Q164416: STOP 0X0000000A in Afd.sys on Multiprocessor Systems"
permalink: /kb/164/Q164416/
---

## Q164416: STOP 0X0000000A in Afd.sys on Multiprocessor Systems

{% raw %}

	Article: Q164416
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A multiprocessor computer running Windows NT and using TCP/IP protocol may give
	the following STOP error message when an application tries to close a socket:
	
	  Stop 0X0000000A(0x0000000a,0x00000028,0x00000002,0xf24cc2be)
	
	NOTE: The fourth parameter within parenthesis is computer-specific, and will most
	likely vary from computer to computer.
	
	CAUSE
	=====
	
	The locking mechanisms used in the ancillary function driver (AFD) are
	insufficient, resulting in one thread of execution canceling the I/O request
	packet (IRP) that was used by another.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. With the hotfix, the
	AFD driver has been modified to ensure that access to I/O request packet under
	the above-described conditions is properly synchronized.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0.
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodnt mp ntstop 0xa tcpip winsock 0x0a
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
