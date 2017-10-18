---
layout: page
title: "Q129987: HPMON Stops Working After Upgrading Multiple-NIC Computers"
permalink: kb/129/Q129987/
---

## Q129987: HPMON Stops Working After Upgrading Multiple-NIC Computers

	Article: Q129987
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you reinstall or upgrade Windows NT on a computer with multiple network
	interface cards (NICs), the HPMON print monitor cannot send print jobs to
	previously defined network printers.
	
	CAUSE
	=====
	
	This happens because HPMON identifies your computer's NICs by number, and the
	installation or upgrade process can change these numbers.
	
	When you install, reinstall, or upgrade Windows NT, a number is assigned to each
	NIC in your computer. The one with the lowest I/O base address is assigned the
	number 0, the one with the next lowest I/O base address is assigned the number
	1, and so on. However, if you later add a new NIC to the system, it is assigned
	the next unused numbers, regardless of its I/O base addresses. Then, when you
	reinstall or upgrade, the numbering is reassigned by I/O base address.
	
	As an example, say you install Windows NT on a computer with two adapters, NIC-A
	and NIC-B, with I/O base addresses of 368h and 360h, respectively. NIC-B becomes
	adapter 0, and NIC-A becomes adapter 1. If you later install another adapter,
	NIC-C, with I/O base address 358h, it becomes adapter 2. Then you reinstall or
	upgrade Windows NT and the adapter numbers are reassigned. NIC-C becomes adapter
	0, NIC-B becomes adapter 1, and NIC-A becomes adapter 2.
	
	There is no way for Setup to identify services that rely on NIC numbering. These
	services cannot automatically adjust to the reassigned numbers and do not
	function correctly after an upgrade or reinstall.
	
	The HPMON print monitor relies on the DLC protocol to send print jobs to network
	printers equipped with HP JetDirect adapters. DLC may be bound to multiple NICs,
	but HPMON only uses one of the DLC-bound NICs. It stores that NIC's number in
	the registry, in the HKEY_LOCAL_MACHINE subtree in this key:
	
	  \SYSTEM
	    \CurrentControlSet
	      \Control
	        \Print
	          \Monitors
	            \Hewlett-Packard Network Port
	              \Options
	                \Adapter
	
	When you upgrade the operating system and the NIC numbering changes, the value of
	this registry key is left incorrect. HPMON attempts to locate its
	JetDirect-equipped network printers using the wrong NIC. When this happens, each
	printer in Print Manager that uses an HPMON port has a status of "Unavailable,"
	and jobs sent to these printers do not print.
	
	WORKAROUND
	==========
	
	There are two ways to work around this problem:
	
	- If the computer has only two adapters, then you can reconfigure HPMON through
	  Print Manager. Choose Properties from the Printer menu, then choose the
	  Settings button, then the Options button, and change the Adapter value from
	  Primary to Secondary, or from Secondary to Primary.
	
	- If the computer has more than two adapters, you can manually alter the
	  registry value mentioned above. Change the value to the adapter number of the
	  correct network adapter card.
	
	  WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of the
	  Registry Editor can be solved. Use this tool at your own risk.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
