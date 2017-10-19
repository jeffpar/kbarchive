---
layout: page
title: "Q172141: Logging File Methods with IIS"
permalink: /kb/172/Q172141/
---

## Q172141: Logging File Methods with IIS

	Article: Q172141
	Product(s): Internet Information Server
	Version(s): WinNT:3.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use three different logging file methods with Internet Information
	Server (IIS). These methods are Daily, Weekly, and Monthly. You can select these
	methods by selecting the appropriate service computer name in Internet Service
	Manager. Then select Properties, Service Properties, then the Logging tab.
	
	The Daily log files are created at 12:00 A.M. of each day. They use the following
	date format for filenames: INyymmdd.log.
	
	The Weekly log files are created at 12:00 A.M. on Sunday of each week. They use
	the following date format for filenames: INyymmww.log.
	
	The Monthly log files are created at 12:00 A.M. on the first day of each month.
	They use the following date format for filenames: INyymm.log.
	
	MORE INFORMATION
	================
	
	When you switch from Daily to Weekly logging formats, a new Weekly log file is
	created at the time the change is applied, then again at 12:00 A.M. on Sunday of
	each week.
	
	For example, on Friday afternoon the change is made from Daily to Weekly format.
	A new Weekly log file is created at this time, then again at 12:00 A.M. the
	following Sunday.
	
	When you switch from Daily or Weekly to Monthly logging formats, a new Monthly
	log file is created at the time the change is applied, then again at 12:00 A.M.
	on the first day of the next month.
	
	For example, on Friday afternoon the change is made from Daily to Monthly format.
	A new Weekly log file is created at this time, then again at 12:00 A.M. the
	first day of the following month.
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbiisSearch kbiis300
	Version           : WinNT:3.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
