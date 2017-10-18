---
layout: page
title: "Q174944: How to Use the /debug Option for Cluster Service"
permalink: kb/174/Q174944/
---

## Q174944: How to Use the /debug Option for Cluster Service

	Article: Q174944
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you configure Microsoft Cluster Server to generate a diagnostic log file and
	the Cluster service fails to start, it is possible that the log file may not
	contain any data. If a previous log file existed prior to the attempt to start
	the Cluster service, the old log file may remain.
	
	MORE INFORMATION
	================
	
	If the Cluster service fails to start because of a logon error for the service
	account, or another system-related error, the service may not have a chance to
	run. As a result, a new log file may not be created.
	
	To run the Cluster service temporarily from a command prompt, use the following
	procedure:
	
	1. Open a new command prompt window.
	
	2. Change to the cluster directory on the local system. Usually, this is
	  %SystemRoot%\cluster.
	
	3. Type "CLUSSVC /debug" (without the quotation marks)at the command prompt. The
	  cluster service will send output to the window similar to what would normally
	  be seen in the diagnostic log file. You may also capture this information in
	  a file by using the following command syntax instead:
	
	  CLUSSVC /debug > c:\debug.log
	
	4. At the point that you are satisfied that the Cluster service is running
	  properly, you may use CTRL+C from the keyboard to stop the service.
	
	NOTE: This method runs the service outside of the normal environment given by the
	Service Control Manager. To use this procedure, you must be logged on with
	administrative rights. Do not use the -debug option for normal use or for any
	length of time. The service does not run as efficiently with the option set;
	hence, this option is intended for temporary diagnostic use only.
	
	Additional query words: cluster debug MSCS
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
