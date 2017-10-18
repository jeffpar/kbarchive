---
layout: page
title: "Q105249: Serial Printers May Print Garbage During Windows NT Startup"
permalink: kb/105/Q105249/
---

## Q105249: Serial Printers May Print Garbage During Windows NT Startup

	Article: Q105249
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a printer is attached to the serial port (COMx) of a system running Windows
	NT, the printer may eject blank pages or print garbage during the startup of
	Windows NT.
	
	CAUSE
	=====
	
	When you start Windows NT, NTDETECT gathers information on the hardware that is
	installed in the system. One of the functions that NTDETECT performs is a search
	for the pointing device (usually a mouse). In the course of this process, data
	is sent to the serial ports. This data may be interpreted by the printer as
	incoming information upon which to act. Depending on the baud rate setting and
	the particular printer attached, this may result in the ejection of printed
	pages with random characters or unprinted pages.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure that the power is off on the printer
	before you start Windows NT. After Windows NT is loaded, then turn the printer
	back on.
	
	You can also specify "/noserialmice:com(n)" on the BOOT.INI file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1 and
	Windows NT Advanced Server version 3.1. This problem has been corrected in the
	latest U.S. Service Pack for Windows NT and Windows NT Advanced Server version
	3.1. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt garbage junk
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
