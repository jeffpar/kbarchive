---
layout: page
title: "Q167969: Under Windows NT, Win16 Applications Opening MS-DOS Devices Fail"
permalink: kb/167/Q167969/
---

## Q167969: Under Windows NT, Win16 Applications Opening MS-DOS Devices Fail

	Article: Q167969
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, data written to LPT1 from a 16-bit Windows
	application running under Windows NT can corrupt other files. This corruption
	occurs when the application opens any MS-DOS device (as listed by MEM /D; for
	example, LPT1, COM1, CON, and so on) through the _lopen() RTL function and opens
	other data files. When the application writes data out through the LPT1 handle,
	the data is misrouted to one of the other files.
	
	CAUSE
	=====
	
	Some devices are handled internally by NTDOS without calling on the Win32 I/O
	system directly. For example, LPT1 is handled by calling the Windows NT emulated
	BIOS, which in turn uses OUT instructions to feed the data to the emulated LPT1
	port. In this case, WOW mishandles several Interrupt 21 calls, including read
	file and write file, trying to pass these calls to Win32 but using an
	uninitialized bit of memory instead of a valid Win32 file handle. In some cases,
	this uninitialized memory will contain a value that is a valid handle value in
	the WOW process, and the data will be read from or written to that file instead
	of the intended device. In other cases, the Win32 file API fails because the
	handle is invalid.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	MORE INFORMATION
	================
	
	It is highly irregular for a 16-bit Windows application to write to LPT1 through
	MS-DOS; the entire Windows 3.1/Windows 95 GUI will stop responding if the
	printer is slow or out of paper. The correct way would be to use OpenComm() and
	WriteComm(), which perform the write in the background (using an interrupt
	service routine) instead of blocking the computer (or WOW in this case) until
	the write completes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
