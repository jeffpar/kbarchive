---
layout: page
title: "Q175658: Gathering Information for Troubleshooting Performance Issues"
permalink: kb/175/Q175658/
---

## Q175658: Gathering Information for Troubleshooting Performance Issues

	Article: Q175658
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	
	SUMMARY
	=======
	
	This article explains how to gather information so that Microsoft Support
	Professionals can troubleshoot performance problems on a computer running
	Windows NT. Please read all steps as you will be asked to provide information
	from several tools when contacting a support professional for assistance.
	
	MORE INFORMATION
	================
	
	The basic tool used for troubleshooting performance issues is Performance
	Monitor. Follow the steps below to prepare for collecting performance
	information:
	
	Prior to Creating a Performance Monitor Log
	-------------------------------------------
	
	1. Turn off screen savers permanently.
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     Display.
	
	  b. Click the Screen Saver tab, click None, and then click OK.
	
	2. Disable all non-essential services in the Services tool in Control Panel.
	
	3. For all possible disk issues, enable Diskperf.
	
	  a. Click Start, point to Programs, and then click MS-DOS Command Prompt.
	
	  b. Type the command "diskperf -y" (without the quotation marks) to enable
	     disk counters.
	
	     NOTE: Do not use diskperf -YE unless instructed to do so.
	
	4. Document Lanman Server parameters.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  a. Run Registry Editor (Regedt32.exe).
	
	  b. Go to the following keys in the registry:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SessionManager
	     \Memory Management
	     <BR/><BR/>
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanServer
	     \Parameters
	
	     NOTE: The above registry keys are one path; they have been wrapped for
	     readability.
	
	  c. Write down all values on the right-hand side that are not equal to zero.
	
	  -or-
	
	     On the Registry menu, click "Save Subtree As" and then change the file type
	     to Text File and give the file a name.
	
	     NOTE: Do not save the file as a *.REG file.
	
	5. If instructed to do so by the support professional, install the SNMP service
	  and Network Monitor Agent and Tools. This procedure will require the Windows
	  NT compact disc or an appropriate share path.
	
	  To install on Windows NT 3.51
	
	  a. In the Main group, double-click Control Panel, and then double-click
	     Network.
	
	  b. Click Add Software, select SNMP, and then click OK.
	
	  c. Repeat the previous step and select Network Monitor Agent and Tools. Click
	     OK when you receive a prompt to restart the computer.
	
	  To install on Windows NT 4.0
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     Network.
	
	  b. Click the Services tab.
	
	  c. Click Add.
	
	  d. From the list of Network Software, select SNMP and then click OK.
	
	  e. Repeat the previous step and select "Network Monitor Agent and Tools".
	
	  f. Click No when prompted to restart the computer.
	
	  g. If there are any service packs installed, reapply the service pack.
	
	  h. Click OK when prompted to restart the computer. NOTE: These services
	     install Network Interface, Network Segment, and TCP/IP counters in
	     Performance Monitor.
	
	Creating the Performance Monitor Log
	------------------------------------
	
	Run Performance Monitor from the following location:
	
	- Click Start, point to Program, and then click Administrative Tools.
	
	For specific details on creating the Performance Monitor log, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q150934 How to Create a Performance Monitor Log for NT Troubleshooting
	
	In cases where the User Interface (UI) of the server in question is hanging or
	not responding, run Performance Monitor from another computer running Windows NT
	Server or Workstation.
	
	The counters recommended in the article above will change depending on the
	problem that you are troubleshooting. See the "Recommended Performance Objects"
	section below or consult the Microsoft Support Engineer for suggested objects to
	monitor.
	
	Recommended Performance Objects
	-------------------------------
	
	If you are troubleshooting a performance issue or an issue that looks like a
	memory leak, the objects that Performance Monitor should log include, but are
	not limited to, the following:
	
	For memory leaks:
	
	  Cache
	  Memory
	  Objects
	  Paging file
	  Process
	  Processor
	  System
	  Terminal Services (if a Terminal Server)
	
	For all other resource issues, add additional counters:
	
	  Logical disk
	  NBT Connections
	  Network interface
	  Physical disk
	  Redirector
	  Server
	  Server work queues
	  Thread (do NOT capture if a terminal server)
	  All Terminal Server counters (if a Terminal Server)
	  All Protocol counters bound to network adapters
	
	In addition, the smaller the update interval, the larger the log file, so check
	to make certain there is sufficient disk space available on the computer running
	Performance Monitor.
	
	Allow Performance Monitor to run a minimum of three days unless you have been
	instructed otherwise.
	
	Do not log off of the computer where you are running Performance Monitor as this
	will close out Performance Monitor. Minimize Performance Monitor if preferred
	and if needed lock the screen on this computer.
	
	After Creating the Performance Monitor Log
	------------------------------------------
	
	1. Create a Windows NT Diagnostics Report.
	
	  a. Click Start, point to Programs, click Administrative Tools, and then
	     double-click Windows NT Diagnostics.
	
	  b. On the File menu, click Save Report.
	
	  c. Click All Tab in the Scope Set, click Complete in the Detail Level, click
	     File for Destination, and then click OK.
	
	2. Save the System and Application Event Logs.
	
	  a. Click Start, point to Programs, click Administrative Tools, and then
	     double-click Event Viewer.
	
	  b. On the Log menu, click System. If System is already selected, click Save
	     As. Save the file as System.evt.
	
	  c. On the Log menu, click Application.
	
	  d. On the Log menu, click Save As. Save the file as Application.evt.
	
	3. Zip the following files into one file using a compression tool.
	
	   - Registry file or the written information in a text file.
	
	   - Performance Monitor log (the .log file, not the *.pml file).
	
	   - Windows NT diagnostics report.
	
	   - Event logs: System.evt and Application.evt.
	
	Contact the Microsoft Support Professional working with you for additional
	information on sending the zipped file to the engineer.
	
	
	Additional query words: performance tuning memory leak utilization Perfmon setup
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbhowto
	
	=============================================================================
	
