---
layout: page
title: "Q262492: STOP 0x0000000a or STOP 0x00000050 Error with HP Printer Drivers"
permalink: /kb/262/Q262492/
---

## Q262492: STOP 0x0000000a or STOP 0x00000050 Error with HP Printer Drivers

{% raw %}

	Article: Q262492
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsgkbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Hewlett-Packard (HP) printer drivers, you may receive a "STOP
	0x0000000a" or a "STOP 0x00000050" error message on a blue screen.
	
	NOTE: This behavior has been known to occur with HP 4500, HP 8000, and HP 8001
	drivers.
	
	CAUSE
	=====
	
	This behavior occurs because the drivers are incompatible with Windows NT 4.0.
	
	RESOLUTION
	==========
	
	To resolve this behavior, uninstall or update your HP printer drivers. For
	additional information, contact HP support.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	To verify that you are experiencing the problem described in this article, use
	the following steps:
	
	1. Copy the Pstat.exe tool that is included with the Microsoft Windows NT 4.0
	  Resource Kit on to your server.
	
	  NOTE: You do not need to install the resource kit; simply copy the Pstat.exe
	  executable file to an easy command-line location.
	
	2. Run Pstat.exe using the following command:
	
	  pstat > pstat.txt
	
	3. From the same command line, run the following command:
	
	  notepad pstat.txt
	
	4. Scroll to the bottom of the text file that is opened and view the list of
	  drivers. This list displays the drivers that Windows NT loaded into the stack
	  at run time, and the memory location where the files reside.
	
	5. At the very bottom of the list, an Ntdll.dll file entry similar to the
	  following example is displayed:
	
	  NTDLL.DLL 77f60000  237568   20480   0 Thu Oct 08 19:37:22 1998
	
	NOTE: If you see an entry similar to the following example, a "phantom" Ntdll.dll
	file exists and is most likely the cause of the error messages:
	
	  HPBFAF2.DLL f08b1000 0 0 0
	  ntdll.dll f0855000  237568   20480   0 Thu Oct 08 19:37:22 1998
	  NTDLL.DLL 77f60000  237568   20480   0 Thu Oct 08 19:37:22 1998
	
	The phantom Ntdll.dll file is always displayed in lower case and its memory load
	location always begins with 0xf. The true Ntdll.dll file is always displayed in
	upper case and is always loaded at a memory address of 77f60000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbfaq
	Component         : ResourceKit Drivers,Sys Printing
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbprb kbinfo
	
	=============================================================================
	

{% endraw %}
