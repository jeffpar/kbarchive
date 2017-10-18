---
layout: page
title: "Q183399: XADM: How to Read Perfmon.exe Logs from a Different Computer"
permalink: kb/183/Q183399/
---

## Q183399: XADM: How to Read Perfmon.exe Logs from a Different Computer

	Article: Q183399
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 25-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps to be taken in order to view a Performance
	Monitor (Perfmon.exe) log received from a customer or from a different computer.
	
	MORE INFORMATION
	================
	
	Situations may arise in which the customer has been instructed to run a
	Performance Monitor log on his or her server. When you receive this log, it will
	arrive as a .log file. Below are the steps required to be able to read the log
	file on your computer.
	
	1. On the taskbar, click Start,point to Programs, Administrative Tools, and
	  click Performance Monitor. Performance Monitor can also be started by typing
	  "Perfmon" (without the quotation marks) at a command prompt.
	
	2. After Performance Monitor starts, on the Options menu, click Data From, and
	  select Log File.
	
	3. Click Browse, and select the appropriate .log file from its stored location,
	  and click Open.
	
	4. In the Log File Select box, click OK. The new file is now set up to be viewed
	  on your computer.
	
	5. From the View menu, click one of the following:
	
	  Chart (CTRL+C)
	  Alert (CTRL+A)
	  Log (CTRL+L)
	  Report (CTRL+R)
	
	  Remember when choosing these options, you must use the PLUS SIGN (+) on the
	  menu bar after each option is selected, and add the objects the customer
	  originally chose.
	
	6. Add required counters to view from Edit\Add to chart.
	
	Additional query words: perfmon logs; how to read log
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
