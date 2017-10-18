---
layout: page
title: "Q237840: Soon.exe Schedules Tasks for Next Day Instead of Current Day"
permalink: kb/237/Q237840/
---

## Q237840: Soon.exe Schedules Tasks for Next Day Instead of Current Day

	Article: Q237840
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:5; winnt:4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Internet Explorer version 5 for Windows NT 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you schedule a task using the Soon tool (Soon.exe) included with the
	Windows NT 4.0 Resource Kit, the task may be scheduled for the next day instead
	of the current day.
	
	NOTE: This behavior may occur with other tools that call the AT command.
	
	CAUSE
	=====
	
	This behavior occurs when Microsoft Internet Explorer 5 is installed on your
	computer.
	
	After you install Internet Explorer 5, the Scheduler service is replaced by Task
	Scheduler. Task Scheduler checks the task list every minute, instead of every
	second like the Scheduler service. Therefore, the AT command is modified so that
	it schedules a task for tomorrow if the specified time is equal to the actual
	system time, and the seconds are ignored. For example:
	
	At 10:00:00, you type the following command:
	
	  at 10:00:05 /interactive notepad.exe
	
	This task is scheduled for tomorrow because of the behavior described in this
	article. However, the task is scheduled for today and Notepad.exe starts in one
	minute, if you type the following command:
	
	  at 10:01:00 /interactive notepad.exe
	
	By default, Soon.exe calls the AT command with the actual system time plus five
	seconds. For example, using Soon.exe at 10:00:55 works fine, but from 10:00:00
	until 10:00:54 the task is scheduled for tomorrow. This behavior occurs because
	of the "new" way the AT command interprets the specified time.
	
	WORKAROUND
	==========
	
	To work around this issue, use Soon.exe and specify a delay with a minimum of 60
	seconds. To do this, use the appropriate method:
	
	- Call Soon.exe and specify the delay parameter.
	
	- Call "soon.exe /l [delay]" (without the quotation marks) to set the default
	  delay for local jobs.
	
	- Call "soon.exe /r [delay]" (without the quotation marks) to set the default
	  delay for remote jobs.
	
	Additional query words: reskit
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : WINDOWS:5; winnt:4.0 SP4,4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
