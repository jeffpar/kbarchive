---
layout: page
title: "Q103109: Changes to Performance Monitor After Installing SQL Server"
permalink: /kb/103/Q103109/
---

## Q103109: Changes to Performance Monitor After Installing SQL Server

{% raw %}

	Article: Q103109
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After installing SQL Server for Windows NT, additional object and counter
	choices are available in the Windows NT Performance Monitor. The additional
	items are:
	
	- SQLServer
	
	- SQLServer-Locks
	
	- SQLServer-Log
	
	- SQLServer-Users
	
	Each of these four objects has multiple counters that can be selected for
	monitoring.
	
	MORE INFORMATION
	================
	
	The objects and counters for which Performance Monitor provides monitoring can
	be found in the Registry under the following subkey:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\ Perflib\009
	  under the counters string.
	
	When SQL Server for Windows NT is installed, the counters string is appended to
	include the objects and counters associated with SQL Server for Windows NT. The
	last entry in the counters string before installing SQL Server for Windows NT
	is:
	
	  822
	  Pages Input/sec
	
	After installing SQL Server for Windows NT, the last entry in the counters string
	is:
	
	  916
	  Log Space Used(%)
	
	Also changed in the Perflib subkey are the values for "LastCounter" and
	"LastHelp," which are equal to the hexadecimal value of the last entry of the
	"Counters" and "Help" strings, respectively, under the 009 subkey.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
