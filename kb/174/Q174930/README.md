---
layout: page
title: "Q174930: Stop 0x0000007f When Executing Tasks Through Remotely Possible"
permalink: kb/174/Q174930/
---

## Q174930: Stop 0x0000007f When Executing Tasks Through Remotely Possible

	Article: Q174930
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a computer running Windows NT Server from a computer running
	Windows NT Workstation using Remotely Possible/32 and perform various tasks,
	such as launching Task Manager or Cheyenne ARCserve, the computer running
	Windows NT Server crashes with the following error message:
	
	  Stop 0x0000007F (0x0000000D, 0x00000000, 0x00000000, 0x00000000)
	  UNEXPECTED_KERNEL_MODE_TRAP
	
	CAUSE
	=====
	
	Remotely Possible software has some incompatibility with Floating Point
	Emulation software. If the system board is using the faulty floating point error
	Pentium processor and you have floating point emulation enabled, your system may
	trap.
	
	WORKAROUND
	==========
	
	Disable the floating-point emulation by using the Pentnt.exe utility shipped
	with Windows NT.
	
	
	For more information, please contact Avalan Technology.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this Product's performance
	or reliability.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
