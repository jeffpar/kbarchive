---
layout: page
title: "Q246758: How to Monitor a Remote Computer Without Logging On to It"
permalink: /kb/246/Q246758/
---

## Q246758: How to Monitor a Remote Computer Without Logging On to It

	Article: Q246758
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use Performance Monitor and the Datalog.exe file
	that is included with Microsoft Windows NT 4.0 Resource Kit to log data and
	generate alerts on a remote computer without having to log on to it.
	
	MORE INFORMATION
	================
	
	To log data and generate alerts on a remote computer without having to log on to
	it, follow these steps:
	
	NOTE: In the following steps, replace <remotecomputer> with the name of the
	computer that you want to monitor.
	
	1. Install the Windows NT 4.0 Resource Kit on the remote computer.
	
	2. At the local computer, use Windows NT Performance Monitor (Perfmon.exe) to
	  create a workspace file:
	
	  a. Start Performance Monitor, and then click Log on the View menu.
	
	  b. Add the relevant counters, specifying all objects you want to log and the
	     alerts you want to generate.
	
	  c. On the Options menu, click Log.
	
	  d. In the File Name box, specify a name for the log file using the .log
	     extension.
	
	  e. Click one of the logging interval options, and then click Save to save the
	     logging options.
	
	  f. On the File menu, click Save Workspace.
	
	  g. In the File Name box, type a workspace file name using the .pmw extension,
	     and then click Save.
	
	  h. Quit Performance Monitor.
	
	3. Copy both the workspace file you just created and the Datalog.exe file
	  included with the Windows NT 4.0 Resource Kit to the %SystemRoot%\System32
	  folder on the remote computer.
	
	4. At the local computer, set up the Data Logging service for the remote
	  computer:
	
	  a. At the command prompt, type the following command, and then press ENTER:
	
	  monitor \\remotecomputer setup
	
	     NOTE: This command registers the service with Windows NT Server 4.0. You
	     need to run the command only once for each computer you want to monitor.
	     If you receive the following error message
	
	  Failed to create Service
	
	     it means that you have already run the command once.
	
	  b. To use the workspace file for logging, type the following command, and
	     then press ENTER:
	
	  monitor \\remotecomputer filename
	
	     where filename is the name of the workspace file you copied to the remote
	     computer.
	
	5. To start the monitoring process, type the following command, and then press
	  ENTER:
	
	  monitor \\remotecomputer start
	
	6. To stop the monitoring process, type the following command, and then press
	  ENTER:
	
	  monitor \\remotecomputer stop
	
	  After you stop the monitoring process, you can view the log file in
	  Performance Monitor. For instructions about how to do this, see Help in
	  Performance Monitor.
	
	  Also, you can use the Schedule service and the AT command to schedule
	  monitoring to occur at a set time. For example, if a server slows down
	  noticeably between 2:40 A.M. and 2:50 A.M. every weeknight, you can log the
	  data for that period without being physically present by typing the following
	  AT commands:
	
	  at \\remotecomputer 2:30 /every:m,t,w,th,f monitor start
	  at \\remotecomputer 3:00 /every:m,t,w,th,f monitor stop
	
	  If you want to be reminded about the log, type the following command, and then
	  press ENTER:
	
	  at \\remotecomputer 3:00 /every:f net send yourusername 'The Monitor is
	  stopped. The log contains data for this week!'
	
	Additional query words: bottleneck perfmon.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
