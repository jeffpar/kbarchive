---
layout: page
title: "Q150934: How to Create a Performance Monitor Log for NT Troubleshooting"
permalink: /kb/150/Q150934/
---

## Q150934: How to Create a Performance Monitor Log for NT Troubleshooting

	Article: Q150934
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft  Windows 2000 version of this article, see Q248345.
	
	SUMMARY
	=======
	
	This article explains how to create a Performance Monitor log so that engineers
	can use it to troubleshoot performance problems on a computer running Windows
	NT.
	
	MORE INFORMATION
	================
	
	Creating the Performance Monitor log:
	
	1. On the View menu, click Log.
	
	2. On the Edit menu, click "Add To Log".
	
	3. In the Computer field, specify the name of the local computer or a remote
	  computer you want to get a log of. In Objects, add the counters that you want
	  Performance Monitor to log. These counters will change depending on the issue
	  that you are troubleshooting.
	
	4. Click to highlight the objects that you wish to monitor and then click Add.
	
	5. Under Options click Log.
	
	6. Under File Name, name the log.
	
	7. In Update Time, set the interval according to how long you want to run the
	  Performance Monitor log. If you want to run the log for an extended period of
	  time, you will want to set this update time to an interval much higher than
	  15 seconds or the log will be very large. If you are going to run the log for
	  only an hour, then 15 seconds will be fine.
	
	8. Click Start Log. The icon will change to a Stop Log icon once the log is
	  started.
	
	When you are ready to stop monitoring the selected objects and examine your log
	file, perform the following steps:
	
	1. Under Options click Log and then click Stop Log.
	
	2. In the Options menu click "Data from", click Log File, and then click to
	  select the radio button beside the perfmon.log field and locate your log
	  file.
	
	  NOTE: You cannot open a log file simply by clicking File and then clicking
	  Open.
	
	3. After you open the log file, add the objects and counters that the log has
	  monitored. Do this for each view needed, otherwise the log file's data will
	  not be available.
	
	If you are troubleshooting a performance issue or an issue that looks like a
	memory leak, the objects that Performance Monitor should log include but are not
	limited to the following items.
	
	Memory resource issues:
	
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
	
	NOTES
	
	- Disk counters require that you run "diskperf -y" (without the quotation
	  marks) from the command console and then restart the computer.
	
	- We usually do not capture threads on a terminal server because this counter
	  can consume 80% of a data file.
	
	- You have several options if the computer that is running Perfmon is restarted
	  or goes down while the log is going. You can start a new log, or, if you
	  specify the name of an existing log file, the new data is appended to the end
	  of the log file. It is important to let the engineer know the log was
	  restarted. However, if you are monitoring remotely and the target computer
	  goes down, this does not apply.
	
	- If there are processes that start after the log was started, they will not
	  show up in the beginning of the log. To view different periods in the log,
	  click Edit, click Time Window, and then use the sliding scale.
	
	- If the user logs off, the performance monitor log will stop. You can set up
	  Performance logging as a service, but it is easiest to run Performance
	  Monitor remotely from another Windows NT system.
	
	For additional information about troubleshooting performance issues, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q175658 Gathering Information for Troubleshooting Performance
	
	
	
	Additional query words: perfmon tshoot win2000hotnet
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
