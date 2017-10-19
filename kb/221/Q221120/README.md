---
layout: page
title: "Q221120: Command Line Switches Supported by the Y2K Update"
permalink: /kb/221/Q221120/
---

## Q221120: Command Line Switches Supported by the Y2K Update

	Article: Q221120
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Y2K Update (Y2KUPD) includes the fix discussed in the following article in
	the Microsoft Knowledge Base:
	
	  Q218877 MFC40.DLL Causes Programs to Display Wrong Date after 01/01/2000
	
	MORE INFORMATION
	================
	
	This update has been posted to the following Internet location as Y2kupd.exe
	(x86) and Y2kupdax.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP4/Y2KUPD/
	
	The Y2K Update supports the following command line switches:
	
	NOTE: You can view these switches by typing Y2KUPD /? at a command prompt.
	
	Command line options:
	
	  /Q -- Quiet modes for package.
	  /T:<full path> -- Specifies temporary working folder.
	  /C -- Extract files only to the folder when used also with /T.
	  /C:<Cmd> -- Override Install Command defined by author.
	
	The following switch is also available with Y2KUPD:
	
	  /q:a /r:n -- Silent install
	
	For year 2000 information regarding Microsoft products:
	
	- Call 1-888-MSFT-Y2K
	
	- Contact your local subsidiary
	
	Additional query words: 4.00 y2k year2000 mfcinst.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
