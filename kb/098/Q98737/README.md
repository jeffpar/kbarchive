---
layout: page
title: "Q98737: Cannot Run MS-DOS Compatibility Box"
permalink: /kb/098/Q98737/
---

## Q98737: Cannot Run MS-DOS Compatibility Box

{% raw %}

	Article: Q98737
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	You cannot run an MS-DOS compatibility box with LAN Manager 2.0, 2.1, 2.1a or
	2.2 when using HPFS386.
	
	It is not anticipated that this will change, because running the MS-DOS box on a
	server is a bad idea for three reasons:
	
	- The MS-DOS program runs in real mode, so if it were to crash, the machine
	  probably would not recover.
	
	- Interrupt switching between real and protected modes in the 80286 model used
	  by OS/2 1.x takes a great deal of time, degrading performance noticeably on
	  an HPFS386 server.
	
	- An MS-DOS program runs in real mode, so it can defeat any and all OS/2
	  security measures. Because HPFS386 supports local security, it cannot allow
	  the MS-DOS box.
	
	The amount of available memory in the MS-DOS 3.x emulation is considerably less
	on the LADDR device driver versions of OS/2 1.x than in previous versions using
	monolithic disk drivers. On OS/2 versions shipped with LAN Manager 2.1 and
	later, the available memory in the MS-DOS box is no larger than about 320K.
	
	Windows NT runs MS-DOS programs in a more secure manner using "Virtual 8086" mode
	on Intel x86 architecture processors and software emulation on other processors.
	This allows you to run MS-DOS programs with minimum risk on the servers. OS/2
	versions 2.x use much of the same approach to crash-resistance.
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	

{% endraw %}
