---
layout: page
title: "Q164878: E21xx Cabletron Network Cards Do Not Work Properly in MPS"
permalink: /kb/164/Q164878/
---

## Q164878: E21xx Cabletron Network Cards Do Not Work Properly in MPS

	Article: Q164878
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Cabletron E21xx series network adapters do not work in multiprocessor
	computers, including multiprocessor capable computers.
	
	In the event log, you will get the entry:
	
	  Event ID: 7000
	     Source: Service control manager
	     Type: Error
	     Description:  A Device attached to the system is not functioning.
	
	CAUSE
	=====
	
	The driver does not work properly with a multiprocessor capable computer as
	stated in the Help file on the Windows NT Workstation or Server CD-ROM in the
	Drvlib\Netcard\X86\Cte21 folder.
	
	RESOLUTION
	==========
	
	Use a network card that will work in a multiprocessor capable computer. Or
	contact Cabletron for a possible fix.
	
	
	MORE INFORMATION
	================
	
	Cabletron is a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this companies product's performance or reliability.
	
	Additional query words: NIC netcard fibernet
	======================================================================
	Keywords          : kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
