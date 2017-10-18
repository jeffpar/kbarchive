---
layout: page
title: "Q229351: SP5 Includes an Updated Version of the Streaming SIMD Driver"
permalink: kb/229/Q229351/
---

## Q229351: SP5 Includes an Updated Version of the Streaming SIMD Driver

	Article: Q229351
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbWinNT400sp5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Service Pack 5 (SP5) includes an updated Streaming SIMD
	Extensions driver. The Streaming SIMD (Single Instruction Multiple
	Data)Extensions driver provides transparent, user-mode support for saving and
	restoring the Streaming SIMD Extensions register state in Windows NT 4.0 SP5.
	This driver enables programs to use the extended register set required by some
	of the Streaming SIMD Extensions. The driver provides support for all Intel
	Architecture processor families that support the Streaming SIMD Extensions. The
	Streaming SIMD Extensions driver runs on personal computers that are based on
	Intel Architecture processors supporting the Streaming SIMD Extensions and run
	Windows NT 4.0 SP5.
	
	MORE INFORMATION
	================
	
	The Streaming SIMD Extensions driver provides error-related information in
	Windows NT Event Viewer. This section contains the error message descriptions in
	the event log and the details needed to understand the error message and take
	corrective action.
	
	Error Message Description
	-------------------------
	
	- The driver did not enable Streaming SIMD Extensions support as floating point
	  emulation is enabled.
	
	  The Streaming SIMD Extensions driver does not enable Streaming SIMD Extensions
	  support in the operating system if floating-point emulation has been enabled.
	  To turn off floating-point emulation in Windows NT 4.0 SP5, run the "pentnt
	  -o" (without the quotation marks) command and then reboot the computer.
	
	- Not all processors in the system support the Streaming SIMD Extensions.
	
	  The Streaming SIMD Extensions driver did not enable Streaming SIMD Extensions
	  support in the operating system because all processors in the computer do not
	  support Streaming SIMD Extensions.
	
	- The driver was unable to allocate memory.
	
	  The Streaming SIMD Extensions driver was unable to allocate required memory
	  and did not enable Streaming SIMD Extensions support in the operating system.
	
	- The driver failed to register required notify routines.
	
	  The Streaming SIMD Extensions driver did not enable Streaming SIMD Extensions
	  support in the operating system because it could not register required
	  routines.
	
	- The driver failed to hook required handler.
	
	  The Streaming SIMD Extensions driver did not enable Streaming SIMD Extensions
	  support in the operating system because of an internal error.
	
	For information about obtaining Windows NT 4.0 SP5, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information about SIMD, go to:
	http://support.intel.com/support/processors/pentiumiii/ntdriver.htm
	
	NOTE: What are Intel Streaming SIMD Extensions?
	
	Streaming SIMD Extensions is a new set of instructions that will be supported by
	future Intel processors beginning with the Pentium III processor. Single
	Instruction Multiple Data (SIMD) extensions significantly accelerate performance
	of 3D graphics. Besides 3D graphics improvements, the extensions also include
	additional integer and cacheability instructions that improve other aspects of
	performance.
	
	Any errors seen on a production server shouldn't be a major problem; simply
	DISABLE the INTLFXSR service and reboot.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
