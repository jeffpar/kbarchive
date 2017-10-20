---
layout: page
title: "Q101753: PC DirSync: When to Use the Time Zone Option with Dir-Sync"
permalink: /kb/101/Q101753/
---

## Q101753: PC DirSync: When to Use the Time Zone Option with Dir-Sync

{% raw %}

	Article: Q101753
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Time Zone (TZ) variable is an environment variable that ADMIN.EXE and
	DISPATCH.EXE use to adjust the directory synchronization (Dir-Sync) process
	times.
	
	The only time you may need to use the TZ variable is when your remote postoffice
	administrators in different time zones schedule their own postoffices' Dir-Sync
	activity, but expect DISPATCH.EXE to be run centrally (in one time zone). In
	other words, if you schedule Dir-Sync with an ADMIN.EXE program located in Tokyo
	but run DISPATCH.EXE from Los Angeles, you then need the Time Zone variable on
	the computer running ADMIN.EXE in Tokyo and the computers running ADMIN.EXE and
	DISPATCH.EXE in Los Angeles.
	
	MORE INFORMATION
	================
	
	There are four possible configurations of ADMIN.EXE and DISPATCH.EXE that can be
	used:
	
	- Both ADMIN.EXE and DISPATCH.EXE are run from one location and go to
	  postoffices in one time zone. TZ is not needed in this scenario.
	
	- Both ADMIN.EXE and DISPATCH.EXE are run from one location and go to
	  postoffices in multiple time zones. TZ is not needed in this scenario either.
	
	- ADMIN.EXE is run from multiple time zones, and DISPATCH.EXE is run from one
	  location. This scenario needs the TZ variable set for each computer running
	  ADMIN.EXE, and the computer running DISPATCH.EXE.
	
	- ADMIN.EXE and DISPATCH.EXE are run from multiple locations in multiple time
	  zones. TZ needs to be set on all computers running ADMIN.EXE and
	  DISPATCH.EXE.
	
	When the TZ parameter is needed, use the MS-DOS (or OS/2) SET command to set the
	TZ environment variable on the workstation(s) running DISPATCH.EXE and all
	workstations running ADMIN.EXE. Because ADMIN.EXE is used to configure the
	process times for Dir-Sync, it must be time- zone aware and this is done via the
	TZ environment variable.
	
	The TZ variable is of the form xxxtttyyy, where:
	
	  xxx is the time zone code (any three characters will suffice).
	
	  ttt is the time difference between Greenwich Time and local time. Times
	      west of Greenwich are positive, times east can be negative.
	
	  yyy is a placeholder to tell DISPATCH.EXE that Daylight Savings Time
	      (U.S. only) is in effect.
	
	Example
	-------
	
	For example, to use the Pacific Time Zone TZ variable, enter the following:
	
	  set tz=pst8
	
	To set Sydney, Australia time, enter either:
	
	  set tz = ast-10
	
	-or-
	
	  set tz=ast14
	
	Either method is acceptable. The difference is that the negative time is
	subtracted by DISPATCH.EXE, while the positive time is added when determining
	the time DISPATCH.EXE will run the Dir-Sync process on that postoffice.
	
	If the TZ environment variable is not set, the default time zone used will be
	pst8pdt.
	
	Alternatively, the times for Dispatch to perform Dir-Sync can be manually
	adjusted to compensate for the differences in time zones between the
	postoffices.
	
	
	Additional query words: 3.00 3.20 dirsync
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
