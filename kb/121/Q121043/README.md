---
layout: page
title: "Q121043: STOP screen when installing Windows NT 3.5 on 386 SMP machine"
permalink: /kb/121/Q121043/
---

## Q121043: STOP screen when installing Windows NT 3.5 on 386 SMP machine

	Article: Q121043
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	When running Windows NT 3.5 setup on a 386 multiprocessor machine you
	receive this a STOP message when rebooting from text setup to GUI setup:
	
	  Stop 0x0000003E 0x00000000 0x00000000 0x00000000 0x00000000
	  MultiProcessor_Configuration_Not_Supported
	
	This is issued because Windows NT 3.5 no longer supports 386 multiprocessor
	machines. The only machine that was supported by Windows NT 3.1 and is
	now not supported by Windows NT 3.5 is the Compaq Systempro Dual 386/25.
	It has been removed from the Windows NT 3.5 Hardware Compatibility List.
	
	Additional query words: prodnt HCL 0x3E kb3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
