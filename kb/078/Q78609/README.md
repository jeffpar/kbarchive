---
layout: page
title: "Q78609: Troubleshooting HIMEM.SYS"
permalink: /kb/078/Q78609/
---

## Q78609: Troubleshooting HIMEM.SYS

	Article: Q78609
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to troubleshoot HIMEM.SYS.
	
	MORE INFORMATION
	================
	
	HIMEM.SYS Auto-detection Strategy
	---------------------------------
	
	Selection of A20 handlers is based on an auto-detection strategy. HIMEM runs
	through all of its auto-detection schemes trying to find a match. If found, the
	particular handler is installed. If no match is found, the default A20 handler
	is installed. There are a number of different auto-detection routines and these
	are done in a certain order. Sometimes, due to the non-standard nature of the
	machine, the auto-detection fails and the default handler is installed. However,
	the default handler does not work too well. In this case, the user has to give
	an explicit override and ask HIMEM to install a particular A20 handler. In other
	cases, HIMEM may identify a machine incorrectly and install the wrong A20
	handler. Basically, the machine identification strategies are not, and cannot
	be, foolproof. Troubleshooting this kind of problem can be done only by trial
	and error.
	
	HIMEM.SYS and /INT15=xxxx Switch
	--------------------------------
	
	When HIMEM starts, it grabs all of the INT 15h memory present in the system. It
	then provides extended memory to different applications via the XMS interface.
	However, there are some old applications that do not understand XMS and need
	some INT 15h memory to be present. To support these applications, HIMEM.SYS
	provides a /INT15=xxxx switch on its command line. Using this, you can ask
	HIMEM.SYS to leave xxxx Kbytes of extended memory on the INT 15h interface so
	that applications can use INT 15h to allocate extended memory. For example,
	Pharlap DOS Extender needs this switch. The use of this switch is documented in
	the version 5.0 "Microsoft MS-DOS User's Guide and Reference."
	
	Additional query words: tshoot 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
