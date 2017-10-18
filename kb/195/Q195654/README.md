---
layout: page
title: "Q195654: Methods for Condensing a Performance Monitor Log File"
permalink: kb/195/Q195654/
---

## Q195654: Methods for Condensing a Performance Monitor Log File

	Article: Q195654
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be necessary under some circumstances to condense a Performance Monitor
	log file. This article discusses various ways to accomplish this.
	
	MORE INFORMATION
	================
	
	There are four ways to condense a Performance Monitor log file:
	
	- Use a file compression program, such as WinZip, to compress the log file.
	  Performance Monitor log files compress very well using such utilities. This
	  method is useful when you need to retain the entire contents of the log file.
	
	- Relog the log file after resizing the time window. This method is useful when
	  you are interested in only a specific time frame captured within the log
	  file. An example of this is when you maintain weekly Performance Monitor
	  logs, but are interested in reviewing only one of the days from one of the
	  weekly logs. See "Relogging Input Log Files" in Performance Monitor Help for
	  more information on relogging a log file with a modified time window.
	
	- Relog the log file after limiting the number of objects to be logged. This
	  method is useful when you are interested in only a specific subset of objects
	  collected in a log. An example of this is when you maintain regular complete
	  logs (all objects included) but are interested in reviewing only the memory
	  usage from a particular log. See "Relogging Input Log Files" in Performance
	  Monitor Help for more information on relogging a log file with a reduced
	  object set.
	
	- Relog the log file after increasing the update interval. This method is
	  useful when you are interested in overall trends over the log file time
	  frame. An example of this is when you maintain regular complete logs at ten
	  minute update intervals, but wish to see only hourly samples over a
	  particular log's time frame. See "Relogging Input Log Files" in Performance
	  Monitor Help for more information on relogging a log file. After you have set
	  up to relog a log file, select Log from the Options menu and then increase
	  the number found in the Periodic Update Interval field.
	
	Additional query words: perfmon compress compact reduce reducing reduction shrink make smaller
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
