---
layout: page
title: "Q162775: Access Violation in SPOOLSS when Printing to a Serial Printer"
permalink: kb/162/Q162775/
---

## Q162775: Access Violation in SPOOLSS when Printing to a Serial Printer

	Article: Q162775
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a serial port configuration string greater than 20 characters is specified
	and that serial port is used by an active printer, Localmon.dll generates an
	access violation in Spoolss.exe.
	
	CAUSE
	=====
	
	This problem can only occur if the following Registry Key is directly edited
	using a Registry Editor:
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\ 
	CurrentVersion\Ports\COMx
	
	If a serial port configuration string greater that 20 characters is entered into
	this value it will cause Localmon.dll to generate an access violation.
	
	These keys are normally directly configured using Ports in Control Panel. If this
	application is used, it is not possible to specify a port configuration greater
	than 20 characters. However, it may be necessary to specify a custom port
	configuration for some serial handshaking options, which can require a string
	longer than 20 characters.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt GPF General Protection Fault CPL AV
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
