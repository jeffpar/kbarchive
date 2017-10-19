---
layout: page
title: "Q243059: How to Enable Logging for Process Accounting for IIS 5.0"
permalink: /kb/243/Q243059/
---

## Q243059: How to Enable Logging for Process Accounting for IIS 5.0

	Article: Q243059
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Turning on logging for process accounting can be done for the entire Web server,
	for each individual Web site, or even for virtual directories within a given Web
	site.
	
	To turn on Process Accounting Logging, do the following:
	
	1. Open the Internet Service Manager MMC.
	
	2. Choose Properties of either the Web server or the Web site.
	
	3. Click on the Enable Logging checkbox.
	
	4. Choose Extended Log Format.
	
	5. Click the Properties button for Extended Logs.
	
	6. Check the available Process Accounting entries.
	
	Below is a list of entries that might appear in the IIS extended log and a brief
	explanation of what each entry means.
	
	Process Event - The type of process that triggered the event, either CGI or
	out-of-process application. The type can be CGI, Application, or All.
	
	Process Type - What event was triggered: Site-Stop, Site-Start, Site-Pause,
	Periodic-Log, Interval-Start, Interval-End, Interval-Change, Update,
	Eventlog-Limit, Priority-Limit, Process-Stop-Limit, Site-Pause-Limit,
	Eventlog-Limit-Reset, Priority-Limit-Reset, Process-Stop-Limit-Reset, or
	Site-Pause-Limit:
	
	- Site-Stop - The Web site was stopped.
	
	- Site-Start - The Web site was started or re-started.
	
	- Site-Pause - The Web site was paused.
	
	- Periodic-Log - This is a regularly defined log entry whose interval was
	  specified by the administrator.
	
	- Reset Interval-Start - The Reset Interval has begun.
	
	- Reset Interval-End - The Reset Interval has been reached and reset.
	
	- Reset Interval-Change - The Web site administrator changed the value for the
	  Reset Interval.
	
	- Update - One of these events happened: the log interval was changed, an
	  interval event took place, the site either stopped, started, or paused.
	
	- Eventlog-Limit - An event log was made for the Web site because its CPU
	  resource usage for CGI and out-of-process application reached the event log
	  limit set by the administrator.
	
	- Priority-Limit - The Web site had a CGI or out-of-process application set to
	  low priority because it reached the low priority limit set by the
	  administrator.
	
	- Process-Stop-Limit - The Web site had a CGI or out-of-process application
	  stopped because it reached the process stopping limit set by the
	  administrator.
	
	- Site-Pause-Limit - The Web site was paused because it had a CGI or
	  out-of-process application reach the site pause limit set by the
	  administrator.
	
	- Eventlog-Limit-Reset - The Reset Interval was reached or the Eventlog-Limit
	  was manually changed.
	
	- Priority-Limit-Reset - The Reset Interval was reached or the Priority-Limit
	  was manually changed.
	
	- Process-Stop-Limit-Reset - The Reset Interval was reached or the
	  Process-Stop-Limit was manually changed.
	
	- Site-Pause-Limit - The Reset Interval was reached or the Site-Pause-Limit was
	  manually reset.
	
	Total User Time - The total accumulated User Mode processor time, in seconds,
	that the site has used during the current interval.
	
	Total Kernel Time - The total accumulated Kernel Mode processor time, in seconds,
	that the site has used during the current interval.
	
	Total Page Faults - The total number of memory references that resulted in memory
	page faults.
	
	Total Processes - The total number of CGI and out-of-process applications created
	during the current interval.
	
	Active Processes - The total number of CGI and out-of-process applications
	running when the log was recorded.
	
	Total Terminated Processes - The total number of CGI and out-of-process
	applications stopped due to Process Throttling during the current interval.
	
	MORE INFORMATION
	================
	
	Process Accounting allows IIS 5.0 to track the amount of CPU time each ASP and
	CGI application is using. A determination can be made from the log files down to
	the millisecond the amount of time during a 24-hour period that any given
	application is running.
	
	These data are extremely useful when trying to track down exactly which
	applications are running the most on an IIS server or if an application is
	taking too much processor time.
	
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
